const choicesMaxBet = {
    blue: 20000,
    red: 20000,
    tie: 20000,
    big: 20000,
    small: 20000,
    odd: 20000,
    even: 20000,
    blueBig: 20000,
    blueSmall: 20000,
    redBig: 20000,
    redSmall: 20000,
};

const odds = {
    blue: 1.96,
    red: 1.96,
    tie: 1.96,
    big: 1.96,
    small: 1.96,
    even: 1.96,
    odd: 1.96,
    blueBig: 1.96,
    blueSmall: 1.96,
    redBig: 1.96,
    redSmall: 1.96,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
