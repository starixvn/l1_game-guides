import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const FishPrawnCrab = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;
    if (locale === locales.en) {
        return <FishPrawnCrabGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }

    return <FishPrawnCrabGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default FishPrawnCrab;
