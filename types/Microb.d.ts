import { Environment } from "./Environment";
import { Transmitter } from "./Transmitter";
export declare class Microb {
    private static microb;
    private cellpacks;
    private transmitter;
    private environment;
    private log;
    constructor();
    getTransmitter(): Transmitter;
    getEnvironment(): Environment;
    getCellpack(name: string): null | any;
    start(): void;
    static start(): void;
}
