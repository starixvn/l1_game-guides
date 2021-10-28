import { GameConfigsBaseProps } from "../type";

export interface OddsProps {
    odd: number;
    even: number;
}

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: {};
}
