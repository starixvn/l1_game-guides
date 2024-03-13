const GameConfigs = {
    maxWinPerSubround: 1000000,
    maxBet: 20000,
    minBet: 1,
    oddsRange: {
        min: {
            player: 1,
            banker: 1,
            tie: 1,
        },
        max: {
            player: 2,
            banker: 2,
            tie: 2,
        },
    },
    maxBetPerChoices: {
        player: 2000,
        banker: 2000,
        tie: 2000,
    },
};

export default GameConfigs;
