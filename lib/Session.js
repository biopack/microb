"use strict";
const Moment = require("moment");
const Lodash = require("lodash");
const ParameterBag_1 = require("./ParameterBag");
class Session extends ParameterBag_1.ParameterBag {
    setup(options) {
        this.setExpires(options.expires);
        this.setPath(options.path || null);
        this.setDomain(options.domain || null);
        this.setSecure(options.secure || null);
        this.setHttponly(options.httponly || null);
        return this;
    }
    setExpires(expires) {
        if (Lodash.isInteger(expires))
            this.expires = expires;
        else if (expires instanceof Moment)
            this.expires = Moment().diff(expires, 'seconds');
        else if (Lodash.isString(expires))
            this.expires = Moment().diff(Moment(expires), 'seconds');
        else
            this.expires = null;
        return this;
    }
    setPath(path) {
        this.path = path;
        return this;
    }
    setDomain(domain) {
        this.domain = domain;
        return this;
    }
    setSecure(secure) {
        this.secure = secure;
        return this;
    }
    setHttponly(httponly) {
        this.httponly = httponly;
        return this;
    }
    getExpiresUnix() {
        if (this.getExpires() !== null)
            return Moment().add(this.getExpires(), 'seconds').unix();
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
exports.Session = Session;
