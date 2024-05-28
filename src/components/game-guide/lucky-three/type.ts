import { GameConfigs } from "../type";

export interface LuckyThreeGameConfigs extends GameConfigs {
    maxWinPerRound?: number;
    maxBet: number;
    minBet: number;
    maxBetPerChoices: {
        over: number;
        under: number;
        blue2: number;
        blue3: number;
        red2: number;
        red3: number;
    };
    oddsRange?: {
        min: {
            over: number;
            under: number;
            blue2: number;
            blue3: number;
            red2: number;
            red3: number;
        };
        max: {
            over: number;
            under: number;
            blue2: number;
            blue3: number;
            red2: number;
            red3: number;
        };
    };
}
