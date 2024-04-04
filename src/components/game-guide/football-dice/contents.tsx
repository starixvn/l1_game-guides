import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import Styles from "./football-dice.module.scss";
import { TogleeNamespace } from "./namespace-tolgee";
import { FootballDiceContentsProps } from "./type";

const renderGameRules = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_4", { ns: TogleeNamespace.SpecificGame,  maxbet: maxBetMain })}</li>                
            </ul>
            <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", {ns: TogleeNamespace.Common})}</th>
                        <th className="bold">{t("guide_header_winning_condition", {ns: TogleeNamespace.Common})}</th>
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
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const maxBetHome = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.home));
    const maxBetAway = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.away));
    const maxBetDraw = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.draw));

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_3", { ns: TogleeNamespace.Common })}</li>
                <li>{<Markup content={t("payouts_para_1", { ns: TogleeNamespace.Common })} />}</li>
                <li>{t("payouts_para_2", { ns: TogleeNamespace.Common })}</li>
                
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: TogleeNamespace.Common })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: TogleeNamespace.Common })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>
                                        <Markup content={t("header_betlimit", { ns: TogleeNamespace.Common })} />{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("glossary_home", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{formatOdds(odds?.home, fractionalOddsFormat)}</td>
                                    <td className={Styles["nowrap"]}>
                                        {minBetMain} - {maxBetHome}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_away", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{formatOdds(odds?.away, fractionalOddsFormat)}</td>
                                    <td className={Styles["nowrap"]}>
                                        {minBetMain} - {maxBetAway}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_draw", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{formatOdds(odds?.draw, fractionalOddsFormat)}</td>
                                    <td className={Styles["nowrap"]}>
                                        {minBetMain} - {maxBetDraw}
                                    </td>
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

const FootballDiceContents: React.FC<FootballDiceContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate(["FootballDice", "Common"]);
    console.log("FootballDiceContents", gameConfigs);

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
