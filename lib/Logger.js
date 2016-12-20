"use strict";
class Logger {
    constructor(transmitter) {
        this.transmitter = transmitter;
        var logger = this;
        this.transmitter.on("log.**", function (log) { logger.log(this.event, log); });
    }
    log(event, log) {
        console.log(`${event}: ${log}`);
    }
}
exports.Logger = Logger;
