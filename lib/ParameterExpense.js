"use strict";
const lodash_1 = require("lodash");
class ParameterExpense {
    constructor(params) {
        this.params = {};
        if (lodash_1.isObject(params)) {
            Object.keys(params).forEach((paramName, index, len) => {
                this.params[paramName] = params[paramName];
            });
        }
    }
    get(key, def) {
        if (!this.has(key) && def !== undefined)
            return def;
        return this.params[key];
    }
    has(key) {
        if (this.params[key] === undefined)
            return false;
        return true;
    }
    all() {
        return this.params;
    }
}
exports.ParameterExpense = ParameterExpense;
