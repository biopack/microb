"use strict";
const Stream = require("stream");
const Lodash = require("lodash");
const ParameterBag_1 = require("./ParameterBag");
const Cookie_1 = require("./Cookie");
(function (Status) {
    Status[Status["OK"] = 200] = "OK";
    Status[Status["NotFound"] = 404] = "NotFound";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;
class Response extends Stream.Writable {
    constructor(statusCodeOrResponse, data) {
        super();
        this._streamed = false;
        this._statusCode = 200;
        this._data = "";
        this._headers = new ParameterBag_1.ParameterBag();
        this._removeCookies = new ParameterBag_1.ParameterBag();
        if (statusCodeOrResponse !== undefined) {
            if (Lodash.isNumber(statusCodeOrResponse))
                this._statusCode = statusCodeOrResponse;
            else if (statusCodeOrResponse instanceof Response)
                this.deepCopy(statusCodeOrResponse);
        }
        if (data !== undefined)
            this._data = data;
    }
    deepCopy(response) {
        this._headers = response.headers;
        this._statusCode = response.status;
        this._data = response.data;
    }
    setCookie(cookie) {
        this._headers.add("cookies", cookie);
        return this;
    }
    removeCookie(cookie) {
        let removeCookie = Lodash.isString(cookie) ? cookie : cookie.getName();
        let cookies = this._headers.get("cookies");
        this._headers.remove("cookies");
        cookies.forEach((cookie, index, arr) => { if (cookie.getName() !== removeCookie)
            this._headers.add("cookies", cookie); });
        this._removeCookies.add("cookies", Lodash.isString(cookie) ? new Cookie_1.Cookie(cookie, "") : cookie);
        return this;
    }
    getRemoveCookies() {
        return this._removeCookies.get("cookies", []);
    }
    getCookies() {
        return this._headers.get("cookies", []);
    }
    get raw() {
        return this._raw;
    }
    get data() {
        return this._data;
    }
    get status() {
        return this._statusCode;
    }
    get headers() {
        return this._headers;
    }
    set raw(response) {
        this._raw = response;
    }
    set data(data) {
        this._data = data;
    }
    set status(status) {
        this._statusCode = status;
    }
    set headers(headers) {
        this._headers = headers;
    }
    set stream(stream) {
        this._stream = stream;
    }
    write(buffer) {
        this._streamed = true;
        buffer.pipe(this._stream);
        return true;
    }
    isStreamed() {
        return this._streamed;
    }
}
Response.Status = {
    OK: 200,
    NotFound: 404
};
exports.Response = Response;
