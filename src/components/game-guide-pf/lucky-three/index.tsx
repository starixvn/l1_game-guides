import { TolgeeProvider } from "@tolgee/react";
import { useEffect } from "react";

import { appSettings } from "../../../common/constants";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import LuckyThreePFGuideContent from "./content";

const tolgee = initTolgee(["SeBall"]);

const LuckyThreePFGuide = (props: GameGuideBase) => {
    const { id, locale } = props;
    const displayName = appSettings.gameSettings[`${id}`].gameName;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <LuckyThreePFGuideContent {...{ locale, displayName }} />
        </TolgeeProvider>
    );
};

export default LuckyThreePFGuide;
