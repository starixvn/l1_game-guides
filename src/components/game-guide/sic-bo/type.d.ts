import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    anyTriple: number;
    big: number;
    double: number;
    single: number;
    small: number;
    total4: number;
    total5: number;
    total6: number;
    total7: number;
    total8: number;
    total9: number;
    total10: number;
    total11: number;
    total12: number;
    total13: number;
    total14: number;
    total15: number;
    total16: number;
    total17: number;
    triple: number;
}

export interface ChoicesMaxBetProps {
    anyTriple: number;
    big: number;
    small: number;
    specific1: number;
    specific2: number;
    specific3: number;
    specific4: number;
    specific5: number;
    specific6: number;
    total4: number;
    total5: number;
    total6: number;
    total7: number;
    total8: number;
    total9: number;
    total10: number;
    total11: number;
    total12: number;
    total13: number;
    total14: number;
    total15: number;
    total16: number;
    total17: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds: OddsProps;
    choices_maxbet: ChoicesMaxBetProps;
}
