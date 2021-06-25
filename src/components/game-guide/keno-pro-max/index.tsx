import React from "react";
import KenoProMaxGuideEN from "./en";
import KenoProMaxGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";
import { GameGuideBase } from "../type";

const KenoProMaxGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return <KenoProMaxGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <KenoProMaxGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default KenoProMaxGuide;
