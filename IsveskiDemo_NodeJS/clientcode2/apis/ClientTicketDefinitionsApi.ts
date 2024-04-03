/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import type {
  TicketConfigurationResponse,
} from '../models/index';
import {
    TicketConfigurationResponseFromJSON,
    TicketConfigurationResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class ClientTicketDefinitionsApi extends runtime.BaseAPI {

    /**
     * Gets the list of ticket definitions belonging to this client
     * Gets the list of ticket definitions
     */
    async getListOfTicketDefinitionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TicketConfigurationResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientTicketDefinitions/GetListOfTicketDefinitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketConfigurationResponseFromJSON(jsonValue));
    }

    /**
     * Gets the list of ticket definitions belonging to this client
     * Gets the list of ticket definitions
     */
    async getListOfTicketDefinitions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TicketConfigurationResponse> {
        const response = await this.getListOfTicketDefinitionsRaw(initOverrides);
        return await response.value();
    }

}