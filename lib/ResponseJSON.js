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
                this._data = JSON.stringify(statusCodeOrData);
        }
        if (data !== undefined)
            this._data = JSON.stringify(data);
        this._headers.set("Content-Type", "application/json");
    }
    get data() {
        return this._data;
    }
    set data(data) {
        if (Lodash.isString(data))
            this._data = data;
        else
            this._data = JSON.stringify(data);
    }
}
exports.ResponseJSON = ResponseJSON;
