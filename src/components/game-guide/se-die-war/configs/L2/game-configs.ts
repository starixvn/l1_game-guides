const choicesMaxBet = {
    player: 20000,
    banker: 20000,
    tie: 20000,
    even: 20000,
    odd: 20000,
    playerEven: 20000,
    playerOdd: 20000,
    playerRed3: 10000,
    playerWhite3: 10000,
    playerRed4: 2000,
    playerWhite4: 2000,
    bankerEven: 20000,
    bankerOdd: 20000,
    bankerRed3: 10000,
    bankerWhite3: 10000,
    bankerRed4: 2000,
    bankerWhite4: 2000,
};

const odds = {
    player: 2.6,
    banker: 2.6,
    tie: 3.5,
    even: 1.96,
    odd: 1.96,
    playerEven: 1.96,
    playerOdd: 1.96,
    playerRed3: 3.75,
    playerWhite3: 3.75,
    playerRed4: 14.4,
    playerWhite4: 14.4,
    bankerEven: 1.96,
    bankerOdd: 1.96,
    bankerRed3: 3.75,
    bankerWhite3: 3.75,
    bankerRed4: 14.4,
    bankerWhite4: 14.4,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
