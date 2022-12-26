const choicesMaxBet = {
    crab: 10000,
    fish: 10000,
    gourd: 10000,
    prawn: 10000,
    rooster: 10000,
    stag: 10000,
};

const odds = {
    single: 2,
    double: 3.5,
    triple: 6,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
