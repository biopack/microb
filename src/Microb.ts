
import * as appRoot from "app-root-path"

import { Cellpack } from "./Cellpack"
import { Transmitter } from "./Transmitter"
import { Connection } from "./Connection"

import * as Promise from "bluebird"

// interface ICellpacks {
    // [key: string]: Cellpack
// }

export class Microb {

    private static microb: Microb

    // private cellpacks: ICellpacks = {}
    private cellpacks: { [key: string]: Cellpack } = {}
    private transmitter: Transmitter

    constructor(){
        this.transmitter = new Transmitter()
    }

    start(): void {
        // TODO checking && validate
        let config = require(`${appRoot}/config/microb.json`)
        Object.keys(config.cellpacks).forEach((cellpackModuleName, index, arr) => {
            console.log(`Loading module: ${cellpackModuleName}`)

            let cellmodule = require(cellpackModuleName)
            let cellpack = new (cellmodule.default)(config.cellpacks[cellpackModuleName], this.transmitter)

            new Promise((resolve, reject) => {
                return cellpack.init() // Initialize of cellpack
            })

            // this.cellpacks.push(cellpack)
            this.cellpacks[cellpackModuleName] = cellpack
        })

        this.transmitter.on('microb.request', (connection: Connection) => {
            let next = true
            for(let cellpackModuleName in this.cellpacks){
                let cellpack = this.cellpacks[cellpackModuleName]
                if(typeof cellpack.request === "function"){
                    new Promise((resolve, reject) => {
                        return cellpack.request(connection) // call request from cellpack
                    }).then((ret: boolean) => {
                        next = ret
                    })
                }
                if(!next) break;
            }

            console.log('request - end')
        })
    }

    static start(): void {
        console.log(`Microb starting...`)
        this.microb = new Microb()
        this.microb.start()
    }
}
