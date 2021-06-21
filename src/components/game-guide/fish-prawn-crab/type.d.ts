import { GameConfigsBaseProps } from "../type";

export interface OddsFPCProps  {
    single: number;
    double: number;
    triple: number;
}

export interface ChoicesMaxBetFPCProps {
    fish: number;
    prawn: number;
    crab: number;
    stag: number;
    gourd: number;
    rooster: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsFPCProps;
    choices_maxbet: ChoicesMaxBetFPCProps;
}
