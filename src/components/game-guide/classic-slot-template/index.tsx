import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { useEffect } from "react";
import { GameGuideBase } from "../type";
import Contents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Classicslot", "Common"],
        defaultNs: "Classicslot",
    });

const ClassicSlotGuide = (props: GameGuideBase) => {
    const { name, gameSetting, displayName, jackpot, jackpotConfigs, locale, gameConfigs } = props;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <Contents
                displayName={displayName || ""}
                odds={gameSetting?.SlotsConfig?.Icons}
                name={name ?? gameSetting?.Name}
                jackpot={jackpot || false}
                jackpotConfigs={jackpotConfigs || { winningRatio: 0, pools: [] }}
                locale={locale || ""}
                gameConfigs={gameConfigs}
            />
        </TolgeeProvider>
    );
};
export default ClassicSlotGuide;
