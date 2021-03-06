
import * as Lodash from "lodash"
//
import { Transmitter } from "./Transmitter"

export interface Log {
    type?: string
    msg?: string
    code?: number
    stack?: any
}

export class Logger {

    private transmitter: Transmitter

    constructor(transmitter: Transmitter){
        this.transmitter = transmitter
        var logger = this
        this.transmitter.on("log.**", function(log: string){ logger.log(this.event,log) })
    }

    private log(event: string, log: string | Log): void {
        if(Lodash.isString(log)){
            console.log(`${event}: ${log}`)
        } else {
            if(log.type == 'error') console.error(`${event}: [${log.code}] ${log.msg}`)
        }
    }
}
