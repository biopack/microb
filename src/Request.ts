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
    private _protocol: string
    private _agent: string

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

    get protocol(): string {
        return this._protocol
    }

    get agent(): string {
        return this._agent
    }

    get uri(): string {
        let qs = this._query.all()
        let query = ""
        Object.keys(qs).forEach((qName,i,a) => {
            if(query !== "") query += "&"
            query += `${qName}=${qs[qName]}`
        })
        return `${this._protocol}://${this._host}${this._path}?${query}`
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

    set protocol(protocol: string){
        this._protocol = protocol
    }

    set agent(agent: string){
        this._agent = agent
    }

    isMethod(methodName: string): boolean {
        if(methodName.toLowerCase() === "post" && this.method === Method.POST) return true
        if(methodName.toLowerCase() === "get" && this.method === Method.GET) return true
        if(methodName.toLowerCase() === "head" && this.method === Method.HEAD) return true
        if(methodName.toLowerCase() === "put" && this.method === Method.PUT) return true
        if(methodName.toLowerCase() === "delete" && this.method === Method.DELETE) return true
        if(methodName.toLowerCase() === "options" && this.method === Method.OPTIONS) return true
        if(methodName.toLowerCase() === "trace" && this.method === Method.TRACE) return true
        if(methodName.toLowerCase() === "connect" && this.method === Method.CONNECT) return true
        return false
    }

    isXmlHttpRequest(): boolean {
        let yes = false
        Object.keys(this.headers.all()).forEach((header,index,arr) => {
            if(header.toLowerCase() === "x-requested-with" && this.headers.get(header).toLowerCase() === "xmlhttprequest") yes = true
        })
        return yes
    }
}
