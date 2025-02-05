const choicesMaxBet = { up: 1000, seven: 1000, down: 1000 };

const odds = { up: 1, seven: 4, down: 1 };

const multipliers = [2, 3, 4, 5, 6, 7, 8];

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    maxWin: 320,
    odds: odds,
    multipliers: multipliers,
};

export default GameConfigs;
