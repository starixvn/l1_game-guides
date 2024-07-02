import React from "react";
import { useTranslate, T } from "@tolgee/react";
import { Markup } from "interweave";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { CoinTossContentsProps } from "./type";
import Styles from "./coin-toss.module.scss";

const ns = "CoinToss";

const renderGameRules = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns })}</li>
                <ul className="detail">
                    <li>{t("gamerules_para_2", { ns })}</li>
                    <li>{t("gamerules_para_3", { ns })}</li>
                </ul>
                <li>{t("gamerules_para_4", { ns })}</li>
                <li>{t("gamerules_para_5", { ns })}</li>
                <li>{t("gamerules_para_6", { ns })}</li>
            </ul>
        </li>
    );
};

const renderPayout = (
    t: Function,
    gameConfigs: GameConfigs,
    userStakeLevel: UserStakeLevelProps | undefined,
    fractionalOddsFormat?: boolean
) => {
    const { odds, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{<Markup content={t("payouts_para_1", { ns })} />}</li>
                <li>{t("payouts_para_2", { ns })}</li>
                <li>{t("payouts_para_3", { ns })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>
                                        <Markup content={t("header_betlimit", { ns: "Common" })} />{" "}
                                    </th>
                                    <th className="bold">
                                        <Markup content={t("header_maxround", { ns: "Common" })} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t(`glossary_head`, { ns })}</td>
                                    <td>{formatOdds(odds?.head, fractionalOddsFormat)}</td>
                                    <td>
                                        {minBetMain} - {maxBetMain}
                                    </td>
                                    <td rowSpan={2}>{maxBetMain}</td>
                                </tr>
                                <tr>
                                    <td>{t(`glossary_tail`, { ns })}</td>
                                    <td>{formatOdds(odds?.tail, fractionalOddsFormat)}</td>
                                    <td>
                                        {minBetMain} - {maxBetMain}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const Contents: React.FC<CoinTossContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate([ns, "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className="content">{t("intro_para_1", { ns })}</div>
            </li>
            {renderGameRules(t, gameConfigs.maxBet, userStakeLevel)}
            {renderPayout(t, gameConfigs, userStakeLevel, fractionalOddsFormat)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default Contents;
