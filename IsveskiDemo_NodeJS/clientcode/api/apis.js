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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./clientDeviceInterfaceApi"), exports);
const clientDeviceInterfaceApi_1 = require("./clientDeviceInterfaceApi");
__exportStar(require("./clientSensorsApi"), exports);
const clientSensorsApi_1 = require("./clientSensorsApi");
__exportStar(require("./clientTicketDefinitionsApi"), exports);
const clientTicketDefinitionsApi_1 = require("./clientTicketDefinitionsApi");
__exportStar(require("./clientWalletApi"), exports);
const clientWalletApi_1 = require("./clientWalletApi");
__exportStar(require("./demoApi"), exports);
const demoApi_1 = require("./demoApi");
__exportStar(require("./pushNotificationsApi"), exports);
const pushNotificationsApi_1 = require("./pushNotificationsApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [clientDeviceInterfaceApi_1.ClientDeviceInterfaceApi, clientSensorsApi_1.ClientSensorsApi, clientTicketDefinitionsApi_1.ClientTicketDefinitionsApi, clientWalletApi_1.ClientWalletApi, demoApi_1.DemoApi, pushNotificationsApi_1.PushNotificationsApi];
//# sourceMappingURL=apis.js.map