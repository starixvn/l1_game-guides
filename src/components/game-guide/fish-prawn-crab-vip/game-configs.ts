const choicesMaxBet = {
    stag: 3000,
    gourd: 3000,
    rooster: 3000,
    fish: 3000,
    crab: 3000,
    prawn: 3000,
    anyTriple: 1000,
    mountain: 3000,
    ocean: 3000,
};

const odds = {
    single: 3,
    double: 3.8,
    triple: 8,
    anyTriple: 33,
    mountain: 1.98,
    ocean: 1.98,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 4000,
    minbet: 50,
    odds: odds,
};

export default GameConfigs;
