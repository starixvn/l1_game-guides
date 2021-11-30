import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    even: number;
    odd: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: {};
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
}
