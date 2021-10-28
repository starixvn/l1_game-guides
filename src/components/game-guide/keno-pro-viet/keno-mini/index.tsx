import React from "react";

import GameConfigsMini from "./game-configs";
import GameConfigsMini2 from "../keno-mini2/game-configs";
import KenoMiniGuideEN from "./en";
import KenoMiniGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const { id, locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            if (gameMini2Id.includes(id ?? gameMini2Id[0])) {
                gameConfigs.odds = GameConfigsMini2.odds;
            }
            gameConfigs.odds = GameConfigsMini.odds;
        }
        return gameConfigs;
    };

    if (locale === locales.en) {
        return <KenoMiniGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <KenoMiniGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default KenoMiniGuide;
