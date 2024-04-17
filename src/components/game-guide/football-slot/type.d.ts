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
    [cup: string]: number;
    [cup25: string]: number;
    [cup50: string]: number;
    [englandShirt: string]: number;
    [englandShirt3: string]: number;
    [big: string]: number;
    [shoes: string]: number;
    [shoes3: string]: number;
    [franceShirt: string]: number;
    [franceShirt3: string]: number;
    [tickets: string]: number;
    [tickets3: string]: number;
    [small: string]: number;
    [ball: string]: number;
    [ball3: string]: number;
    [mascot: string]: number;
    [mascot3: string]: number;
    [hostCountry: string]: number;
    [hostCountry3: string]: number;
}
