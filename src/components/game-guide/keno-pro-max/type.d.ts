import { GameConfigsProps } from "../type";

export interface OddsProps {
    big: number;
    earth: number;
    even: number;
    fire: number;
    gold: number;
    odd: number;
    small: number;
    water: number;
    wood: number;
}

export interface ChoicesMaxBetProps {
    big: number;
    earth: number;
    even: number;
    fire: number;
    gold: number;
    odd: number;
    small: number;
    water: number;
    wood: number;
}

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMainChoice: string | number;
    maxBetSubChoice: string | number;
    maxBetRound: string | number;
}
