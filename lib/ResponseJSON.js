"use strict";
const Lodash = require("lodash");
const Response_1 = require("./Response");
class ResponseJSON extends Response_1.Response {
    constructor(statusCodeOrData, data) {
        super();
        if (!Lodash.isUndefined(statusCodeOrData)) {
            if (Lodash.isNumber(statusCodeOrData))
                this._statusCode = statusCodeOrData;
            else
                this._raw = data;
        }
        if (data !== undefined)
            this._raw = data;
        this._headers.set("Content-Type", "application/json");
    }
    get data() {
        return JSON.stringify(this._raw);
    }
    set data(data) {
        this._raw = data;
    }
}
exports.ResponseJSON = ResponseJSON;
