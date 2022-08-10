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
    straightUp: 36,
    split: 18,
    street: 12,
    triangle: 12,
    corner: 9,
    fourNumbers: 9,
    line: 6,
    column: 3,
    dozen: 3,
    redBlack: 2,
    oddEven: 2,
    bigSmall: 2,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: true,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
