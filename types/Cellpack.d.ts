/// <reference types="bluebird" />
import { Transmitter } from "./Transmitter";
import { Connection } from "./Connection";
import * as Promise from "bluebird";
export declare class Cellpack {
    protected config: any;
    protected transmitter: Transmitter;
    constructor(config: any, transmitter: Transmitter);
    init(): Promise<void>;
    request(connection: Connection): Promise<boolean>;
}
