/* GET users listing. */
import express = require('express');
import { ClientWalletClient, CreateTicketRequest, DetailTemplate1, ICreateTicketRequest, IDetailTemplate1, ITemplate1, Template1 } from '../clientcode/icewalletclientclient';
import { ISVESKI_BASE_PATH } from '../common/constants';
import {
    getIsveskiTicketDefinitionIds,
    IsveskiTicketType,
    log,
    parseIsveskiCookie
} from '../common/isveskiUtils'
import {Users} from '../common/repository'
import {Text} from "../common/text";


function makeNoTicketEndpoint(ticketType: IsveskiTicketType) {

    const router = express.Router();

    // Redirect to a generic ticket sale page 
    router.get('/noticket', (req: express.Request, res: express.Response) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie)
        if (!cookie.UserName) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.originalUrl})`});
            return;
        }
        const renderText = Text.getRenderer(cookie.Language)
        res.render('noticket', { 
            title: renderText(ticketType.noTicketDialogue.noTicketDeclaration),
            explanation: renderText(ticketType.noTicketDialogue.purchaseTicketPersuasion),
            buyTicketAction: renderText(ticketType.noTicketDialogue.purchaseAction),
            getTicketEndpoint: 'getticket'
        });
    });
    
    // Endpoint for the ticket sale page
    router.post('/getticket',async (req, res) => {
        const cookie = parseIsveskiCookie(req.headers?.cookie);
        if (!cookie) {
            res.render('invalidstate', {message: `Isveski cookie missing (${req.url})`});
            return;
        }
        const renderText = Text.getRenderer(cookie.Language);

        const clientApi = new ClientWalletClient(ISVESKI_BASE_PATH);
        
        const [userResponse, ticketDefs] =
            await Promise.all([
                clientApi.searchUser(cookie.UserName),// getIsveskiUserId(cookie.UserName, clientApi),
                getIsveskiTicketDefinitionIds()
            ])

        const user = Users.getOrAddUserIfMissing(userResponse.userId, cookie.UserName);

        const ticketTypeId = ticketDefs[ticketType.systemName];
        if(!ticketTypeId) throw new Error(`Ticket ${ticketType.systemName} does not exist (yet?) on the Isveski system`);

        const ticketResponse = await clientApi.createTicket(
            new CreateTicketRequest({
                userId: userResponse.userId,
                name: ticketType.systemName,
                ticketDefinitionId: ticketTypeId,
                template: new Template1({
                    title: renderText(ticketType.name),
                    description: renderText(ticketType.description),
                    expiry: new Date(Date.now() + 1000 * 60 * 60 * 24 * ticketType.expiryPeriodInDays),
                    //templateType: TemplateTypeEnum.T1,
                    time: new Date(),
                    image: ticketType.image
                } as ITemplate1),
                detailTemplate: new DetailTemplate1({
                    //detailType: DetailTemplateTypeEnum.Dt1,
                    title: renderText(ticketType.name),
                    description: renderText(ticketType.description),
                    expiry: new Date(Date.now() + 1000 * 60 * 60 * 24 * ticketType.expiryPeriodInDays),
                    time: new Date(),
                    image: ticketType.image,
                } as IDetailTemplate1),
                data: `Created on ${new Date()}`,
                note: ""
            } as ICreateTicketRequest)
        );
        user.balance -= ticketType.price;

        log(`Ticketsale! User ${cookie.UserName} (${userResponse.userId}) got a ticketType ${renderText(ticketType.name)}, his balance is now ${user.balance}`);
        res.redirect('../user');
    })
    return router;
}

export default makeNoTicketEndpoint;
