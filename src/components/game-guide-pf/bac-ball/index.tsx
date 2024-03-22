import { FC, useEffect } from "react";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import { InContextTools } from "@tolgee/web/tools";
import BacBallPFGuideContent from "./content";
import { GameGuideBase } from "../../game-guide/type";
import appSettings from "../../../common/app-settings";
import { TolgeeConfig } from "../../../common/constants";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "id", "th", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["BacBall", "Common"],
        defaultNs: "BacBall",
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

const BacBallPFGuide = (props: GameGuideBase) => {
    const { displayName, locale } = props;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <BacBallPFGuideContent {...{ locale, displayName }} />
        </TolgeeProvider>
    );
};

export default BacBallPFGuide;
