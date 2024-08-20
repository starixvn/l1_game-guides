import { GameConfigs } from "../type";

export enum Natural {
    Unknown = "",
    ThreeStraights = "threeStraights",
    ThreeFlushes = "threeFlushes",
    SixPairs = "sixPairs",
    Dragon = "dragon",
}
interface NaturalConfig {
    name: Natural;
    units: number;
}

interface PusoyConfig {
    full: {
        isWinnerTakeAll: boolean;
        units: number;
    };
    mini: number;
}

interface RoyaltyConfig {
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
}

interface ScoreConfig {
    id: number;
    normal: number;
    natural: NaturalConfig[];
    crack: number;
    pusoy: PusoyConfig;
    royalty: RoyaltyConfig;
}

export interface PusoyGameConfigs extends GameConfigs {
    scoreConfig: ScoreConfig;
}
