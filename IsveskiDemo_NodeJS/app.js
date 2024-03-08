"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const utils_1 = require("./utils");
const index_1 = __importDefault(require("./routes/index"));
const user_1 = __importDefault(require("./routes/user"));
const onsensor_1 = __importStar(require("./routes/onsensor"));
const detailticket_1 = __importDefault(require("./routes/detailticket"));
const detailcookie_1 = __importDefault(require("./routes/detailcookie"));
const linkticket_1 = __importDefault(require("./routes/linkticket"));
const express = require("express");
const noticket_1 = __importDefault(require("./routes/noticket"));
const clientWalletApi_1 = require("./clientcode/api/clientWalletApi");
const app = express();
app.use(express.json());
// Define middleware to check API key
const checkApiKey = (req, res, next) => {
    // Replace 'your_api_key_here' with your actual API key value
    console.log(req.headers);
    const apiKey = req.get('x-api-key');
    if (apiKey && apiKey === 'SIGNALKEY') {
        next(); // API Key is correct, proceed to the next middleware or request handler
    }
    else {
        // API Key is incorrect or not provided, return 401 Unauthorized
        res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/user', user_1.default);
const clientApi = new clientWalletApi_1.ClientWalletApi("https://isveski.is");
clientApi.setDefaultAuthentication(new onsensor_1.IsveskiApiKeyAuth());
[
    detailcookie_1.default,
    (0, noticket_1.default)({ "is": "Gymkort", "en": "Gymcard" }, { "is": "Þú þarft kort til að komast inn", "en": "You need a card to get in" }, 20000)
].map(endpoint => app.use('/salur', endpoint));
[
    detailcookie_1.default,
    (0, noticket_1.default)({ "is": "Miði í lúxus róðravél", "en": "Deluxe Rowing Machine Ticket" }, { "is": "Maður þarf sérstakann miða í þessa vél!", "en": "You need a special ticket for this machine" }, 2000)
].map(endpoint => app.use('/deluxerowingmachine', endpoint));
app.use('/onsensor', checkApiKey, onsensor_1.default);
app.use('/detailticket', detailticket_1.default);
app.use('/linkticket', linkticket_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function () {
    (0, utils_1.log)(`Express server listening on port ${server.address().port}`);
});
//# sourceMappingURL=app.js.map