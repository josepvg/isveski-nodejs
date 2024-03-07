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
exports.ShowMessageDto = void 0;
class ShowMessageDto {
    static getAttributeTypeMap() {
        return ShowMessageDto.attributeTypeMap;
    }
}
exports.ShowMessageDto = ShowMessageDto;
ShowMessageDto.discriminator = undefined;
ShowMessageDto.attributeTypeMap = [
    {
        "name": "communicationId",
        "baseName": "communicationId",
        "type": "string"
    },
    {
        "name": "image",
        "baseName": "image",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "timeoutSek",
        "baseName": "timeoutSek",
        "type": "number"
    },
    {
        "name": "close",
        "baseName": "close",
        "type": "string"
    }
];
//# sourceMappingURL=showMessageDto.js.map