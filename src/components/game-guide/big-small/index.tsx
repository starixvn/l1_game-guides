import React from "react";
import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const BigSmallGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }

    return <BigSmallGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default BigSmallGuide;
