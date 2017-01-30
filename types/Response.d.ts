/// <reference types="node" />
import * as Stream from "stream";
import { ParameterBag } from "./ParameterBag";
import { Cookie } from "./Cookie";
export declare const enum Status {
    OK = 200,
    Created = 201,
    Accepted = 202,
    Found = 302,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
}
export declare class Response extends Stream.Writable {
    static Status: {
        OK: number;
        Created: number;
        Accepted: number;
        Found: number;
        Forbidden: number;
        NotFound: number;
        InternalServerError: number;
    };
    protected _raw: any;
    protected _stream: Stream.Writable;
    protected _streamed: boolean;
    protected _headers: ParameterBag;
    protected _removeCookies: ParameterBag;
    protected _statusCode: number;
    protected _data: string;
    constructor(statusCodeOrResponse?: number | Response, data?: string);
    deepCopy(response: Response): void;
    setCookie(cookie: Cookie): Response;
    removeCookie(cookie: Cookie | string): Response;
    getRemoveCookies(): Array<Cookie>;
    getCookies(): Array<Cookie>;
    raw: any;
    data: string;
    status: number;
    headers: ParameterBag;
    stream: Stream.Writable;
    write(buffer: Stream.Readable): boolean;
    isStreamed(): boolean;
}
