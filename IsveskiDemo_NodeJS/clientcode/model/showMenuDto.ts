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

export class ShowMenuDto {
    'communicationId': string;
    'message': string;
    'options': Array<string>;
    'timeoutSek': number;
    'image'?: string | null;
    'title': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "communicationId",
            "baseName": "communicationId",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<string>"
        },
        {
            "name": "timeoutSek",
            "baseName": "timeoutSek",
            "type": "number"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShowMenuDto.attributeTypeMap;
    }
}

