function scream(n) {
    let str = "";
    for(let i=1; i<=n; i++)    
    {
        if(i%2 === 0)
        {
            str += 'A';
        }
        else
        {
            str += 'a';
        }
    }
    return str;
}

module.exports = scream;