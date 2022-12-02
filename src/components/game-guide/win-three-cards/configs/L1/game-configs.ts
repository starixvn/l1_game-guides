const choicesMaxBet = {
    dragon: 2000,
    phoenix: 2000,
    pairEightPlus: 500,
    straight: 500,
    flush: 500,
    straightFlush: 500,
    threeOfKind: 500,
};

const odds = {
    dragon: 1.95,
    phoenix: 1.95,
    pairEightPlus: 3,
    straight: 8,
    flush: 9,
    straightFlush: 101,
    threeOfKind: 121,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
