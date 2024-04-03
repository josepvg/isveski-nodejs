/*
 * GET users listing.
 */
import express = require('express');
import {Users} from "../common/repository";

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('users', {users: Users.getAllUsers()})
});

export default router;
