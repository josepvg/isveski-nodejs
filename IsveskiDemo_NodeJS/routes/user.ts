/*
 * GET users listing.
 */
import express = require('express');
//import { ClientWalletClient } from '../clientcode/icewalletclientclient';
import { ISVESKI_BASE_PATH } from '../common/constants';
import {parseIsveskiCookie} from "../common/isveskiUtils";
import {Users} from "../common/repository";

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    //const cookie = parseIsveskiCookie(req.headers?.cookie)
    //if (!cookie) {
    //    res.render('invalidstate', {message: "Cookie missing"})
    //}
    //else {
    //    const api = new ClientWalletClient(ISVESKI_BASE_PATH);
    //    const userResponse = await api.searchUser(cookie.UserName);
    //    const user = Users.getUser(userResponse.userId)
    //    if(user !== undefined){
    //        user.name = cookie.UserName;
    //        res.render('user', { 
    //            username: user.name,
    //            balance: user.balance
    //        });
    //    }
    //    else{
    //        res.redirect('/') // todo -> signup page
    //    }
    //}
});

export default router;