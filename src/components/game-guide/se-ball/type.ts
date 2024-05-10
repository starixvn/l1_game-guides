import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../type";

export interface SeBallGameConfigs extends GameConfigs {
    maxWinPerRound?: number;
    maxBet: number;
    minBet: number;
    maxBetPerChoices: {
        odd: number;
        even: number;
        blue3: number;
        blue4: number;
        red2: number;
        red3: number;
        red4: number;
    };
    odds?: {
        odd: number;
        even: number;
        blue3: number;
        blue4: number;
        red2: number;
        red3: number;
        red4: number;
    };
}

export interface SeBallGameGuideContentsProps {
    gameConfigs: SeBallGameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
}
