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
exports.VerifyUserIdDto = void 0;
class VerifyUserIdDto {
    static getAttributeTypeMap() {
        return VerifyUserIdDto.attributeTypeMap;
    }
}
exports.VerifyUserIdDto = VerifyUserIdDto;
VerifyUserIdDto.discriminator = undefined;
VerifyUserIdDto.attributeTypeMap = [
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    },
    {
        "name": "apiKey",
        "baseName": "apiKey",
        "type": "string"
    },
    {
        "name": "destApiKey",
        "baseName": "destApiKey",
        "type": "string"
    }
];
//# sourceMappingURL=verifyUserIdDto.js.map