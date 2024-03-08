"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* GET users listing. */
const express = require("express");
const utils_1 = require("../utils");
const router = express.Router();
router.get('/detailticket', (req, res) => {
    var _a, _b, _c;
    const cookie = (0, utils_1.parseIsveskiCookie)((_a = req.headers) === null || _a === void 0 ? void 0 : _a.cookie);
    res.render('detailticket', {
        title: 'Ticket detail',
        username: (_b = cookie === null || cookie === void 0 ? void 0 : cookie.UserName) !== null && _b !== void 0 ? _b : 'unknwown user',
        cookie: (_c = req.headers) === null || _c === void 0 ? void 0 : _c.cookie
    });
});
exports.default = router;
//# sourceMappingURL=detailticket.js.map