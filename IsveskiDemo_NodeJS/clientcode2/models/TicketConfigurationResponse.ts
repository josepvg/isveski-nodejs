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
import type { TicketDefinition } from './TicketDefinition';
import {
    TicketDefinitionFromJSON,
    TicketDefinitionFromJSONTyped,
    TicketDefinitionToJSON,
} from './TicketDefinition';

/**
 * 
 * @export
 * @interface TicketConfigurationResponse
 */
export interface TicketConfigurationResponse {
    /**
     * 
     * @type {Array<TicketDefinition>}
     * @memberof TicketConfigurationResponse
     */
    ticketDefinitions?: Array<TicketDefinition>;
}

/**
 * Check if a given object implements the TicketConfigurationResponse interface.
 */
export function instanceOfTicketConfigurationResponse(value: object): boolean {
    return true;
}

export function TicketConfigurationResponseFromJSON(json: any): TicketConfigurationResponse {
    return TicketConfigurationResponseFromJSONTyped(json, false);
}

export function TicketConfigurationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketConfigurationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ticketDefinitions': json['ticketDefinitions'] == null ? undefined : ((json['ticketDefinitions'] as Array<any>).map(TicketDefinitionFromJSON)),
    };
}

export function TicketConfigurationResponseToJSON(value?: TicketConfigurationResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ticketDefinitions': value['ticketDefinitions'] == null ? undefined : ((value['ticketDefinitions'] as Array<any>).map(TicketDefinitionToJSON)),
    };
}

