function endsWithX(string) {
    let l = string.length;
    if(string[l-1] === 'x')    
    {
        return true;
    }
    else
    {
        if(string[l-1] === 'X')    
        {
             return true;
        }   
        else
        {
            return false;
        }
    }
}

module.exports = endsWithX;