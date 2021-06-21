import React from "react";
import FourGuardiansGuideEN from "./en";
import FourGuardiansGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

const FourGuardiansGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return <FourGuardiansGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <FourGuardiansGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default FourGuardiansGuide;
