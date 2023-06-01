import React from "react";
import { GameGuideBase } from "../type";
import Contents from "./contents";

const ClassicSlotGuide = (props: GameGuideBase) => {
    const { name, gameSetting, displayName, jackpot} = props;

    return <Contents displayName={displayName || ""} odds={gameSetting?.SlotsConfig?.Icons} name={name ?? gameSetting?.Name} jackpot={jackpot || false}/>;
};
export default ClassicSlotGuide;
