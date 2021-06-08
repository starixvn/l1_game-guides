import React from "react";
import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

const BigSmallGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }

    return <BigSmallGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default BigSmallGuide;
