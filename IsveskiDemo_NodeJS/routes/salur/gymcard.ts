/* GET users listing. */
import express = require('express');
import Dict = NodeJS.Dict;
import {getIsveskiTicketDefinitionIds, getIsveskiUserId, log, parseIsveskiCookie} from '../../utils'
import {addUserIfMissing} from '../../repository'
import {ClientWalletApi} from "../../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "../onsensor";
import {TemplateTypeEnum} from "../../clientcode/model/templateTypeEnum";
import {Template} from "../../clientcode/model/template";
import {DetailTemplateTypeEnum} from "../../clientcode/model/detailTemplateTypeEnum";
import {DetailTemplate} from "../../clientcode/model/detailTemplate";
import {RequestParameter} from "../../servercode/model/requestParameter";

const router = express.Router();

function createTicketDto(userId: string, ticketDefId: string) {
    return {
        userId: userId,
        name: "Abler-dev",
        ticketDefinitionId: ticketDefId,
        template: {
            title: "Megagym",
            description: "Miði test",
            expiry: new Date(Date.now() + 1000*60*60*24*2),
            time: undefined,
            image: "Gymlogo",
            templateType: TemplateTypeEnum.T1,
        } as Template,
        detailTemplate: {
            detailType: DetailTemplateTypeEnum.Dt1,
            title: "Megagymm",
            description: "Miði testt",
            expiry: new Date(Date.now() + 1000*60*60*24*2),
            time: undefined,
            image: "Gymlogo",
        } as DetailTemplate,
        data: `Created on ${new Date()}`,
        note: ""

    }
}

type TicketType = {
    ticketName: string
    ticketDescription: string
    noTicketDeclaration: string
    ticketNeedDescription: string
    image: string
    price: number
    ticketExpiryPeriodInDays: number 
}

const textDict: Dict<Dict<string>> = {
    "Gymcard": {"is": "Gymkort"}
}

const getText = (textInEnglish: string, language: string) =>
    textDict.hasOwnProperty(textInEnglish) && textDict[textInEnglish].hasOwnProperty(language)
        ? textDict[textInEnglish][language]
        : textInEnglish


function addGymcardEndpoints(ticket: TicketType) {

    router.get('/noticket', (req: express.Request, res: express.Response) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie)
        if (!cookie) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.originalUrl})`});
            return;
        }
        res.render('noticket', { 
            title: getText(ticket.noTicketDeclaration, cookie.Language),
            explanation: getText(ticket.ticketNeedDescription, cookie.Language),
            getTicketEndpoint: 'getticket' 
        });
    });
    
    router.post('/getticket',async (req, res) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie);
        if (!cookie) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.url})`});
            return;
        }
        const user = addUserIfMissing(cookie.UserName);
        user.balance -= ticket.price;
        
        const clientApi = new ClientWalletApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        
        const [userId, ticketDefs] = 
            await Promise.all([
                getIsveskiUserId(clientApi, user.name), 
                getIsveskiTicketDefinitionIds()
            ])
        
        // log(JSON.stringify({id: userId, ticketDefs: ticketDefs, chosenDef : ticketDefs[ticketname["en"]]}, null, 2))
        
        const ticketCreateResp = 
            await clientApi.apiClientWalletCreateTicketPost(createTicketDto(userId, ticketDefs[ticketname["en"]]));
        
        // log(JSON.stringify(ticketCreateResp.response, null, 2))
        
        log(`Ticketsale! User ${cookie.UserName} (${userId}) got a ticket ${ticketname["en"]}, his balance is now ${user.balance}`);
        res.redirect('/user');
    })
    
    router.post('/onsignal', async (req, res) =>{
        const requestBody: RequestParameter = req.body;
        const clientApi = new ClientWalletApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        requestBody.tickets.forEach(ticket => {
            log("Signal received: Ticket data: " + ticket.data)
            clientApi.apiClientWalletDeleteTicketPost({ticketId: ticket.id, note: "Ticket used"})
        })
    });
    return router;
}