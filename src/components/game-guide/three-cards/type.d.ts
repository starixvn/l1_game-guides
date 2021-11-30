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
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
    maxBetRed: string;
    maxBetDiamonds: string;
}
