import React from "react";
import KenoMiniGuideEN from "./en";
import KenoMiniGuideVI from "./vi";
import GameConfigsMini from "./game-configs";
import GameConfigsMini2 from "../keno-mini2/game-configs";
import { GameGuideBase } from "../../type";
import { locales, GameNameEN, GameNameVI } from "../../../../common/constants";
const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const { gameName, locale, id } = props;
    const gameConfig = gameMini2Id.includes(id ?? gameMini2Id[0]) ? GameConfigsMini2 : GameConfigsMini;

    if (locale === locales.en) {
        return <KenoMiniGuideEN gameConfigs={gameConfig} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <KenoMiniGuideVI gameConfigs={gameConfig} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default KenoMiniGuide;
