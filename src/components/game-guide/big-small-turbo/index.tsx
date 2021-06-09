import React from "react";
import BigSmallGuideEN from "../big-small/en";
import BigSmallGuideVI from "../big-small/vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

const BigSmallTurboGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }

    return <BigSmallGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default BigSmallTurboGuide;
