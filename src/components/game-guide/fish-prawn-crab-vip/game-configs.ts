const choicesMaxBet = {
    anyTriple: 500,
    crab: 5000,
    fish: 5000,
    gourd: 5000,
    mountain: 5000,
    ocean: 5000,
    prawn: 5000,
    rooster: 5000,
    stag: 5000,
};

const odds = {
    anyTriple: 33,
    double: 3.5,
    mountain: 1.96,
    ocean: 1.96,
    single: 2,
    triple: 6,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 5000,
    minbet: 10,
    odds: odds,
};

export default GameConfigs;
