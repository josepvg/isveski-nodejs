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
import { StatusDetail } from './statusDetail';

export class ShowPromptResponse {
    'statusDetail'?: StatusDetail;
    'result': boolean;
    'extra'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statusDetail",
            "baseName": "statusDetail",
            "type": "StatusDetail"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "boolean"
        },
        {
            "name": "extra",
            "baseName": "extra",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShowPromptResponse.attributeTypeMap;
    }
}

export namespace ShowPromptResponse {
}