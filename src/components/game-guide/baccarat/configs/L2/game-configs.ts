const choicesMaxBet = {
    player: 20000,
    banker: 20000,
    big: 20000,
    small: 20000,
    tie: 2000,
    playerPair: 2000,
    bankerPair: 2000,
};

const odds = {
    player: 2.01,
    banker: 1.96,
    big: 1.55,
    small: 2.51,
    tie: 9.01,
    playerPair: 12.01,
    bankerPair: 12.01,
};
const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
