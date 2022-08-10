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
    player: 2,
    banker: 1.95,
    big: 1.54,
    small: 2.5,
    tie: 9,
    playerPair: 12,
    bankerPair: 12,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
