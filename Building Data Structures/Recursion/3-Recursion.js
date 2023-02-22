function factorial(n) {
    if(n === 1)
    {
        return 1;
    }
    else
    {
        if(n === 2)
        {
            return factorial(1) * 2;
        }
        else
        {
            return factorial(n-1) * n;
        }
    }
    
}

module.exports = factorial;