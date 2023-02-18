function isAllX(string) {
    let l = string.length;
    let c=0;
    for(let i=0; i<l; i++)
    {
        if((string[i] === 'x')||(string[i] === 'X'))
        {
            c += 1;
        }
    }
    if(c === l)
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = isAllX;
