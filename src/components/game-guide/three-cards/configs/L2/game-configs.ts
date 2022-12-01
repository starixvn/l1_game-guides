const choicesMaxBet = {
    red: 20000,
    black: 20000,
    diamonds: 20000,
    hearts: 20000,
    spades: 20000,
    clubs: 20000,
};

const odds = {
    red: 1.97,
    black: 1.97,
    diamonds: 1.69,
    hearts: 1.69,
    spades: 1.69,
    clubs: 1.69,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
