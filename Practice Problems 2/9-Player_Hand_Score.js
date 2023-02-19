function playerHandScore(hand) {
    let sum=0;
    for(let i=0; i<hand.length; i++)
    {
        if(hand[i] === 'K')
        {
            sum += 4;
        }
        else
        {
            if(hand[i] === 'Q')
            {
                sum += 3;
            }
            else
            {
                if(hand[i] === 'J')
                {
                     sum += 2;
                }
            }
        }
    }
    return sum;
}

module.exports = playerHandScore;