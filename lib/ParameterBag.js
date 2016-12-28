"use strict";
const ParameterExpense_1 = require("./ParameterExpense");
class ParameterBag extends ParameterExpense_1.ParameterExpense {
    set(key, value) {
        this.params[key] = value;
    }
    add(key, value) {
        if (!this.has(key))
            this.params[key] = [];
        this.params[key].push(value);
    }
    remove(key) {
        if (this.has(key))
            delete this.params[key];
    }
}
exports.ParameterBag = ParameterBag;
