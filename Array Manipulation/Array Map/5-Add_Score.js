function addScore(players) {
    const updatedPlayers = players.map(function(player) {
        return {
            id : player.id,
            score : player.score + 10
        }
    });
    return updatedPlayers;
}

module.exports = addScore;