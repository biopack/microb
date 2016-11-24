
import { ParameterBag } from "./ParameterBag"
import * as Request from "./Request"
import * as Lodash from "lodash"

export class Route {

    private _name: string
    private _host: RegExp
    private _path: string
    private _methods: Array<Request.Method> = []
    private _requirements: ParameterBag
    private _defaults: ParameterBag
    private _options: ParameterBag

    constructor(name: string, host: RegExp, path: string, methods: Array<Request.Method> | Array<string>, requirements: any, defaults: any, options: any){
        // var l_methods: Request.Method[] = methods
        (methods as (Request.Method | string)[]).forEach((m: Request.Method | string): void => { // index: number, arr: Array<Request.Method> | Array<string>
            if((Lodash.isString(m) && m.toLowerCase() === "get") || m === Request.Method.GET) this.methods.push(Request.Method.GET)
            if((Lodash.isString(m) && m.toLowerCase() === "post") || m === Request.Method.POST) this.methods.push(Request.Method.POST)
            if((Lodash.isString(m) && m.toLowerCase() === "head") || m === Request.Method.HEAD) this.methods.push(Request.Method.HEAD)
            if((Lodash.isString(m) && m.toLowerCase() === "put") || m === Request.Method.PUT) this.methods.push(Request.Method.PUT)
            if((Lodash.isString(m) && m.toLowerCase() === "delete") || m === Request.Method.DELETE) this.methods.push(Request.Method.DELETE)
            if((Lodash.isString(m) && m.toLowerCase() === "options") || m === Request.Method.OPTIONS) this.methods.push(Request.Method.OPTIONS)
            if((Lodash.isString(m) && m.toLowerCase() === "trace") || m === Request.Method.TRACE) this.methods.push(Request.Method.TRACE)
            if((Lodash.isString(m) && m.toLowerCase() === "connect") || m === Request.Method.CONNECT) this.methods.push(Request.Method.CONNECT)
        })
        this._name = name
        this._host = host
        this._path = path
        // this._methods = l_methods
        this._requirements = new ParameterBag(requirements)
        this._defaults = new ParameterBag(defaults)
        this._options = new ParameterBag(options)
    }

    get name(): string {
        return this._name
    }

    get host(): RegExp {
        return this._host
    }

    get path(): string {
        return this._path
    }

    get methods(): Array<Request.Method> {
        return this._methods
    }

    get requirements(): ParameterBag {
        return this._requirements
    }

    get defaults(): ParameterBag {
        return this._defaults
    }

    get options(): ParameterBag {
        return this._options
    }

    //

    // set name(name: string){
        // this._name = name
    // }

    // set options(options: ParameterBag){
        // this._options = options
    // }
}
