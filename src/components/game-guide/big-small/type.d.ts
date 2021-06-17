import { GameConfigsProps } from "../type";

export interface OddsProps {
    big: number;
    small: number;
}

export interface ChoicesMaxBetProps {}

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {}
