import React from "react";

import GameConfigsMax from "./game-configs";
import GameConfigsMax2 from "../keno-max2/game-configs";
import GameConfigsNorth from "../keno-north/game-configs";
import GameConfigsSouth from "../keno-south/game-configs";
import GameConfigsWest from "../keno-west/game-configs";
import GameConfigsEast from "../keno-east/game-configs";
import KenoMaxGuideEN from "./en";
import KenoMaxGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";

const KenoMaxGuide = (props: GameGuideBase) => {
    const { id, locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            switch (id) {
                case 13:
                    gameConfigs.odds = GameConfigsMax2.odds;
                    break;
                case 16:
                    gameConfigs.odds = GameConfigsEast.odds;
                    break;
                case 17:
                    gameConfigs.odds = GameConfigsWest.odds;
                    break;
                case 18:
                    gameConfigs.odds = GameConfigsSouth.odds;
                    break;
                case 19:
                    gameConfigs.odds = GameConfigsNorth.odds;
                    break;

                default:
                    gameConfigs.odds = GameConfigsMax.odds;
                    break;
            }
        }

        return gameConfigs;
    };
    if (locale === locales.en) {
        return <KenoMaxGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <KenoMaxGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default KenoMaxGuide;
