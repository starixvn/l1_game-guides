import React from "react";

import BitcoinMasterGuideEN from "./en";
import BitcoinMasterGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const BitcoinMasterGuide = (props: GameGuideBase) => {
    const { locale, gameNameTranslate } = props;
    if (locale === locales.en) {
        return <BitcoinMasterGuideEN gameConfigs={GameConfigs} gameName={gameNameTranslate} />;
    }

    return <BitcoinMasterGuideVI gameConfigs={GameConfigs} gameName={gameNameTranslate} />;
};
export default BitcoinMasterGuide;
