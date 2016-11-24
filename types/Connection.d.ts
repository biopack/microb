import { Request } from "./Request";
import { Response } from "./Response";
import { Environment } from "./Environment";
export declare class Connection {
    private _request;
    private _response;
    private _environment;
    constructor();
    request: Request;
    response: Response;
    readonly environment: Environment;
}
