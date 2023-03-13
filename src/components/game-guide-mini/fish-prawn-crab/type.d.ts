import { GameConfigsBaseProps } from "../../game-guide/type";

export interface GameConfigProps extends GameConfigsBaseProps {
    maxBetPerChoices: ChoicesMaxBetFPCProps;
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
    maxBetChoice: string;
}
