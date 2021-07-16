const choicesMaxBet = {
    stag: 20000,
    gourd: 20000,
    rooster: 20000,
    fish: 20000,
    crab: 20000,
    prawn: 20000,
    anyTriple: 2000,
    mountain: 20000,
    ocean: 20000,
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
    maxbet: 20000,
    minbet: 100,
    odds: odds,
};

export default GameConfigs;
