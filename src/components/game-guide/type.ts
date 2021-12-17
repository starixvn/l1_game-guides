import { UserStakeLevelProps } from "../../pages";

export type GameGuideProps<GameConfigs, MaxBetChoicesProps> = {
    gameConfigs: GameConfigs;
    userStakeLevel?: UserStakeLevelProps;
    gameName: string;
    gameId?: number;
    locale?: string;
    maxBetFollowChoice?: MaxBetChoicesProps;
};

export type GameGuideBase = {
    userStakeLevel?: UserStakeLevelProps;
    gameName: string;
    locale?: string;
    id?: number;
    gameConfigs: GameConfigs;
    gameNameTranslate: string;
    dynamic: boolean;
    isGetGameConfigs?: boolean;
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
};
