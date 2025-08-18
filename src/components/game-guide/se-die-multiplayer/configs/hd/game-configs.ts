const choicesMaxBet = {
    even: 20000,
    odd: 20000,
    red2: 20000,
    red4: 2000,
    white4: 2000,
    white3: 10000,
    red3: 10000,
};

const odds = {
    even: 1.96,
    odd: 1.96,
    red2: 2.4,
    red4: 14.4,
    white4: 14.4,
    white3: 3.75,
    red3: 3.75,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
