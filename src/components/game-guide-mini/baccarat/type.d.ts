import { GameConfigsBaseProps } from "../../game-guide/type";

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