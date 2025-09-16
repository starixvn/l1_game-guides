import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    big: number;
    small: number;
    player: number;
    banker: number;
    tie: number;
    playerPair: number;
    bankerPair: number;
}

export interface ChoicesMaxBetProps {
    big: number;
    small: number;
    player: number;
    banker: number;
    tie: number;
    playerPair: number;
    bankerPair: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string | number;
    minBetMain: string | number;
    maxBetSubChoice: string | number;
    maxBetPlayer: string | number;
}

export interface BaccaratGuideState {
    configs: any;
    maxBetFollowChoice: any;
    resources: any;
    md5Resources?: any;
}

export type BaccaratMultiplayerContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName?: string;
    id?: number;
};