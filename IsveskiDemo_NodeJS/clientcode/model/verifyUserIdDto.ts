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

export class VerifyUserIdDto {
    'userId': string;
    'apiKey': string;
    'destApiKey': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string"
        },
        {
            "name": "destApiKey",
            "baseName": "destApiKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VerifyUserIdDto.attributeTypeMap;
    }
}

