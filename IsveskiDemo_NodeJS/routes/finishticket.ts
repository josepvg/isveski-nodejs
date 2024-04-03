/*
 * GET users listing.
 */
import express = require('express');
import { ClientWalletApi, ClientWalletApiFp, Configuration } from '../clientcode4';
//import { ActionTypeEnum, ClientWalletApi, CreateTicketLogRequest, CreateTicketRequest, DetailTemplate1, LogTemplate1, ObjectSerializer, ShowUrlAction, Template1, TemplateButton } from '../clientcode3/api';
//import { Template1 } from '../clientcode/icewalletclientclient';
//import { ClientWalletClient, CreateTicketLogRequest, CreateTicketRequest, DetailTemplate1, IDetailTemplate1, ILogTemplate1, IShowUrlAction, ITemplate1, LogTemplate1, ShowUrlAction, Template1, TemplateButton } from '../clientcode/icewalletclientclient';
//import { ClientWalletApi, Configuration, GetWalletByClientRequest, CreateTicketOperationRequest, CreateTicketRequest, CreateTicketRequestTemplate, CreateTicketRequestDetailTemplate, TemplateButton, SendToTicketRequestActionsInner, ShowUrlAction } from '../clientcode2';
import { API_KEY, IMAGE_LOGO, ISVESKI_BASE_PATH, TICKET_DEF_ID } from '../common/constants';

//import { IsveskiApiKeyAuth } from './onsensor';
import fetch, { Headers, Request, Response } from 'node-fetch';

const router = express.Router();

const defConf = new Configuration({ basePath: ISVESKI_BASE_PATH, apiKey: API_KEY });

router.get('/', async (req, res) => {

    try {
        // You can access req.query.id here if you need it
        const userName = req.query.userName;
        //const isveskiUserName = req.query.isveskiUserName as string;

        const clientApi = new ClientWalletApi(defConf, ISVESKI_BASE_PATH, fetch);
        const userResp = await clientApi.searchUser('josepvg');
        const d = userResp.userId;
        //const clientApi = new ClientWalletApi(ISVESKI_BASE_PATH);
        //clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        //const userResponse = await (await clientApi.searchUser(isveskiUserName)).body;

        //const resp1 = await clientApi.getWalletByClient(userResponse.userId);

        //var createTicketRequest = new CreateTicketRequest();
        //createTicketRequest.userId = userResponse.userId;
        //createTicketRequest.data = JSON.stringify({ userId: userName });
        //createTicketRequest.name = "Miðinn okkar";
        //createTicketRequest.note = "Þetta er note sem ég sendi með";
        //createTicketRequest.ticketDefinitionId = TICKET_DEF_ID;//the id of the ticket definition

        //const t1 = new Template1();
        //t1.title = "Sportabler";
        //t1.description = "Áskriftarmiði";
        //t1.expiry = null;
        //t1.templateType = TemplateTypeEnum.T1;
        //t1.time = null;
        //t1.image = IMAGE_LOGO;

        //let buttons: TemplateButton[] = [];
        //let button = new TemplateButton();
        //button.text = "Skoða";
        //let action = new ShowUrlAction();
        //action.actionType = ActionTypeEnum.ShowUrl;
        //action.url = "https://www.sportabler.is";

        //button.action = { ...action, sensorId: '', ticketId: '',  };


        //const td1 = new DetailTemplate1();
        //td1.title = "Sportabler";
        //td1.time = null;
        //td1.detailType = DetailTemplateTypeEnum.DT1;
        //td1.image = IMAGE_LOGO;
        //td1.description = "Áskriftarmiði";
        //td1.expiry = null;
        //buttons.push(button);
        //td1.buttons = [];// buttons;

        //createTicketRequest.template = t1;
        //createTicketRequest.detailTemplate = td1;
        //const d = ObjectSerializer.serialize(createTicketRequest, "CreateTicketRequest");
        //const ticketId = await clientApi.createTicket(createTicketRequest);

        //const logRequest = new CreateTicketLogRequest();
        //logRequest.ticketId = ticketId.body.ticketId;
        //const logT1 = new LogTemplate1();
        //logT1.title = "Sportabler áfylling";
        //logT1.time = new Date();
        //logT1.templateType = "T1";
        //logT1.description = "Miði var settur í ísveskið";
        //logRequest.logTemplate = logT1;
        //await clientApi.createTicketLog(logRequest);

        //const resp = await clientApi.getWalletByClient(userResponse.userId);
        res.render('complete', { /* any variables you want to pass to complete.pug */ });
    } catch (Exception) {
        console.error(Exception);
    }
});

export default router;
//# sourceMappingURL=linkticket.js.map