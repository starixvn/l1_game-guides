import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { useTranslation } from "next-i18next";

export const SedDieNameMapping: IObjectKeys = { "2": "XocXoc", "22": "VipSeDie" };
export const SedDieName: IObjectKeys = { XocXoc: "XocXoc", VipSeDie: "VipSeDie" };
const SeDieGuide = (props: GameGuideBase) => {
    const { gameName, id, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} gameId={id} />;
    }
    return <SeDieGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} gameId={id} />;
};
export default SeDieGuide;
