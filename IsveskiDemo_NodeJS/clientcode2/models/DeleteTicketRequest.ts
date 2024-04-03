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
/**
 * 
 * @export
 * @interface DeleteTicketRequest
 */
export interface DeleteTicketRequest {
    /**
     * 
     * @type {string}
     * @memberof DeleteTicketRequest
     */
    ticketId: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteTicketRequest
     */
    note: string;
}

/**
 * Check if a given object implements the DeleteTicketRequest interface.
 */
export function instanceOfDeleteTicketRequest(value: object): boolean {
    if (!('ticketId' in value)) return false;
    if (!('note' in value)) return false;
    return true;
}

export function DeleteTicketRequestFromJSON(json: any): DeleteTicketRequest {
    return DeleteTicketRequestFromJSONTyped(json, false);
}

export function DeleteTicketRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteTicketRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ticketId': json['ticketId'],
        'note': json['note'],
    };
}

export function DeleteTicketRequestToJSON(value?: DeleteTicketRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ticketId': value['ticketId'],
        'note': value['note'],
    };
}
