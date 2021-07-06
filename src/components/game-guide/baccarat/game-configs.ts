const choicesMaxBet = {
    banker: 2000,
    bankerPair: 500,
    big: 2000,
    player: 2000,
    playerPair: 500,
    small: 2000,
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
    maxbet: 2000,
    minbet: 1,
    odds: odds,
};

export default GameConfigs;
