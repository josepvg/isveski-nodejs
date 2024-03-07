"use strict";
/**
 * Isveski Client Server
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
exports.BeaconParameter = void 0;
class BeaconParameter {
    static getAttributeTypeMap() {
        return BeaconParameter.attributeTypeMap;
    }
}
exports.BeaconParameter = BeaconParameter;
BeaconParameter.discriminator = undefined;
BeaconParameter.attributeTypeMap = [
    {
        "name": "beaconId",
        "baseName": "beaconId",
        "type": "string"
    },
    {
        "name": "parameter",
        "baseName": "parameter",
        "type": "string"
    },
    {
        "name": "ticketId",
        "baseName": "ticketId",
        "type": "string"
    },
    {
        "name": "discovered",
        "baseName": "discovered",
        "type": "boolean"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "Date"
    }
];
//# sourceMappingURL=beaconParameter.js.map