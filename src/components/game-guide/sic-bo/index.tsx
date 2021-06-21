import React from "react";
import SicBoGuideEN from "./en";
import SicBoGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

const SicBoGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return <SicBoGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <SicBoGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default SicBoGuide;
