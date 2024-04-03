import localVarRequest from 'request';

export * from './actionType';
export * from './actionTypeEnum';
export * from './authenticationMethod';
export * from './baseAction';
export * from './bioAuthenticationRequest';
export * from './bioMetricAuthenticationResponse';
export * from './choice';
export * from './clientTicketAction';
export * from './clientWalletResponse';
export * from './clientWalletTicket';
export * from './clientWalletTicketDetailTemplate';
export * from './clientWalletTicketTemplate';
export * from './createTicketLogRequest';
export * from './createTicketLogRequestLogTemplate';
export * from './createTicketRequest';
export * from './createTicketRequestDetailTemplate';
export * from './createTicketRequestTemplate';
export * from './createTicketResponse';
export * from './deleteTicketRequest';
export * from './detailTemplate';
export * from './detailTemplate1';
export * from './detailTemplateTypeEnum';
export * from './deviceException';
export * from './errorModel';
export * from './iceCodeErrors';
export * from './listenToBeaconsRequest';
export * from './listenToBeaconsResponse';
export * from './logTemplate';
export * from './logTemplate1';
export * from './logTemplateTypeEnum';
export * from './refreshTicketAction';
export * from './refreshTicketListAction';
export * from './returnChoice';
export * from './searchUserResponse';
export * from './sendToTicketRequest';
export * from './sendToTicketRequestActionsInner';
export * from './sensor';
export * from './sensorAction';
export * from './sensorType';
export * from './sensorsConfigurationResponse';
export * from './showMenuRequest';
export * from './showMenuResponse';
export * from './showMessageRequest';
export * from './showMultipleChoiceRequest';
export * from './showMultipleChoiceResponse';
export * from './showPromptRequest';
export * from './showPromptResponse';
export * from './showQrCodeRequest';
export * from './showTicketAction';
export * from './showUrlAction';
export * from './showWebPageRequest';
export * from './showWebPageResponse';
export * from './statusDetail';
export * from './template';
export * from './template1';
export * from './templateButton';
export * from './templateTypeEnum';
export * from './ticketAccess';
export * from './ticketActive';
export * from './ticketConfigurationResponse';
export * from './ticketDefinition';
export * from './updateTicketRequest';
export * from './verifyCredentialsResult';
export * from './verifyCredentialsUserIdResult';
export * from './verifyDto';
export * from './verifyUserIdDto';
export * from './webPageDetailTemplate';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ActionType } from './actionType';
import { ActionTypeEnum } from './actionTypeEnum';
import { AuthenticationMethod } from './authenticationMethod';
import { BaseAction } from './baseAction';
import { BioAuthenticationRequest } from './bioAuthenticationRequest';
import { BioMetricAuthenticationResponse } from './bioMetricAuthenticationResponse';
import { Choice } from './choice';
import { ClientTicketAction } from './clientTicketAction';
import { ClientWalletResponse } from './clientWalletResponse';
import { ClientWalletTicket } from './clientWalletTicket';
import { ClientWalletTicketDetailTemplate } from './clientWalletTicketDetailTemplate';
import { ClientWalletTicketTemplate } from './clientWalletTicketTemplate';
import { CreateTicketLogRequest } from './createTicketLogRequest';
import { CreateTicketLogRequestLogTemplate } from './createTicketLogRequestLogTemplate';
import { CreateTicketRequest } from './createTicketRequest';
import { CreateTicketRequestDetailTemplate } from './createTicketRequestDetailTemplate';
import { CreateTicketRequestTemplate } from './createTicketRequestTemplate';
import { CreateTicketResponse } from './createTicketResponse';
import { DeleteTicketRequest } from './deleteTicketRequest';
import { DetailTemplate } from './detailTemplate';
import { DetailTemplate1 } from './detailTemplate1';
import { DetailTemplateTypeEnum } from './detailTemplateTypeEnum';
import { DeviceException } from './deviceException';
import { ErrorModel } from './errorModel';
import { IceCodeErrors } from './iceCodeErrors';
import { ListenToBeaconsRequest } from './listenToBeaconsRequest';
import { ListenToBeaconsResponse } from './listenToBeaconsResponse';
import { LogTemplate } from './logTemplate';
import { LogTemplate1 } from './logTemplate1';
import { LogTemplateTypeEnum } from './logTemplateTypeEnum';
import { RefreshTicketAction } from './refreshTicketAction';
import { RefreshTicketListAction } from './refreshTicketListAction';
import { ReturnChoice } from './returnChoice';
import { SearchUserResponse } from './searchUserResponse';
import { SendToTicketRequest } from './sendToTicketRequest';
import { SendToTicketRequestActionsInner } from './sendToTicketRequestActionsInner';
import { Sensor } from './sensor';
import { SensorAction } from './sensorAction';
import { SensorType } from './sensorType';
import { SensorsConfigurationResponse } from './sensorsConfigurationResponse';
import { ShowMenuRequest } from './showMenuRequest';
import { ShowMenuResponse } from './showMenuResponse';
import { ShowMessageRequest } from './showMessageRequest';
import { ShowMultipleChoiceRequest } from './showMultipleChoiceRequest';
import { ShowMultipleChoiceResponse } from './showMultipleChoiceResponse';
import { ShowPromptRequest } from './showPromptRequest';
import { ShowPromptResponse } from './showPromptResponse';
import { ShowQrCodeRequest } from './showQrCodeRequest';
import { ShowTicketAction } from './showTicketAction';
import { ShowUrlAction } from './showUrlAction';
import { ShowWebPageRequest } from './showWebPageRequest';
import { ShowWebPageResponse } from './showWebPageResponse';
import { StatusDetail } from './statusDetail';
import { Template } from './template';
import { Template1 } from './template1';
import { TemplateButton } from './templateButton';
import { TemplateTypeEnum } from './templateTypeEnum';
import { TicketAccess } from './ticketAccess';
import { TicketActive } from './ticketActive';
import { TicketConfigurationResponse } from './ticketConfigurationResponse';
import { TicketDefinition } from './ticketDefinition';
import { UpdateTicketRequest } from './updateTicketRequest';
import { VerifyCredentialsResult } from './verifyCredentialsResult';
import { VerifyCredentialsUserIdResult } from './verifyCredentialsUserIdResult';
import { VerifyDto } from './verifyDto';
import { VerifyUserIdDto } from './verifyUserIdDto';
import { WebPageDetailTemplate } from './webPageDetailTemplate';

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

let enumsMap: {[index: string]: any} = {
        "ActionType": ActionType,
        "ActionTypeEnum": ActionTypeEnum,
        "AuthenticationMethod": AuthenticationMethod,
        "DetailTemplateTypeEnum": DetailTemplateTypeEnum,
        "IceCodeErrors": IceCodeErrors,
        "LogTemplateTypeEnum": LogTemplateTypeEnum,
        "SensorType": SensorType,
        "StatusDetail": StatusDetail,
        "TemplateTypeEnum": TemplateTypeEnum,
        "TicketAccess": TicketAccess,
}

let typeMap: {[index: string]: any} = {
    "BaseAction": BaseAction,
    "BioAuthenticationRequest": BioAuthenticationRequest,
    "BioMetricAuthenticationResponse": BioMetricAuthenticationResponse,
    "Choice": Choice,
    "ClientTicketAction": ClientTicketAction,
    "ClientWalletResponse": ClientWalletResponse,
    "ClientWalletTicket": ClientWalletTicket,
    "ClientWalletTicketDetailTemplate": ClientWalletTicketDetailTemplate,
    "ClientWalletTicketTemplate": ClientWalletTicketTemplate,
    "CreateTicketLogRequest": CreateTicketLogRequest,
    "CreateTicketLogRequestLogTemplate": CreateTicketLogRequestLogTemplate,
    "CreateTicketRequest": CreateTicketRequest,
    "CreateTicketRequestDetailTemplate": CreateTicketRequestDetailTemplate,
    "CreateTicketRequestTemplate": CreateTicketRequestTemplate,
    "CreateTicketResponse": CreateTicketResponse,
    "DeleteTicketRequest": DeleteTicketRequest,
    "DetailTemplate": DetailTemplate,
    "DetailTemplate1": DetailTemplate1,
    "DeviceException": DeviceException,
    "ErrorModel": ErrorModel,
    "ListenToBeaconsRequest": ListenToBeaconsRequest,
    "ListenToBeaconsResponse": ListenToBeaconsResponse,
    "LogTemplate": LogTemplate,
    "LogTemplate1": LogTemplate1,
    "RefreshTicketAction": RefreshTicketAction,
    "RefreshTicketListAction": RefreshTicketListAction,
    "ReturnChoice": ReturnChoice,
    "SearchUserResponse": SearchUserResponse,
    "SendToTicketRequest": SendToTicketRequest,
    "SendToTicketRequestActionsInner": SendToTicketRequestActionsInner,
    "Sensor": Sensor,
    "SensorAction": SensorAction,
    "SensorsConfigurationResponse": SensorsConfigurationResponse,
    "ShowMenuRequest": ShowMenuRequest,
    "ShowMenuResponse": ShowMenuResponse,
    "ShowMessageRequest": ShowMessageRequest,
    "ShowMultipleChoiceRequest": ShowMultipleChoiceRequest,
    "ShowMultipleChoiceResponse": ShowMultipleChoiceResponse,
    "ShowPromptRequest": ShowPromptRequest,
    "ShowPromptResponse": ShowPromptResponse,
    "ShowQrCodeRequest": ShowQrCodeRequest,
    "ShowTicketAction": ShowTicketAction,
    "ShowUrlAction": ShowUrlAction,
    "ShowWebPageRequest": ShowWebPageRequest,
    "ShowWebPageResponse": ShowWebPageResponse,
    "Template": Template,
    "Template1": Template1,
    "TemplateButton": TemplateButton,
    "TicketActive": TicketActive,
    "TicketConfigurationResponse": TicketConfigurationResponse,
    "TicketDefinition": TicketDefinition,
    "UpdateTicketRequest": UpdateTicketRequest,
    "VerifyCredentialsResult": VerifyCredentialsResult,
    "VerifyCredentialsUserIdResult": VerifyCredentialsUserIdResult,
    "VerifyDto": VerifyDto,
    "VerifyUserIdDto": VerifyUserIdDto,
    "WebPageDetailTemplate": WebPageDetailTemplate,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
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
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
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
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
