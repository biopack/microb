import * as Moment from "moment";
export declare class Cookie {
    private name;
    private value;
    private expires;
    private path;
    private domain;
    private secure;
    private httponly;
    constructor(name: string, value: string, expires?: string | number | null | Moment.Moment, path?: string, domain?: string, secure?: boolean, httponly?: boolean);
    getName(): string;
    getValue(): string;
    getExpires(): Moment.Moment | null;
    getPath(): string;
    getDomain(): string;
    isSecure(): boolean;
    isHttponly(): boolean;
}
