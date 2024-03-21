/*
 * GET users listing.
 */
import express = require('express');
import {getIsveskiUserId, parseIsveskiCookie} from "../common/isveskiUtils";
import {Users} from "../common/repository";
import {ClientWalletApi} from "../clientcode/api/clientWalletApi";
import {IsveskiApiKeyAuth} from "./onsensor";

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    const cookie = parseIsveskiCookie(req.headers?.cookie)
    if (!cookie) {
        res.render('invalidstate', {message: "Cookie missing"})
    }
    else {
        const userId = await getIsveskiUserId(cookie.UserName);
        const user = Users.getUser(userId)
        if(user !== undefined){
            user.name = cookie.UserName;
            res.render('user', { 
                username: user.name,
                balance: user.balance
            });
        }
        else{
            res.redirect('/') // todo -> signup page
        }
    }
});

export default router;