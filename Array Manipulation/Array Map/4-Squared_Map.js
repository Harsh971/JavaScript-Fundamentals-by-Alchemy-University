const squared = require('./squared');

function squaredMap(arr) {
    return (
        arr.map(function(n) {
            return (n*n);
        })
    );
}

module.exports = squaredMap;