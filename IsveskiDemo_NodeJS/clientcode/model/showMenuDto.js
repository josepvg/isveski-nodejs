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
exports.ShowMenuDto = void 0;
class ShowMenuDto {
    static getAttributeTypeMap() {
        return ShowMenuDto.attributeTypeMap;
    }
}
exports.ShowMenuDto = ShowMenuDto;
ShowMenuDto.discriminator = undefined;
ShowMenuDto.attributeTypeMap = [
    {
        "name": "communicationId",
        "baseName": "communicationId",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "Array<string>"
    },
    {
        "name": "timeoutSek",
        "baseName": "timeoutSek",
        "type": "number"
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
    }
];
//# sourceMappingURL=showMenuDto.js.map