import { useEffect } from "react";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import { TolgeeProvider } from "@tolgee/react";
import NextBallPFGuideContent from "./content";

const tolgee = initTolgee(["NextBall"]);

const NextBallPFGuide = (props: GameGuideBase) => {
    const { displayName, locale } = props;

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
