const funcB = require("../mod_B/funcB");

function funcA(a) {
    let value = funcB(a);
    if (value < 0) {
        let funcC = funcB(0);
        return funcC(value);
    }
    return value;
}
 
module.exports = funcA;
