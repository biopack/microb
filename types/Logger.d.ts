import { Transmitter } from "./Transmitter";
export interface Log {
    type?: string;
    msg?: string;
    code?: number;
}
export declare class Logger {
    private transmitter;
    constructor(transmitter: Transmitter);
    private log(event, log);
}
