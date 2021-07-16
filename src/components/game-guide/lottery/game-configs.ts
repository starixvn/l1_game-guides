const choicesMaxBet = {
    Sets4: 3000,
    special: 200,
    head: 1000,
    tail: 700,
    Sets27: 3000,
    others: 3000,
    parlay2: 200,
    parlay3: 100,
    parlay4: 100,
};
const odds = {
    Sets4: 25,
    special: 92,
    head: 11,
    tail: 11,
    Sets27: 3.8,
    others: 1.98,
    parlay2: 13,
    parlay3: 50,
    parlay4: 120,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 3000,
    minbet: 5,
    odds: odds,
};

export default GameConfigs;
