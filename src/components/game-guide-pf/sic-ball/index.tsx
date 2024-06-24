import { TolgeeProvider } from "@tolgee/react";
import { useEffect } from "react";

import appSettings from "../../../common/app-settings";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import SicBallPFGuideContent from "./content";

const tolgee = initTolgee(["SicBall"]);

const SicBallPFGuide = (props: GameGuideBase) => {
    const { id, locale } = props;
    const displayName = appSettings.gameSettings[`${id}`].gameName;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <SicBallPFGuideContent {...{ locale, displayName }} />
        </TolgeeProvider>
    );
};

export default SicBallPFGuide;
