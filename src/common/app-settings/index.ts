import getConfig from "next/config";
import gameSettings from "./game-settings.json";
import AppSettings, { GameSettingProps } from "./type";

const config = getConfig();

const appSettings: AppSettings = {
    ...config.publicRuntimeConfig,
    gameSettings: gameSettings as unknown as { [id: string]: GameSettingProps },
};

export default appSettings;
