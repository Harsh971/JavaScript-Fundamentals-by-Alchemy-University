function canBreathe(isConnected, hasOxygen, aboveWater) {
    if((aboveWater) || (isConnected && hasOxygen)    )
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = canBreathe;