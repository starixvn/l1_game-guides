import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    black: number;
    clubs: number;
    diamonds: number;
    hearts: number;
    red: number;
    spades: number;
}

export interface ChoicesMaxBetProps {
    black: number;
    clubs: number;
    diamonds: number;
    hearts: number;
    red: number;
    spades: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}
