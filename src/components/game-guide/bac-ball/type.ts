import { GameConfigs } from "../type";

export interface BacBallGameConfigs extends GameConfigs {
    maxWinPerSubround?: number;
    maxBet: number;
    minBet: number;
    maxBetPerChoices: {
        player: number;
        banker: number;
        tie: number;
    };
    oddsRange?: {
        min: {
            player: number;
            banker: number;
            tie: number;
        };
        max: {
            player: number;
            banker: number;
            tie: number;
        };
    };
}
