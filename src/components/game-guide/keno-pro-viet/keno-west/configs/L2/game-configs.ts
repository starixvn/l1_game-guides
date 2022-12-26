const choicesMaxBet = {
    big: 20000,
    small: 20000,
    odd: 20000,
    even: 20000,
    gold: 2000,
    wood: 4000,
    water: 20000,
    fire: 4000,
    earth: 2000,
};

const odds = {
    big: 1.96,
    small: 1.96,
    odd: 1.96,
    even: 1.96,
    gold: 9.2,
    wood: 4.6,
    water: 2.4,
    fire: 4.6,
    earth: 9.2,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
