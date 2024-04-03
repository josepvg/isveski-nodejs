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
 * @interface TicketDefinition
 */
export interface TicketDefinition {
    /**
     * 
     * @type {string}
     * @memberof TicketDefinition
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TicketDefinition
     */
    name?: string;
}

/**
 * Check if a given object implements the TicketDefinition interface.
 */
export function instanceOfTicketDefinition(value: object): boolean {
    return true;
}

export function TicketDefinitionFromJSON(json: any): TicketDefinition {
    return TicketDefinitionFromJSONTyped(json, false);
}

export function TicketDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function TicketDefinitionToJSON(value?: TicketDefinition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

