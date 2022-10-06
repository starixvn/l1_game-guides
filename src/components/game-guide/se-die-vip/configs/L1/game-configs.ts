const choicesMaxBet = {
    even: 5000,
    odd: 5000,
    red4: 500,
    white4: 500,
    white3: 5000,
    red3: 5000,
    red2: 5000,
};
const odds = {
    even: 1.96,
    odd: 1.96,
    red4: 14.4,
    white4: 14.4,
    white3: 3.75,
    red3: 3.75,
    red2: 2.4,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 5000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
