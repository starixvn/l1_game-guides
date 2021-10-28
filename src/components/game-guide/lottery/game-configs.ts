const choicesMaxBet = {
    Sets4: 200,
    special: 100,
    head: 500,
    tail: 500,
    Sets27: 2000,
    others: 2000,
    parlay2: 200,
    parlay3: 100,
    parlay4: 100,
};
const odds = {
    Sets4: 24,
    special: 90,
    head: 9,
    tail: 9,
    Sets27: 3.6,
    others: 1.96,
    parlay2: 13,
    parlay3: 50,
    parlay4: 120,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
