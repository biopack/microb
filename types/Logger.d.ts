import { Transmitter } from "./Transmitter";
export interface Log {
    type?: string;
    msg?: string;
    code?: number;
    stack?: any;
}
export declare class Logger {
    private transmitter;
    constructor(transmitter: Transmitter);
    private log(event, log);
}
