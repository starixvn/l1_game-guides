const choicesMaxBet = {
    ["4Sets"]: 2000,
    special: 1000,
    head: 5000,
    tail: 5000,
    ["27Sets"]: 20000,
    others: 20000,
};
const odds = {
    Sets4: 24,
    special: 90,
    head: 9,
    tail: 9,
    Sets27: 3.6,
    others: 1.96,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
