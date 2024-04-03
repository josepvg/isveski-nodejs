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
import type { SendToTicketRequestActionsInner } from './SendToTicketRequestActionsInner';
import {
    SendToTicketRequestActionsInnerFromJSON,
    SendToTicketRequestActionsInnerFromJSONTyped,
    SendToTicketRequestActionsInnerToJSON,
} from './SendToTicketRequestActionsInner';

/**
 * 
 * @export
 * @interface TemplateButton
 */
export interface TemplateButton {
    /**
     * 
     * @type {string}
     * @memberof TemplateButton
     */
    text: string;
    /**
     * 
     * @type {SendToTicketRequestActionsInner}
     * @memberof TemplateButton
     */
    action: SendToTicketRequestActionsInner;
}

/**
 * Check if a given object implements the TemplateButton interface.
 */
export function instanceOfTemplateButton(value: object): boolean {
    if (!('text' in value)) return false;
    if (!('action' in value)) return false;
    return true;
}

export function TemplateButtonFromJSON(json: any): TemplateButton {
    return TemplateButtonFromJSONTyped(json, false);
}

export function TemplateButtonFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateButton {
    if (json == null) {
        return json;
    }
    return {
        
        'text': json['text'],
        'action': SendToTicketRequestActionsInnerFromJSON(json['action']),
    };
}

export function TemplateButtonToJSON(value?: TemplateButton | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'text': value['text'],
        'action': SendToTicketRequestActionsInnerToJSON(value['action']),
    };
}

