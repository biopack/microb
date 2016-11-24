import { ParameterBag } from "./ParameterBag";
import * as Request from "./Request";
export declare class Route {
    private _name;
    private _host;
    private _path;
    private _methods;
    private _requirements;
    private _defaults;
    private _options;
    constructor(name: string, host: RegExp, path: string, methods: Array<Request.Method> | Array<string>, requirements: any, defaults: any, options: any);
    readonly name: string;
    readonly host: RegExp;
    readonly path: string;
    readonly methods: Array<Request.Method>;
    readonly requirements: ParameterBag;
    readonly defaults: ParameterBag;
    readonly options: ParameterBag;
}
