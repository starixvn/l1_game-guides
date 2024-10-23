const choicesMaxBet = { up: 3000, seven: 3000, down: 3000 };

const odds = { up: 2, seven: 5, down: 2 };

const multiplierRange = {
    min: 2,
    max: 8,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
    multiplierRange: multiplierRange,
};

export default GameConfigs;
