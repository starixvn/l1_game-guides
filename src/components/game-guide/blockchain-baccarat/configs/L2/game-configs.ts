const choicesMaxBet = {
    player: 50000,
    banker: 50000,
    big: 50000,
    small: 50000,
    tie: 5000,
    playerPair: 5000,
    bankerPair: 5000,
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
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
