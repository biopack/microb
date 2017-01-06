import * as Stream from "stream"
import * as Lodash from "lodash"
//
import { ParameterBag } from "./ParameterBag"
import { Cookie } from "./Cookie"

export const enum Status {
    OK = 200,
    NotFound = 404
}

export class Response extends Stream.Writable {

    static Status = {
        OK: 200,
        NotFound: 404
    }

    protected _raw: any
    protected _stream: Stream.Writable
    protected _streamed: boolean = false
    //
    protected _headers: ParameterBag // http headers
    protected _removeCookies: ParameterBag
    protected _statusCode: number = Status.OK
    protected _data: string = ""

    constructor(statusCodeOrResponse?: number | Response, data?: string){
        super()

        this._headers = new ParameterBag()
        this._removeCookies = new ParameterBag()

        if(statusCodeOrResponse !== undefined){
            if(Lodash.isNumber(statusCodeOrResponse))
                this._statusCode = statusCodeOrResponse
            else if(statusCodeOrResponse instanceof Response) this.deepCopy(statusCodeOrResponse)
        }
        if(data !== undefined) this._data = data
    }

    deepCopy(response: Response){
        this._headers = response.headers
        this._statusCode = response.status
        this._data = response.data
    }

    // cookies

    setCookie(cookie: Cookie): Response {
        this._headers.add("cookies",cookie)
        return this
    }

    removeCookie(cookie: Cookie | string): Response {
        let removeCookie = Lodash.isString(cookie) ? cookie : cookie.getName()
        let cookies: Array<Cookie> = this._headers.get("cookies")
        this._headers.remove("cookies")
        cookies.forEach((cookie, index, arr) => { if(cookie.getName() !== removeCookie) this._headers.add("cookies",cookie) })
        this._removeCookies.add("cookies",Lodash.isString(cookie) ? new Cookie(cookie,"") : cookie)
        return this
    }

    getRemoveCookies(): Array<Cookie> {
        return this._removeCookies.get("cookies",[])
    }

    getCookies(): Array<Cookie> {
        return this._headers.get("cookies",[])
    }

    //

    get raw(): any {
        return this._raw
    }

    get data(): string {
        return this._data
    }

    get status(): number {
        return this._statusCode
    }

    get headers(): ParameterBag {
        return this._headers
    }

    //

    set raw(response: any){
        this._raw = response
    }

    set data(data: string){
        this._data = data
    }

    set status(status: number){
        this._statusCode = status
    }

    set headers(headers: ParameterBag){
        this._headers = headers
    }

    // streaming

    set stream(stream: Stream.Writable){
        this._stream = stream
    }

    write(buffer: Stream.Readable): boolean {
        this._streamed = true
        buffer.pipe(this._stream)
        return true
    }

    isStreamed(): boolean {
        return this._streamed
    }
}
