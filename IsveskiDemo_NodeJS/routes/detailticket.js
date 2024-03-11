"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    var _a;
    const cookieHeader = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.cookie;
    res.render('detailticket', { title: 'Express' });
});
exports.default = router;
//# sourceMappingURL=detailticket.js.map