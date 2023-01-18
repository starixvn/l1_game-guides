const choicesMaxBet = {
    anteBet: 4000,
    callBet: 8000,
    turnBet: 4000,
    riverBet: 4000,
};

const odds = {
    AnteBet_flush: 10,
    AnteBet_fourKind: 15,
    AnteBet_fullHouse: 12,
    AnteBet_highCard: 2,
    AnteBet_onePair: 2,
    AnteBet_royalFlush: 100,
    AnteBet_straight: 7,
    AnteBet_straightFlush: 15,
    AnteBet_threeKind: 5,
    AnteBet_twoPairs: 2,
    call: 2,
    river: 2,
    turn: 2,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 20000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
