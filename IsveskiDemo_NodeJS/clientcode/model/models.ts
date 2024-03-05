import localVarRequest from 'request';

export * from './actionType';
export * from './actionTypesEnum';
export * from './authenticationMethod';
export * from './baseAction';
export * from './bioAuthenticationDto';
export * from './bioMetricAuthenticationResult';
export * from './choice';
export * from './clientTicketAction';
export * from './clientWallet';
export * from './clientWalletTicket';
export * from './createTicketDto';
export * from './createTicketLogDto';
export * from './deleteTicketDto';
export * from './detailTemplate';
export * from './detailTemplate1';
export * from './detailTemplateTypeEnum';
export * from './deviceException';
export * from './errorModel';
export * from './iceCodeErrors';
export * from './listenToBeaconsDto';
export * from './listenToBeaconsResultDto';
export * from './logTemplate';
export * from './logTemplate1';
export * from './logTemplateTypeEnum';
export * from './pushSensorDto';
export * from './refreshTicketAction';
export * from './refreshTicketListAction';
export * from './returnChoice';
export * from './sendToTicketDto';
export * from './sensor';
export * from './sensorAction';
export * from './sensorType';
export * from './sensorsConfigurationResponse';
export * from './showMenuDto';
export * from './showMenuResult';
export * from './showMessageDto';
export * from './showMultipleChoiceDto';
export * from './showMultipleChoiceResult';
export * from './showPromptDto';
export * from './showPromptResult';
export * from './showQrCodeDto';
export * from './showTicketAction';
export * from './showUrlAction';
export * from './statusDetail';
export * from './template';
export * from './template1';
export * from './templateButton';
export * from './templateTypeEnum';
export * from './ticketAccess';
export * from './ticketActive';
export * from './ticketConfigurationResponse';
export * from './ticketDefinition';
export * from './updateTicketDto';
export * from './verifyCredentialsResult';
export * from './verifyCredentialsUserIdResult';
export * from './verifyDto';
export * from './verifyUserIdDto';

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
import { ActionTypesEnum } from './actionTypesEnum';
import { AuthenticationMethod } from './authenticationMethod';
import { BaseAction } from './baseAction';
import { BioAuthenticationDto } from './bioAuthenticationDto';
import { BioMetricAuthenticationResult } from './bioMetricAuthenticationResult';
import { Choice } from './choice';
import { ClientTicketAction } from './clientTicketAction';
import { ClientWallet } from './clientWallet';
import { ClientWalletTicket } from './clientWalletTicket';
import { CreateTicketDto } from './createTicketDto';
import { CreateTicketLogDto } from './createTicketLogDto';
import { DeleteTicketDto } from './deleteTicketDto';
import { DetailTemplate } from './detailTemplate';
import { DetailTemplate1 } from './detailTemplate1';
import { DetailTemplateTypeEnum } from './detailTemplateTypeEnum';
import { DeviceException } from './deviceException';
import { ErrorModel } from './errorModel';
import { IceCodeErrors } from './iceCodeErrors';
import { ListenToBeaconsDto } from './listenToBeaconsDto';
import { ListenToBeaconsResultDto } from './listenToBeaconsResultDto';
import { LogTemplate } from './logTemplate';
import { LogTemplate1 } from './logTemplate1';
import { LogTemplateTypeEnum } from './logTemplateTypeEnum';
import { PushSensorDto } from './pushSensorDto';
import { RefreshTicketAction } from './refreshTicketAction';
import { RefreshTicketListAction } from './refreshTicketListAction';
import { ReturnChoice } from './returnChoice';
import { SendToTicketDto } from './sendToTicketDto';
import { Sensor } from './sensor';
import { SensorAction } from './sensorAction';
import { SensorType } from './sensorType';
import { SensorsConfigurationResponse } from './sensorsConfigurationResponse';
import { ShowMenuDto } from './showMenuDto';
import { ShowMenuResult } from './showMenuResult';
import { ShowMessageDto } from './showMessageDto';
import { ShowMultipleChoiceDto } from './showMultipleChoiceDto';
import { ShowMultipleChoiceResult } from './showMultipleChoiceResult';
import { ShowPromptDto } from './showPromptDto';
import { ShowPromptResult } from './showPromptResult';
import { ShowQrCodeDto } from './showQrCodeDto';
import { ShowTicketAction } from './showTicketAction';
import { ShowUrlAction } from './showUrlAction';
import { StatusDetail } from './statusDetail';
import { Template } from './template';
import { Template1 } from './template1';
import { TemplateButton } from './templateButton';
import { TemplateTypeEnum } from './templateTypeEnum';
import { TicketAccess } from './ticketAccess';
import { TicketActive } from './ticketActive';
import { TicketConfigurationResponse } from './ticketConfigurationResponse';
import { TicketDefinition } from './ticketDefinition';
import { UpdateTicketDto } from './updateTicketDto';
import { VerifyCredentialsResult } from './verifyCredentialsResult';
import { VerifyCredentialsUserIdResult } from './verifyCredentialsUserIdResult';
import { VerifyDto } from './verifyDto';
import { VerifyUserIdDto } from './verifyUserIdDto';

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
        "ActionTypesEnum": ActionTypesEnum,
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
    "BioAuthenticationDto": BioAuthenticationDto,
    "BioMetricAuthenticationResult": BioMetricAuthenticationResult,
    "Choice": Choice,
    "ClientTicketAction": ClientTicketAction,
    "ClientWallet": ClientWallet,
    "ClientWalletTicket": ClientWalletTicket,
    "CreateTicketDto": CreateTicketDto,
    "CreateTicketLogDto": CreateTicketLogDto,
    "DeleteTicketDto": DeleteTicketDto,
    "DetailTemplate": DetailTemplate,
    "DetailTemplate1": DetailTemplate1,
    "DeviceException": DeviceException,
    "ErrorModel": ErrorModel,
    "ListenToBeaconsDto": ListenToBeaconsDto,
    "ListenToBeaconsResultDto": ListenToBeaconsResultDto,
    "LogTemplate": LogTemplate,
    "LogTemplate1": LogTemplate1,
    "PushSensorDto": PushSensorDto,
    "RefreshTicketAction": RefreshTicketAction,
    "RefreshTicketListAction": RefreshTicketListAction,
    "ReturnChoice": ReturnChoice,
    "SendToTicketDto": SendToTicketDto,
    "Sensor": Sensor,
    "SensorAction": SensorAction,
    "SensorsConfigurationResponse": SensorsConfigurationResponse,
    "ShowMenuDto": ShowMenuDto,
    "ShowMenuResult": ShowMenuResult,
    "ShowMessageDto": ShowMessageDto,
    "ShowMultipleChoiceDto": ShowMultipleChoiceDto,
    "ShowMultipleChoiceResult": ShowMultipleChoiceResult,
    "ShowPromptDto": ShowPromptDto,
    "ShowPromptResult": ShowPromptResult,
    "ShowQrCodeDto": ShowQrCodeDto,
    "ShowTicketAction": ShowTicketAction,
    "ShowUrlAction": ShowUrlAction,
    "Template": Template,
    "Template1": Template1,
    "TemplateButton": TemplateButton,
    "TicketActive": TicketActive,
    "TicketConfigurationResponse": TicketConfigurationResponse,
    "TicketDefinition": TicketDefinition,
    "UpdateTicketDto": UpdateTicketDto,
    "VerifyCredentialsResult": VerifyCredentialsResult,
    "VerifyCredentialsUserIdResult": VerifyCredentialsUserIdResult,
    "VerifyDto": VerifyDto,
    "VerifyUserIdDto": VerifyUserIdDto,
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
