import React from "react";
import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import GameConfigs from "./game-configs";
import GameConfigsTurbo from "../big-small-turbo/game-configs";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys, GameNameEN, GameNameVI } from "../../../common/constants";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const BigSmallGuide = (props: GameGuideBase) => {
    const { gameName, locale } = props;
    const gameConfigs = gameName === BigSmallName.TXTurbo ? GameConfigsTurbo : GameConfigs;
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={gameConfigs}  gameName={GameNameEN[gameName.toLowerCase()]} />;
    }

    return <BigSmallGuideVI gameConfigs={gameConfigs}  gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default BigSmallGuide;
