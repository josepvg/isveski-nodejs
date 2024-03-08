"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const express = require("express");
const utils_1 = require("../utils");
const repository_1 = require("../repository");
const router = express.Router();
router.get('/', (req, res) => {
    var _a;
    const cookie = (0, utils_1.parseIsveskiCookie)((_a = req.headers) === null || _a === void 0 ? void 0 : _a.cookie);
    if (!cookie) {
        res.render('invalidstate', { message: "Cookie missing" });
    }
    else {
        const user = (0, repository_1.getUserIfExists)(cookie.UserName);
        if (user)
            res.render('user', {
                username: user.name,
                balance: user.balance
            });
        else
            res.redirect('/'); // todo -> signup page
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map