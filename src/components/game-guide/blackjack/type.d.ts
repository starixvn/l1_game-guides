import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    blackjack: number;
    regular: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: {};
}
