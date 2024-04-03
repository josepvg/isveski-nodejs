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

import type { DetailTemplate } from './DetailTemplate';
import {
    instanceOfDetailTemplate,
    DetailTemplateFromJSON,
    DetailTemplateFromJSONTyped,
    DetailTemplateToJSON,
} from './DetailTemplate';
import type { DetailTemplate1 } from './DetailTemplate1';
import {
    instanceOfDetailTemplate1,
    DetailTemplate1FromJSON,
    DetailTemplate1FromJSONTyped,
    DetailTemplate1ToJSON,
} from './DetailTemplate1';
import type { WebPageDetailTemplate } from './WebPageDetailTemplate';
import {
    instanceOfWebPageDetailTemplate,
    WebPageDetailTemplateFromJSON,
    WebPageDetailTemplateFromJSONTyped,
    WebPageDetailTemplateToJSON,
} from './WebPageDetailTemplate';

/**
 * @type CreateTicketRequestDetailTemplate
 * 
 * @export
 */
export type CreateTicketRequestDetailTemplate = { detailType: 'DT1' } & DetailTemplate1 | { detailType: 'WebPageDetailTemplate' } & WebPageDetailTemplate | { detailType: 'DetailTemplate' } & DetailTemplate | { detailType: 'DetailTemplate1' } & DetailTemplate1;

export function CreateTicketRequestDetailTemplateFromJSON(json: any): CreateTicketRequestDetailTemplate {
    return CreateTicketRequestDetailTemplateFromJSONTyped(json, false);
}

export function CreateTicketRequestDetailTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTicketRequestDetailTemplate {
    if (json == null) {
        return json;
    }
    switch (json['detailType']) {
        case 'DT1':
            return {...DetailTemplate1FromJSONTyped(json, true), detailType: 'DT1'};
        case 'WebPageDetailTemplate':
            return {...WebPageDetailTemplateFromJSONTyped(json, true), detailType: 'WebPageDetailTemplate'};
        case 'DetailTemplate':
            return {...DetailTemplateFromJSONTyped(json, true), detailType: 'DetailTemplate'};
        case 'DetailTemplate1':
            return {...DetailTemplate1FromJSONTyped(json, true), detailType: 'DetailTemplate1'};
        default:
            throw new Error(`No variant of CreateTicketRequestDetailTemplate exists with 'detailType=${json['detailType']}'`);
    }
}

export function CreateTicketRequestDetailTemplateToJSON(value?: CreateTicketRequestDetailTemplate | null): any {
    if (value == null) {
        return value;
    }
    switch (value['detailType']) {
        case 'DT1':
            return DetailTemplate1ToJSON(value);
        case 'WebPageDetailTemplate':
            return WebPageDetailTemplateToJSON(value);
        case 'DetailTemplate':
            return DetailTemplateToJSON(value);
        case 'DetailTemplate1':
            return DetailTemplate1ToJSON(value);
        default:
            throw new Error(`No variant of CreateTicketRequestDetailTemplate exists with 'detailType=${value['detailType']}'`);
    }

}

