const choicesMaxBet = {
    straightUp: 2000,
    split: 4000,
    street: 6000,
    triangle: 6000,
    corner: 8000,
    fourNumbers: 8000,
    line: 12000,
    column: 20000,
    dozen: 20000,
    redBlack: 20000,
    oddEven: 20000,
    bigSmall: 20000,
};

const odds = {
    straightUp: 36.01,
    split: 18.01,
    street: 12.01,
    triangle: 12.01,
    corner: 9.01,
    fourNumbers: 9.01,
    line: 6.01,
    column: 3.01,
    dozen: 3.01,
    redBlack: 2.01,
    oddEven: 2.01,
    bigSmall: 2.01,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: true,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
