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
exports.ShowTicketAction = void 0;
const baseAction_1 = require("./baseAction");
class ShowTicketAction extends baseAction_1.BaseAction {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShowTicketAction.attributeTypeMap);
    }
}
exports.ShowTicketAction = ShowTicketAction;
ShowTicketAction.discriminator = undefined;
ShowTicketAction.attributeTypeMap = [
    {
        "name": "ticketId",
        "baseName": "ticketId",
        "type": "string"
    }
];
//# sourceMappingURL=showTicketAction.js.map