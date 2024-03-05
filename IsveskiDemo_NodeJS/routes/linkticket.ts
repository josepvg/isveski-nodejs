/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    const cookieHeader = req.headers?.cookie;
    //here the cookie should only contain the 
    res.render('index', { title: 'Express' });
});

export default router;