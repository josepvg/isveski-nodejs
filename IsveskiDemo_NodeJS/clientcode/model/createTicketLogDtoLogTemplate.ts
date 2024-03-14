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
import { LogTemplate } from './logTemplate';
import { LogTemplate1 } from './logTemplate1';
import { LogTemplateTypeEnum } from './logTemplateTypeEnum';

export class CreateTicketLogDtoLogTemplate {
    'title'?: string | null;
    'description'?: string | null;
    'time': Date;
    'templateType': LogTemplateTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date"
        },
        {
            "name": "templateType",
            "baseName": "templateType",
            "type": "LogTemplateTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateTicketLogDtoLogTemplate.attributeTypeMap;
    }
}

export namespace CreateTicketLogDtoLogTemplate {
}