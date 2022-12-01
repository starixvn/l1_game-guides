const choicesMaxBet = {
    ["4Sets"]: 2000,
    special: 1000,
    head: 5000,
    tail: 5000,
    ["27Sets"]: 20000,
    others: 20000,
};
const odds = {
    Sets4: 24.01,
    special: 90.01,
    head: 9.01,
    tail: 9.01,
    Sets27: 3.61,
    others: 1.97,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
