import { JackpotConfigs } from "../type";

export interface GameConfigProps {
    odds: object[number];
    name: string;
    displayName: string;
    jackpot: boolean;
    jackpotConfigs: JackpotConfigs;
    locale: string;
}
