import React from "react";
import KenoMaxGuideEN from "./en";
import KenoMaxGuideVI from "./vi";
import GameConfigsMax from "./game-configs";
import GameConfigsMax2 from "../keno-max2/game-configs";
import GameConfigsNorth from "../keno-north/game-configs";
import GameConfigsSouth from "../keno-south/game-configs";
import GameConfigsWest from "../keno-west/game-configs";
import GameConfigsEast from "../keno-east/game-configs";
import { GameGuideBase } from "../../type";
import { locales, GameNameEN, GameNameVI } from "../../../../common/constants";

const KenoMaxGuide = (props: GameGuideBase) => {
    const { gameName, locale, id } = props;
    const gameConfigs = () => {
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

            default:
                return GameConfigsMax;
        }
    };
    if (locale === locales.en) {
        return <KenoMaxGuideEN gameConfigs={gameConfigs()} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <KenoMaxGuideVI gameConfigs={gameConfigs()} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default KenoMaxGuide;
