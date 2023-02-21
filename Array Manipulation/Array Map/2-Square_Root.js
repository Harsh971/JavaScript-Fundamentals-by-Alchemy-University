function squareRoot(arr) {
     return (
        arr.map(function(n) {
            return (Math.sqrt(n));
        })
    );
}

module.exports = squareRoot;