import { GameConfigs } from "../type";

export interface PusoyGameConfigs extends GameConfigs {
    naturalUnits: {
        threeStraights: number;
        threeFlushes: number;
        sixPairs: number;
        dragon: number;
    };

    royalties: {
        front: {
            threeOfAKind: number;
        };
        middle: {
            fullHouse: number;
            fourOfAKind: number;
            straightFlush: number;
            royalFlush: number;
        };
        back: {
            fullHouse: number;
            fourOfAKind: number;
            straightFlush: number;
            royalFlush: number;
        };
    };
}
