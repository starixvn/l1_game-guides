import { GameConfigs } from "../type";

export interface OddsProps {
    up: number;
    seven: number;
    down: number;
}

export interface ChoicesMaxBetProps {
    up: number;
    seven: number;
    down: number;
}

export type TapFortuneContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    displayName: string | undefined;
};
