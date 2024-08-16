import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { useEffect, useState } from "react";
import { handleLanguage } from "../../../helpers/game-helper";
import { TogleeNamespace } from "../../game-guide/football-dice/namespace-tolgee";
import { GameGuideBase } from "../../game-guide/type";
import FootballDicePFContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: [TogleeNamespace.SpecificGame, TogleeNamespace.Common],
        defaultNs: TogleeNamespace.SpecificGame,
    });

const FootballDicePFGuide = (props: GameGuideBase) => {
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
            <FootballDicePFContents {...{ locale, displayName, name: name ?? gameSetting?.Name }} />
        </TolgeeProvider>
    );
};

export default FootballDicePFGuide;
