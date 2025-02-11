const choicesMaxBet = {
    dragon: 3000,
    tiger: 3000,
    tie: 2000,
    redDragon: 2000,
    blackDragon: 2000,
    redTiger: 2000,
    blackTiger: 2000,
};

const odds = {
    dragon: 1.97,
    tiger: 1.97,
    tie: 3.76,
    redDragon: 14.5,
    blackDragon: 3.76,
    redTiger: 2.5,
    blackTiger: 14.5,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 3000,
    minBet: 1,
    odds: odds,
};

export const betOptionsPortraitGame = ["dragon", "tiger", "tie"];

export default GameConfigs;
