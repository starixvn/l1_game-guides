import { GameConfigsBaseProps } from "../../game-guide/type";

export interface ChoicesMaxBetProps {
    big: number;
    small: number;
    specific1: number;
    specific2: number;
    specific3: number;
    specific4: number;
    specific5: number;
    specific6: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain?: number | string;
    minBetMain?: number | string;
    maxBetSpecific1: number | string;
    maxBetBig: number | string;
}
