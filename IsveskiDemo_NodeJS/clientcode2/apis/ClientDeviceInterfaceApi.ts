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
  BioAuthenticationRequest,
  BioMetricAuthenticationResponse,
  DeviceException,
  ErrorModel,
  ListenToBeaconsRequest,
  ListenToBeaconsResponse,
  ShowMenuRequest,
  ShowMenuResponse,
  ShowMessageRequest,
  ShowMultipleChoiceRequest,
  ShowMultipleChoiceResponse,
  ShowPromptRequest,
  ShowPromptResponse,
  ShowQrCodeRequest,
  ShowWebPageRequest,
  ShowWebPageResponse,
} from '../models/index';
import {
    BioAuthenticationRequestFromJSON,
    BioAuthenticationRequestToJSON,
    BioMetricAuthenticationResponseFromJSON,
    BioMetricAuthenticationResponseToJSON,
    DeviceExceptionFromJSON,
    DeviceExceptionToJSON,
    ErrorModelFromJSON,
    ErrorModelToJSON,
    ListenToBeaconsRequestFromJSON,
    ListenToBeaconsRequestToJSON,
    ListenToBeaconsResponseFromJSON,
    ListenToBeaconsResponseToJSON,
    ShowMenuRequestFromJSON,
    ShowMenuRequestToJSON,
    ShowMenuResponseFromJSON,
    ShowMenuResponseToJSON,
    ShowMessageRequestFromJSON,
    ShowMessageRequestToJSON,
    ShowMultipleChoiceRequestFromJSON,
    ShowMultipleChoiceRequestToJSON,
    ShowMultipleChoiceResponseFromJSON,
    ShowMultipleChoiceResponseToJSON,
    ShowPromptRequestFromJSON,
    ShowPromptRequestToJSON,
    ShowPromptResponseFromJSON,
    ShowPromptResponseToJSON,
    ShowQrCodeRequestFromJSON,
    ShowQrCodeRequestToJSON,
    ShowWebPageRequestFromJSON,
    ShowWebPageRequestToJSON,
    ShowWebPageResponseFromJSON,
    ShowWebPageResponseToJSON,
} from '../models/index';

export interface BioAuthenticateRequest {
    bioAuthenticationRequest: BioAuthenticationRequest;
}

export interface ListenToBeaconsOperationRequest {
    listenToBeaconsRequest: ListenToBeaconsRequest;
}

export interface ShowMenuOperationRequest {
    showMenuRequest: ShowMenuRequest;
}

export interface ShowMessageOperationRequest {
    showMessageRequest: ShowMessageRequest;
}

export interface ShowMultipleChoiceOperationRequest {
    showMultipleChoiceRequest: ShowMultipleChoiceRequest;
}

export interface ShowPromptOperationRequest {
    showPromptRequest: ShowPromptRequest;
}

export interface ShowQrCodeOperationRequest {
    showQrCodeRequest: ShowQrCodeRequest;
}

export interface ShowWebPageOperationRequest {
    showWebPageRequest: ShowWebPageRequest;
}

/**
 * 
 */
export class ClientDeviceInterfaceApi extends runtime.BaseAPI {

    /**
     * Uses the devices authentication mechanism, e.g. fingerprint or face recognision to authenticate the user
     * Bioauthenticates the user
     */
    async bioAuthenticateRaw(requestParameters: BioAuthenticateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BioMetricAuthenticationResponse>> {
        if (requestParameters['bioAuthenticationRequest'] == null) {
            throw new runtime.RequiredError(
                'bioAuthenticationRequest',
                'Required parameter "bioAuthenticationRequest" was null or undefined when calling bioAuthenticate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/BioAuthenticate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BioAuthenticationRequestToJSON(requestParameters['bioAuthenticationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BioMetricAuthenticationResponseFromJSON(jsonValue));
    }

    /**
     * Uses the devices authentication mechanism, e.g. fingerprint or face recognision to authenticate the user
     * Bioauthenticates the user
     */
    async bioAuthenticate(requestParameters: BioAuthenticateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BioMetricAuthenticationResponse> {
        const response = await this.bioAuthenticateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Starts listening to beacons and sends to the clients endpoint
     * Listens to beacons in the surroundings
     */
    async listenToBeaconsRaw(requestParameters: ListenToBeaconsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListenToBeaconsResponse>> {
        if (requestParameters['listenToBeaconsRequest'] == null) {
            throw new runtime.RequiredError(
                'listenToBeaconsRequest',
                'Required parameter "listenToBeaconsRequest" was null or undefined when calling listenToBeacons().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/ListenToBeacons`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ListenToBeaconsRequestToJSON(requestParameters['listenToBeaconsRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListenToBeaconsResponseFromJSON(jsonValue));
    }

    /**
     * Starts listening to beacons and sends to the clients endpoint
     * Listens to beacons in the surroundings
     */
    async listenToBeacons(requestParameters: ListenToBeaconsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListenToBeaconsResponse> {
        const response = await this.listenToBeaconsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Shows a menu in the app where users can select between the options
     * Shows a menu
     */
    async showMenuRaw(requestParameters: ShowMenuOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowMenuResponse>> {
        if (requestParameters['showMenuRequest'] == null) {
            throw new runtime.RequiredError(
                'showMenuRequest',
                'Required parameter "showMenuRequest" was null or undefined when calling showMenu().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/ShowMenu`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShowMenuRequestToJSON(requestParameters['showMenuRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowMenuResponseFromJSON(jsonValue));
    }

    /**
     * Shows a menu in the app where users can select between the options
     * Shows a menu
     */
    async showMenu(requestParameters: ShowMenuOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowMenuResponse> {
        const response = await this.showMenuRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Shows a message in the isveski app
     * Shows a message
     */
    async showMessageRaw(requestParameters: ShowMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['showMessageRequest'] == null) {
            throw new runtime.RequiredError(
                'showMessageRequest',
                'Required parameter "showMessageRequest" was null or undefined when calling showMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/ShowMessage`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShowMessageRequestToJSON(requestParameters['showMessageRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Shows a message in the isveski app
     * Shows a message
     */
    async showMessage(requestParameters: ShowMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.showMessageRaw(requestParameters, initOverrides);
    }

    /**
     * Shows a multiple choice menu in the app where the user can select 0 or many of the options
     * Shows multiple choices
     */
    async showMultipleChoiceRaw(requestParameters: ShowMultipleChoiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowMultipleChoiceResponse>> {
        if (requestParameters['showMultipleChoiceRequest'] == null) {
            throw new runtime.RequiredError(
                'showMultipleChoiceRequest',
                'Required parameter "showMultipleChoiceRequest" was null or undefined when calling showMultipleChoice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/ShowMultipleChoice`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShowMultipleChoiceRequestToJSON(requestParameters['showMultipleChoiceRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowMultipleChoiceResponseFromJSON(jsonValue));
    }

    /**
     * Shows a multiple choice menu in the app where the user can select 0 or many of the options
     * Shows multiple choices
     */
    async showMultipleChoice(requestParameters: ShowMultipleChoiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowMultipleChoiceResponse> {
        const response = await this.showMultipleChoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Shows a prompt in the app where the user can press between 2 buttons
     * Shows a prompt
     */
    async showPromptRaw(requestParameters: ShowPromptOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowPromptResponse>> {
        if (requestParameters['showPromptRequest'] == null) {
            throw new runtime.RequiredError(
                'showPromptRequest',
                'Required parameter "showPromptRequest" was null or undefined when calling showPrompt().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/ShowPrompt`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShowPromptRequestToJSON(requestParameters['showPromptRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowPromptResponseFromJSON(jsonValue));
    }

    /**
     * Shows a prompt in the app where the user can press between 2 buttons
     * Shows a prompt
     */
    async showPrompt(requestParameters: ShowPromptOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowPromptResponse> {
        const response = await this.showPromptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Shows the Qr Code in the app
     * Shows Qr Code
     */
    async showQrCodeRaw(requestParameters: ShowQrCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['showQrCodeRequest'] == null) {
            throw new runtime.RequiredError(
                'showQrCodeRequest',
                'Required parameter "showQrCodeRequest" was null or undefined when calling showQrCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/ShowQrCode`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShowQrCodeRequestToJSON(requestParameters['showQrCodeRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Shows the Qr Code in the app
     * Shows Qr Code
     */
    async showQrCode(requestParameters: ShowQrCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.showQrCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This action is not completed
     * Shows a webpage inside the app, passing the user as a cookie
     */
    async showWebPageRaw(requestParameters: ShowWebPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowWebPageResponse>> {
        if (requestParameters['showWebPageRequest'] == null) {
            throw new runtime.RequiredError(
                'showWebPageRequest',
                'Required parameter "showWebPageRequest" was null or undefined when calling showWebPage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ClientDeviceInterface/ShowWebPage`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShowWebPageRequestToJSON(requestParameters['showWebPageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowWebPageResponseFromJSON(jsonValue));
    }

    /**
     * This action is not completed
     * Shows a webpage inside the app, passing the user as a cookie
     */
    async showWebPage(requestParameters: ShowWebPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowWebPageResponse> {
        const response = await this.showWebPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
