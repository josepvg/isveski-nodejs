/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    const isveskiCookie = req.cookies['isveski'];
    let userName;
    let language;
    if (isveskiCookie) {
        try {
            const parsedCookie = JSON.parse(isveskiCookie);
            userName = parsedCookie.UserName;
            language = parsedCookie.Language;
        } catch (error) {
            console.error('Error parsing isveski cookie:', error);
            // Handle error (e.g., cookie might not be in the expected format)
        }
    } else {
        res.render('noapp', { title: 'Ísveskið er ekki uppsett' });
        return;
    }

    // Getting the id from the query parameter
    const id = req.query.id;

    // Now you can use the userName and id in your response
    res.render('linkticket', { title: 'Tenging', isveskiUserName: userName, userName: id });
});


export default router;