import { GameConfigsBaseProps } from "../../game-guide/type";
export interface ChoicesMaxBetProps {
    dragon: number;
    tiger: number;
    tie: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
    maxBetDragon: string;
    maxBetTie: string;
}
