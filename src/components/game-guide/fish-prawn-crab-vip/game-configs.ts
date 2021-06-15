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
    single: 2,
    double: 3.5,
    triple: 6,
    anyTriple: 33,
    mountain: 1.96,
    ocean: 1.96,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 5000,
    minbet: 20,
    odds: odds,
};

export default GameConfigs;
