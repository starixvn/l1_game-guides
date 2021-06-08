import { WithTranslation } from "next-i18next";
import { WithRouterProps } from "next/dist/client/with-router";

export type GameSettingProps = {
    id: number;
    gameName: string;
} & WithTranslation &
    WithRouterProps;

interface ProxySetting {
    ssl: string;
    uri: string;
    path: string;
}

interface SentryOptions {
    dsn: string;
    environment: string;
}
export default interface AppSettings {
    proxy: ProxySetting;
    sentry: SentryOptions;
    gameSettings: { [id: string]: GameSettingProps };
}
