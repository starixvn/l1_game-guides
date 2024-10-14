import { T, useTranslate } from "@tolgee/react";
import React from "react";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../../game-guide/type";

export type LuckyNextInstantGameContentsProps = {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName: string | undefined;
};

const renderBetLimit = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { maxWinPerRound, minBet, maxBet } = gameConfigs;

    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("title_bet_limit", { ns: "Common" })}</h2>

            <ul className="desc">
                <li>
                    <T
                        keyName="betlimit_para_1"
                        params={{
                            minbet: numberWithCommas(Math.max(userStakeLevel?.minBet ?? minBet, minBet)),
                            maxbet: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)),
                        }}
                        ns="LuckyNextInstant"
                    />
                </li>
                <li>
                    <T
                        keyName="betlimit_para_2"
                        params={{
                            maxbet: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)),
                        }}
                        ns="LuckyNextInstant"
                    />
                </li>
                <li>
                    <T
                        keyName="betlimit_para_3"
                        params={{ maxpayout: numberWithCommas((maxWinPerRound ?? 0) * Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                        ns="LuckyNextInstant"
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
            <p>{t("gamerules_para_1")}</p>
            <ul className="desc">
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4")}</li>
                <li>{t("gamerules_para_5")}</li>
            </ul>
            <p>{t("gamerules_para_6")}</p>
        </li>
    );
};

const LuckyNextMiniContents: React.FC<LuckyNextInstantGameContentsProps> = ({ gameConfigs, userStakeLevel, displayName }) => {
    const { t } = useTranslate(["LuckyNextInstant", "Common"]);
    return (
        <ul className={`game-guide pt-3`}>
            <li className="guide-item-instant game-microsite">
                <p className="content">{t("intro_para_1", { ns: "LuckyNextInstant", gamename: displayName })}</p>
            </li>
            {renderWinningCondition(t)}
            {renderBetLimit(t, gameConfigs, userStakeLevel)}
        </ul>
    );
};

export default LuckyNextMiniContents;
