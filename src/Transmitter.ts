
import { EventEmitter2 } from "eventemitter2"

export class Transmitter extends EventEmitter2 {
    constructor(){
        super({
            wildcard: true
        })
    }
}
