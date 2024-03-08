/* GET users listing. */
import express = require('express');
import Dict = NodeJS.Dict;
import {getIsveskiTicketDefinitionIds, getIsveskiUsername, log, parseIsveskiCookie} from '../utils'
import {addUserIfMissing} from '../repository'
import {ClientWalletApi} from "../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "./onsensor";
import {CreateTicketDto} from "../clientcode/model/createTicketDto";
import {TemplateTypeEnum} from "../clientcode/model/templateTypeEnum";
import {Template1} from "../clientcode/model/template1";
import {Template} from "../clientcode/model/template";

const router = express.Router();

function makeNoTicketEndpoint(ticketname: Dict<string>, explanation: Dict<string>, price) {
    

    router.get('/noticket', (req: express.Request, res: express.Response) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie)
        if (!cookie) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.originalUrl})`});
            return;
        }
        res.render('noticket', { 
            title: ticketname[cookie.Language],
            explanation: explanation[cookie.Language],
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
        user.balance -= price;
        
        const userId = await getIsveskiUsername(user.name);
        const ticketDefs =  await getIsveskiTicketDefinitionIds();
        
        const clientApi = new ClientWalletApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        
        const template: Template1 = {
            description: "", 
            expiry: undefined, 
            image: "", 
            templateType: undefined, 
            time: undefined, title: ""
        }
        const ticketcreationDto: CreateTicketDto = {
            userId: userId,
            name: "Abler-dev",
            ticketDefinitionId: ticketDefs[ticketname["en"]],
            template: {
                templateType: TemplateTypeEnum.T1
            },
        }
        log(JSON.stringify(ticketcreationDto, null, 2))
        
        const ticketCreateResp = await clientApi.apiClientWalletCreateTicketPost(
            ticketcreationDto
        );
        
        // log(JSON.stringify(ticketCreateResp, null, 2))
        
        log(`Ticketsale! User ${cookie.UserName} (${userId}) got a ticket ${ticketname["en"]}, his balance is now ${user.balance}`);
        res.redirect('/user');
    })
    return router;
}

export default makeNoTicketEndpoint;
