const choicesMaxBet = { player: 3000, tie: 1000, anyPair: 3000 };

const odds = { player: 2, banker: 1.97, tie: 9, anyPair: 7 };

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 3000,
    minBet: 1,
    odds: odds,
    extraFeeRatio: 0.25,
};

export default GameConfigs;
