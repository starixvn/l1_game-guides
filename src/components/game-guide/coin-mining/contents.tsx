import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";

import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { CoinMiningContentsProps } from "./type";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas, numberWithCommasAndSuffix } from "../../../helpers/number-helper";

const ns = "CoinMining";

const renderGameRules = (
    t: Function
) => {
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li><Markup content={t("game_rules_para1", { ns })}/></li>
                <li>{t("game_rules_para2", { ns })}</li>
                <li>{t("game_rules_para3", { ns })}</li>
                <li>{t("game_rules_para4", { ns })}</li>
            </ul>
        </li>
    );
};

const renderFeatures = (
    t: Function
) => {
    return (
        <li className="guide-item">
            <h2>{t("title_features", { ns: "Common" })}</h2>
            
            <ul className="style-number-rule" >
                <h2 className="number-dot">{t("cash_out", { ns })}</h2>
                <ul className="desc">
                    <li>{t("features_para1", { ns })}</li>
                    <ul className="detail">
                        <li><Markup content={t("features_para1_list1", { ns})}/></li>
                        <li><Markup content={t("features_para1_list2", { ns})}/></li>
                    </ul>
                    <li>{t("features_para2", { ns })}</li>
                </ul>
                <p className="content content-center"><Markup content={t("features_para3", { ns})}/></p>
                <h2 className="number-dot">{t("auto_start", { ns })}</h2>
                <ul className="desc">
                    <li>{t("features_para4", { ns })}</li>
                </ul>
            </ul>
        </li>
    );
};
const renderMultiplerStages = (t: Function, gameConfigs: GameConfigs) => {
    const stages = [
        { stage: 1, start: "1.00x", desc: "multiplier_stages_1_desc", max: "1.10x" },
        { stage: 2, start: "1.10x", desc: "multiplier_stages_2_desc", max: "10.00x" },
        { stage: 3, start: "10.00x", desc: "multiplier_stages_3_desc", max: "100.00x" },
        { stage: 4, start: "100.00x", desc: "multiplier_stages_4_desc", max: "1,000.00x" }
    ];

    return (
        <li className="guide-item">
            <h2>{t("heading_multiplier_stages", { ns: "CoinMining" })}</h2>

            <ul className="desc">
                <li><Markup content={t("multiplier_stages_para2", { ns})}/></li>
                <li><Markup content={t("multiplier_stages_para4", { ns})}/></li>
            </ul>

            <div className="table-container">
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            <th className="bold">{t("header_stage", { ns })}</th>
                            <th className="bold">{t("header_starting_multiplier", { ns })}</th>
                            <th className="bold">{t("header_multiplier_per_click", { ns })}</th>
                            <th className="bold">{t("header_max_multiplier", { ns })}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stages.map(({ stage, start, desc, max }) => (
                            <tr key={stage}>
                                <td className="text-center">{stage}</td>
                                <td className="text-center">{start}</td>
                                <td>{t(desc)}</td>
                                <td className="text-center">{max}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderPayout = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { minBet, maxBet, maxWinPerRound } = gameConfigs;
    const maxBetTmp = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);

    const maxBetMain = numberWithCommas(maxBetTmp);
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetTmp);

    return (
        <li className="guide-item">
             
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li className="content">{t("payouts_para1", { ns})}</li>
                <li className="content">{t("payouts_para2", { ns})}</li>
                <li className="content">{t("payouts_para3", { ns})}</li>
                <li className="content">{t("payouts_para4", { ns, minbet: minBetMain, maxbet: maxBetMain})}</li>
                <li className="content">{t("payouts_para5", { ns, maxwin: maxWin})}</li>
            </ul>
            
        </li>
    );
};

const renderTearmAndConditions = (t: Function, gameConfigs: GameConfigs) => {

    return (
        <li className="guide-item">
            <h2>{t("termsandconditions-title", { ns: "Common" })}</h2>
            <p className="content">{t("termsandconditions_para_1", {  ns: "Common"})}</p>
            <p className="content">{t("termsandconditions_para_2", {  ns: "Common"})}</p>
            <p className="content">{t("termsandconditions_para_3", {  ns: "Common"})}</p>
            <p className="content">{t("termsandconditions_para_4", {  ns: "Common"})}</p>
        </li>
    );
};

const Contents: React.FC<CoinMiningContentsProps> = ({ gameConfigs, locale, displayName, userStakeLevel }) => {
    const { t } = useTranslate([ns, "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <p className="content">{t("intro_para1", { ns, game_name: displayName })}</p>
                <p className="content">{t("intro_para2", { ns })}</p>
            </li>
            {renderGameRules(t)}
            {renderFeatures(t)}
            {renderMultiplerStages(t, gameConfigs)}
            {renderPayout(t, gameConfigs, userStakeLevel)}
            {renderTearmAndConditions(t, gameConfigs)}
        </ul>
    );
};

export default Contents;
