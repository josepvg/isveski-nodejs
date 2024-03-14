import user from "../routes/user";
import {ClientWalletApi} from "../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "../routes/onsensor";
import {ClientTicketDefinitionsApi} from "../clientcode/api/clientTicketDefinitionsApi";
import Dict = NodeJS.Dict;
import {Request} from "express";

const loggers: Array<Function> = [console.log, require('debug')('my express app')]
const log = (message:string) => loggers.map(x => x(message))

type IsveskiRedirectCookie = {
    SensorId: string;
    UserName: string;
    Language: string;
}
    
type TextWithTranslations = {
    text: string
    translations: Dict<string>
}



const getText = (text: TextWithTranslations, language: string) =>
{
    log(language)
    log(JSON.stringify(text, null, 2))
    return text.translations[language] || text.text
}
              
const getDictionaryLookup = (language: string, texts: TextWithTranslations[]) => {
    const translatedTexts = texts.reduce<Dict<string>>(
        (dict, t) => { 
            dict[t.text] = getText(t,language);
            return dict;
        }, 
        {}
    );
    return (text: string) => translatedTexts[text] || text 
}


type IsveskiTicketType = {
    systemName: string,
    name: TextWithTranslations
    description: TextWithTranslations
    noTicketDeclaration: TextWithTranslations
    needForTicketPitch: TextWithTranslations
    image: string
    price: number
    expiryPeriodInDays: number 
}

const getIsveskiCookieAsString = (allCookies: string) => {
    const parsedCookie = allCookies.split(';')
        .map(s => s.split('=').map(decodeURIComponent))
        .find(pair => pair[0] === 'isveski');
    return parsedCookie 
        ? JSON.stringify(JSON.parse(parsedCookie[1]), null, 4) 
        : "No isveski cookie found"
}

const parseIsveskiCookie = (cookie: string | Request) : IsveskiRedirectCookie | null => {
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


const getIsveskiUserId = async (api: ClientWalletApi, username: string): Promise<string> => {
    const idGetResponse = await api.apiClientWalletSearchUserGet(username);
    if(idGetResponse.response.statusCode !== 200) {
        throw new Error(`Couldn't get info for user ${user.name} from Isveski server.`);
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
        {}
    );
}

export { 
    log, getIsveskiCookieAsString, parseIsveskiCookie, getIsveskiTicketDefinitionIds, getIsveskiUserId, getText, 
    getDictionaryLookup, 
    IsveskiTicketType, TextWithTranslations
}