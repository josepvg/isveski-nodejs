import { API_KEY } from "./constants";

export class BaseClient {
    constructor() {

    }

    //protected transformOptions(options: RequestInit): Promise<RequestInit> {
    //    const defaultHeaders = { 'x-api-key': API_KEY };

    //    // Ensure existing headers are preserved
    //    if (options.headers) {
    //        if (options.headers instanceof Headers) {
    //            // Headers interface
    //            options.headers.append('x-api-key', API_KEY);
    //        } else if (Array.isArray(options.headers)) {
    //            // Array of [key, value] pairs
    //            options.headers = [...options.headers, ['x-api-key', API_KEY]];
    //        } else {
    //            // Object literal
    //            options.headers['x-api-key'] = API_KEY;
    //        }
    //    } else {
    //        options.headers = defaultHeaders;
    //    }

    //    return Promise.resolve(options);
    //}
}
