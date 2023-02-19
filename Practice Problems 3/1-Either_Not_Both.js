function eitherNotBoth(num) {
    if(((num%3 === 0)||(num%5 === 0))&&(!((num%3 === 0)&&(num%5 === 0))))
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = eitherNotBoth;