
import { Environment } from "./Environment"
import { Transmitter } from "./Transmitter"
import { Connection } from "./Connection"
import * as Promise from "bluebird"

export class Cellpack {

    protected environment: Environment
    protected transmitter: Transmitter
    //
    protected config: any

    constructor(environment: Environment, transmitter: Transmitter){
        this.environment = environment
        this.transmitter = transmitter
        // console.log(this.constructor.name)
        // this.config = environment.get(this.class.name)
    }

    init(): Promise<void> { return Promise.resolve() }
    request(connection: Connection): Promise<boolean> { return Promise.resolve(true) }
}
