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
exports.SendToTicketDto = void 0;
class SendToTicketDto {
    static getAttributeTypeMap() {
        return SendToTicketDto.attributeTypeMap;
    }
}
exports.SendToTicketDto = SendToTicketDto;
SendToTicketDto.discriminator = undefined;
SendToTicketDto.attributeTypeMap = [
    {
        "name": "ticketId",
        "baseName": "ticketId",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "actions",
        "baseName": "actions",
        "type": "Array<BaseAction>"
    },
    {
        "name": "image",
        "baseName": "image",
        "type": "string"
    },
    {
        "name": "priority",
        "baseName": "priority",
        "type": "number"
    }
];
//# sourceMappingURL=sendToTicketDto.js.map