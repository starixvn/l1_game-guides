import { GameConfigsBaseProps } from "../type";

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

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}
