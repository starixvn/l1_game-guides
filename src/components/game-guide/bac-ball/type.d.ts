export interface BacBallGameConfigs extends GameConfigs {
    maxWinPerSubround?: number;
    maxBet: number;
    minBet: number;
    odds?: {
        min: number;
        max: number;
    };
    betLimit?: {
        min: number;
        max: number;
    };
}
