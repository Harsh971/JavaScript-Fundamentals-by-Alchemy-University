function addScore(players) {
    const updatedPlayers = players.map(function(player,i) {
        if(i < 3) {
            return {
                id : player.id,
                score : player.score + 10
            }
        }
        else
        {
            return {
                id : player.id,
                score : player.score
            }
        }
    });
    return updatedPlayers;
}

module.exports = addScore;