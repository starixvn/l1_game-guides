const choicesMaxBet = {
    Sets4: 2000,
    special: 1000,
    head: 5000,
    tail: 5000,
    Sets27: 20000,
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
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 20000,
    minbet: 10,
    odds: odds,
};

export default GameConfigs;
