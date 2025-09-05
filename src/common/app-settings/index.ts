import gameSettings from "./game-settings";
import AppSettings, { GameSettingProps } from "./type";
import { getConfig } from "next/config";

const config = (globalThis as any).cf;

const appSettings = {
    ...config,
    gameSettings: gameSettings as unknown as { [id: string]: GameSettingProps },
} as AppSettings;

export default appSettings;
