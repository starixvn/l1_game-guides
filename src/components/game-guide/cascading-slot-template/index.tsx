import React from "react";
import { GameGuideBase } from "../type";
import Contents from "./contents";

const CascadingSlotGuide = (props: GameGuideBase) => {
    const { name, gameSetting, displayName } = props;

    return <Contents displayName={displayName || ""} odds={gameSetting?.SlotsConfig?.Icons} name={name ?? gameSetting?.Name} />;
};
export default CascadingSlotGuide;
