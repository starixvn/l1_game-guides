const choicesMaxBet = {
    bigSmall: 2000,
    column: 1000,
    corner: 250,
    dozen: 1000,
    fourNumbers: 250,
    line: 400,
    oddEven: 2000,
    redBlack: 2000,
    split: 100,
    straightUp: 50,
    street: 150,
    triangle: 150,
};

const odds = {
    bigSmall: 2,
    column: 3,
    corner: 9,
    dozen: 3,
    fourNumbers: 9,
    line: 6,
    oddEven: 2,
    redBlack: 2,
    split: 18,
    straightUp: 36,
    street: 12,
    triangle: 12,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: true,
    maxbet: 2000,
    minbet: 1,
    odds: odds,
};

export default GameConfigs;
