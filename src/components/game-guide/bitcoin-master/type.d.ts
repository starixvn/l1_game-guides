import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    down: number;
    even: number;
    odd: number;
    up: number;
}

export interface ChoicesMaxBetProps {
    down: number;
    even: number;
    odd: number;
    up: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
    maxBetUp: string;
}
