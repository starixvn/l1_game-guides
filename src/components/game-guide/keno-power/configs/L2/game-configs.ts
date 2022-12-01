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
    blue: 1.97,
    red: 1.97,
    tie: 1.97,
    big: 1.97,
    small: 1.97,
    even: 1.97,
    odd: 1.97,
    blueBig: 1.97,
    blueSmall: 1.97,
    redBig: 1.97,
    redSmall: 1.97,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
