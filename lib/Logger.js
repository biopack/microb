"use strict";
const Lodash = require("lodash");
class Logger {
    constructor(transmitter) {
        this.transmitter = transmitter;
        var logger = this;
        this.transmitter.on("log.**", function (log) { logger.log(this.event, log); });
    }
    log(event, log) {
        if (Lodash.isString(log)) {
            console.log(`${event}: ${log}`);
        }
        else {
            if (log.type == 'error')
                console.error(`${event}: [${log.code}] ${log.msg}`);
        }
    }
}
exports.Logger = Logger;
