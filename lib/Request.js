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
    get protocol() {
        return this._protocol;
    }
    get uri() {
        let qs = this._query.all();
        let query = "";
        Object.keys(qs).forEach((qName, i, a) => {
            if (query !== "")
                query += "&";
            query += `${qName}=${qs[qName]}`;
        });
        return `${this._protocol}://${this._host}${this._path}?${query}`;
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
    set protocol(protocol) {
        this._protocol = protocol;
    }
    isMethod(methodName) {
        if (methodName.toLowerCase() === "post" && this.method === 1)
            return true;
        if (methodName.toLowerCase() === "get" && this.method === 0)
            return true;
        if (methodName.toLowerCase() === "head" && this.method === 2)
            return true;
        if (methodName.toLowerCase() === "put" && this.method === 3)
            return true;
        if (methodName.toLowerCase() === "delete" && this.method === 4)
            return true;
        if (methodName.toLowerCase() === "options" && this.method === 5)
            return true;
        if (methodName.toLowerCase() === "trace" && this.method === 6)
            return true;
        if (methodName.toLowerCase() === "connect" && this.method === 7)
            return true;
        return false;
    }
    isXmlHttpRequest() {
        let yes = false;
        Object.keys(this.headers.all()).forEach((header, index, arr) => {
            if (header.toLowerCase() === "x-requested-with" && this.headers.get(header).toLowerCase() === "xmlhttprequest")
                yes = true;
        });
        return yes;
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
