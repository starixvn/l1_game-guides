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
    player: 2.61,
    banker: 2.61,
    tie: 3.51,
    even: 1.97,
    odd: 1.97,
    playerEven: 1.97,
    playerOdd: 1.97,
    playerRed3: 3.76,
    playerWhite3: 3.76,
    playerRed4: 14.41,
    playerWhite4: 14.41,
    bankerEven: 1.97,
    bankerOdd: 1.97,
    bankerRed3: 3.76,
    bankerWhite3: 3.76,
    bankerRed4: 14.5,
    bankerWhite4: 14.5,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    enableFreeBet: false,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
