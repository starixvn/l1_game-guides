import React from "react";
import { GameGuideBase } from "../type";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

export const SedDieName = { XocXoc: 2, VipSeDie: 2 };
const SeDieVIPGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <SeDieGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default SeDieVIPGuide;
