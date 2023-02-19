function willEat(hasPizza, hasDonuts, hasCookies) {
    if(hasPizza || hasDonuts || hasCookies)
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = willEat;
