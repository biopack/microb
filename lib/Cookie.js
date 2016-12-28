"use strict";
const Moment = require("moment");
const Lodash = require("lodash");
class Cookie {
    constructor(name, value, expires, path, domain, secure, httponly) {
        this.name = name;
        this.value = value;
        if (Lodash.isInteger(expires))
            this.expires = Moment().add(expires, 'seconds');
        else if (expires instanceof Moment)
            this.expires = expires;
        else if (Lodash.isString(expires))
            this.expires = Moment(expires);
        else
            this.expires = null;
        this.path = path || "/";
        this.domain = domain || "";
        this.secure = secure || false;
        this.httponly = httponly || true;
    }
    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }
    getExpires() {
        return this.expires;
    }
    getPath() {
        return this.path;
    }
    getDomain() {
        return this.domain;
    }
    isSecure() {
        return this.secure;
    }
    isHttponly() {
        return this.httponly;
    }
}
exports.Cookie = Cookie;
