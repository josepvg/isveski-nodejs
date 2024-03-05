export * from './clientDeviceInterfaceApi';
import { ClientDeviceInterfaceApi } from './clientDeviceInterfaceApi';
export * from './clientSensorsApi';
import { ClientSensorsApi } from './clientSensorsApi';
export * from './clientTicketDefinitionsApi';
import { ClientTicketDefinitionsApi } from './clientTicketDefinitionsApi';
export * from './clientWalletApi';
import { ClientWalletApi } from './clientWalletApi';
export * from './demoApi';
import { DemoApi } from './demoApi';
export * from './pushNotificationsApi';
import { PushNotificationsApi } from './pushNotificationsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ClientDeviceInterfaceApi, ClientSensorsApi, ClientTicketDefinitionsApi, ClientWalletApi, DemoApi, PushNotificationsApi];
