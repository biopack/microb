
// import * as Lodash from "lodash"
//
import { Transmitter } from "./Transmitter"

export interface Log {
    type?: string
    msg?: string
    code?: number
}

export class Logger {

    private transmitter: Transmitter

    constructor(transmitter: Transmitter){
        this.transmitter = transmitter
        var logger = this
        this.transmitter.on("log.**", function(log: string){ logger.log(this.event,log) })
    }

    private log(event: string, log: string | Log): void {
        console.log(`${event}: ${log}`)
    }
}
