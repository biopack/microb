"use strict";
const Promise = require("bluebird");
class Cellpack {
    constructor(environment, transmitter) {
        this.environment = environment;
        this.transmitter = transmitter;
    }
    init() { return Promise.resolve(); }
    request(connection) { return Promise.resolve(true); }
}
exports.Cellpack = Cellpack;
