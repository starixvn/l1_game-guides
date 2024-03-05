const GameConfigs = {
    maxWinPerSubround: 1000000,
    maxBet: 20000,
    minBet: 1,
    odds: {
        player: {
            min: 1,
            max: 2,
        },
        banker: {
            min: 1,
            max: 2,
        },
        tie: {
            min: 1,
            max: 2,
        },
    },
    maxBetPerChoices: {
        player: 2000,
        banker: 2000,
        tie: 2000,
    },
};

export default GameConfigs;
