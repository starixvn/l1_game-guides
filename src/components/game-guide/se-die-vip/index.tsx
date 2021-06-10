import React from "react";
import { GameGuideBase } from "../type";
import SeDieGuideEN from "../se-die/en";
import SeDieGuideVI from "../se-die/vi";
import GameConfigs from "./game-configs";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";
import { handleMaxBetChoice } from "../se-die";

export const SedDieName = { XocXoc: 2, VipSeDie: 2 };
const SeDieVIPGuide = (props: GameGuideBase) => {
    const { gameName, id, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, GameConfigs);
    if (locale === locales.en) {
        return (
            <SeDieGuideEN
                gameConfigs={GameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={t(gameName.toLowerCase())}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <SeDieGuideVI
            gameConfigs={GameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={t(gameName.toLowerCase())}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default SeDieVIPGuide;
