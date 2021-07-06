const choicesMaxBet = {
    Sets4: 200,
    Sets27: 2000,
    head: 500,
    others: 2000,
    parlay2: 200,
    parlay3: 100,
    parlay4: 100,
    special: 100,
    tail: 500,
};
const odds = {
    Sets4: 24,
    Sets27: 3.6,
    head: 9,
    others: 1.96,
    parlay2: 13,
    parlay3: 50,
    parlay4: 120,
    special: 90,
    tail: 9,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 2000,
    minbet: 1,
    odds: odds,
};

export default GameConfigs;
