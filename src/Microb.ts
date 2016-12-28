
import * as appRoot from "app-root-path"

import { Environment } from "./Environment"
import { Cellpack } from "./Cellpack"
import { Transmitter } from "./Transmitter"
import { Connection } from "./Connection"
import { Logger } from "./Logger"

import * as Promise from "bluebird"

// interface ICellpacks {
    // [key: string]: Cellpack
// }

export class Microb {

    private static microb: Microb

    // private cellpacks: ICellpacks = {}
    private cellpacks: { [key: string]: any } = {}
    private transmitter: Transmitter
    private environment: Environment
    private log: Logger

    constructor(){
        this.transmitter = new Transmitter()
        this.log = new Logger(this.transmitter)
        // this.environment = new Environment()
    }

    getTransmitter(): Transmitter {
        return this.transmitter
    }

    getEnvironment(): Environment {
        return this.environment
    }

    getCellpack(name: string): null | any {
        return (this.cellpacks[name] === undefined ? null : this.cellpacks[name])
    }

    start(): void {
        this.transmitter.emit("log.microb",`Microb starting...`)

        this.environment = require(`${appRoot}/lib/config/config`)

        this.transmitter.emit("log.microb",`\tEnvironment: ${this.environment.get("environment")}`)
        /*
        // TODO checking && validate?
        let config = require(`${appRoot}/config/microb`)
        Object.keys(config).forEach((key, index, len) => {
            this.environment.set(key,config[key])
        })*/ // import * as Config from "lib/config/Config"

        // init cellpacks
        Promise.mapSeries<string,undefined>(Object.keys(this.environment.get('cellpacks')), (cellpackModuleName, index, len) => {
            if(this.environment.get("dev") === true) this.transmitter.emit("log.microb",`\tLoading module: ${cellpackModuleName}`)

            let cellmodule = require(cellpackModuleName)
            //let cellpack = new (cellmodule.default)(config.cellpacks[cellpackModuleName], this.transmitter)
            let cellpack = new (cellmodule.default)(this) //, this.environment, this.transmitter)

            return cellpack.init().then(() => {
                this.cellpacks[cellpackModuleName] = cellpack
            })
        }).then(() => {
            // this.environment.set("cellpacks",this.cellpacks)

            // let cc = this.environment.get("cellpacks")
            // cc["cellpack-session"].testicek()
            // process.exit(0)

            this.transmitter.emit("log.microb",`done.`)
            if(this.environment.get("dev") === true) this.transmitter.emit("microb.loaded")
        })

        /*
        Object.keys(config.cellpacks).forEach((cellpackModuleName, index, arr) => {

            new Promise<void>(() => {
                console.log(`Loading module: ${cellpackModuleName}`)

                let cellmodule = require(cellpackModuleName)
                let cellpack = new (cellmodule.default)(config.cellpacks[cellpackModuleName], this.transmitter)

                return cellpack.init().then(() => {
                    console.log(`INITED: ${cellpackModuleName}`)
                }) // Initialize of cellpack



                // this.cellpacks.push(cellpack)
                // this.cellpacks[cellpackModuleName] = cellpack
            }).then(() => {
                console.log('okey')
            })


        })*/

        this.transmitter.on("microb.request", (connection: Connection) => {
            // let next = true
            let next = true
            Promise.mapSeries<string, boolean>(Object.keys(this.cellpacks), (cellpackModuleName, index, len) => {

                let cellpack = this.cellpacks[cellpackModuleName]
                cellpack.setMicrob(this)

                if(this.environment.get('debug')) this.transmitter.emit('log.microb', `Request: ${cellpackModuleName}`)
                if(next && typeof cellpack.request === "function"){
                    return cellpack.request(connection).then((returned: boolean) => {
                        next = returned
                        return next
                    }) // call request from cellpack
                } else return next
            }).then((t) => {
                // console.log(t)
                if(connection.response.isStreamed() && this.environment.get("debug")) this.transmitter.emit('log.microb', `request - end (streamed)`)
                else {
                    if(this.environment.get("debug")) this.transmitter.emit('log.microb', `request - end (normal)`)
                    this.transmitter.emit('microb.response', connection)
                }
            })

            /*
            for(let cellpackModuleName in this.cellpacks){
                let cellpack = this.cellpacks[cellpackModuleName]
                if(typeof cellpack.request === "function"){
                    // new Promise({
                        // return cellpack.request(connection) // call request from cellpack
                    // }).then((ret: boolean) => {
                    cellpack.request(connection).then(() => {
                        console.log(`CELLPACK: ${cellpackModuleName}`)
                        next = ret
                    })

                    // })
                }
                if(!next) break;
            }*/


        })
    }

    static start(): void {
        // console.log(`Microb starting...`)
        this.microb = new Microb()
        this.microb.start()
    }
}
