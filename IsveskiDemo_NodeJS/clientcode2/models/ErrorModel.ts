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
import type { IceCodeErrors } from './IceCodeErrors';
import {
    IceCodeErrorsFromJSON,
    IceCodeErrorsFromJSONTyped,
    IceCodeErrorsToJSON,
} from './IceCodeErrors';

/**
 * 
 * @export
 * @interface ErrorModel
 */
export interface ErrorModel {
    /**
     * 
     * @type {IceCodeErrors}
     * @memberof ErrorModel
     */
    errorCode?: IceCodeErrors;
    /**
     * 
     * @type {string}
     * @memberof ErrorModel
     */
    error?: string;
}

/**
 * Check if a given object implements the ErrorModel interface.
 */
export function instanceOfErrorModel(value: object): boolean {
    return true;
}

export function ErrorModelFromJSON(json: any): ErrorModel {
    return ErrorModelFromJSONTyped(json, false);
}

export function ErrorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorModel {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'] == null ? undefined : IceCodeErrorsFromJSON(json['errorCode']),
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function ErrorModelToJSON(value?: ErrorModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorCode': IceCodeErrorsToJSON(value['errorCode']),
        'error': value['error'],
    };
}
