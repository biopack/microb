import * as Stream from "stream"
import * as Lodash from "lodash"
//
import { ParameterBag } from "./ParameterBag"

export const enum Status {
    OK = 200,
    NotFound = 404
}

export class Response extends Stream.Writable {

    static Status = {
        OK: 200,
        NotFound: 404
    }

    private _raw: any
    private _stream: Stream.Writable
    private _streamed: boolean = false
    //
    private _headers: ParameterBag // http headers
    private _statusCode: number = Status.OK
    private _data: string = ""

    constructor(statusCodeOrResponse?: number | Response, data?: string){
        super()

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
