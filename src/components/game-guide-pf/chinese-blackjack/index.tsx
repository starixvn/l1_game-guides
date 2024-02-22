import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import appSettings from "../../../common/app-settings";
import { TolgeeConfig } from "../../../common/constants";
import { GameGuideBase } from "../../game-guide/type";
import ChineseBlackjackPFContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["ChineseBlackjack", "Common"],
        defaultNs: "ColorGame",
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

const ChineseBlackjackPFGuide = (props: GameGuideBase) => {
    const { displayName } = props;

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <ChineseBlackjackPFContents {...{ locale: tolgee.getLanguage(), displayName }} />
        </TolgeeProvider>
    );
};

export default ChineseBlackjackPFGuide;
