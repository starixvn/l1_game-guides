import { GameConfigsBaseProps } from "../type";
import { OddsFPCProps, ChoicesMaxBetFPCProps } from "../fish-prawn-crab/type";

export interface OddsProps extends OddsFPCProps {
    anyTriple: number;
    mountain: number;
    ocean: number;
}

export interface ChoicesMaxBetProps extends ChoicesMaxBetFPCProps {
    anyTriple: number;
    mountain: number;
    ocean: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string | number;
    minBetMain: string | number;
    maxBetAnyTriple: string | number;
    maxBetFish: string | number;
}
