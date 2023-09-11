import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    pontoon: number;
    regular: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: {};
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
}
