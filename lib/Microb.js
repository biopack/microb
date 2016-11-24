"use strict";
const appRoot = require("app-root-path");
const Transmitter_1 = require("./Transmitter");
const Promise = require("bluebird");
class Microb {
    constructor() {
        this.cellpacks = {};
        this.transmitter = new Transmitter_1.Transmitter();
    }
    start() {
        let config = require(`${appRoot}/config/microb.json`);
        Object.keys(config.cellpacks).forEach((cellpackModuleName, index, arr) => {
            console.log(`Loading module: ${cellpackModuleName}`);
            let cellmodule = require(cellpackModuleName);
            let cellpack = new (cellmodule.default)(config.cellpacks[cellpackModuleName], this.transmitter);
            new Promise((resolve, reject) => {
                return cellpack.init();
            });
            this.cellpacks[cellpackModuleName] = cellpack;
        });
        this.transmitter.on('microb.request', (connection) => {
            let next = true;
            for (let cellpackModuleName in this.cellpacks) {
                let cellpack = this.cellpacks[cellpackModuleName];
                if (typeof cellpack.request === "function") {
                    new Promise((resolve, reject) => {
                        return cellpack.request(connection);
                    }).then((ret) => {
                        next = ret;
                    });
                }
                if (!next)
                    break;
            }
            console.log('request - end');
        });
    }
    static start() {
        console.log(`Microb starting...`);
        this.microb = new Microb();
        this.microb.start();
    }
}
exports.Microb = Microb;
