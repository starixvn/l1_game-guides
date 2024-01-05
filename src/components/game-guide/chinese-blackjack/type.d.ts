import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    banban: number;
    banluck: number;
    regular: number;
    fiveCardTrick: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: {};
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
}
