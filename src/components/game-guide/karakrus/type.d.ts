import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../type";

export interface OddsProps {
    home: number;
    draw: number;
    away: number;
}

export interface ChoicesMaxBetProps {
    home: number;
    draw: number;
    away: number;
}

export type KaraKrusContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName?: string;
    environment?: string;
};
