import React from "react";
import LotteryGuideEN from "./en";
import LotteryGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

const LotteryGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return <LotteryGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <LotteryGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default LotteryGuide;
