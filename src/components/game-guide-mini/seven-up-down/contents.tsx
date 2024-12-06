import { T, useTranslate } from "@tolgee/react";
import React from "react";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigs } from "../../game-guide/type";
import { Markup } from "interweave";

export type SevenUpDownGameContentsProps = {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName: string | undefined;
};
const ns = "7Up7DownInstant";
const renderBetLimit = (t: Function, minBet: number, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("title_bet_limit", { ns: "Common" })}</h2>

            <ul className="desc">
                <li>
                    <T
                        keyName="betlimit_payout_para_1"
                        params={{
                            minvalue: numberWithCommas(Math.max(userStakeLevel?.minBet ?? minBet, minBet)),
                            maxvalue: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)),
                        }}
                        ns="Common"
                    />
                </li>
            </ul>
        </li>
    );
};

const renderPayout = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { maxWinPerRound, maxBet } = gameConfigs;
    const maxBetMain = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetMain);

    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    {
                        <Markup
                            content={t("payouts_para_4", {
                                ns: "Common",
                                maxwin: maxWin,
                            })}
                        />
                    }
                </li>
            </ul>
        </li>
    );
};
const renderWinningCondition = (t: Function, gameConfigs: GameConfigs) => {
    const { multipliers } = gameConfigs;
    const min = `${Math.min(...multipliers)}x`;
    const max = `${Math.max(...multipliers)}x`;
    return (
        <li className="guide-item-instant game-microsite">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <ul className="plus">
                    <li>{t("gamerules_para_2")}</li>
                    <li>{t("gamerules_para_3")}</li>
                    <li>{t("gamerules_para_4")}</li>
                </ul>
                <li>{t("gamerules_para_5")}</li>
                <li>
                    {" "}
                    <Markup
                        content={t("gamerules_para_6", {
                            ns: ns,
                            minvalue: min,
                            maxvalue: max,
                        })}
                    />
                </li>
            </ul>
        </li>
    );
};
const SevenUpDownMiniContents: React.FC<SevenUpDownGameContentsProps> = ({ gameConfigs, userStakeLevel, displayName }) => {
    const { t } = useTranslate(["7Up7DownInstant", "Common"]);
    return (
        <ul className={`game-guide pt-3`}>
            <li className="guide-item-instant game-microsite">
                <p className="content">{t("intro_para_1", { ns: ns, gamename: displayName })}</p>
            </li>
            {renderWinningCondition(t, gameConfigs)}
            {renderBetLimit(t, gameConfigs.minBet, gameConfigs.maxBet, userStakeLevel)}
            {renderPayout(t, gameConfigs, userStakeLevel)}
        </ul>
    );
};

export default SevenUpDownMiniContents;
