
import { Environment } from "./Environment"
import { Transmitter } from "./Transmitter"
import { Connection } from "./Connection"
import { Microb } from "./Microb"
import * as Promise from "bluebird"

export class Cellpack {

    protected environment: Environment
    protected transmitter: Transmitter
    protected microb: Microb
    //
    protected config: any

    constructor(microb: Microb){
        this.setMicrob(microb)
    }

    setMicrob(microb: Microb){
        this.microb = microb
        this.environment = microb.getEnvironment()
        this.transmitter = microb.getTransmitter()
    }

    //constructor(environment: Environment, transmitter: Transmitter){
    // constructor(microb: Microb){
        // this.microb = microb
        // this.environment = microb.getEnvironment()
        // this.transmitter = microb.getTransmitter()
        // console.log(this.constructor.name)
        // this.config = environment.get(this.class.name)
    // }

    init(): Promise<void> { return Promise.resolve() }
    request(connection: Connection): Promise<boolean> { return Promise.resolve(true) }
}
