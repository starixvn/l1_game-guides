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
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMainChoice: string | number;
    maxBetSubChoice: string | number;
    maxBetRound: string | number;
}
