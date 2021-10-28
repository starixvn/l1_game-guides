import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    dragon: number;
    tiger: number;
    tie: number;
}

export interface ChoicesMaxBetProps {
    dragon: number;
    tiger: number;
    tie: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}
