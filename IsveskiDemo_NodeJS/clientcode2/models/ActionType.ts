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


/**
 * 
 * @export
 */
export const ActionType = {
    Created: 'Created',
    Updated: 'Updated',
    Deleted: 'Deleted'
} as const;
export type ActionType = typeof ActionType[keyof typeof ActionType];


export function ActionTypeFromJSON(json: any): ActionType {
    return ActionTypeFromJSONTyped(json, false);
}

export function ActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionType {
    return json as ActionType;
}

export function ActionTypeToJSON(value?: ActionType | null): any {
    return value as any;
}

