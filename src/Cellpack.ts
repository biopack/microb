
import { Transmitter } from "./Transmitter"
import { Connection } from "./Connection"
import * as Promise from "bluebird"

export class Cellpack {

    protected config: any
    protected transmitter: Transmitter

    constructor(config: any, transmitter: Transmitter){
        this.config = config
        this.transmitter = transmitter
    }

    init(): Promise<void> { return Promise.resolve() }
    request(connection: Connection): Promise<boolean> { return Promise.resolve(true) }
}
