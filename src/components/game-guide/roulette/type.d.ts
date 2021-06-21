import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    bigSmall: number;
    column: number;
    corner: number;
    dozen: number;
    fourNumbers: number;
    line: number;
    oddEven: number;
    redBlack: number;
    split: number;
    straightUp: number;
    street: number;
    triangle: number;
}

export interface ChoicesMaxBetProps {
    bigSmall: number;
    column: number;
    corner: number;
    dozen: number;
    fourNumbers: number;
    line: number;
    oddEven: number;
    redBlack: number;
    split: number;
    straightUp: number;
    street: number;
    triangle: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}
