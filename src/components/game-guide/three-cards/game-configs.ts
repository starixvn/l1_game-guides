const choicesMaxBet = {
    red: 3000,
    black: 3000,
    diamonds: 3000,
    hearts: 3000,
    spades: 3000,
    clubs: 3000,
};
const odds = {
    red: 1.98,
    black: 1.98,
    diamonds: 1.69,
    hearts: 1.69,
    spades: 1.69,
    clubs: 1.69,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 3000,
    minbet: 10,
    odds: odds,
};

export default GameConfigs;
