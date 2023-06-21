"use strict";
function getValue(arg) {
    return arg === true ? true : arg > 0;
}
console.log(getValue(0));
console.log(getValue(1));
console.log(getValue(true));
