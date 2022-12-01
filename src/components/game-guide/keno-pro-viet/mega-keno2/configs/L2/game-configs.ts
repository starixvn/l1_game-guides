const choicesMaxBet = {
    big: 20000,
    small: 20000,
    odd: 20000,
    even: 20000,
    gold: 5000,
    wood: 15000,
    water: 20000,
    fire: 15000,
    earth: 5000,
};
const odds = {
    big: 1.97,
    small: 1.97,
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
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
