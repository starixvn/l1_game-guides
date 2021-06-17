import { GameConfigsProps } from "../type";

export interface OddsProps {
    even: number;
    odd: number;
}

export interface ChoicesMaxBetProps {}

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {}
