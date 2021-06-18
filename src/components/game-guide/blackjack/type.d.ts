import { GameConfigsProps } from "../type";

export interface OddsProps {
    blackjack: number;
    regular: number;
}

export interface GameConfigProps extends GameConfigsProps {
    odds: OddsProps;
    choices_maxbet: {};
}
