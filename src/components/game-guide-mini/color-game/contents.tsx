import React from "react";
import { useTranslate, T } from "@tolgee/react";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { ColorGameContentsProps } from "./type";

const renderWinningCondition = (t: Function) => {
    return (
        <li className="guide-item-instant">
            <h2>{t("para_2", { ns: "ColorGameInstant" })}</h2>
            <ul className="desc">
                <li >{t("para_3", { ns: "ColorGameInstant" })}</li>
                <li >{t("para_4", { ns: "ColorGameInstant" })}</li>

            </ul>
        </li>
    );
};

const renderBetLimit = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    return (
        <li className="guide-item-instant">
            <h2>{t("para_5", { ns: "ColorGameInstant" })}</h2>
            <ul className="desc">
                <li > <T
                    keyName="para_6"
                    params={{ minmaxvalue: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                /></li>
            </ul>
        </li>
    );
};

const ColorGameContents: React.FC<ColorGameContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate(["ColorGame", "Common"]);

    return (
        <ul className={`game-guide`}>
            <li>    <p className="content">{t("intro_para_1", { ns: "ColorGame" })}</p></li>
            {renderWinningCondition(t)}
            {renderBetLimit(t, gameConfigs.maxBet, userStakeLevel)}
        </ul >
    );
};

export default ColorGameContents;
