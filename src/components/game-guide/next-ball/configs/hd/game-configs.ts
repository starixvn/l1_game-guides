const GameConfigs = {
    maxWinPerRound: 3,
    maxBet: 20000,
    minBet: 1,
    oddsRange: {
        min: {
            over: 1.96,
            under: 1.96,
            odd: 1.71,
            even: 1.71,
        },
        max: {
            over: 2.05,
            under: 2.05,
            odd: 2.01,
            even: 2.01,
        },
    },
    maxBetPerChoices: {
        over: 2000,
        under: 3000,
        odd: 4000,
        even: 5000,
    },
};

export default GameConfigs;
