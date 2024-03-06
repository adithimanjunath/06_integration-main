const funcC = require("../mod_C/funcC");

function funcB(b) {
    if (b > 0)
        return -b;
    if ( funcC(b) )
        return funcC;
    return 0;
}

module.exports = funcB;
