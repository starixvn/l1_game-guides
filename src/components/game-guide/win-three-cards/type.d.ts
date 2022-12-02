import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    dragon: number;
    phoenix: number;
    pair8Plus: number;
    straight: number;
    flush: number;
    straightFlush: number;
    threeOfAKind: number;
}

export interface ChoicesMaxBetProps {
    dragon: number;
    phoenix: number;
    pair8Plus: number;
    straight: number;
    flush: number;
    straightFlush: number;
    threeOfAKind: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
}
