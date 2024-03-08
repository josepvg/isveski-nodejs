/* GET users listing. */
import express = require('express');
import { log, parseIsveskiCookie } from '../utils' 
const router = express.Router();

router.get('/detailticket', (req: express.Request, res: express.Response) => {
    const cookie = parseIsveskiCookie(req.headers?.cookie)
    res.render('detailticket', { 
        title: 'Ticket detail',
        username: cookie?.UserName ?? 'unknwown user',
        cookie: req.headers?.cookie
    });
});

export default router;