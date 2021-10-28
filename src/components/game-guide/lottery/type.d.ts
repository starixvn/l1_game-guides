import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    Sets4: number;
    Sets27: number;
    head: number;
    others: number;
    special: number;
    tail: number;
}

export interface ChoicesMaxBetProps {
    Sets4: number;
    Sets27: number;
    head: number;
    others: number;
    special: number;
    tail: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}
