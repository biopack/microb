import { ParameterBag } from "./ParameterBag";
export declare const enum Method {
    GET = 0,
    POST = 1,
    HEAD = 2,
    PUT = 3,
    DELETE = 4,
    OPTIONS = 5,
    TRACE = 6,
    CONNECT = 7,
}
export declare class Request {
    static Method: {
        GET: number;
        POST: number;
        HEAD: number;
        PUT: number;
        DELETE: number;
        OPTIONS: number;
        TRACE: number;
        CONNECT: number;
    };
    private _raw;
    private _host;
    private _port;
    private _path;
    private _method;
    private _ip;
    private _headers;
    private _attributes;
    private _query;
    private _request;
    private _server;
    private _files;
    private _cookies;
    constructor();
    raw: any;
    host: string;
    port: number;
    path: string;
    method: Method;
    ip: string;
    readonly headers: ParameterBag;
    readonly attributes: ParameterBag;
    readonly query: ParameterBag;
    readonly request: ParameterBag;
    readonly server: ParameterBag;
    readonly files: ParameterBag;
    readonly cookies: ParameterBag;
}
