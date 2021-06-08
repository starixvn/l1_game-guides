import { UserStakeLevel } from "../../pages";
export type GameGuide = {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevel;
    gameName: string;
    gameId?: number;
    locale?: string;
};

export type GameGuideBase = {
    userStakeLevel: UserStakeLevel;
    gameName: string;
    locale?: string;
};

export interface GameConfigs {
    odds: { [key: string]: number };
    minbet: number;
    maxbet: number;
    choices_maxbet: any;
    enableFreeBet: boolean;
}
