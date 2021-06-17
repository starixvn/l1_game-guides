import { GameConfigsProps } from "../type";

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

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsFPCProps;
    choices_maxbet: ChoicesMaxBetFPCProps;
}

export interface MaxBetChoicesProps {}
