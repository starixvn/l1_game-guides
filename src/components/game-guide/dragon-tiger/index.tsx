import React from "react";
import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";

const DragonTigerGuide = (props:any) => {
    const { gameName, locale, gameConfigs, userStakeLevel } = props;
    const components = {
        en: <DragonTigerGuideEN gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName}/>,
        vi: <DragonTigerGuideVI gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName}/>,
    };
    return components["vi"];
};
export default DragonTigerGuide;
