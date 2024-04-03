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
import { DetailTemplateTypeEnum } from './detailTemplateTypeEnum';
import { TemplateButton } from './templateButton';

export class DetailTemplate1 extends DetailTemplate {
    'image'?: string | null;
    'title'?: string | null;
    'description'?: string | null;
    'time'?: Date | null;
    'expiry'?: Date | null;
    'buttons'?: Array<TemplateButton> | null;
    'detailType': DetailTemplateTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
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
            "name": "expiry",
            "baseName": "expiry",
            "type": "Date"
        },
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<TemplateButton>"
        },
        {
            "name": "detailType",
            "baseName": "detailType",
            "type": "DetailTemplateTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DetailTemplate1.attributeTypeMap);
    }
}

export namespace DetailTemplate1 {
}
