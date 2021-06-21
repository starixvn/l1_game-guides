const choicesMaxBet = {
    black: 3000,
    clubs: 3000,
    diamonds: 3000,
    hearts: 3000,
    red: 3000,
    spades: 3000,
};
const odds = {
    black: 1.97,
    clubs: 1.69,
    diamonds: 1.69,
    hearts: 1.69,
    red: 1.97,
    spades: 1.69,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 3000,
    minbet: 1,
    odds: odds,
};

export default GameConfigs;
