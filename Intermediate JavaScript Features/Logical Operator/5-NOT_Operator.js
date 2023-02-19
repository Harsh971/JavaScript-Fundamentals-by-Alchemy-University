function carCrossing(aCrossing, bCrossing) {
    if(((aCrossing)&&(!bCrossing))||((!aCrossing)&&(bCrossing)))
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = carCrossing;