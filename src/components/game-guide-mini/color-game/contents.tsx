import React from "react";
import { useTranslate, T } from "@tolgee/react";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../../game-guide/type";

export type ColorGameContentsProps = {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
};

const renderBetLimit = (t: Function, minBet: number, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("para_5")}</h2>
            <ul className="desc">
                <li > <T
                    keyName="para_6"
                    params={{ minvalue: numberWithCommas(Math.max(userStakeLevel?.minBet ?? minBet, minBet)), maxvalue: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                /></li>
            </ul>
        </li>
    );
};

const renderWinningCondition = (t: Function) => {
    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("para_2")}</h2>
            <ul className="desc">
                <li >{t("para_3")}</li>
                <li >{t("para_4")}</li>
            </ul>
        </li>
    );
};

const ColorGameMiniContents: React.FC<ColorGameContentsProps> = ({ gameConfigs, userStakeLevel }) => {
    const { t } = useTranslate(["ColorGameInstant"]);

    return (
        <ul className={`game-guide `}>
            <li className="guide-item-instant game-microsite"> <p className="content">{t("para_1")}</p></li>
            {renderWinningCondition(t)}
            {renderBetLimit(t, gameConfigs.minBet, gameConfigs.maxBet, userStakeLevel)}
        </ul >
    );
};

export default ColorGameMiniContents;
