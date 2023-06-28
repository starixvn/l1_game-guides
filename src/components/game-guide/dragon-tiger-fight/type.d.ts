import { GameConfigs } from "../type";

export interface OddsProps {
    dragon: number;
    tiger: number;
    tie: number;
    blackDragon: number;
    redDragon: number;
    blackTiger: number;
    redTiger: number;
}

export interface ChoicesMaxBetProps {
    dragon: number;
    tiger: number;
    tie: number;
    blackDragon: number;
    redDragon: number;
    blackTiger: number;
    redTiger: number;
}

export type DragonTigerFightContentsProps = {
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
};
