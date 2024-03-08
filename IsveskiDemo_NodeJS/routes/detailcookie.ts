/* GET users listing. */
import express = require('express');
import { log, getIsveskiCookieAsString, parseIsveskiCookie } from '../utils' 
const router = express.Router();

router.get('/detailcookie', (req: express.Request, res: express.Response) => {
    const cookie = parseIsveskiCookie(req.headers?.cookie)
    res.render('detailcookie', { 
        title: 'Cookie detail',
        username: cookie?.UserName ?? 'unknwown user',
        cookie: getIsveskiCookieAsString(req.headers?.cookie)
    });
});

export default router;
