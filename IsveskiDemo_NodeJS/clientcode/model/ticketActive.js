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
exports.TicketActive = void 0;
class TicketActive {
    static getAttributeTypeMap() {
        return TicketActive.attributeTypeMap;
    }
}
exports.TicketActive = TicketActive;
TicketActive.discriminator = undefined;
TicketActive.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "ticketName",
        "baseName": "ticketName",
        "type": "string"
    }
];
//# sourceMappingURL=ticketActive.js.map