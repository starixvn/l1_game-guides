const choicesMaxBet = {
    even: 2000,
    odd: 2000,
    fan1: 1000,
    fan2: 1000,
    fan3: 1000,
    fan4: 1000,
    kwok12: 2000,
    kwok23: 2000,
    kwok34: 2000,
    kwok41: 2000,
    chun123: 2000,
    chun124: 2000,
    chun134: 2000,
    chun234: 2000,
};

const odds = {
    even: 1.96,
    odd: 1.96,
    fan1: 3.75,
    fan2: 3.75,
    fan3: 3.75,
    fan4: 3.75,
    kwok12: 1.96,
    kwok23: 1.96,
    kwok34: 1.96,
    kwok41: 1.96,
    chun123: 1.36,
    chun124: 1.36,
    chun134: 1.36,
    chun234: 1.36,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
