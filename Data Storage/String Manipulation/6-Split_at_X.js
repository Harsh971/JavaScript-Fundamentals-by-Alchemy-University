function splitAtX(string) {
    let x = string.indexOf("x");
    let f = string.slice(0,x);
    let s = string.slice(x+1);

    if(f.length > s.length)
    {
        return f;
    }
    else
    {
        return s;
    }
}

module.exports = splitAtX;