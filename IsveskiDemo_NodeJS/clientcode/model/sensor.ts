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
import { SensorType } from './sensorType';
import { TicketActive } from './ticketActive';

export class Sensor {
    'id'?: string;
    'name'?: string | null;
    'sensorType'?: SensorType;
    'description'?: string | null;
    'enabled'?: boolean;
    'ticketsActive'?: Array<TicketActive> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sensorType",
            "baseName": "sensorType",
            "type": "SensorType"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "ticketsActive",
            "baseName": "ticketsActive",
            "type": "Array<TicketActive>"
        }    ];

    static getAttributeTypeMap() {
        return Sensor.attributeTypeMap;
    }
}

export namespace Sensor {
}
