import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";

export const SedDieName = { XocXoc: 2, VipSeDie: 2 };
const SeDieVIPGuide = (props: any) => {
    const { gameName, gameConfigs, userStakeLevel, gameId } = props;
    const components = {
        en: <SeDieGuideEN gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} gameId={gameId} />,
        vi: <SeDieGuideVI gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} gameId={gameId} />,
    };
    return components["vi"];
};
export default SeDieVIPGuide;
