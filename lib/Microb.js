"use strict";
const appRoot = require("app-root-path");
const Promise = require("bluebird");
const Transmitter_1 = require("./Transmitter");
const Logger_1 = require("./Logger");
class Microb {
    constructor() {
        this.cellpacks = {};
        this.transmitter = new Transmitter_1.Transmitter();
        this.log = new Logger_1.Logger(this.transmitter);
    }
    getTransmitter() {
        return this.transmitter;
    }
    getEnvironment() {
        return this.environment;
    }
    getCellpack(name) {
        return (this.cellpacks[name] === undefined ? null : this.cellpacks[name]);
    }
    start() {
        this.transmitter.emit("log.microb", `Microb starting...`);
        this.environment = require(`${appRoot}/lib/config/config`);
        this.transmitter.emit("log.microb", `\tEnvironment: ${this.environment.get("environment")}`);
        Promise.mapSeries(Object.keys(this.environment.get('cellpacks')), (cellpackModuleName, index, len) => {
            if (this.environment.get("debug"))
                this.transmitter.emit("log.microb", `\tLoading module: ${cellpackModuleName}`);
            let cellmodule = require(cellpackModuleName);
            let cellpack = new (cellmodule.default)(this);
            return cellpack.init().then(() => {
                this.cellpacks[cellpackModuleName] = cellpack;
            });
        }).then(() => {
            this.transmitter.emit("log.microb", `done.`);
            this.transmitter.emit("microb.loaded");
        });
        this.transmitter.on("microb.request", (connection) => {
            let next = true;
            Promise.mapSeries(Object.keys(this.cellpacks), (cellpackModuleName, index, len) => {
                let cellpack = this.cellpacks[cellpackModuleName];
                cellpack.setMicrob(this);
                if (this.environment.get('debug'))
                    this.transmitter.emit('log.microb', `Request: ${cellpackModuleName}`);
                if (next && typeof cellpack.request === "function") {
                    return cellpack.request(connection).then((returned) => {
                        next = returned;
                        return next;
                    }).then((err) => {
                        this.transmitter.emit('log.microb', `ERROR in cellpack: ${cellpackModuleName} when request() call: ${err}`);
                    });
                }
                else
                    return next;
            }).then((t) => {
                if (connection.response.isStreamed() && this.environment.get("debug"))
                    this.transmitter.emit('log.microb', `request - end (streamed)`);
                else {
                    if (this.environment.get("debug"))
                        this.transmitter.emit('log.microb', `request - end (normal)`);
                    this.transmitter.emit('microb.response', connection);
                }
            });
        });
    }
    static start() {
        this.microb = new Microb();
        this.microb.start();
    }
}
exports.Microb = Microb;
