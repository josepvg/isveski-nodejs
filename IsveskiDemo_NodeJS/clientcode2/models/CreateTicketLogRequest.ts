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

import { mapValues } from '../runtime';
import type { CreateTicketLogRequestLogTemplate } from './CreateTicketLogRequestLogTemplate';
import {
    CreateTicketLogRequestLogTemplateFromJSON,
    CreateTicketLogRequestLogTemplateFromJSONTyped,
    CreateTicketLogRequestLogTemplateToJSON,
} from './CreateTicketLogRequestLogTemplate';

/**
 * 
 * @export
 * @interface CreateTicketLogRequest
 */
export interface CreateTicketLogRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTicketLogRequest
     */
    ticketId: string;
    /**
     * 
     * @type {CreateTicketLogRequestLogTemplate}
     * @memberof CreateTicketLogRequest
     */
    logTemplate: CreateTicketLogRequestLogTemplate;
}

/**
 * Check if a given object implements the CreateTicketLogRequest interface.
 */
export function instanceOfCreateTicketLogRequest(value: object): boolean {
    if (!('ticketId' in value)) return false;
    if (!('logTemplate' in value)) return false;
    return true;
}

export function CreateTicketLogRequestFromJSON(json: any): CreateTicketLogRequest {
    return CreateTicketLogRequestFromJSONTyped(json, false);
}

export function CreateTicketLogRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTicketLogRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ticketId': json['ticketId'],
        'logTemplate': CreateTicketLogRequestLogTemplateFromJSON(json['logTemplate']),
    };
}

export function CreateTicketLogRequestToJSON(value?: CreateTicketLogRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ticketId': value['ticketId'],
        'logTemplate': CreateTicketLogRequestLogTemplateToJSON(value['logTemplate']),
    };
}
