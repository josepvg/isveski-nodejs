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
import { DetailTemplateTypeEnum } from './detailTemplateTypeEnum';

export class DetailTemplate {
    'detailType': DetailTemplateTypeEnum;

    static discriminator: string | undefined = "detailType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "detailType",
            "baseName": "detailType",
            "type": "DetailTemplateTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DetailTemplate.attributeTypeMap;
    }
}

export namespace DetailTemplate {
}
