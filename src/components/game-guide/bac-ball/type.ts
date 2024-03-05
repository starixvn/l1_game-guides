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
    odds?: {
        player: {
            min: number;
            max: number;
        };
        banker: {
            min: number;
            max: number;
        };
        tie: {
            min: number;
            max: number;
        };
    };
}
