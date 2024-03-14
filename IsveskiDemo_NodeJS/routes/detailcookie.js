"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* GET users listing. */
const express = require("express");
const isveskiUtils_1 = require("../common/isveskiUtils");
const router = express.Router();
router.get('/detailcookie', (req, res) => {
    var _a, _b, _c;
    const cookie = (0, isveskiUtils_1.parseIsveskiCookie)((_a = req.headers) === null || _a === void 0 ? void 0 : _a.cookie);
    res.render('detailcookie', {
        title: 'Cookie detail',
        username: (_b = cookie === null || cookie === void 0 ? void 0 : cookie.UserName) !== null && _b !== void 0 ? _b : 'unknwown user',
        cookie: (0, isveskiUtils_1.getIsveskiCookieAsString)((_c = req.headers) === null || _c === void 0 ? void 0 : _c.cookie)
    });
});
exports.default = router;
//# sourceMappingURL=detailcookie.js.map