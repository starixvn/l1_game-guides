const GameConfigs = {
    maxWinPerRound: 3,
    maxBet: 20000,
    minBet: 1,
    oddsRange: {
        min: {
            player: 1.51,
            banker: 1.51,
            tie: 21,
        },
        max: {
            player: 2.09,
            banker: 2.09,
            tie: 22,
        },
    },
    maxBetPerChoices: {
        player: 2000,
        banker: 2000,
        tie: 2000,
    },
};

export default GameConfigs;
