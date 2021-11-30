import React from "react";

import GameConfigsMini from "./game-configs";
import GameConfigsMini2 from "../keno-mini2/game-configs";
import KenoMiniGuideEN from "./en";
import KenoMiniGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
import { handleMaxBetChoiceKenoPro } from "../../index.helper";

const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const { id, locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            if (gameMini2Id.includes(id ?? gameMini2Id[0])) {
                gameConfigs.odds = GameConfigsMini2.odds;
            }
            gameConfigs.odds = GameConfigsMini.odds;
        }
        return gameConfigs;
    };
    const maxBetFollowChoice = handleMaxBetChoiceKenoPro(userStakeLevel, getGameConfigs());
    if (locale === locales.en) {
        return <KenoMiniGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }
    return <KenoMiniGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default KenoMiniGuide;
