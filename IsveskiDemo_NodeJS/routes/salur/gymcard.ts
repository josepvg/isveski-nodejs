/* GET users listing. */
import express = require('express');
import {
    getText,
    getDictionaryLookup,
    TextWithTranslations,
    getIsveskiTicketDefinitionIds,
    getIsveskiUserId,
    log,
    parseIsveskiCookie,
    IsveskiTicketType
} from '../../common/isveskiUtils'
import {Users} from '../../common/repository'
import {ClientWalletApi} from "../../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "../onsensor";
import {TemplateTypeEnum} from "../../clientcode/model/templateTypeEnum";
import {Template} from "../../clientcode/model/template";
import {DetailTemplateTypeEnum} from "../../clientcode/model/detailTemplateTypeEnum";
import {DetailTemplate} from "../../clientcode/model/detailTemplate";
import {RequestParameter} from "../../servercode/model/requestParameter";
import {response} from "express";
import {ClientDeviceInterfaceApi} from "../../clientcode/api/clientDeviceInterfaceApi";
import {CreateTicketDto} from "../../clientcode/model/createTicketDto";

const ticket: IsveskiTicketType = {
    systemName: "Gymcard",
    name: {text: "Gymcard", translations:{ is: "Gymkort" }},
    description: {text: "Access to the gym", translations: {is: "Aðgangur að ræktinni"}},
    noTicketDeclaration: {text: "You have no gymcard", translations: {is: "Þú átt ekki kort"}},
    needForTicketPitch: {
        text: "With a gymcard you can access this wonderful gym, it's 20.000 kr.", 
        translations: {is: "Með ræktarkorti máttu nota ræktina, kostar 20.000 kr."}
    },
    image: 'Gymlogo',
    price: 20000,
    expiryPeriodInDays: 30,
}

function addGymcardEndpoints() {
    
    const router = express.Router();
    
    router.get('/noticket', (req: express.Request, res: express.Response) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie)
        if (!cookie) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.originalUrl})`});
            return;
        }
        res.render('noticket', { 
            title: getText(ticket.noTicketDeclaration, cookie.Language),
            explanation: getText(ticket.needForTicketPitch, cookie.Language),
            getTicketEndpoint: 'getticket' 
        });
    });
    
    router.post('/getticket',async (req, res) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie);
        if (!cookie) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.url})`});
            return;
        }
        const user  = Users.addUserIfMissing(cookie.UserName);
        user.balance -= ticket.price;
        
        const clientApi = new ClientWalletApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        
        const [userId, ticketDefs] =
            await Promise.all([
                getIsveskiUserId(clientApi, user.name),
                getIsveskiTicketDefinitionIds()
            ])

        log(`Got IDs from Isveski system: ${userId} and ${ticketDefs[ticket.systemName]}`)

        const ticketTypeId = ticketDefs[ticket.systemName];
        if(!ticketTypeId) {
            res.render('invalidstate', {message: `Ticket ${ticket.systemName} does not exist (yet?) on the Isveski system`});
            return;
        }
        const createTicketRequest: CreateTicketDto = {
            userId: userId,
            name: ticket.systemName,
            ticketDefinitionId: ticketTypeId,
            template: {
                title: getText(ticket.name, cookie.Language),
                description: getText(ticket.description, cookie.Language),
                expiry: new Date(Date.now() + 1000*60*60*24*ticket.expiryPeriodInDays),
                time: new Date(),
                image: ticket.image,
                templateType: TemplateTypeEnum.T1,
            } as Template,
            detailTemplate: {
                detailType: DetailTemplateTypeEnum.Dt1,
                title: getText(ticket.name, cookie.Language),
                description: getText(ticket.description, cookie.Language),
                expiry: new Date(Date.now() + 1000*60*60*24*ticket.expiryPeriodInDays),
                time: new Date(),
                image: ticket.image,
            } as DetailTemplate,
            data: `Created on ${new Date()}`,
            note: ""
        };
        log(JSON.stringify(createTicketRequest,null,2));
        const { response: resp, body: body } = 
            await clientApi.apiClientWalletCreateTicketPost(createTicketRequest);

        log(`${resp.statusCode}: ${ body.slice(0,200)}`)
        log(`Ticketsale! User ${cookie.UserName} (${userId}) got a ticket ${getText(ticket.name, cookie.Language)}, his balance is now ${user.balance}`);
        res.redirect('/user');
    })

    const ticketUseDialogue: TextWithTranslations[] = [
        {text: "Confirmation of ticket use", translations: {"is": "Staðfesting á miðanotkun"}},
        {text: "Do you want to use your ticket?", translations: {"is": "Viltu nota miðann?"}},
        {text: "Yes", translations: {"is": "Já"}},
        {text: "No", translations: {"is": "Nei"}},
        {text: "Ticket spent", translations: {"is": "Miði notaður"}},
        {text: "Ticket kept", translations: {"is": "Miði geymdur"}},
        {text: "Understood", translations: {"is": "Móttekið"}},
    ];
    
    router.post('/onsignal', async (req, res) =>{
        const requestParameter: RequestParameter = req.body;
        const translate = getDictionaryLookup(requestParameter.language, ticketUseDialogue);
        
        const clientDeviceApi = new ClientDeviceInterfaceApi("https://isveski.is");
        clientDeviceApi.setDefaultAuthentication(new IsveskiApiKeyAuth());

        const options = [translate("Yes"), translate("No")],
            [yesOption, noOption] = options;
        const { body: choice } = await clientDeviceApi.apiClientDeviceInterfaceShowMenuPost({
                communicationId: requestParameter.communicationId,
                title: translate('Confirmation of ticket use'),
                message: translate("Do you want to use your ticket?"),
                options: options,
                timeoutSek: 30
            });
        
        const spendTicket = choice.selectedValue === yesOption;
        if(spendTicket){
            const walletApi = new ClientWalletApi("https://isveski.is");
            walletApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
            requestParameter.tickets.forEach(ticket => {
                walletApi.apiClientWalletDeleteTicketPost({ticketId: ticket.id, note: "Ticket used"});
            })
        }
        
        const ticketFateText = translate(spendTicket ? "Ticket spent": "Ticket kept");
        clientDeviceApi.apiClientDeviceInterfaceShowMessagePost({
            communicationId: requestParameter.communicationId,
            title: ticketFateText,
            message: ticketFateText,
            timeoutSek: 10,
            close: translate("Understood")
        });
        
        res.sendStatus(200);
    });
    
    return router;
}

export default addGymcardEndpoints 