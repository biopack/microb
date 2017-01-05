"use strict";
const ParameterBag_1 = require("./ParameterBag");
(function (Method) {
    Method[Method["GET"] = 0] = "GET";
    Method[Method["POST"] = 1] = "POST";
    Method[Method["HEAD"] = 2] = "HEAD";
    Method[Method["PUT"] = 3] = "PUT";
    Method[Method["DELETE"] = 4] = "DELETE";
    Method[Method["OPTIONS"] = 5] = "OPTIONS";
    Method[Method["TRACE"] = 6] = "TRACE";
    Method[Method["CONNECT"] = 7] = "CONNECT";
})(exports.Method || (exports.Method = {}));
var Method = exports.Method;
class Request {
    constructor() {
        this._headers = new ParameterBag_1.ParameterBag();
        this._attributes = new ParameterBag_1.ParameterBag();
        this._query = new ParameterBag_1.ParameterBag();
        this._request = new ParameterBag_1.ParameterBag();
        this._server = new ParameterBag_1.ParameterBag();
        this._files = new ParameterBag_1.ParameterBag();
        this._cookies = new ParameterBag_1.ParameterBag();
    }
    get raw() {
        return this._raw;
    }
    get host() {
        return this._host;
    }
    get port() {
        return this._port;
    }
    get path() {
        return this._path;
    }
    get method() {
        return this._method;
    }
    get ip() {
        return this._ip;
    }
    get headers() {
        return this._headers;
    }
    get attributes() {
        return this._attributes;
    }
    get query() {
        return this._query;
    }
    get request() {
        return this._request;
    }
    get server() {
        return this._server;
    }
    get files() {
        return this._files;
    }
    get cookies() {
        return this._cookies;
    }
    set raw(request) {
        this._raw = request;
    }
    set host(hostname) {
        this._host = hostname;
    }
    set port(port) {
        this._port = port;
    }
    set path(path) {
        this._path = path;
    }
    set method(method) {
        this._method = method;
    }
    set ip(ip) {
        this._ip = ip;
    }
}
Request.Method = {
    GET: 0,
    POST: 1,
    HEAD: 2,
    PUT: 3,
    DELETE: 4,
    OPTIONS: 5,
    TRACE: 6,
    CONNECT: 7
};
exports.Request = Request;
