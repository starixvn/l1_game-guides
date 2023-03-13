const choicesMaxBet = {
    dragon: 20000,
    tiger: 20000,
    tie: 2000,
};

const odds = {
    dragon: 2,
    tiger: 2,
    tie: 11,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
