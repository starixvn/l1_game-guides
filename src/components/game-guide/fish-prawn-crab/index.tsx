import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";

const FishPrawnCrab = (props: any) => {
    const { gameName, locale, gameConfigs, userStakeLevel } = props;

    const components = {
        en: <FishPrawnCrabGuideEN gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />,
        vi: <FishPrawnCrabGuideVI gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />,
    };

    return components["vi"];
};
export default FishPrawnCrab;
