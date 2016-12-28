/// <reference types="bluebird" />
import { Environment } from "./Environment";
import { Transmitter } from "./Transmitter";
import { Connection } from "./Connection";
import { Microb } from "./Microb";
import * as Promise from "bluebird";
export declare class Cellpack {
    protected environment: Environment;
    protected transmitter: Transmitter;
    protected microb: Microb;
    protected config: any;
    constructor(microb: Microb);
    setMicrob(microb: Microb): void;
    init(): Promise<void>;
    request(connection: Connection): Promise<boolean>;
}
