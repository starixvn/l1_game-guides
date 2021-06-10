import { UserStakeLevel } from "../../pages";

export type GameGuide = {
    gameConfigs: GameConfigsProps;
    userStakeLevel: UserStakeLevel;
    gameName: string;
    gameId?: number;
    locale?: string;
    maxBetFollowChoice?: any;
};

export type GameGuideBase = {
    userStakeLevel: UserStakeLevel;
    gameName: string;
    locale?: string;
    id?: number;
};

export interface GameConfigsProps {
    odds: { [key: string]: number };
    minbet: number;
    maxbet: number;
    choices_maxbet: any;
    enableFreeBet: boolean;
}
