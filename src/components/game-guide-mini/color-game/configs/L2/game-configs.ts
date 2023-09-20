const choicesMaxBet = { yellow: 3000, red: 3000, pink: 3000, white: 3000, blue: 3000, green: 3000, hot: 3000, cold: 3000 };

const odds = { single: 1.97, double: 2.97, triple: 3.76, hot: 3.76, cold: 2.5 };

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
