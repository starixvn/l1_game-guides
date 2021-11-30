import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    head: number;
    others: number;
    special: number;
    tail: number;
    ["4Sets"]: number;
    ["27Sets"]: number;
}

export interface ChoicesMaxBetProps {
    head: number;
    others: number;
    special: number;
    tail: number;
    ["4Sets"]: number;
    ["27Sets"]: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
    maxBetSets4: string;
    maxBetSets27: string;
    maxBetHead: string;
    maxBetTail: string;
    maxBetSpecial: string;
    maxBetOthers: string;
}
