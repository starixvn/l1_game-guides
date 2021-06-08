import React from "react";
import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";

const BigSmallTurboGuide = (props: any) => {
    const { gameName, locale, gameConfigs, userStakeLevel } = props;
    const components = {
        en: <BigSmallGuideEN gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />,
        vi: <BigSmallGuideVI gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />,
    };
    return components["vi"];
};
export default BigSmallTurboGuide;
