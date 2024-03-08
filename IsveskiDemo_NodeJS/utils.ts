import user from "./routes/user";
import {ClientWalletApi} from "./clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "./routes/onsensor";
import {ClientTicketDefinitionsApi} from "./clientcode/api/clientTicketDefinitionsApi";
import Dict = NodeJS.Dict;

const loggers: Array<Function> = [console.log, require('debug')('my express app')]
const log = (message:string) => loggers.map(x => x(message))

type IsveskiRedirectCookie = {
    SensorId: string;
    UserName: string;
    Language: string;
}
    
const getIsveskiCookieAsString = (allCookies:string) => {
    const parsedCookie = allCookies.split(';')
        .map(s => s.split('=').map(decodeURIComponent))
        .find(pair => pair[0] === 'isveski');
    return parsedCookie 
        ? JSON.stringify(JSON.parse(parsedCookie[1]), null, 4) 
        : "No isveski cookie found"
}

const parseIsveskiCookie = (cookie: string) : IsveskiRedirectCookie | null => {
    const isveskiCookie = getIsveskiCookieAsString(cookie)
    try {
        return JSON.parse(isveskiCookie);
    }
    catch {
        log('isveski cookie not valid JSON')
        return null;
    }
}

const getIsveskiUsername = async (username: string): Promise<string> => {
    const clientApi = new ClientWalletApi("https://isveski.is");
    clientApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
    const idGetResponse = await clientApi.apiClientWalletSearchUserGet(username);
    if(idGetResponse.response.statusCode !== 200) {
        const respAsString = JSON.stringify(idGetResponse.response);
        throw new Error(`Couldn't get info for user ${user.name} from Isveski server. Abort \n ${respAsString}`);
    }
    return idGetResponse.body;
}

const getIsveskiTicketDefinitionIds = async (): Promise<Dict<string>> => {
    const ticketApi = new ClientTicketDefinitionsApi("https://isveski.is");
    ticketApi.setDefaultAuthentication(new IsveskiApiKeyAuth());
    const resp = await ticketApi.apiClientTicketDefinitionsGetListOfTicketDefinitionsGet();
    if (resp.response.statusCode !== 200)
        throw new Error("Ticket definition inacessible")
    return resp.body.ticketDefinitions.reduce<Dict<string>>(
        (dict,val) => {
            dict[val.name] = val.id;
            return dict;
        },
        {});
}

export { log, getIsveskiCookieAsString, parseIsveskiCookie, getIsveskiTicketDefinitionIds, getIsveskiUsername }