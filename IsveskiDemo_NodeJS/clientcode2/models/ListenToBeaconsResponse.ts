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
/**
 * 
 * @export
 * @interface ListenToBeaconsResponse
 */
export interface ListenToBeaconsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ListenToBeaconsResponse
     */
    succeeded: boolean;
}

/**
 * Check if a given object implements the ListenToBeaconsResponse interface.
 */
export function instanceOfListenToBeaconsResponse(value: object): boolean {
    if (!('succeeded' in value)) return false;
    return true;
}

export function ListenToBeaconsResponseFromJSON(json: any): ListenToBeaconsResponse {
    return ListenToBeaconsResponseFromJSONTyped(json, false);
}

export function ListenToBeaconsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListenToBeaconsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'succeeded': json['succeeded'],
    };
}

export function ListenToBeaconsResponseToJSON(value?: ListenToBeaconsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'succeeded': value['succeeded'],
    };
}

