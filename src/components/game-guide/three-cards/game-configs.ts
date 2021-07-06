const choicesMaxBet = {
    black: 2000,
    clubs: 2000,
    diamonds: 2000,
    hearts: 2000,
    red: 2000,
    spades: 2000,
};
const odds = {
    black: 1.96,
    clubs: 1.68,
    diamonds: 1.68,
    hearts: 1.68,
    red: 1.96,
    spades: 1.68,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 2000,
    minbet: 1,
    odds: odds,
};

export default GameConfigs;
