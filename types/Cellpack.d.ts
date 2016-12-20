/// <reference types="bluebird" />
import { Environment } from "./Environment";
import { Transmitter } from "./Transmitter";
import { Connection } from "./Connection";
import * as Promise from "bluebird";
export declare class Cellpack {
    protected environment: Environment;
    protected transmitter: Transmitter;
    protected config: any;
    constructor(environment: Environment, transmitter: Transmitter);
    init(): Promise<void>;
    request(connection: Connection): Promise<boolean>;
}
