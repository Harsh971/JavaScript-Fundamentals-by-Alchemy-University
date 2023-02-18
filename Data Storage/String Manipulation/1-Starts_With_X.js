function startsWithX(string) {
    if(string[0] === 'x')
    {
        return true;
    }
    else
    {
        if (string[0] === 'X') 
        {
            return true;
        }   
        else
        {
            return false;
        }
    }
}

module.exports = startsWithX;