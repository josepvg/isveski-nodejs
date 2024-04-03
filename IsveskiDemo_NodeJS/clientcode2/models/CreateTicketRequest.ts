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
import type { CreateTicketRequestDetailTemplate } from './CreateTicketRequestDetailTemplate';
import {
    CreateTicketRequestDetailTemplateFromJSON,
    CreateTicketRequestDetailTemplateFromJSONTyped,
    CreateTicketRequestDetailTemplateToJSON,
} from './CreateTicketRequestDetailTemplate';
import type { CreateTicketRequestTemplate } from './CreateTicketRequestTemplate';
import {
    CreateTicketRequestTemplateFromJSON,
    CreateTicketRequestTemplateFromJSONTyped,
    CreateTicketRequestTemplateToJSON,
} from './CreateTicketRequestTemplate';

/**
 * 
 * @export
 * @interface CreateTicketRequest
 */
export interface CreateTicketRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    ticketDefinitionId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    data: string;
    /**
     * 
     * @type {CreateTicketRequestDetailTemplate}
     * @memberof CreateTicketRequest
     */
    detailTemplate: CreateTicketRequestDetailTemplate;
    /**
     * 
     * @type {CreateTicketRequestTemplate}
     * @memberof CreateTicketRequest
     */
    template: CreateTicketRequestTemplate;
    /**
     * 
     * @type {string}
     * @memberof CreateTicketRequest
     */
    note: string;
}

/**
 * Check if a given object implements the CreateTicketRequest interface.
 */
export function instanceOfCreateTicketRequest(value: object): boolean {
    if (!('userId' in value)) return false;
    if (!('name' in value)) return false;
    if (!('ticketDefinitionId' in value)) return false;
    if (!('data' in value)) return false;
    if (!('detailTemplate' in value)) return false;
    if (!('template' in value)) return false;
    if (!('note' in value)) return false;
    return true;
}

export function CreateTicketRequestFromJSON(json: any): CreateTicketRequest {
    return CreateTicketRequestFromJSONTyped(json, false);
}

export function CreateTicketRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTicketRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'name': json['name'],
        'ticketDefinitionId': json['ticketDefinitionId'],
        'data': json['data'],
        'detailTemplate': CreateTicketRequestDetailTemplateFromJSON(json['detailTemplate']),
        'template': CreateTicketRequestTemplateFromJSON(json['template']),
        'note': json['note'],
    };
}

export function CreateTicketRequestToJSON(value?: CreateTicketRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'userId': value['userId'],
        'name': value['name'],
        'ticketDefinitionId': value['ticketDefinitionId'],
        'data': value['data'],
        'detailTemplate': CreateTicketRequestDetailTemplateToJSON(value['detailTemplate']),
        'template': CreateTicketRequestTemplateToJSON(value['template']),
        'note': value['note'],
    };
}
