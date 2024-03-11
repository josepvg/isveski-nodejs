//import * as express from 'express';
import { AddressInfo } from "net";
import * as path from 'path';

import routes from './routes/index';
import users from './routes/user';
import onsensor from './routes/onsensor';
import detailticket from './routes/detailticket';
import linkticket from './routes/linkticket';
import finishticket from './routes/finishticket';

import cookieParser from 'cookie-parser';
import { NextFunction, Request, Response } from 'express';
import express = require("express");

const debug = require('debug')('my express app');
const app = express();
app.use(express.json());
app.use(cookieParser());

// Define middleware to check API key
const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
    // Replace 'your_api_key_here' with your actual API key value
    console.log(req.headers);
    const apiKey = req.get('x-api-key');
    if (apiKey && apiKey === 'IS-pV5ZfTNU4hhJz_9j39MBCXRpsvlP4Mtky') {
        next(); // API Key is correct, proceed to the next middleware or request handler
    } else {
        // API Key is incorrect or not provided, return 401 Unauthorized
        res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }

};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/onsensor', checkApiKey, onsensor);

app.use('/detailticket', detailticket);

app.use('/linkticket', linkticket);
app.use('/finishticket', finishticket);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err[ 'status' ] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
        res.status(err[ 'status' ] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
    debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});

