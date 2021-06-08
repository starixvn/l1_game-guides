import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";

const FishPrawnCrab = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    if (locale === locales.en) {
        return <FishPrawnCrabGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }

    return <FishPrawnCrabGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default FishPrawnCrab;
