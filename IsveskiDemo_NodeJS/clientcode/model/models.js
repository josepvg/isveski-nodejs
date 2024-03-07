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
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./actionType"), exports);
__exportStar(require("./actionTypesEnum"), exports);
__exportStar(require("./authenticationMethod"), exports);
__exportStar(require("./baseAction"), exports);
__exportStar(require("./bioAuthenticationDto"), exports);
__exportStar(require("./bioMetricAuthenticationResult"), exports);
__exportStar(require("./choice"), exports);
__exportStar(require("./clientTicketAction"), exports);
__exportStar(require("./clientWallet"), exports);
__exportStar(require("./clientWalletTicket"), exports);
__exportStar(require("./createTicketDto"), exports);
__exportStar(require("./createTicketLogDto"), exports);
__exportStar(require("./deleteTicketDto"), exports);
__exportStar(require("./detailTemplate"), exports);
__exportStar(require("./detailTemplate1"), exports);
__exportStar(require("./detailTemplateTypeEnum"), exports);
__exportStar(require("./deviceException"), exports);
__exportStar(require("./errorModel"), exports);
__exportStar(require("./iceCodeErrors"), exports);
__exportStar(require("./listenToBeaconsDto"), exports);
__exportStar(require("./listenToBeaconsResultDto"), exports);
__exportStar(require("./logTemplate"), exports);
__exportStar(require("./logTemplate1"), exports);
__exportStar(require("./logTemplateTypeEnum"), exports);
__exportStar(require("./pushSensorDto"), exports);
__exportStar(require("./refreshTicketAction"), exports);
__exportStar(require("./refreshTicketListAction"), exports);
__exportStar(require("./returnChoice"), exports);
__exportStar(require("./sendToTicketDto"), exports);
__exportStar(require("./sensor"), exports);
__exportStar(require("./sensorAction"), exports);
__exportStar(require("./sensorType"), exports);
__exportStar(require("./sensorsConfigurationResponse"), exports);
__exportStar(require("./showMenuDto"), exports);
__exportStar(require("./showMenuResult"), exports);
__exportStar(require("./showMessageDto"), exports);
__exportStar(require("./showMultipleChoiceDto"), exports);
__exportStar(require("./showMultipleChoiceResult"), exports);
__exportStar(require("./showPromptDto"), exports);
__exportStar(require("./showPromptResult"), exports);
__exportStar(require("./showQrCodeDto"), exports);
__exportStar(require("./showTicketAction"), exports);
__exportStar(require("./showUrlAction"), exports);
__exportStar(require("./statusDetail"), exports);
__exportStar(require("./template"), exports);
__exportStar(require("./template1"), exports);
__exportStar(require("./templateButton"), exports);
__exportStar(require("./templateTypeEnum"), exports);
__exportStar(require("./ticketAccess"), exports);
__exportStar(require("./ticketActive"), exports);
__exportStar(require("./ticketConfigurationResponse"), exports);
__exportStar(require("./ticketDefinition"), exports);
__exportStar(require("./updateTicketDto"), exports);
__exportStar(require("./verifyCredentialsResult"), exports);
__exportStar(require("./verifyCredentialsUserIdResult"), exports);
__exportStar(require("./verifyDto"), exports);
__exportStar(require("./verifyUserIdDto"), exports);
const actionType_1 = require("./actionType");
const actionTypesEnum_1 = require("./actionTypesEnum");
const authenticationMethod_1 = require("./authenticationMethod");
const baseAction_1 = require("./baseAction");
const bioAuthenticationDto_1 = require("./bioAuthenticationDto");
const bioMetricAuthenticationResult_1 = require("./bioMetricAuthenticationResult");
const choice_1 = require("./choice");
const clientTicketAction_1 = require("./clientTicketAction");
const clientWallet_1 = require("./clientWallet");
const clientWalletTicket_1 = require("./clientWalletTicket");
const createTicketDto_1 = require("./createTicketDto");
const createTicketLogDto_1 = require("./createTicketLogDto");
const deleteTicketDto_1 = require("./deleteTicketDto");
const detailTemplate_1 = require("./detailTemplate");
const detailTemplate1_1 = require("./detailTemplate1");
const detailTemplateTypeEnum_1 = require("./detailTemplateTypeEnum");
const deviceException_1 = require("./deviceException");
const errorModel_1 = require("./errorModel");
const iceCodeErrors_1 = require("./iceCodeErrors");
const listenToBeaconsDto_1 = require("./listenToBeaconsDto");
const listenToBeaconsResultDto_1 = require("./listenToBeaconsResultDto");
const logTemplate_1 = require("./logTemplate");
const logTemplate1_1 = require("./logTemplate1");
const logTemplateTypeEnum_1 = require("./logTemplateTypeEnum");
const pushSensorDto_1 = require("./pushSensorDto");
const refreshTicketAction_1 = require("./refreshTicketAction");
const refreshTicketListAction_1 = require("./refreshTicketListAction");
const returnChoice_1 = require("./returnChoice");
const sendToTicketDto_1 = require("./sendToTicketDto");
const sensor_1 = require("./sensor");
const sensorAction_1 = require("./sensorAction");
const sensorType_1 = require("./sensorType");
const sensorsConfigurationResponse_1 = require("./sensorsConfigurationResponse");
const showMenuDto_1 = require("./showMenuDto");
const showMenuResult_1 = require("./showMenuResult");
const showMessageDto_1 = require("./showMessageDto");
const showMultipleChoiceDto_1 = require("./showMultipleChoiceDto");
const showMultipleChoiceResult_1 = require("./showMultipleChoiceResult");
const showPromptDto_1 = require("./showPromptDto");
const showPromptResult_1 = require("./showPromptResult");
const showQrCodeDto_1 = require("./showQrCodeDto");
const showTicketAction_1 = require("./showTicketAction");
const showUrlAction_1 = require("./showUrlAction");
const statusDetail_1 = require("./statusDetail");
const template_1 = require("./template");
const template1_1 = require("./template1");
const templateButton_1 = require("./templateButton");
const templateTypeEnum_1 = require("./templateTypeEnum");
const ticketAccess_1 = require("./ticketAccess");
const ticketActive_1 = require("./ticketActive");
const ticketConfigurationResponse_1 = require("./ticketConfigurationResponse");
const ticketDefinition_1 = require("./ticketDefinition");
const updateTicketDto_1 = require("./updateTicketDto");
const verifyCredentialsResult_1 = require("./verifyCredentialsResult");
const verifyCredentialsUserIdResult_1 = require("./verifyCredentialsUserIdResult");
const verifyDto_1 = require("./verifyDto");
const verifyUserIdDto_1 = require("./verifyUserIdDto");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "ActionType": actionType_1.ActionType,
    "ActionTypesEnum": actionTypesEnum_1.ActionTypesEnum,
    "AuthenticationMethod": authenticationMethod_1.AuthenticationMethod,
    "DetailTemplateTypeEnum": detailTemplateTypeEnum_1.DetailTemplateTypeEnum,
    "IceCodeErrors": iceCodeErrors_1.IceCodeErrors,
    "LogTemplateTypeEnum": logTemplateTypeEnum_1.LogTemplateTypeEnum,
    "SensorType": sensorType_1.SensorType,
    "StatusDetail": statusDetail_1.StatusDetail,
    "TemplateTypeEnum": templateTypeEnum_1.TemplateTypeEnum,
    "TicketAccess": ticketAccess_1.TicketAccess,
};
let typeMap = {
    "BaseAction": baseAction_1.BaseAction,
    "BioAuthenticationDto": bioAuthenticationDto_1.BioAuthenticationDto,
    "BioMetricAuthenticationResult": bioMetricAuthenticationResult_1.BioMetricAuthenticationResult,
    "Choice": choice_1.Choice,
    "ClientTicketAction": clientTicketAction_1.ClientTicketAction,
    "ClientWallet": clientWallet_1.ClientWallet,
    "ClientWalletTicket": clientWalletTicket_1.ClientWalletTicket,
    "CreateTicketDto": createTicketDto_1.CreateTicketDto,
    "CreateTicketLogDto": createTicketLogDto_1.CreateTicketLogDto,
    "DeleteTicketDto": deleteTicketDto_1.DeleteTicketDto,
    "DetailTemplate": detailTemplate_1.DetailTemplate,
    "DetailTemplate1": detailTemplate1_1.DetailTemplate1,
    "DeviceException": deviceException_1.DeviceException,
    "ErrorModel": errorModel_1.ErrorModel,
    "ListenToBeaconsDto": listenToBeaconsDto_1.ListenToBeaconsDto,
    "ListenToBeaconsResultDto": listenToBeaconsResultDto_1.ListenToBeaconsResultDto,
    "LogTemplate": logTemplate_1.LogTemplate,
    "LogTemplate1": logTemplate1_1.LogTemplate1,
    "PushSensorDto": pushSensorDto_1.PushSensorDto,
    "RefreshTicketAction": refreshTicketAction_1.RefreshTicketAction,
    "RefreshTicketListAction": refreshTicketListAction_1.RefreshTicketListAction,
    "ReturnChoice": returnChoice_1.ReturnChoice,
    "SendToTicketDto": sendToTicketDto_1.SendToTicketDto,
    "Sensor": sensor_1.Sensor,
    "SensorAction": sensorAction_1.SensorAction,
    "SensorsConfigurationResponse": sensorsConfigurationResponse_1.SensorsConfigurationResponse,
    "ShowMenuDto": showMenuDto_1.ShowMenuDto,
    "ShowMenuResult": showMenuResult_1.ShowMenuResult,
    "ShowMessageDto": showMessageDto_1.ShowMessageDto,
    "ShowMultipleChoiceDto": showMultipleChoiceDto_1.ShowMultipleChoiceDto,
    "ShowMultipleChoiceResult": showMultipleChoiceResult_1.ShowMultipleChoiceResult,
    "ShowPromptDto": showPromptDto_1.ShowPromptDto,
    "ShowPromptResult": showPromptResult_1.ShowPromptResult,
    "ShowQrCodeDto": showQrCodeDto_1.ShowQrCodeDto,
    "ShowTicketAction": showTicketAction_1.ShowTicketAction,
    "ShowUrlAction": showUrlAction_1.ShowUrlAction,
    "Template": template_1.Template,
    "Template1": template1_1.Template1,
    "TemplateButton": templateButton_1.TemplateButton,
    "TicketActive": ticketActive_1.TicketActive,
    "TicketConfigurationResponse": ticketConfigurationResponse_1.TicketConfigurationResponse,
    "TicketDefinition": ticketDefinition_1.TicketDefinition,
    "UpdateTicketDto": updateTicketDto_1.UpdateTicketDto,
    "VerifyCredentialsResult": verifyCredentialsResult_1.VerifyCredentialsResult,
    "VerifyCredentialsUserIdResult": verifyCredentialsUserIdResult_1.VerifyCredentialsUserIdResult,
    "VerifyDto": verifyDto_1.VerifyDto,
    "VerifyUserIdDto": verifyUserIdDto_1.VerifyUserIdDto,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map