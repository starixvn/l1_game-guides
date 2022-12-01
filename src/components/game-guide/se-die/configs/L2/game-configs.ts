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
    even: 1.97,
    odd: 1.97,
    red2: 2.41,
    red4: 14.41,
    white4: 14.41,
    white3: 3.76,
    red3: 3.76,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
