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
    player: 2,
    banker: 1.95,
    big: 1.54,
    small: 2.5,
    tie: 9,
    playerPair: 12,
    bankerPair: 12,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 20000,
    minbet: 100,
    odds: odds,
};

export default GameConfigs;
