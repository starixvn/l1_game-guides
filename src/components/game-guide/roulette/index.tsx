import React from "react";
import RouletteGuideEN from "./en";
import RouletteGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

const RouletteGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return <RouletteGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <RouletteGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default RouletteGuide;
