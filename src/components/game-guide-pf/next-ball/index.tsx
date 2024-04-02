import { useEffect } from "react";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import { TolgeeProvider } from "@tolgee/react";
import NextBallPFGuideContent from "./content";
import appSettings from "../../../common/app-settings";

const tolgee = initTolgee(["NextBall"]);

const NextBallPFGuide = (props: GameGuideBase) => {
    const { id, locale } = props;
    const displayName = appSettings.gameSettings[`${id}`].gameName;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <NextBallPFGuideContent {...{ locale, displayName }} />
        </TolgeeProvider>
    );
};

export default NextBallPFGuide;
