/* GET users listing. */
import express = require('express');
import {
    getApiClientForClientWallet,
    getIsveskiTicketDefinitionIds,
    getIsveskiUserId,
    IsveskiTicketType,
    log,
    parseIsveskiCookie
} from '../common/isveskiUtils'
import {Users} from '../common/repository'
import {ClientWalletApi} from "../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "./onsensor";
import {CreateTicketDto} from "../clientcode/model/createTicketDto";
import {TemplateTypeEnum} from "../clientcode/model/templateTypeEnum";
import {Template} from "../clientcode/model/template";
import {DetailTemplate} from "../clientcode/model/detailTemplate";
import {DetailTemplateTypeEnum} from "../clientcode/model/detailTemplateTypeEnum";
import {Text} from "../common/text";


function makeNoTicketEndpoint(ticketType: IsveskiTicketType) {

    const router = express.Router();

    // Redirect to a generic ticket sale page 
    router.get('/noticket', (req: express.Request, res: express.Response) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie)
        if (!cookie.UserName) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.originalUrl})`});
            return;
        }
        const renderText = Text.getRenderer(cookie.Language)
        res.render('noticket', { 
            title: renderText(ticketType.noTicketDialogue.noTicketDeclaration),
            explanation: renderText(ticketType.noTicketDialogue.purchaseTicketPersuasion),
            buyTicketAction: renderText(ticketType.noTicketDialogue.purchaseAction),
            getTicketEndpoint: 'getticket'
        });
    });
    
    // Endpoint for the ticket sale page
    router.post('/getticket',async (req, res) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie);
        if (!cookie) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.url})`});
            return;
        }
        const renderText = Text.getRenderer(cookie.Language);
        
        const clientApi = getApiClientForClientWallet();
        
        const [userId, ticketDefs] =
            await Promise.all([
                getIsveskiUserId(cookie.UserName, clientApi),
                getIsveskiTicketDefinitionIds()
            ])
        
        const user  = Users.getOrAddUserIfMissing(userId, cookie.UserName);

        const ticketTypeId = ticketDefs[ticketType.systemName];
        if(!ticketTypeId) throw new Error(`Ticket ${ticketType.systemName} does not exist (yet?) on the Isveski system`);
        
        const createTicketRequest: CreateTicketDto = {
            userId: userId,
            name: ticketType.systemName,
            ticketDefinitionId: ticketTypeId,
            template: {
                title: renderText(ticketType.name),
                description: renderText(ticketType.description),
                expiry: new Date(Date.now() + 1000*60*60*24*ticketType.expiryPeriodInDays),
                time: new Date(),
                image: ticketType.image,
                templateType: TemplateTypeEnum.T1,
            } as Template,
            detailTemplate: {
                detailType: DetailTemplateTypeEnum.Dt1,
                title: renderText(ticketType.name),
                description: renderText(ticketType.description),
                expiry: new Date(Date.now() + 1000*60*60*24*ticketType.expiryPeriodInDays),
                time: new Date(),
                image: ticketType.image,
            } as DetailTemplate,
            data: `Created on ${new Date()}`,
            note: ""
        };
        
        await clientApi.apiClientWalletCreateTicketPost(createTicketRequest);

        user.balance -= ticketType.price;
        
        log(`Ticketsale! User ${cookie.UserName} (${userId}) got a ticketType ${renderText(ticketType.name)}, his balance is now ${user.balance}`);
        res.redirect('../user');
    })
    return router;
}

export default makeNoTicketEndpoint;
