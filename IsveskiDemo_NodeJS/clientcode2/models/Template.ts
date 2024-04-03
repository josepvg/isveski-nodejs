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
import type { Template1 } from './Template1';
import {
    Template1FromJSON,
    Template1FromJSONTyped,
    Template1ToJSON,
} from './Template1';

/**
 * 
 * @export
 * @interface Template
 */
export interface Template {
    /**
     * 
     * @type {string}
     * @memberof Template
     */
    readonly templateType: string;
}

/**
 * Check if a given object implements the Template interface.
 */
export function instanceOfTemplate(value: object): boolean {
    if (!('templateType' in value)) return false;
    return true;
}

export function TemplateFromJSON(json: any): Template {
    return TemplateFromJSONTyped(json, false);
}

export function TemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Template {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['templateType'] === 'T1') {
            return Template1FromJSONTyped(json, true);
        }
    }
    return {
        
        'templateType': json['templateType'],
    };
}

export function TemplateToJSON(value?: Template | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}
