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
exports.CreateTicketLogDto = void 0;
class CreateTicketLogDto {
    static getAttributeTypeMap() {
        return CreateTicketLogDto.attributeTypeMap;
    }
}
exports.CreateTicketLogDto = CreateTicketLogDto;
CreateTicketLogDto.discriminator = undefined;
CreateTicketLogDto.attributeTypeMap = [
    {
        "name": "ticketId",
        "baseName": "ticketId",
        "type": "string"
    },
    {
        "name": "logTemplate",
        "baseName": "logTemplate",
        "type": "LogTemplate"
    }
];
//# sourceMappingURL=createTicketLogDto.js.map