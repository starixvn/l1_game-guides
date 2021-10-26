import React from "react";

import HeroesSlotGuideEN from "./en";
import HeroesSlotGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const HeroesSlotGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <HeroesSlotGuideEN gameConfigs={gameConfigs as any} gameName={gameNameTranslate} />;
    }
    return <HeroesSlotGuideVI gameConfigs={gameConfigs as any} gameName={gameNameTranslate} />;
};
export default HeroesSlotGuide;
