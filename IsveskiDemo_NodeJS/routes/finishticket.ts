/*
 * GET users listing.
 */
import express = require('express');
import { ClientWalletApi, CreateTicketDto, CreateTicketLogDto, DetailTemplate1, DetailTemplateTypeEnum, LogTemplate1, ShowUrlAction, Template, Template1, TemplateButton, TemplateTypeEnum } from '../clientcode/api';
import { IsveskiApiKeyAuth } from './onsensor';
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        // You can access req.query.id here if you need it
        const userName = req.query.userName;
        const isveskiUserName = req.query.isveskiUserName as string;
        const clientApi = new ClientWalletApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        const userId = await (await clientApi.apiClientWalletSearchUserGet(isveskiUserName)).body;


        var createTicketRequest = new CreateTicketDto();
        createTicketRequest.userId = userId;
        createTicketRequest.data = JSON.stringify({ userId: userName });
        createTicketRequest.name = "Miðinn okkar";
        createTicketRequest.note = "Þetta er note sem ég sendi með";
        createTicketRequest.ticketDefinitionId = '5d7e0b76-9f1b-4863-b1ee-9ea51b849536';//the id of the ticket definition

        const t1 = new Template1();
        t1.title = "Sportabler";
        t1.description = "Áskriftarmiði";
        t1.expiry = null;
        t1.templateType = TemplateTypeEnum.T1;
        t1.time = null;
        t1.image = "sportabler";


        let buttons: TemplateButton[] = [];
        let button = new TemplateButton();
        button.text = "Skoða";
        let action = new ShowUrlAction();
        action.url = "https://www.sportabler.is";
        button.action = action;


        const td1 = new DetailTemplate1();
        td1.title = "Sportabler";
        td1.time = null;
        td1.detailType = DetailTemplateTypeEnum.Dt1;
        td1.image = "sportabler";
        td1.description = "Áskriftarmiði";
        td1.expiry = null;
        buttons.push(button);
        td1.buttons = buttons;

        createTicketRequest.template = t1;
        createTicketRequest.detailTemplate = td1;

        const ticketId = await clientApi.apiClientWalletCreateTicketPost(createTicketRequest);

        const logRequest = new CreateTicketLogDto();
        logRequest.ticketId = ticketId.body;
        const logT1 = new LogTemplate1();
        logT1.title = "Sportabler áfylling";
        logT1.time = new Date();
        logT1.description = "Miði var settur í ísveskið";
        logRequest.logTemplate = logT1;
        await clientApi.apiClientWalletCreateTicketLogPost(logRequest);
        res.render('complete', { /* any variables you want to pass to complete.pug */ });
    } catch (Exception) {
        console.error(Exception);
    }
});

export default router;
//# sourceMappingURL=linkticket.js.map