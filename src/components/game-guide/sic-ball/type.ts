import { GameConfigs } from "../type";

export interface SicBallGameConfigs extends GameConfigs {
    maxWinPerRound?: number;
    maxBet: number;
    minBet: number;
    maxBetPerChoices: {
        big: number;
        small: number;
        single: number;
        double: number;
        triple: number;
    };
    odds?: {
        big: number;
        small: number;
        single: number;
        double: number;
        triple: number;
    };
}
