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
 * @interface ShowMessageRequest
 */
export interface ShowMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof ShowMessageRequest
     */
    communicationId: string;
    /**
     * 
     * @type {string}
     * @memberof ShowMessageRequest
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof ShowMessageRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ShowMessageRequest
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof ShowMessageRequest
     */
    timeoutSek: number;
    /**
     * 
     * @type {string}
     * @memberof ShowMessageRequest
     */
    close: string;
}

/**
 * Check if a given object implements the ShowMessageRequest interface.
 */
export function instanceOfShowMessageRequest(value: object): boolean {
    if (!('communicationId' in value)) return false;
    if (!('title' in value)) return false;
    if (!('message' in value)) return false;
    if (!('timeoutSek' in value)) return false;
    if (!('close' in value)) return false;
    return true;
}

export function ShowMessageRequestFromJSON(json: any): ShowMessageRequest {
    return ShowMessageRequestFromJSONTyped(json, false);
}

export function ShowMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShowMessageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'communicationId': json['communicationId'],
        'image': json['image'] == null ? undefined : json['image'],
        'title': json['title'],
        'message': json['message'],
        'timeoutSek': json['timeoutSek'],
        'close': json['close'],
    };
}

export function ShowMessageRequestToJSON(value?: ShowMessageRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'communicationId': value['communicationId'],
        'image': value['image'],
        'title': value['title'],
        'message': value['message'],
        'timeoutSek': value['timeoutSek'],
        'close': value['close'],
    };
}
