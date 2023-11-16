const choicesMaxBet = { dragon: 3000, tiger: 3000, tie: 3000, blackDragon: 3000, redDragon: 3000, blackTiger: 3000, redTiger: 3000 };

const odds = { dragon: 1.97, tiger: 1.97, tie: 3.76, blackDragon: 3.76, redDragon: 14.5, blackTiger: 14.5, redTiger: 2.5 };

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 3000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
