const choicesMaxBet = { home: 3000, away: 3000, draw: 3000 };

const odds = { home: 1.97, away: 2.97, draw: 8, draw12: 50 };

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
