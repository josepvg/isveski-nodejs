/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    const cookieHeader = req.headers?.cookie;
    res.render('detailticket', { title: 'Express' });
});

export default router;