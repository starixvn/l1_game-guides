import { GameConfigsBaseProps } from "../type";

export interface OddsProMaxProps {
    big: number;
    earth: number;
    even: number;
    fire: number;
    gold: number;
    odd: number;
    small: number;
    water: number;
    wood: number;
}

export interface ChoicesMaxBetProMaxProps {
    big: number;
    earth: number;
    even: number;
    fire: number;
    gold: number;
    odd: number;
    small: number;
    water: number;
    wood: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProMaxProps;
    maxBetPerChoices: ChoicesMaxBetProMaxProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
    maxBetBig: string;
    maxBetGold: string;
    maxBetWood: string;
    maxBetWater: string;
    maxBetFire: string;
    maxBetEarth: string;
}
