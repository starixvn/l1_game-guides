const choicesMaxBet = {
    player: 3000,
    banker: 3000,
    big: 3000,
    small: 3000,
    tie: 2000,
    playerPair: 2000,
    bankerPair: 2000,
};

const odds = {
    player: 4,
    banker: 1.97,
    big: 1.56,
    small: 2.7,
    tie: 11,
    playerPair: 13,
    bankerPair: 13,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 3000,
    minbet: 10,
    odds: odds,
};

export default GameConfigs;
