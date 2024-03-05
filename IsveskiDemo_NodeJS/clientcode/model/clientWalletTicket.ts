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
import { DetailTemplate } from './detailTemplate';
import { Template } from './template';
import { TicketAccess } from './ticketAccess';

export class ClientWalletTicket {
    'id'?: string;
    'ticketDefinitionId'?: string;
    'name'?: string | null;
    'data'?: string | null;
    'template'?: Template;
    'detailTemplate'?: DetailTemplate;
    'pushNotifications'?: TicketAccess;
    'beacons'?: TicketAccess;
    'locations'?: TicketAccess;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ticketDefinitionId",
            "baseName": "ticketDefinitionId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "Template"
        },
        {
            "name": "detailTemplate",
            "baseName": "detailTemplate",
            "type": "DetailTemplate"
        },
        {
            "name": "pushNotifications",
            "baseName": "pushNotifications",
            "type": "TicketAccess"
        },
        {
            "name": "beacons",
            "baseName": "beacons",
            "type": "TicketAccess"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "TicketAccess"
        }    ];

    static getAttributeTypeMap() {
        return ClientWalletTicket.attributeTypeMap;
    }
}

export namespace ClientWalletTicket {
}