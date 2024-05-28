const GameConfigs = {
    maxWinPerRound: 3,
    maxBet: 20000,
    minBet: 1,
    oddsRange: {
        min: {
            over: 1.51,
            under: 1.51,
            blue3: 21,
            blue2: 21,
            red2: 21,
            red3: 21,
        },
        max: {
            over: 2.09,
            under: 2.09,
            blue3: 22,
            blue2: 22,
            red2: 22,
            red3: 22,
        },
    },
    maxBetPerChoices: {
        over: 2000,
        under: 2000,
        blue3: 2000,
        blue2: 2000,
        red2: 2000,
        red3: 2000,
    },
};

export default GameConfigs;
