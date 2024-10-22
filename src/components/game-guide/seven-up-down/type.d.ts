import { UserStakeLevelProps } from "../../../pages";
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

export type SevenUpDownContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
    userStakeLevel: UserStakeLevelProps | undefined;
};
