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
import { Sensor } from './sensor';

export class SensorsConfigurationResponse {
    'sensors': Array<Sensor>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sensors",
            "baseName": "sensors",
            "type": "Array<Sensor>"
        }    ];

    static getAttributeTypeMap() {
        return SensorsConfigurationResponse.attributeTypeMap;
    }
}

