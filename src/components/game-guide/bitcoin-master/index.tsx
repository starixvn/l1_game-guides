import React from "react";

import BitcoinMasterGuideEN from "./en";
import BitcoinMasterGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const BitcoinMasterGuide = (props: GameGuideBase) => {
    const { gameName, locale } = props;
    if (locale === locales.en) {
        return <BitcoinMasterGuideEN gameConfigs={GameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }

    return <BitcoinMasterGuideVI gameConfigs={GameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default BitcoinMasterGuide;
