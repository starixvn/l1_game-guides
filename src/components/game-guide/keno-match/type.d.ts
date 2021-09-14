import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    fhBlue: number;
    fhEven: number;
    fhOdd: number;
    fhOver: number;
    fhRed: number;
    fhUnder: number;
    ftBlue: number;
    ftEven: number;
    ftOdd: number;
    ftOver: number;
    ftRed: number;
    ftUnder: number;
    liveFTEven: number;
    liveFTOdd: number;
    liveFTBlue: number;
    liveFTOver: number;
    liveFTRed: number;
    liveFTUnder: number;
}

export interface ChoicesMaxBetProps {
    fhBlue: number;
    fhEven: number;
    fhOdd: number;
    fhOver: number;
    fhRed: number;
    fhUnder: number;
    ftBlue: number;
    ftEven: number;
    ftOdd: number;
    ftOver: number;
    ftRed: number;
    ftUnder: number;
    liveFTEven: number;
    liveFTOdd: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetRound: string | number;
    maxBetBlueChoice: string | number;
    maxBetRedChoice: string | number;
    maxBetOverChoice: string | number;
    maxBetUnderChoice: string | number;
    maxBetEvenChoice: string | number;
    maxBetEvenLiveChoice: string | number;
}
