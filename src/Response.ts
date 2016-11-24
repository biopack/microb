
export class Response {

    private _raw: any

    constructor(){

    }

    get raw(): any {
        return this._raw
    }

    set raw(response: any){
        this._raw = response
    }
}
