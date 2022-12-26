const choicesMaxBet = {
    red: 20000,
    black: 20000,
    diamonds: 20000,
    hearts: 20000,
    spades: 20000,
    clubs: 20000,
};

const odds = {
    red: 1.96,
    black: 1.96,
    diamonds: 1.68,
    hearts: 1.68,
    spades: 1.68,
    clubs: 1.68,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
