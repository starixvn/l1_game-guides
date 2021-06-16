const choicesMaxBet = {
    banker: 2000,
    bankerEven: 2000,
    bankerOdd: 2000,
    bankerRed3: 2000,
    bankerRed4: 500,
    bankerWhite3: 2000,
    bankerWhite4: 500,
    even: 2000,
    odd: 2000,
    player: 2000,
    playerEven: 2000,
    playerOdd: 2000,
    playerRed3: 2000,
    playerRed4: 500,
    playerWhite3: 2000,
    playerWhite4: 500,
    tie: 2000,
};
const odds = {
    banker: 2.6,
    bankerEven: 1.96,
    bankerOdd: 1.96,
    bankerRed3: 3.75,
    bankerRed4: 14.4,
    bankerWhite3: 3.75,
    bankerWhite4: 14.4,
    even: 1.96,
    odd: 1.96,
    player: 2.6,
    playerEven: 1.96,
    playerOdd: 1.96,
    playerRed3: 3.75,
    playerRed4: 14.4,
    playerWhite3: 3.75,
    playerWhite4: 14.4,
    tie: 3.5,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 2000,
    minbet: 1,
    odds: odds,
};

export default GameConfigs;
