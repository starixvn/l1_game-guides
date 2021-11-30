import { OddsProMaxProps, ChoicesMaxBetProMaxProps } from "./../keno-pro-max/type.d";
import { GameConfigsBaseProps } from "../type";

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
