import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    even: number;
    odd: number;
    fan1: number;
    fan2: number;
    fan3: number;
    fan4: number;
    kwok12: number;
    kwok23: number;
    kwok34: number;
    kwok41: number;
    chun123: number;
    chun124: number;
    chun134: number;
    chun234: number;
}

export interface ChoicesMaxBetProps {
    even: number;
    odd: number;
    fan1: number;
    fan2: number;
    fan3: number;
    fan4: number;
    kwok12: number;
    kwok23: number;
    kwok34: number;
    kwok41: number;
    chun123: number;
    chun124: number;
    chun134: number;
    chun234: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: ChoicesMaxBetProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string | number;
    minBetMain: string | number;
    maxBetEven: string | number;
    maxBetFan1: string | number;
    maxBetKwok12: string | number;
    maxBetChun123: string | number;
}
