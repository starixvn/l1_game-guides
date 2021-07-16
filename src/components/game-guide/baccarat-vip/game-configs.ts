const choicesMaxBet = {
    player: 6000,
    banker: 6000,
    big: 6000,
    small: 6000,
    tie: 800,
    playerPair: 800,
    bankerPair: 800,
};

const odds = {
    player: 3,
    banker: 1.96,
    big: 1.55,
    small: 2.7,
    tie: 11,
    playerPair: 14,
    bankerPair: 14,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 6000,
    minbet: 20,
    odds: odds,
};

export default GameConfigs;
