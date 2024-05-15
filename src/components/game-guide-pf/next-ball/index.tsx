import { TolgeeProvider } from "@tolgee/react";
import { useEffect } from "react";
import appSettings from "../../../common/app-settings";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import NextBallPFGuideContent from "./content";

const tolgee = initTolgee(["NextBall"]);

const NextBallPFGuide = (props: GameGuideBase) => {
    const { id, locale } = props;
    const displayName = appSettings.gameSettings[`${id}`].gameName;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replaceAll("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <NextBallPFGuideContent {...{ locale, displayName }} />
        </TolgeeProvider>
    );
};

export default NextBallPFGuide;
