import { GameConfigsBaseProps } from "../type";

export interface OddsProMaxProps {
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

export interface ChoicesMaxBetProMaxProps {
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
    odds: OddsProMaxProps;
    choices_maxbet: ChoicesMaxBetProMaxProps;
}

export interface MaxBetChoicesProps {
    maxBetMainChoice: string | number;
    maxBetSubChoice: string | number;
    maxBetRound: string | number;
}
