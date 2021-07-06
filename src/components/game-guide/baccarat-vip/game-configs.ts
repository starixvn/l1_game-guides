const choicesMaxBet = {
    banker: 5000,
    bankerPair: 500,
    big: 5000,
    player: 5000,
    playerPair: 500,
    small: 5000,
    tie: 500,
};

const odds = {
    banker: 1.95,
    bankerPair: 12,
    big: 1.54,
    player: 2,
    playerPair: 12,
    small: 2.5,
    tie: 9,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 5000,
    minbet: 10,
    odds: odds,
};

export default GameConfigs;
