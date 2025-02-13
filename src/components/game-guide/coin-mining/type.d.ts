import { GameConfigs } from "../type";

export interface OddsProps {
    up: number;
    seven: number;
    down: number;
}

export interface ChoicesMaxBetProps {
    up: number;
    seven: number;
    down: number;
}

export type CoinMiningContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    displayName: string | undefined;
    userStakeLevel: UserStakeLevelProps | undefined;
};
