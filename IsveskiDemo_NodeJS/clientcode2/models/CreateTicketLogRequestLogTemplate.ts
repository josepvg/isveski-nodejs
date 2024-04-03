/* tslint:disable */
/* eslint-disable */
/**
 * Isveski Client
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { LogTemplate1 } from './LogTemplate1';
import {
    instanceOfLogTemplate1,
    LogTemplate1FromJSON,
    LogTemplate1FromJSONTyped,
    LogTemplate1ToJSON,
} from './LogTemplate1';

/**
 * @type CreateTicketLogRequestLogTemplate
 * 
 * @export
 */
export type CreateTicketLogRequestLogTemplate = { templateType: 'T1' } & LogTemplate1 | { templateType: 'LogTemplate1' } & LogTemplate1;

export function CreateTicketLogRequestLogTemplateFromJSON(json: any): CreateTicketLogRequestLogTemplate {
    return CreateTicketLogRequestLogTemplateFromJSONTyped(json, false);
}

export function CreateTicketLogRequestLogTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTicketLogRequestLogTemplate {
    if (json == null) {
        return json;
    }
    switch (json['templateType']) {
        case 'T1':
            return {...LogTemplate1FromJSONTyped(json, true), templateType: 'T1'};
        case 'LogTemplate1':
            return {...LogTemplate1FromJSONTyped(json, true), templateType: 'LogTemplate1'};
        default:
            throw new Error(`No variant of CreateTicketLogRequestLogTemplate exists with 'templateType=${json['templateType']}'`);
    }
}

export function CreateTicketLogRequestLogTemplateToJSON(value?: CreateTicketLogRequestLogTemplate | null): any {
    if (value == null) {
        return value;
    }
    switch (value['templateType']) {
        case 'T1':
            return LogTemplate1ToJSON(value);
        case 'LogTemplate1':
            return LogTemplate1ToJSON(value);
        default:
            throw new Error(`No variant of CreateTicketLogRequestLogTemplate exists with 'templateType=${value['templateType']}'`);
    }

}
