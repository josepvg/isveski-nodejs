"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushSensorDto = void 0;
class PushSensorDto {
    static getAttributeTypeMap() {
        return PushSensorDto.attributeTypeMap;
    }
}
exports.PushSensorDto = PushSensorDto;
PushSensorDto.discriminator = undefined;
PushSensorDto.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "ticketIds",
        "baseName": "ticketIds",
        "type": "Array<string>"
    },
    {
        "name": "lifeTimeInSeconds",
        "baseName": "lifeTimeInSeconds",
        "type": "number"
    },
    {
        "name": "deviceUserEmail",
        "baseName": "deviceUserEmail",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=pushSensorDto.js.map