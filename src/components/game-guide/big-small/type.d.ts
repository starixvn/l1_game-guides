import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    big: number;
    small: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: {};
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
}
