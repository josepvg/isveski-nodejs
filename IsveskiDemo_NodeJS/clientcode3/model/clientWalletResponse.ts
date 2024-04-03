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
import { ClientWalletTicket } from './clientWalletTicket';

export class ClientWalletResponse {
    'id'?: string;
    'userName': string;
    'name'?: string | null;
    'phoneNumber'?: string | null;
    'tickets': Array<ClientWalletTicket>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "tickets",
            "baseName": "tickets",
            "type": "Array<ClientWalletTicket>"
        }    ];

    static getAttributeTypeMap() {
        return ClientWalletResponse.attributeTypeMap;
    }
}
