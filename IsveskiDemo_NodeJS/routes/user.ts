/*
 * GET users listing.
 */
import express = require('express');
import {parseIsveskiCookie} from "../common/isveskiUtils";
import {Users} from "../common/repository";

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    const cookie = parseIsveskiCookie(req.headers?.cookie)
    if (!cookie) {
        res.render('invalidstate', {message: "Cookie missing"})
    }
    else {
        const user = Users.getUserIfExists(cookie.UserName)
        if(user)
            res.render('user', { 
                username: user.name,
                balance: user.balance
            });
        else
            res.redirect('/') // todo -> signup page
    }
});

export default router;