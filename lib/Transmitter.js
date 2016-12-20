"use strict";
const eventemitter2_1 = require("eventemitter2");
class Transmitter extends eventemitter2_1.EventEmitter2 {
    constructor() {
        super({
            wildcard: true
        });
    }
}
exports.Transmitter = Transmitter;
