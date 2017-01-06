import { Response } from "./Response";
export declare class ResponseJSON extends Response {
    constructor(statusCodeOrData?: number | any, data?: any);
    data: string | any;
}
