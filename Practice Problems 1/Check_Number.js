function checkNumber(num) {
    if(num === 0)
    {
        return "zero";
    }
    else
    {
        if(num > 0)
        {
            return "positive";
        }
        else
        {
            return "negative";
        }
    }
}

module.exports = checkNumber;