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
exports.VerifyCredentialsResult = void 0;
class VerifyCredentialsResult {
    static getAttributeTypeMap() {
        return VerifyCredentialsResult.attributeTypeMap;
    }
}
exports.VerifyCredentialsResult = VerifyCredentialsResult;
VerifyCredentialsResult.discriminator = undefined;
VerifyCredentialsResult.attributeTypeMap = [
    {
        "name": "clientUri",
        "baseName": "clientUri",
        "type": "string"
    },
    {
        "name": "clientName",
        "baseName": "clientName",
        "type": "string"
    }
];
//# sourceMappingURL=verifyCredentialsResult.js.map