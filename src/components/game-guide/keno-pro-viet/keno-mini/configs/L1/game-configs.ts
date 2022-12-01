const choicesMaxBet = {
    big: 2000,
    small: 2000,
    odd: 2000,
    even: 2000,
    gold: 500,
    wood: 1500,
    water: 2000,
    fire: 1500,
    earth: 500,
};
const odds = {
    big: 1.99,
    small: 1.95,
    odd: 1.97,
    even: 1.97,
    gold: 9.21,
    wood: 4.61,
    water: 2.41,
    fire: 4.61,
    earth: 9.21,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
