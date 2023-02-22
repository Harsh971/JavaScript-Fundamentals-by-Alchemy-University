function factorial(n) {
    if(n === 1)
    {
        return 1;
    }
    if(n === 2)
    {
        return factorial(1) * 2;
    }
}

module.exports = factorial;