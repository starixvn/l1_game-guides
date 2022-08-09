import React from "react";

import GameConfigsMax from "./game-configs";
import GameConfigsMax2 from "../keno-max2/game-configs";
import GameConfigsNorth from "../keno-north/game-configs";
import GameConfigsSouth from "../keno-south/game-configs";
import GameConfigsWest from "../keno-west/game-configs";
import GameConfigsEast from "../keno-east/game-configs";
import GameConfigsMega from "../mega-keno/game-configs";
import GameConfigsMega2 from "../mega-keno2/game-configs";
import KenoMaxGuideEN from "./en";
import KenoMaxGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
import { handleMaxBetChoiceKenoPro } from "../../index.helper";

const KenoMaxGuide = (props: GameGuideBase) => {
    const { id, locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            switch (id) {
                case 13:
                    return GameConfigsMax2;
                case 16:
                    return GameConfigsEast;
                case 17:
                    return GameConfigsWest;
                case 18:
                    return GameConfigsSouth;
                case 19:
                    return GameConfigsNorth;
                case 52:
                    return GameConfigsMega;
                case 53:
                    return GameConfigsMega2;

                default:
                    return GameConfigsMax;
            }
        }

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
                case 52:
                    gameConfigs.odds = GameConfigsMega.odds;
                    break;
                case 53:
                    gameConfigs.odds = GameConfigsMega2.odds;
                    break;

                default:
                    gameConfigs.odds = GameConfigsMax.odds;
                    break;
            }
        }

        return gameConfigs;
    };
    const maxBetFollowChoice = handleMaxBetChoiceKenoPro(userStakeLevel, getGameConfigs());

    if (locale === locales.en) {
        return <KenoMaxGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }
    return <KenoMaxGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default KenoMaxGuide;
