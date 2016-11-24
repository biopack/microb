
import { Request } from "./Request"
import { Response } from "./Response"
import { Environment } from "./Environment"

export class Connection {

    private _request: Request
    private _response: Response
    private _environment: Environment

    constructor(){
        this._request = new Request()
        this._response = new Response()
        this._environment = new Environment()
    }

    get request(): Request {
        return this._request
    }

    get response(): Response {
        return this._response
    }

    get environment(): Environment {
        return this._environment
    }

    //

    set request(request: Request){
        this._request = request
    }

    set response(response: Response){
        this._response = response
    }
}
