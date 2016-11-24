"use strict";
const Promise = require("bluebird");
class Cellpack {
    constructor(config, transmitter) {
        this.config = config;
        this.transmitter = transmitter;
    }
    init() { return Promise.resolve(); }
    request(connection) { return Promise.resolve(true); }
}
exports.Cellpack = Cellpack;
