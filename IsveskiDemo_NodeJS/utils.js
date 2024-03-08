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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsveskiUsername = exports.getIsveskiTicketDefinitionIds = exports.parseIsveskiCookie = exports.getIsveskiCookieAsString = exports.log = void 0;
const user_1 = __importDefault(require("./routes/user"));
const clientWalletApi_1 = require("./clientcode/api/clientWalletApi");
const onsensor_1 = require("./routes/onsensor");
const clientTicketDefinitionsApi_1 = require("./clientcode/api/clientTicketDefinitionsApi");
const loggers = [console.log, require('debug')('my express app')];
const log = (message) => loggers.map(x => x(message));
exports.log = log;
const getIsveskiCookieAsString = (allCookies) => {
    const parsedCookie = allCookies.split(';')
        .map(s => s.split('=').map(decodeURIComponent))
        .find(pair => pair[0] === 'isveski');
    return parsedCookie
        ? JSON.stringify(JSON.parse(parsedCookie[1]), null, 4)
        : "No isveski cookie found";
};
exports.getIsveskiCookieAsString = getIsveskiCookieAsString;
const parseIsveskiCookie = (cookie) => {
    const isveskiCookie = getIsveskiCookieAsString(cookie);
    try {
        return JSON.parse(isveskiCookie);
    }
    catch (_a) {
        log('isveski cookie not valid JSON');
        return null;
    }
};
exports.parseIsveskiCookie = parseIsveskiCookie;
const getIsveskiUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const clientApi = new clientWalletApi_1.ClientWalletApi("https://isveski.is");
    clientApi.setDefaultAuthentication(new onsensor_1.IsveskiApiKeyAuth());
    const idGetResponse = yield clientApi.apiClientWalletSearchUserGet(username);
    if (idGetResponse.response.statusCode !== 200) {
        const respAsString = JSON.stringify(idGetResponse.response);
        throw new Error(`Couldn't get info for user ${user_1.default.name} from Isveski server. Abort \n ${respAsString}`);
    }
    return idGetResponse.body;
});
exports.getIsveskiUsername = getIsveskiUsername;
const getIsveskiTicketDefinitionIds = () => __awaiter(void 0, void 0, void 0, function* () {
    const ticketApi = new clientTicketDefinitionsApi_1.ClientTicketDefinitionsApi("https://isveski.is");
    ticketApi.setDefaultAuthentication(new onsensor_1.IsveskiApiKeyAuth());
    const resp = yield ticketApi.apiClientTicketDefinitionsGetListOfTicketDefinitionsGet();
    if (resp.response.statusCode !== 200)
        throw new Error("Ticket definition inacessible");
    return resp.body.ticketDefinitions.reduce((dict, val) => {
        dict[val.name] = val.id;
        return dict;
    }, {});
});
exports.getIsveskiTicketDefinitionIds = getIsveskiTicketDefinitionIds;
//# sourceMappingURL=utils.js.map