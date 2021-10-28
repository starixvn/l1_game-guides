const choicesMaxBet = {
    blue: 2000,
    red: 2000,
    tie: 2000,
    big: 2000,
    small: 2000,
    odd: 2000,
    even: 2000,
    blueBig: 2000,
    blueSmall: 2000,
    redBig: 2000,
    redSmall: 2000,
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
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
