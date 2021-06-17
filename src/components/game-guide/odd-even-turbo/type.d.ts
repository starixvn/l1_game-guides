import { GameConfigsProps } from "../type";

export interface OddsProps {
    odd: number;
    even: number;
}

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsProps;
    choices_maxbet: {};
}
