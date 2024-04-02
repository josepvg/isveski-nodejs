/*
 * GET users listing.
 */

import express = require('express');
import { ClientDeviceInterfaceClient, IShowMenuRequest, IShowMessageRequest, ShowMenuRequest, ShowMessageRequest } from '../clientcode/icewalletclientclient';
import { IMAGE_LOGO, ISVESKI_BASE_PATH } from '../common/constants';
//import { ClientDeviceInterfaceApi, ShowMenuRequest, ShowMessageRequest } from '../clientcode';
import { RequestParameter } from '../servercode/api';
import Dict = NodeJS.Dict;
const router = express.Router();


router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const requestBody: RequestParameter = req.body;
        const clientApi = new ClientDeviceInterfaceClient(ISVESKI_BASE_PATH);

        const data = requestBody.tickets[0].data;
        const dataStructure = JSON.parse(data);
        const userId = dataStructure.userId;

        const icelandicUser = requestBody.language === 'is';

        const showMenuRequest: ShowMenuRequest = new ShowMenuRequest({
            communicationId: requestBody.communicationId,
            message: icelandicUser ? "Viltu borða nammi?" : "Want to eat candy?",
            options: icelandicUser ? ["Já", "Nei"] : ["Yes", "No"],
            timeoutSek: 30,
            title: icelandicUser ? "Nammi spurning" : "Candy question",
            image: IMAGE_LOGO,
        } as IShowMenuRequest);

        const reply = await clientApi.showMenu(showMenuRequest);        

        let message: string = '';
        if (reply.selectedValue === showMenuRequest.options[0]) {
            message = icelandicUser ? "Þú valdir já" : "You picked yes";
        } else {
            message = icelandicUser ? "Þú valdir nei" : "You picked no";
        }

        const showMessageRequest = new  ShowMessageRequest({
            communicationId: requestBody.communicationId,
            close: icelandicUser ? "Loka" : "Close",
            image: IMAGE_LOGO,
            message: message,
            timeoutSek: 30,
            title: icelandicUser ? "Takk fyrir svarið" : "Thanks for your answer",
        } as IShowMessageRequest);
        await clientApi.showMessage(showMessageRequest);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
    }
});

export default router;