import React from "react";
import { GameGuideBase } from "../type";
import LuckyWheelGuideTemplate from "./template";

const LuckyWheelGuide = (props: GameGuideBase) => {
    const { locale, gameNameTranslate } = props;

    const resource = {
        gameConfigs: {},
        gameName: gameNameTranslate,
        locale,
    };

    return <LuckyWheelGuideTemplate {...resource} />;
};
export default LuckyWheelGuide;
