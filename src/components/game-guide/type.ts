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
    scrollToId?: string;
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
    folderConfigName?: string;
    displayName?: string;
    jackpot?: boolean;
    jackpotConfigs?: JackpotConfigs;
    scrollToId?: string;
};

export interface JackpotConfigs {
    winningRatio: number;
    pools: JackpotPool[];
}

interface JackpotPool {
    pool: string;
    contribute: number;
}

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
    maxWinPerRound?: number;
    maxMultiplier?: number;
    enableFreeBet?: boolean;
    chips?: number[];
    stakeLevels?: number[];
    extraFeeRatio?: number;
};
