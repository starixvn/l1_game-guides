import { GameConfigsBaseProps } from "../type";


export interface GameConfigProps extends GameConfigsBaseProps {
    maxWinPerRound?: number;
}

export type LudoContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName?: string;
    id?: number;
};