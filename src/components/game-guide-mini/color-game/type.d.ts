import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../type";

export interface OddsProps {
    yellow: number;
    red: number;
    pink: number;
    white: number;
    blue: number;
    green: number;
    hot: number;
    cold: number;
}

export interface ChoicesMaxBetProps {
    yellow: number;
    red: number;
    pink: number;
    white: number;
    blue: number;
    green: number;
    hot: number;
    cold: number;
}

export type ColorGameContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
    userStakeLevel: UserStakeLevelProps | undefined;
};
