import * as Lodash from "lodash"
//
import { Response, Status } from "./Response"

export class ResponseJSON extends Response {
    constructor(statusCodeOrData?: number | any, data?: any){
        super()

        if(!Lodash.isUndefined(statusCodeOrData)){
            if(Lodash.isNumber(statusCodeOrData)) this._statusCode = statusCodeOrData
            else this._raw = data // this._data = JSON.stringify(statusCodeOrData)
        }
        if(data !== undefined) this._raw = data //this._data = JSON.stringify(data)

        this._headers.set("Content-Type","application/json")
    }

    //

    get data(): string | any {
        // return this._data // always string
        return JSON.stringify(this._raw)
    }

    //

    set data(data: any){ // | string
        //if(Lodash.isString(data)) this._data = data
        //else this._data = JSON.stringify(data)

        this._raw = data

        // if(Lodash.isString(data)) this._data = data
        // else this._data = JSON.stringify(data)
    }
}
