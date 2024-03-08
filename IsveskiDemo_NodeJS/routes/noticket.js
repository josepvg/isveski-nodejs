"use strict";
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
/* GET users listing. */
const express = require("express");
const utils_1 = require("../utils");
const repository_1 = require("../repository");
const clientWalletApi_1 = require("../clientcode/api/clientWalletApi");
const onsensor_1 = require("./onsensor");
const templateTypeEnum_1 = require("../clientcode/model/templateTypeEnum");
const router = express.Router();
function makeNoTicketEndpoint(ticketname, explanation, price) {
    router.get('/noticket', (req, res) => {
        var _a;
        const cookie = (0, utils_1.parseIsveskiCookie)((_a = req.headers) === null || _a === void 0 ? void 0 : _a.cookie);
        if (!cookie) {
            res.render('invalidstate', { message: `Isveski cookie missing (${req.originalUrl})` });
            return;
        }
        res.render('noticket', {
            title: ticketname[cookie.Language],
            explanation: explanation[cookie.Language],
            getTicketEndpoint: 'getticket'
        });
    });
    router.post('/getticket', (req, res) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const cookie = (0, utils_1.parseIsveskiCookie)((_a = req.headers) === null || _a === void 0 ? void 0 : _a.cookie);
        if (!cookie) {
            res.render('invalidstate', { message: `Isveski cookie missing (${req.url})` });
            return;
        }
        const user = (0, repository_1.addUserIfMissing)(cookie.UserName);
        user.balance -= price;
        const userId = yield (0, utils_1.getIsveskiUsername)(user.name);
        const ticketDefs = yield (0, utils_1.getIsveskiTicketDefinitionIds)();
        const clientApi = new clientWalletApi_1.ClientWalletApi("https://isveski.is");
        clientApi.setDefaultAuthentication(new onsensor_1.IsveskiApiKeyAuth());
        const ticketcreationDto = {
            userId: userId,
            name: "Abler-dev",
            ticketDefinitionId: ticketDefs[ticketname["en"]],
            template: {
                templateType: templateTypeEnum_1.TemplateTypeEnum.T1
            },
        };
        (0, utils_1.log)(JSON.stringify(ticketcreationDto, null, 2));
        const ticketCreateResp = yield clientApi.apiClientWalletCreateTicketPost(ticketcreationDto);
        // log(JSON.stringify(ticketCreateResp, null, 2))
        (0, utils_1.log)(`Ticketsale! User ${cookie.UserName} (${userId}) got a ticket ${ticketname["en"]}, his balance is now ${user.balance}`);
        res.redirect('/user');
    }));
    return router;
}
exports.default = makeNoTicketEndpoint;
//# sourceMappingURL=noticket.js.map