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
    fhBlue: 1.97,
    fhEven: 1.97,
    fhOdd: 1.97,
    fhOver: 1.97,
    fhRed: 1.97,
    fhUnder: 1.97,
    ftBlue: 1.97,
    ftEven: 1.97,
    ftOdd: 1.97,
    ftOver: 1.97,
    ftRed: 1.97,
    ftUnder: 1.97,
    liveFTBlue: 9.02,
    liveFTRed: 9.02,
    liveFTOver: 11.14,
    liveFTUnder: 10.37,
    liveFTEven: 1.97,
    liveFTOdd: 1.97,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
