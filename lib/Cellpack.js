"use strict";
const Promise = require("bluebird");
class Cellpack {
    constructor(microb) {
        this.setMicrob(microb);
    }
    setMicrob(microb) {
        this.microb = microb;
        this.environment = microb.getEnvironment();
        this.transmitter = microb.getTransmitter();
    }
    init() { return Promise.resolve(); }
    request(connection) { return Promise.resolve(true); }
}
exports.Cellpack = Cellpack;
