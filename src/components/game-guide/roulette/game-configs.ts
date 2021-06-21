const choicesMaxBet = {
    bigSmall: 2000,
    column: 2000,
    corner: 800,
    dozen: 2000,
    fourNumbers: 800,
    line: 1000,
    oddEven: 2000,
    redBlack: 2000,
    split: 400,
    straightUp: 200,
    street: 600,
    triangle: 600,
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
