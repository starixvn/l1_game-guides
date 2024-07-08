import { useEffect } from "react";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import { TolgeeProvider } from "@tolgee/react";
import SeBallPFGuideContent from "./content";
import appSettings from "../../../common/app-settings";

const tolgee = initTolgee(["SeBall"]);

const SeBallPFGuide = (props: GameGuideBase) => {
    const { id, locale } = props;
    const displayName = appSettings.gameSettings[`${id}`].gameName;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replaceAll("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <SeBallPFGuideContent {...{ locale, displayName }} />
        </TolgeeProvider>
    );
};

export default SeBallPFGuide;
