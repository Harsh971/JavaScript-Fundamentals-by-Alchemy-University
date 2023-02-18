function isEnough(cost, money) {
    if(money >= cost)    
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = isEnough;