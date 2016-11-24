"use strict";
const ParameterBag_1 = require("./ParameterBag");
const Request = require("./Request");
const Lodash = require("lodash");
class Route {
    constructor(name, host, path, methods, requirements, defaults, options) {
        this._methods = [];
        methods.forEach((m) => {
            if ((Lodash.isString(m) && m.toLowerCase() === "get") || m === 0)
                this.methods.push(0);
            if ((Lodash.isString(m) && m.toLowerCase() === "post") || m === 1)
                this.methods.push(1);
            if ((Lodash.isString(m) && m.toLowerCase() === "head") || m === 2)
                this.methods.push(2);
            if ((Lodash.isString(m) && m.toLowerCase() === "put") || m === 3)
                this.methods.push(3);
            if ((Lodash.isString(m) && m.toLowerCase() === "delete") || m === 4)
                this.methods.push(4);
            if ((Lodash.isString(m) && m.toLowerCase() === "options") || m === 5)
                this.methods.push(5);
            if ((Lodash.isString(m) && m.toLowerCase() === "trace") || m === 6)
                this.methods.push(6);
            if ((Lodash.isString(m) && m.toLowerCase() === "connect") || m === 7)
                this.methods.push(7);
        });
        this._name = name;
        this._host = host;
        this._path = path;
        this._requirements = new ParameterBag_1.ParameterBag(requirements);
        this._defaults = new ParameterBag_1.ParameterBag(defaults);
        this._options = new ParameterBag_1.ParameterBag(options);
    }
    get name() {
        return this._name;
    }
    get host() {
        return this._host;
    }
    get path() {
        return this._path;
    }
    get methods() {
        return this._methods;
    }
    get requirements() {
        return this._requirements;
    }
    get defaults() {
        return this._defaults;
    }
    get options() {
        return this._options;
    }
}
exports.Route = Route;
