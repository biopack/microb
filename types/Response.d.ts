/// <reference types="node" />
import * as Stream from "stream";
import { ParameterBag } from "./ParameterBag";
export declare const enum Status {
    OK = 200,
    NotFound = 404,
}
export declare class Response extends Stream.Writable {
    static Status: {
        OK: number;
        NotFound: number;
    };
    private _raw;
    private _stream;
    private _streamed;
    private _headers;
    private _statusCode;
    private _data;
    constructor(statusCodeOrResponse?: number | Response, data?: string);
    deepCopy(response: Response): void;
    raw: any;
    data: string;
    status: number;
    headers: ParameterBag;
    stream: Stream.Writable;
    write(buffer: Stream.Readable): boolean;
    isStreamed(): boolean;
}
