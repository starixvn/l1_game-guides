import React from "react";
import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import GameConfigs from "./game-configs";
import GameConfigsTurbo from "../big-small-turbo/game-configs";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { useTranslation } from "next-i18next";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const BigSmallGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    const gameConfigs = gameName === BigSmallName.TXTurbo ? GameConfigsTurbo : GameConfigs;
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }

    return <BigSmallGuideVI gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default BigSmallGuide;
