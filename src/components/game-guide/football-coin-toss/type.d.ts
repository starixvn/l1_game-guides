import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../type";

export interface OddsProps {
    home: number;
    away: number;
}

export interface ChoicesMaxBetProps {
    home: number;
    away: number;
}

export type FootballCoinTossContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
    userStakeLevel: UserStakeLevelProps | undefined;
};
