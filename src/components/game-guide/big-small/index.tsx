import React from "react";

import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import { GameGuideBase } from "../type";
import GameConfigs from "./game-configs";
import GameConfigsTurbo from "../big-small-turbo/game-configs";
import { locales, IObjectKeys } from "../../../common/constants";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const BigSmallGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, gameName } = props;
    const getGameConfigs = () => {
        if (dynamic) {
            return gameConfigs;
        } else {
            if (gameName === BigSmallName.TXTurbo) {
                gameConfigs.odds = GameConfigsTurbo.odds;
            } else {
                gameConfigs.odds = GameConfigs.odds;
            }
            return gameConfigs;
        }
    };
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }

    return <BigSmallGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default BigSmallGuide;
