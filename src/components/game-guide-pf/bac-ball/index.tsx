import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { useEffect } from "react";
import appSettings from "../../../common/app-settings";
import { GameGuideBase } from "../../game-guide/type";
import BacBallPFGuideContent from "./content";

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

const BacBallPFGuide = (props: GameGuideBase) => {
    const { locale, id } = props;
    const displayName = appSettings.gameSettings[`${id}`].gameName;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replaceAll("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <BacBallPFGuideContent {...{ locale, displayName }} />
        </TolgeeProvider>
    );
};

export default BacBallPFGuide;
