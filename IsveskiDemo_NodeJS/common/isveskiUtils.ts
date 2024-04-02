import { Request } from "express";
import { ClientTicketDefinitionsClient } from "../clientcode/icewalletclientclient";
import { ISVESKI_BASE_PATH } from "./constants";
import { Text } from "./text";
//import {ClientWalletApi} from "../clientcode/api/clientWalletApi";
//import {IsveskiApiKeyAuth} from "../routes/onsensor";
//import {ClientTicketDefinitionsApi} from "../clientcode/api/clientTicketDefinitionsApi";
import Dict = NodeJS.Dict;
//import {ClientDeviceInterfaceApi} from "../clientcode/api/clientDeviceInterfaceApi";
//import {PushNotificationsApi} from "../clientcode/api/pushNotificationsApi";

const loggers: Array<Function> = [console.log, require('debug')('my express app')]
const log = (message: string) => loggers.map(x => x(message))



/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming


type IsveskiRedirectCookie = {
    SensorId: string;
    UserName: string;
    Language: string;
}
    

type IsveskiTicketType = {
    systemName: string,
    name: Text
    description: Text
    noTicketDialogue: {
        noTicketDeclaration: Text
        purchaseTicketPersuasion: Text
        purchaseAction: Text
    }
    image: string
    price: number
    expiryPeriodInDays: number 
}

//export const DefaultCredentials = new Configuration({
//    basePath: ISVESKI_BASE_PATH,
//    apiKey: API_KEY
//});

const getIsveskiCookieAsString = (allCookies: string) => {
    const parsedCookie = allCookies.split(';')
        .map(s => s.split('=').map(decodeURIComponent))
        .find(pair => pair[0] === 'isveski');
    return parsedCookie 
        ? JSON.stringify(JSON.parse(parsedCookie[1]), null, 4) 
        : "No isveski cookie found"
}

const parseIsveskiCookie = (cookie: string | Request) : IsveskiRedirectCookie | null => {
    if (cookie === undefined) return {SensorId: "", UserName: "", Language: ""};
    const cookieAsString =  (typeof cookie == "string") ? cookie : cookie.headers?.cookie;
    const isveskiCookie = getIsveskiCookieAsString(cookieAsString)
    log(isveskiCookie)
    try {
        return JSON.parse(isveskiCookie);
    }
    catch {
        log('isveski cookie not valid JSON')
        return null;
    }
}


/*const getIsveskiUserId = async (username: string, api?: ClientWalletApi): Promise<string> => {
    api ??= getApiClientForClientWallet();
    const idGetResponse = await api.searchUser({ username: username });
    return idGetResponse.userId;
}*/

const getIsveskiTicketDefinitionIds = async (): Promise<Dict<string>> => {
    const defApi = new ClientTicketDefinitionsClient(ISVESKI_BASE_PATH);
    const defs = await defApi.getListOfTicketDefinitions();
    return defs.ticketDefinitions.reduce<Dict<string>>(
        (dict, val) => {
            dict[val.name] = val.id;
            return dict;
        },
        {}
    );
}

/*const getApiClientForUserDevice = () => {
    const api = new ClientDeviceInterfaceApi("https://isveski.is");
    api.setDefaultAuthentication(new IsveskiApiKeyAuth());
    return api;
}

const getApiClientForTicketDefinitions = () => {
    const api = new ClientTicketDefinitionsApi("https://isveski.is");
    api.setDefaultAuthentication(new IsveskiApiKeyAuth());
    return api;
}

const getApiClientForClientWallet = () => {
    const api = new ClientWalletApi("https://isveski.is");
    api.setDefaultAuthentication(new IsveskiApiKeyAuth());
    return api;
}

const getApiClientForPushNotifications = () => {
    const api = new PushNotificationsApi("https://isveski.is");
    api.setDefaultAuthentication(new IsveskiApiKeyAuth());
    return api;
}*/

export {
    log,
    getIsveskiCookieAsString,
    parseIsveskiCookie,
    getIsveskiTicketDefinitionIds,
    //getIsveskiUserId,
    /*getApiClientForClientWallet,
    getApiClientForPushNotifications,
    getApiClientForTicketDefinitions,
    getApiClientForUserDevice,*/
    IsveskiTicketType
};
