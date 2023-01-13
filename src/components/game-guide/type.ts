import { UserStakeLevelProps } from "../../pages";

export type GameGuideProps<GameConfigs, MaxBetChoicesProps> = {
    gameConfigs: GameConfigs;
    userStakeLevel?: UserStakeLevelProps;
    gameName: string;
    name?: string;
    gameId?: number;
    locale?: string;
    maxBetFollowChoice?: MaxBetChoicesProps;
    isScrollMD5?: boolean;
    environment?: string;
    project?: string;
    isInPromotionTime?: boolean;
    fractionalOddsFormat?: boolean;
};

export type GameGuideBase = {
    userStakeLevel?: UserStakeLevelProps;
    gameName: string;
    name?: string;
    locale?: string;
    id?: number;
    gameConfigs: GameConfigs;
    gameNameTranslate: string;
    dynamic: boolean;
    isGetGameConfigs?: boolean;
    isScrollMD5?: boolean;
    environment?: string;
    project?: string;
    isInPromotionTime?: boolean;
    fractionalOddsFormat?: boolean;
    gameSetting?: any;
    displayName: string;
};

export interface GameConfigsBaseProps {
    minBet: number;
    maxBet: number;
}

export type GameConfigs = {
    maxBetPerChoices: any;
    maxBet: number;
    minBet: number;
    odds?: any;
    originalOdds?: any;
};
