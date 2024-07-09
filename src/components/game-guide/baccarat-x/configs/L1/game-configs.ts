const choicesMaxBet = { player: 3000, tie: 1000, playerPair: 3000 };

const odds = { player: 1.96, banker: 1.95, tie: 5, playerPair: 8, bankerPair: 8 };

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 3000,
    minBet: 1,
    odds: odds,
    extraFeeRatio: 0.25,
};

export default GameConfigs;
