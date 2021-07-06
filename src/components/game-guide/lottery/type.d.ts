import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    Sets4: number;
    Sets27: number;
    head: number;
    others: number;
    parlay2: number;
    parlay3: number;
    parlay4: number;
    special: number;
    tail: number;
}

export interface ChoicesMaxBetProps {
    Sets4: number;
    Sets27: number;
    head: number;
    others: number;
    parlay2: number;
    parlay3: number;
    parlay4: number;
    special: number;
    tail: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}
