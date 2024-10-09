import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import appSettings from "../../../common/app-settings";
import { TolgeeConfig } from "../../../common/constants";
import { handleLanguage } from "../../../helpers/game-helper";
import { GameGuideBase } from "../../game-guide/type";
import FootballCoinTossPFContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["FootballCoinToss", "Common"],
        defaultNs: "Common",
    });

if (!appSettings.useTolgeeStatic) {
    tolgee.addPlugin(
        InContextTools({
            credentials: {
                apiUrl: TolgeeConfig.url,
                apiKey: TolgeeConfig.key,
                projectId: TolgeeConfig.projectId,
            },
        })
    );
}

const FootballCoinTossPFGuide = (props: GameGuideBase) => {
    const { displayName, name, gameSetting, locale } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (locale) {
            handleLanguage(tolgee, locale, setIsLoading);
        }
    }, [locale]);

    if (isLoading) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <FootballCoinTossPFContents {...{ locale, displayName, name: name ?? gameSetting?.Name }} />
        </TolgeeProvider>
    );
};

export default FootballCoinTossPFGuide;
