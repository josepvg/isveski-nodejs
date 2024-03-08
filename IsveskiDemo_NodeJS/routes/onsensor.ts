/*
 * GET users listing.
 */

import express = require('express');
import localVarRequest from 'request';
import { Authentication, ClientDeviceInterfaceApi, ShowMenuDto, ShowMessageDto } from '../clientcode/api';
import { RequestParameter } from '../servercode/api';
import Dict = NodeJS.Dict;
const router = express.Router();

export class IsveskiApiKeyAuth implements Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void | Promise<void> {
        requestOptions.headers['x-api-key'] = "IS-UPIIXxEY1Xsh1of-brTf4F3BhXThYABnK";
    }
}

router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const requestBody: RequestParameter = req.body;
        const clientApi = new ClientDeviceInterfaceApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());


        const icelandicUser = requestBody.language === 'is';

        const showMenuDto = new ShowMenuDto();
        showMenuDto.communicationId = requestBody.communicationId;
        showMenuDto.message = icelandicUser ? "Viltu borða nammi?" : "Want to eat candy?";

        const options = icelandicUser ? ["Já", "Nei"] : ["Yes", "No"];
        showMenuDto.options = options;
        showMenuDto.timeoutSek = 30;
        showMenuDto.title = icelandicUser ? "Nammi spurning" : "Candy question";
        showMenuDto.image = "mjolnir";
        const reply = await clientApi.apiClientDeviceInterfaceShowMenuPost(showMenuDto);

        const showMessageDto = new ShowMessageDto();
        showMessageDto.communicationId = requestBody.communicationId;
        showMessageDto.close = icelandicUser ? "Loka" : "Close";
        showMessageDto.image = "mjolnir";
        showMessageDto.timeoutSek = 30;
        showMessageDto.title = icelandicUser ? "Takk fyrir svarið" : "Thanks for your answer";

        if (reply.body.selectedValue === options[0]) {
            showMessageDto.message = icelandicUser ? "Þú valdir já" : "You picked yes";
        } else {
            showMessageDto.message = icelandicUser ? "Þú valdir nei" : "You picked no";
        }
        await clientApi.apiClientDeviceInterfaceShowMessagePost(showMessageDto);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
    }
});

export default router;