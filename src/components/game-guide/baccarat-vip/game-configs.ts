const choicesMaxBet = {
    player: 5000,
    banker: 5000,
    big: 5000,
    small: 5000,
    tie: 500,
    playerPair: 500,
    bankerPair: 500,
};

const odds = {
    player: 2,
    banker: 1.95,
    big: 1.54,
    small: 2.5,
    tie: 8,
    playerPair: 11,
    bankerPair: 11,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 5000,
    minbet: 50,
    odds: odds,
};

export default GameConfigs;
