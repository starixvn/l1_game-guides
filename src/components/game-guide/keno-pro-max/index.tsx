import React from "react";
import KenoProGuideEN from "./en";
import KenoProGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";
import { GameGuideBase } from "../type";

const KenoProGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, id, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return <KenoProGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <KenoProGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default KenoProGuide;
