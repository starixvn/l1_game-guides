import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    blue: number;
    red: number;
    tie: number;
    big: number;
    small: number;
    even: number;
    odd: number;
    blueBig: number;
    blueSmall: number;
    redBig: number;
    redSmall: number;
}

export interface ChoicesMaxBetProps {
    blue: number;
    red: number;
    tie: number;
    big: number;
    small: number;
    even: number;
    odd: number;
    blueBig: number;
    blueSmall: number;
    redBig: number;
    redSmall: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetRound: string | number;
    maxBetBlueChoice: string | number;
    maxBetBlueRedChoice: string | number;
}
