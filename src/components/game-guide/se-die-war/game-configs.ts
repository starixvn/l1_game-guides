const choicesMaxBet = {
    player: 3000,
    banker: 3000,
    tie: 3000,
    even: 3000,
    odd: 3000,
    playerEven: 3000,
    playerOdd: 3000,
    playerRed3: 3000,
    playerWhite3: 3000,
    playerRed4: 1000,
    playerWhite4: 1000,
    bankerEven: 3000,
    bankerOdd: 3000,
    bankerRed3: 4000,
    bankerWhite3: 4000,
    bankerRed4: 1000,
    bankerWhite4: 1000,
};

const odds = {
    player: 2.7,
    banker: 2.7,
    tie: 3.6,
    even: 1.98,
    odd: 1.98,
    playerEven: 1.98,
    playerOdd: 1.98,
    playerRed3: 3.77,
    playerWhite3: 3.77,
    playerRed4: 14.6,
    playerWhite4: 14.6,
    bankerEven: 1.98,
    bankerOdd: 1.98,
    bankerRed3: 3.77,
    bankerWhite3: 3.77,
    bankerRed4: 14.6,
    bankerWhite4: 14.6,
};

const GameConfigs = {
    choices_maxbet: choicesMaxBet,
    enableFreeBet: false,
    maxbet: 4000,
    minbet: 10,
    odds: odds,
};

export default GameConfigs;
