"use strict";
const ParameterExpense_1 = require("./ParameterExpense");
class ParameterBag extends ParameterExpense_1.ParameterExpense {
    set(key, value) {
        this.params[key] = value;
    }
}
exports.ParameterBag = ParameterBag;
