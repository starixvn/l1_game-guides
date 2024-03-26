import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../type";

export interface NextBallGameConfigs extends GameConfigs {
    maxWinPerRound?: number;
    maxBet: number;
    minBet: number;
    maxBetPerChoices: {
        odd: number;
        even: number;
        over: number;
        under: number;
    };
    oddsRange?: {
        min: {
            odd: number;
            even: number;
            over: number;
            under: number;
        };
        max: {
            odd: number;
            even: number;
            over: number;
            under: number;
        };
    };
}

export interface NextBallGameGuideContentsProps {
    gameConfigs: NextBallGameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}
