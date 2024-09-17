import { T, useTranslate } from "@tolgee/react";
import React from "react";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../../game-guide/type";

export type ColorGameContentsProps = {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName: string | undefined;
};

const renderBetLimit = (t: Function, minBet: number, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("title_bet_limit", { ns: "Common" })}</h2>

            <ul className="desc">
                <li>
                    <T
                        keyName="betlimit_para_1"
                        params={{
                            minvalue: numberWithCommas(Math.max(userStakeLevel?.minBet ?? minBet, minBet)),
                            maxvalue: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)),
                        }}
                        ns="FootballCoinTossInstant"
                    />
                </li>
            </ul>
        </li>
    );
};

const renderWinningCondition = (t: Function) => {
    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <ul className="plus">
                    <li>{t("gamerules_para_2")}</li>
                    <li>{t("gamerules_para_3")}</li>
                </ul>
                <li>{t("gamerules_para_4")}</li>
                <li>{t("gamerules_para_5")}</li>
                <li>{t("gamerules_para_6")}</li>
            </ul>
        </li>
    );
};

const FootballCoinTossMiniContents: React.FC<ColorGameContentsProps> = ({ gameConfigs, userStakeLevel, displayName }) => {
    const { t } = useTranslate(["FootballCoinTossInstant", "Common"]);
    console.log("FootballCoinTossMiniContents", displayName);
    return (
        <ul className={`game-guide pt-3`}>
            <li className="guide-item-instant game-microsite">
                <p className="content">{t("intro_para_1", { ns: "FootballCoinTossInstant", gamename: displayName })}</p>
            </li>
            {renderWinningCondition(t)}
            {renderBetLimit(t, gameConfigs.minBet, gameConfigs.maxBet, userStakeLevel)}
        </ul>
    );
};

export default FootballCoinTossMiniContents;
