const choicesMaxBet = {
    red: 2000,
    white: 2000,
    red3: 1000,
    red2: 2000,
    red1: 2000,
    white3: 1000,
};

const odds = {
    red: 1.96,
    white: 1.96,
    red3: 7.84,
    red2: 2.61,
    red1: 2.61,
    white3: 7.84,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
