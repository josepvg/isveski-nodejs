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

import { RequestFile } from './models';
import { CreateTicketRequestDetailTemplate } from './createTicketRequestDetailTemplate';
import { CreateTicketRequestTemplate } from './createTicketRequestTemplate';

export class CreateTicketRequest {
    'userId': string;
    'name': string;
    'ticketDefinitionId': string;
    'data': string;
    'detailTemplate': CreateTicketRequestDetailTemplate;
    'template': CreateTicketRequestTemplate;
    'note': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ticketDefinitionId",
            "baseName": "ticketDefinitionId",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "detailTemplate",
            "baseName": "detailTemplate",
            "type": "CreateTicketRequestDetailTemplate"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "CreateTicketRequestTemplate"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateTicketRequest.attributeTypeMap;
    }
}
