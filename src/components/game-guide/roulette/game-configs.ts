const choicesMaxBet = {
    straightUp: 100,
    split: 200,
    street: 300,
    triangle: 300,
    corner: 400,
    fourNumbers: 400,
    line: 500,
    column: 2000,
    dozen: 3000,
    redBlack: 3000,
    oddEven: 3000,
    bigSmall: 3000,
};

const odds = {
    straightUp: 37,
    split: 20,
    street: 14,
    triangle: 14,
    corner: 11,
    fourNumbers: 11,
    line: 8,
    column: 4,
    dozen: 4,
    redBlack: 3,
    oddEven: 3,
    bigSmall: 3,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: true,
    maxbet: 4000,
    minbet: 5,
    odds: odds,
};

export default GameConfigs;
