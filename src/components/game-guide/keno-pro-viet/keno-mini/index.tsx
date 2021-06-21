import React from "react";
import KenoMiniGuideEN from "./en";
import KenoMiniGuideVI from "./vi";
import GameConfigsMini from "./game-configs";
import GameConfigsMini2 from "../keno-mini2/game-configs";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
import { useTranslation } from "next-i18next";
const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const { t } = useTranslation("common");
    const { gameName, locale, userStakeLevel, id } = props;
    const gameConfig = gameMini2Id.includes(id ?? gameMini2Id[0]) ? GameConfigsMini2 : GameConfigsMini;

    if (locale === locales.en) {
        return <KenoMiniGuideEN gameConfigs={gameConfig} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
    }
    return <KenoMiniGuideVI gameConfigs={gameConfig} userStakeLevel={userStakeLevel} gameName={t(gameName.toLowerCase())} />;
};
export default KenoMiniGuide;
