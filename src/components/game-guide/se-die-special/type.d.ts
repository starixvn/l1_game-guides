import { GameConfigsProps } from "../type";

export interface OddsProps {
    even: number;
    odd: number;
}

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsProps;
    choices_maxbet: {};
}
