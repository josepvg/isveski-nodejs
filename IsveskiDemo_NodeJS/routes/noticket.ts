/* GET users listing. */
import express = require('express');
import Dict = NodeJS.Dict;
import {getIsveskiTicketDefinitionIds, getIsveskiUserId, log, parseIsveskiCookie} from '../common/isveskiUtils'
import {Users} from '../common/repository'
import {ClientWalletApi} from "../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "./onsensor";
import {CreateTicketDto} from "../clientcode/model/createTicketDto";
import {TemplateTypeEnum} from "../clientcode/model/templateTypeEnum";
import {Template1} from "../clientcode/model/template1";
import {Template} from "../clientcode/model/template";
import {DetailTemplate} from "../clientcode/model/detailTemplate";
import {DetailTemplate1} from "../clientcode/model/detailTemplate1";
import {DetailTemplateTypeEnum} from "../clientcode/model/detailTemplateTypeEnum";

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
        const user = Users.addUserIfMissing(cookie.UserName);
        user.balance -= price;
        
        const clientApi = new ClientWalletApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        
        const userId = await getIsveskiUserId(clientApi, user.name);
        const ticketDefs =  await getIsveskiTicketDefinitionIds();
        
        const template: Template1 = {
            description: "", 
            expiry: undefined, 
            image: "", 
            templateType: undefined, 
            time: undefined, title: ""
        }
        const detailTemplate: DetailTemplate1 = {
            description: "", 
            expiry: undefined, 
            image: "", 
            detailType: DetailTemplateTypeEnum.Dt1, 
            time: undefined, title: ""
        }
        const ticketcreationDto: CreateTicketDto = {
            userId: userId,
            name: "Abler-dev",
            ticketDefinitionId: ticketDefs[ticketname["en"]],
            template: {
                templateType: TemplateTypeEnum.T1
            },
            data: "",
            detailTemplate: detailTemplate,
            note: ''
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
