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
exports.TemplateButton = void 0;
class TemplateButton {
    static getAttributeTypeMap() {
        return TemplateButton.attributeTypeMap;
    }
}
exports.TemplateButton = TemplateButton;
TemplateButton.discriminator = undefined;
TemplateButton.attributeTypeMap = [
    {
        "name": "text",
        "baseName": "text",
        "type": "string"
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "BaseAction"
    }
];
//# sourceMappingURL=templateButton.js.map