import { ParameterBag } from "./ParameterBag"
import { ParameterExpense } from "./ParameterExpense"

export const enum Method {
    GET,
    POST,
    HEAD,
    PUT,
    DELETE,
    OPTIONS,
    TRACE,
    CONNECT
}

export class Request {

    static Method = {
        GET: 0,
        POST: 1,
        HEAD: 2,
        PUT: 3,
        DELETE: 4,
        OPTIONS: 5,
        TRACE: 6,
        CONNECT: 7
    }

    private _raw: any

    private _host: string
    private _port: number
    private _path: string
    private _method: Method
    private _ip: string

    private _headers: ParameterBag // http headers
    private _attributes: ParameterBag // from route
    private _query: ParameterBag // from GET
    private _request: ParameterBag // from POST
    private _server: ParameterBag // server
    private _files: ParameterBag // from FILES
    private _cookies: ParameterBag // from COOKIES

    constructor(){
        this._headers = new ParameterBag()
        this._attributes = new ParameterBag()
        this._query = new ParameterBag()
        this._request = new ParameterBag()
        this._server = new ParameterBag()
        this._files = new ParameterBag()
        this._cookies = new ParameterBag()
    }

    get raw(): any {
        return this._raw
    }

    get host(): string {
        return this._host
    }

    get port(): number {
        return this._port
    }

    get path(): string {
        return this._path
    }

    get method(): Method {
        return this._method
    }

    get ip(): string {
        return this._ip
    }

    get headers(): ParameterBag {
        return this._headers
    }

    get attributes(): ParameterBag {
        return this._attributes
    }

    get query(): ParameterBag {
        return this._query
    }

    get request(): ParameterBag {
        return this._request
    }

    get server(): ParameterBag {
        return this._server
    }

    get files(): ParameterBag {
        return this._files
    }

    get cookies(): ParameterBag {
        return this._cookies
    }

    //

    set raw(request: any){
        this._raw = request
    }

    set host(hostname: string){
        this._host = hostname
    }

    set port(port: number){
        this._port = port
    }

    set path(path: string){
        this._path = path
    }

    set method(method: Method){
        this._method = method
    }

    set ip(ip: string){
        this._ip = ip
    }
}
