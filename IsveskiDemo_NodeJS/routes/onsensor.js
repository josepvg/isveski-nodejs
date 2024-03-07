"use strict";
/*
 * GET users listing.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsveskiApiKeyAuth = void 0;
const express = require("express");
const api_1 = require("../clientcode/api");
const router = express.Router();
class IsveskiApiKeyAuth {
    applyToRequest(requestOptions) {
        requestOptions.headers['x-api-key'] = "APIKEY";
    }
}
exports.IsveskiApiKeyAuth = IsveskiApiKeyAuth;
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requestBody = req.body;
        const clientApi = new api_1.ClientDeviceInterfaceApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
        const icelandicUser = requestBody.language === 'is';
        const showMenuDto = new api_1.ShowMenuDto();
        showMenuDto.communicationId = requestBody.communicationId;
        showMenuDto.message = icelandicUser ? "Viltu borða nammi?" : "Want to eat candy?";
        const options = icelandicUser ? ["Já", "Nei"] : ["Yes", "No"];
        showMenuDto.options = options;
        showMenuDto.timeoutSek = 30;
        showMenuDto.title = icelandicUser ? "Nammi spurning" : "Candy question";
        showMenuDto.image = "mjolnir";
        const reply = yield clientApi.apiClientDeviceInterfaceShowMenuPost(showMenuDto);
        const showMessageDto = new api_1.ShowMessageDto();
        showMessageDto.communicationId = requestBody.communicationId;
        showMessageDto.close = icelandicUser ? "Loka" : "Close";
        showMessageDto.image = "mjolnir";
        showMessageDto.timeoutSek = 30;
        showMessageDto.title = icelandicUser ? "Takk fyrir svarið" : "Thanks for your answer";
        if (reply.body.selectedValue === options[0]) {
            showMessageDto.message = icelandicUser ? "Þú valdir já" : "You picked yes";
        }
        else {
            showMessageDto.message = icelandicUser ? "Þú valdir nei" : "You picked no";
        }
        yield clientApi.apiClientDeviceInterfaceShowMessagePost(showMessageDto);
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
    }
}));
exports.default = router;
//# sourceMappingURL=onsensor.js.map