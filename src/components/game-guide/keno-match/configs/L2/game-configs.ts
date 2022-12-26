const choicesMaxBet = {
    fhBlue: 20000,
    fhEven: 20000,
    fhOdd: 20000,
    fhOver: 20000,
    fhRed: 20000,
    fhUnder: 20000,
    ftBlue: 20000,
    ftEven: 20000,
    ftOdd: 20000,
    ftOver: 20000,
    ftRed: 20000,
    ftUnder: 20000,
    liveFTEven: 20000,
    liveFTOdd: 20000,
};

const odds = {
    fhBlue: 1.96,
    fhEven: 1.96,
    fhOdd: 1.96,
    fhOver: 1.96,
    fhRed: 1.96,
    fhUnder: 1.96,
    ftBlue: 1.96,
    ftEven: 1.96,
    ftOdd: 1.96,
    ftOver: 1.96,
    ftRed: 1.96,
    ftUnder: 1.96,
    liveFTBlue: 9.01,
    liveFTRed: 9.01,
    liveFTOver: 11.13,
    liveFTUnder: 10.36,
    liveFTEven: 1.96,
    liveFTOdd: 1.96,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
