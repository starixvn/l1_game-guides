const choicesMaxBet = { spade: 3000, heart: 3000, club: 3000, diamond: 3000 };

const odds = { sixDevil: 7, twin: 6, small: 5, big: 4, qiuQiu: 3, ordinaryCard: 2 };

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
