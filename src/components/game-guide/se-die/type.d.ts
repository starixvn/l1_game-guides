import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    even: number;
    odd: number;
    red2?: number;
    red3: number5;
    red4: number;
    white3: number5;
    white4: number;
}

export interface ChoicesMaxBetProps {
    even: number;
    odd: number;
    red2?: number;
    red3: number;
    red4: number;
    white3: number;
    white4: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain?: number | string;
    maxBetRed4?: number | string;
    maxBetRed3?: number | string;
    maxBetRed2?: number | string;
    maxBetRound?: number | string;
}
