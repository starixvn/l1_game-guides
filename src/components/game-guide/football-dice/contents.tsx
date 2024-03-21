import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import Styles from "./color-game.module.scss";
import { TogleeNamespace } from "./namespace-tolgee";
import { ColorGameContentsProps } from "./type";

const renderGameRules = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {

    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_3", { ns: TogleeNamespace.SpecificGame,  maxbet: maxBet })}</li>                
            </ul>
            <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <td>{t("header_betoption", {ns: TogleeNamespace.Common})}</td>
                        <td>{t("header_betoption", {ns: TogleeNamespace.Common})}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{t("glossary_home", {ns: TogleeNamespace.SpecificGame})}</td>
                        <td>{t("descrip_home", {ns: TogleeNamespace.SpecificGame})}</td>
                    </tr>
                    <tr>
                        <td>{t("glossary_away", {ns: TogleeNamespace.SpecificGame})}</td>
                        <td>{t("descrip_away", {ns: TogleeNamespace.SpecificGame})}</td>
                    </tr>
                    <tr>
                        <td>{t("glossary_draw", {ns: TogleeNamespace.SpecificGame})}</td>
                        <td>{t("descrip_draw", {ns: TogleeNamespace.SpecificGame})}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
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
    const maxBetYellow = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.yellow));
    const maxBetHot = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.hot));

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{<Markup content={t("payouts_para_1", { ns: "Common" })} />}</li>
                <li>{t("payouts_para_2", { ns: "Common" })}</li>
                <li>{t("payouts_para_3", { ns: "Common" })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["description"]}`}>{t("header_description", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>
                                        <Markup content={t("header_betlimit", { ns: "Common" })} />{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3}>{t(`option_specific_color`, { ns: "ColorGame" })}</td>
                                    <td>{t(`desc_specific_color_1`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                    <td rowSpan={3} className={Styles["nowrap"]}>
                                        {minBetMain} - {maxBetYellow}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t(`desc_specific_color_2`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t(`desc_specifci_color_3`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t(`option_hot`, { ns: "ColorGame" })}</td>
                                    <td>{t(`desc_hot`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.hot, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {minBetMain} - {maxBetHot}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t(`option_cold`, { ns: "ColorGame" })}</td>
                                    <td>{t(`desc_cold`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.cold, fractionalOddsFormat)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>{t("payouts_para_4", { ns: "FootballDice" })}</li>
            </ul>
        </li>
    );
};

const FootballDiceContents: React.FC<ColorGameContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate(["FootballDice", "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
                <div className="content">{t("intro_para_1", { ns: TogleeNamespace.SpecificGame })}</div>
            </li>
            {renderGameRules(t, gameConfigs.maxBet, userStakeLevel)}
            {renderPayout(t, gameConfigs, userStakeLevel, fractionalOddsFormat)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default FootballDiceContents;
