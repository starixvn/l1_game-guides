import { GameConfigsBaseProps } from "../type";

export interface GameConfigProps extends GameConfigsBaseProps {
    odds?: OddsProps;
    maxBetPerChoices: {};
}

export interface MaxBetChoicesProps {
    maxBetMain: string;
    minBetMain: string;
}

export interface OddsProps {
    [bar: string]: number;
    [bar25: string]: number;
    [bar50: string]: number;
    [bell: string]: number;
    [big: string]: number;
    [cherry: string]: number;
    [cherry3: string]: number;
    [lemon: string]: number;
    [lemon3: string]: number;
    [orange: string]: number;
    [orange3: string]: number;
    [small: string]: number;
    [star: string]: number;
    [star3: string]: number;
    [tripleSeven: string]: number;
    [tripleSeven3: string]: number;
    [watermelon: string]: number;
    [watermelon3: string]: number;
}