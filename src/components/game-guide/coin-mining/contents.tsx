import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";

import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { CoinMiningContentsProps } from "./type";

const ns = "CoinMining";

const renderGameRules = (
    t: Function
) => {
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <p className="content">{t("game_rules_para1", { ns })}</p>
            <p className="content">{t("game_rules_para2", { ns })}</p>
            <p className="content">{t("game_rules_para3", { ns })}</p>
            <p className="content">{t("game_rules_para4", { ns })}</p>
        </li>
    );
};

const renderFeatures = (
    t: Function
) => {
    return (
        <li className="guide-item">
            <h2>{t("title_features", { ns: "Common" })}</h2>
            
            <ul className="style-number-rule">
                <p className="number-dot">{t("cash_out", { ns})}</p>
                <p className="content">{t("features_para1", { ns})}</p>
                <p className="content">{t("features_para1_list1", { ns})}</p>
                <p className="content">{t("features_para1_list2", { ns})}</p>
                <p className="content">{t("features_para2", { ns})}</p>
                <p className="content">{t("features_para3", { ns})}</p>
            </ul>

            <ul className="style-number-rule">
                <p className="number-dot">{t("auto_start", { ns})}</p>
                <p className="content">{t("features_para4", { ns})}</p>
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

            <p className="content">{t("multiplier_stages_para2", { ns})}</p>
            <p className="content">{t("multiplier_stages_para4", { ns})}</p>

            <div className="table-container">
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            <th>{t("header_stage", { ns })}</th>
                            <th>{t("header_starting_multiplier", { ns })}</th>
                            <th>{t("header_multiplier_per_click", { ns })}</th>
                            <th>{t("header_max_multiplier", { ns })}</th>
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

const renderPayout = (t: Function, gameConfigs: GameConfigs) => {

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <p className="content">{t("payouts_para1", { ns})}</p>
            <p className="content">{t("payouts_para2", { ns})}</p>
            <p className="content">{t("payouts_para3", { ns})}</p>
            <p className="content">{t("payouts_para4", { ns, minbet: gameConfigs.minBet, maxbet: gameConfigs.maxBet})}</p>
            <p className="content">{t("payouts_para5", { ns, maxwin: gameConfigs.maxWin})}</p>
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

const Contents: React.FC<CoinMiningContentsProps> = ({ gameConfigs, locale, displayName }) => {
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
            {renderPayout(t, gameConfigs)}
            {renderTearmAndConditions(t, gameConfigs)}
        </ul>
    );
};

export default Contents;
