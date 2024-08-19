const GameConfigs = {
    naturalUnits: {
        threeStraights: 3,
        threeFlushes: 3,
        sixPairs: 3,
        dragon: 13,
    },
    royalties: {
        front: {
            threeOfAKind: 3,
        },
        middle: {
            fullHouse: 2,
            fourOfAKind: 8,
            straightFlush: 10,
            royalFlush: 20,
        },
        back: {
            fullHouse: 0,
            fourOfAKind: 4,
            straightFlush: 5,
            royalFlush: 10,
        },
    },
};

export default GameConfigs;
