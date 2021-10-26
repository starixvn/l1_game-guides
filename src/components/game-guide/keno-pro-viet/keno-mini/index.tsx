import React from "react";
import KenoMiniGuideEN from "./en";
import KenoMiniGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <KenoMiniGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <KenoMiniGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default KenoMiniGuide;
