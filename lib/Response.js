"use strict";
class Response {
    constructor() {
    }
    get raw() {
        return this._raw;
    }
    set raw(response) {
        this._raw = response;
    }
}
exports.Response = Response;
