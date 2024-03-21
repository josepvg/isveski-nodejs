/* GET users listing. */
import express = require('express');
import {
    getApiClientForClientWallet,
    getApiClientForPushNotifications,
    getApiClientForUserDevice,
    parseIsveskiCookie,
    IsveskiTicketType,
    log
} from '../../common/isveskiUtils';
import {Text} from '../../common/text';
import {ClientWalletApi} from "../../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "../onsensor";
import {RequestParameter} from "../../servercode/model/requestParameter";
import {ClientDeviceInterfaceApi} from "../../clientcode/api/clientDeviceInterfaceApi";
import { Users } from '../../common/repository';
import {PushNotificationsApi} from "../../clientcode/api/pushNotificationsApi";
import {ActionTypesEnum} from "../../clientcode/model/actionTypesEnum";
import {ShowUrlAction} from "../../clientcode/model/showUrlAction";

export const ticketType: IsveskiTicketType = {
    systemName: "Gymcard",
    name: {text: "Gymkort", translations:{ en: "Gymcard" }},
    description: {text: "Aðgangur að ræktinni", translations: {en: "Access to the gym"}},
    noTicketDialogue: { 
        noTicketDeclaration: {text: "Þú átt ekki kort", translations: {en: "You have no gymcard"}},
        purchaseTicketPersuasion: {
            text: "Með ræktarkorti máttu nota ræktina, kostar aðeins 20.000 kr.", 
            translations: {en: "With a gymcard you can access this wonderful gym, it's only 20.000 kr."}
        },
        purchaseAction: {
            text: "Kaupa miða", translations: {en: "Buy ticket"}
        }
    },
    image: 'Gymlogo',
    price: 20000,
    expiryPeriodInDays: 30,
}

const wattPrice = 10 + Math.ceil(Math.random()*10);

const userFacingText: Text[] = [
    {text: "Staðfesting á miðanotkun", translations: {"en": "Confirmation of ticket use"}},
    {text: "Viltu nota miðann?", translations: {"en": "Do you want to use your ticket?"}},
    {text: "Já", translations: {"en": "Yes"}},
    {text: "Nei", translations: {"en": "No"}},
    {text: "Miði notaður", translations: {"en": "Ticket spent"}},
    {text: "Miði geymdur", translations: {"en": "Ticket kept"}},
    {text: "Allt í góðu", translations: {"en": "Alright"}},
    {text: "Þessi nemi er ekki tengdur neinni virkni, reyndu annan.", translations: {"en": "Sensor not connected to any activity"}},
];
    

export function makeGymCardHolderSignalEndpoint() {
    
    const router = express.Router();
    
    router.post('/onsignal', async (req, res) =>{
        const requestParameter: RequestParameter = req.body;
        const translateIfNeeded = Text.getLookup(userFacingText, requestParameter.language);
        
        const user = Users.getOrAddUserIfMissing(requestParameter.userId);
        
        const clientDeviceApi = getApiClientForUserDevice();
        
        log(JSON.stringify(requestParameter, null, 2));
        
        if(requestParameter.sensorName.startsWith("Inngangur")) {
            // Card holder is trying to get in

            const [yesOption, noOption] = [translateIfNeeded("Yes"), translateIfNeeded("No")];
            const options = [yesOption, noOption];
                
            const { body: choice } = await clientDeviceApi.apiClientDeviceInterfaceShowMenuPost({
                    communicationId: requestParameter.communicationId,
                    title: translateIfNeeded('Staðfesting á miðanotkun'),
                    message: translateIfNeeded("Viltu nota miðann?"),
                    options: options,
                    timeoutSek: 30
                });
     
            const spendTicket = choice.selectedValue === yesOption;
            if(spendTicket){
                const walletApi = getApiClientForClientWallet();
                const ticketDeletions = 
                    requestParameter.tickets.map(ticket => 
                        walletApi.apiClientWalletDeleteTicketPost({ticketId: ticket.id, note: "Ticket used"}))
                await Promise.all(ticketDeletions);
            }
            
            const ticketFateText = translateIfNeeded(spendTicket ? "Miði notaður": "Miði geymdur");
            await clientDeviceApi.apiClientDeviceInterfaceShowMessagePost({
                communicationId: requestParameter.communicationId,
                title: ticketFateText,
                message: ticketFateText,
                timeoutSek: 10,
                close: translateIfNeeded("Allt í góðu")
            });
        }
        else if (requestParameter.sensorName.startsWith("Rafalsróðravél")){
            
            await clientDeviceApi.apiClientDeviceInterfaceShowMessagePost({
                communicationId: requestParameter.communicationId,
                title: translateIfNeeded("Velkomin/n í rafalsróður!"),
                message: translateIfNeeded("Ertu til í að toga inn kílóvattstundirnar"),
                timeoutSek: 10,
                close: translateIfNeeded("Ójá!")
            });
            const yesOption = translateIfNeeded("Það er í fína");
            const { body: choice } = await clientDeviceApi.apiClientDeviceInterfaceShowMenuPost({
                communicationId: requestParameter.communicationId,
                title: translateIfNeeded("Laun"),
                message: translateIfNeeded(`Þú færð ${wattPrice} kr. á kílóvattstundina. Er það lagi?`),
                timeoutSek: 30,
                options: [yesOption, translateIfNeeded("Nei, það er of lítið")]
            });
            const goOn = choice.selectedValue === yesOption;
            await clientDeviceApi.apiClientDeviceInterfaceShowMessagePost({
                communicationId: requestParameter.communicationId,
                title: translateIfNeeded("Jæja"),
                message: goOn ? translateIfNeeded("Hefst þá róðurinn!") : translateIfNeeded("Sjáumst síðar"),
                timeoutSek: 10,
                close: goOn ? translateIfNeeded("Ókei!") : translateIfNeeded("Bless"),
            });
            if(goOn){
                const sessionLengthInSeconds = 5 + Math.ceil(Math.random()*10);
                setTimeout(sessionEnds, sessionLengthInSeconds * 1000);
                function sessionEnds() {
                    // clientDeviceApi.apiClientDeviceInterfacePushSensorPost({})
                    const pay = (sessionLengthInSeconds/60)*wattPrice; // turn seconds into minutes for demo purposes
                    user.balance = user.balance + pay;
                    const pushApi = getApiClientForPushNotifications();
                    pushApi.apiPushNotificationsSendToTicketPost({
                        ticketId: requestParameter.tickets[0].id,
                        title: translateIfNeeded("Róðri lokið"),
                        body: translateIfNeeded("Þú rerir inn ") + `${pay} kr. á ${sessionLengthInSeconds} mínútum`,
                        priority: 1,
                        actions: [
                            { actionType: ActionTypesEnum.ShowUrl, url: "https://isveski-abler.ossur.xyz/user"},
                            { actionType: ActionTypesEnum.ShowTicket, ticketId: requestParameter.tickets[0].id}
                        ]
                    }).then( x => {
                        const {body: svar} = x;
                        log(`Rowing session ended, was ${sessionLengthInSeconds} s long`)
                    }).catch(log)
                }
            }
        }
        else {
            await clientDeviceApi.apiClientDeviceInterfaceShowMessagePost({
                communicationId: requestParameter.communicationId,
                title: translateIfNeeded("Sensor not connected to any activity"),
                message: translateIfNeeded("Sensor not connected to any activity"),
                timeoutSek: 10,
                close: translateIfNeeded("Alright")
            });
        }
        
        res.sendStatus(200);
    });
    
    const noticketRowingMachineTexts: Text[] = [
        {text: "Þessi vél er eingöngu fyrir korthafa", translations: {en: "This machine is only for members"}},
        {text: "Til að nota aflgjafaróðravélina þarftu hafa hafa kort.", translations: {en: "To use the generator rowing machine you have to have a membership card"}},
        {text: "Kaupa kort", translations: {en: "Buy card"}},
    ]
        
    router.get('/generator/noticket', (req: express.Request, res: express.Response) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie)
        if (!cookie.UserName) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.originalUrl})`});
            return;
        }
        const lookup = Text.getLookup(noticketRowingMachineTexts, cookie.Language);
        res.render('noticket', { 
            title: lookup("Þessi vél er eingöngu fyrir korthafa"),
            explanation: lookup("Til að nota aflgjafaróðravélina þarftu hafa hafa kort."),
            buyTicketAction: lookup("Kaupa kort"),
            getTicketEndpoint: '../getticket'
        });
    });
    
    
    return router;
}