import * as Moment from "moment";
import { ParameterBag } from "./ParameterBag";
export interface sessionOptions {
    name?: string;
    expires?: string | number | null | Moment.Moment;
    path?: string;
    domain?: string | Array<string>;
    secure?: boolean;
    httponly?: boolean;
}
export declare class Session extends ParameterBag {
    private expires;
    private path;
    private domain;
    private secure;
    private httponly;
    setup(options: sessionOptions): Session;
    setExpires(expires: undefined | string | number | null | Moment.Moment): Session;
    setPath(path: string | null): Session;
    setDomain(domain: string | Array<string> | null): Session;
    setSecure(secure: boolean | null): Session;
    setHttponly(httponly: boolean | null): Session;
    getExpiresUnix(): number | void;
    getExpires(): number | null;
    getPath(): string | null;
    getDomain(): string | Array<string> | null;
    isSecure(): boolean | null;
    isHttponly(): boolean | null;
}
