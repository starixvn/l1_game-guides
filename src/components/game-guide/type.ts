import { UserStakeLevelProps } from "../../pages";

export type GameGuideProps<GameConfigs, MaxBetChoicesProps> = {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps;
    gameName: string;
    gameId?: number;
    locale?: string;
    maxBetFollowChoice?: MaxBetChoicesProps;
    market?: string;
};

export type GameGuideBase = {
    userStakeLevel: UserStakeLevelProps;
    gameName: string;
    locale?: string;
    id?: number;
    market: string;
};

export interface GameConfigsBaseProps {
    minbet: number;
    maxbet: number;
    enableFreeBet?: boolean;
}
