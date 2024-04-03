/*
 * GET users listing.
 */
import express = require('express');
import { CreateTicketRequestToJSON } from '../clientcode2';
//import { Template1 } from '../clientcode/icewalletclientclient';
//import { ClientWalletClient, CreateTicketLogRequest, CreateTicketRequest, DetailTemplate1, IDetailTemplate1, ILogTemplate1, IShowUrlAction, ITemplate1, LogTemplate1, ShowUrlAction, Template1, TemplateButton } from '../clientcode/icewalletclientclient';
import { ClientWalletApi, Configuration, GetWalletByClientRequest, CreateTicketOperationRequest, CreateTicketRequest, CreateTicketRequestTemplate, CreateTicketRequestDetailTemplate, TemplateButton, SendToTicketRequestActionsInner, ShowUrlAction } from '../clientcode2';
import { API_KEY, IMAGE_LOGO, ISVESKI_BASE_PATH, TICKET_DEF_ID } from '../common/constants';

//import fetch, { Headers, Request, Response } from 'node-fetch';

/*const http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> } = {
    fetch: fetch
};*/

//import fetch, { Headers, Request, Response } from 'node-fetch';

//if (!globalThis.fetch) {
//    globalThis.fetch = fetch;
//    globalThis.Headers = Headers;
//    globalThis.Request = Request;
//    globalThis.Response = Response;
//}

export const ClientConfig = new Configuration(
    {
        basePath: ISVESKI_BASE_PATH,
        apiKey: API_KEY
    }
);

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        // You can access req.query.id here if you need it
        const userName = req.query.userName;
        const isveskiUserName = req.query.isveskiUserName as string;
        /*const clientApi = new ClientWalletClient(ISVESKI_BASE_PATH);
        const userResponse = await clientApi.searchUser(isveskiUserName);

        const template = new Template1({
            title: "My ticket",
            description: "Áskriftarmiði",
            expiry: null,
            time: null,
            image: IMAGE_LOGO
        } as ITemplate1);

        const showUrlAction = new ShowUrlAction({
            url: "https://www.sportabler.is"
        } as IShowUrlAction);

        const showUrlButton = new TemplateButton({
            text: "Skoða",
            action: showUrlAction
        });
        const buttons = [showUrlButton];
        const detailTemplate = new DetailTemplate1({
            title: "My ticket",
            description: "Áskriftarmiði",
            expiry: null,
            time: null,
            image: IMAGE_LOGO,
            buttons: buttons
        } as IDetailTemplate1);

        const createResponse = await clientApi.createTicket(
            new CreateTicketRequest({
                name: "Miðinn okkar",
                data: JSON.stringify({ userId: userName }),
                note: "Þetta er note sem ég sendi með",
                ticketDefinitionId: TICKET_DEF_ID,
                userId: userResponse.userId,
                template: template,
                detailTemplate: detailTemplate
            })
        );

        var createLogResp = await clientApi.createTicketLog(
            new CreateTicketLogRequest({
                ticketId: createResponse.ticketId,
                logTemplate: new LogTemplate1({
                    title: "Sportabler áfylling",
                    time: new Date(),
                    description: "Miði var settur í ísveskið",
                } as ILogTemplate1)
            })
        );*/
        const clientApi = new ClientWalletApi(ClientConfig);
        const userResp = await clientApi.searchUser({ username: isveskiUserName });
        const wallet = await clientApi.getWalletByClient({ userid: userResp.userId } as GetWalletByClientRequest);

        const template = {
            templateType: "T1",
            description: "Áskriftarmiði",
            image: IMAGE_LOGO,
            time: null,
            expiry: null,
            title: "My ticket"
        } as CreateTicketRequestTemplate;

        const detailTemplate = {
            detailType: "DT1",
            description: "Áskriftarmiði",
            expiry: null,
            image: IMAGE_LOGO,
            time: null,
            title: "My ticket",
            buttons: [
                {
                    text: "Skoða",
                    action: {
                        actionType: 'ShowUrl',  
                        url: "https://www.sportabler.is",
                    } as ShowUrlAction
                } as TemplateButton
            ]
        } as CreateTicketRequestDetailTemplate;

        const data = {
            name: "Miðinn okkar",
            data: JSON.stringify({ userId: userName }),
            note: "Þetta er note sem ég sendi með",
            ticketDefinitionId: TICKET_DEF_ID,
            userId: userResp.userId,
            template: template,
            detailTemplate: detailTemplate
        } as CreateTicketRequest;


        const reqJson = CreateTicketRequestToJSON(data);

        const request = {
            createTicketRequest: data
        } as CreateTicketOperationRequest;
        await clientApi.createTicket(request);
        console.log('wallet:', wallet);
        res.render('complete', { /* any variables you want to pass to complete.pug */ });
    } catch (Exception) {
        console.error(Exception);
    }
});

export default router;
//# sourceMappingURL=linkticket.js.map