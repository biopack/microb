"use strict";
const Request_1 = require("./Request");
const Response_1 = require("./Response");
const Environment_1 = require("./Environment");
class Connection {
    constructor() {
        this._request = new Request_1.Request();
        this._response = new Response_1.Response();
        this._environment = new Environment_1.Environment();
    }
    get request() {
        return this._request;
    }
    get response() {
        return this._response;
    }
    get environment() {
        return this._environment;
    }
    set request(request) {
        this._request = request;
    }
    set response(response) {
        this._response = response;
    }
}
exports.Connection = Connection;
