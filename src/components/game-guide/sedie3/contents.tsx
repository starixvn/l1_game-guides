import { useTranslate } from "@tolgee/react";
import React from "react";
import { buildVersion, ENVIRONMENT } from "../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { renderOneRedTwoWhite, renderThreeRed, renderThreeWhite, renderTwoRedOneWhite } from "../../shared/dot";
import MD5Tolgee from "../base/md5/md5-tolgee";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { TogleeNamespace } from "./namespace-tolgee";
import { SeDie3ContentsProps } from "./type";

const renderGameRules = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    return (
        <div className="guide-item">
            <h2>{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>
                    {t("gamerules_para_1", { ns: TogleeNamespace.SpecificGame })}
                    {renderGameRuleTable(t)}
                </li>
                <li>{t("gamerules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_5", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_4", { ns: TogleeNamespace.SpecificGame, maxbet: maxBetMain })}</li>
            </ul>
        </div>
    );
};

const renderGameRuleTable = (t: Function) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>{t("header_betoption", { ns: TogleeNamespace.Common })}</th>
                        <th>{t("guide_header_winning_condition", { ns: TogleeNamespace.Common })}</th>
                        <th>{t("header_description", { ns: TogleeNamespace.Common })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2} style={{ textTransform: "uppercase" }}>
                            {t("glossary_red", { ns: TogleeNamespace.SpecificGame })}
                        </td>
                        <td>{t("betoption_3red", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderThreeRed()}
                    </tr>
                    <tr>
                        <td>{t("betoption_2red1white", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderTwoRedOneWhite()}
                    </tr>
                    <tr>
                        <td rowSpan={2} style={{ textTransform: "uppercase" }}>
                            {t("glossary_white", { ns: TogleeNamespace.SpecificGame })}
                        </td>
                        <td>{t("betoption_1red2white", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderOneRedTwoWhite()}
                    </tr>
                    <tr>
                        <td>{t("betoption_3white", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderThreeWhite()}
                    </tr>
                    <tr>
                        <td>{t("betoption_3red", { ns: TogleeNamespace.SpecificGame })}</td>
                        <td>{t("betoption_3red", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderThreeRed()}
                    </tr>
                    <tr>
                        <td>{t("betoption_2red1white", { ns: TogleeNamespace.SpecificGame })}</td>
                        <td>{t("betoption_2red1white", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderTwoRedOneWhite()}
                    </tr>
                    <tr>
                        <td>{t("betoption_1red2white", { ns: TogleeNamespace.SpecificGame })}</td>
                        <td>{t("betoption_1red2white", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderOneRedTwoWhite()}
                    </tr>
                    <tr>
                        <td>{t("betoption_3white", { ns: TogleeNamespace.SpecificGame })}</td>
                        <td>{t("betoption_3white", { ns: TogleeNamespace.SpecificGame })}</td>
                        {renderThreeWhite()}
                    </tr>
                </tbody>
            </table>
        </div>
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
    const maxBetRed = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.red));
    const maxBetRed3 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.red3));
    const maxBetRed2 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.red2));
    const maxBetRed1 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.red1));
    const maxBetWhite3 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.white3));

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1", { ns: TogleeNamespace.Common })}</li>
                <li>{t("payouts_para_2", { ns: TogleeNamespace.Common })}</li>
                <li>
                    {t("payouts_para_3", { ns: TogleeNamespace.Common })}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>{t("header_betoption", { ns: TogleeNamespace.Common })}</th>
                                    <th>{t("header_odds", { ns: TogleeNamespace.Common })}</th>
                                    <th>{t("header_bet_limit", { ns: TogleeNamespace.Common })}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ textTransform: "uppercase" }}>
                                        {t("glossary_red", { ns: TogleeNamespace.SpecificGame })}
                                    </td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {minBetMain} - {maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textTransform: "uppercase" }}>
                                        {t("glossary_white", { ns: TogleeNamespace.SpecificGame })}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("betoption_3red", { ns: TogleeNamespace.SpecificGame })}</td>
                                    <td>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                    <td>
                                        {minBetMain} - {maxBetRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("betoption_2red1white", { ns: TogleeNamespace.SpecificGame })}</td>
                                    <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>
                                    <td>
                                        {minBetMain} - {maxBetRed2}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("betoption_1red2white", { ns: TogleeNamespace.SpecificGame })}</td>
                                    <td>{formatOdds(odds?.red1, fractionalOddsFormat)}</td>
                                    <td>
                                        {minBetMain} - {maxBetRed1}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("betoption_3white", { ns: TogleeNamespace.SpecificGame })}</td>
                                    <td>{formatOdds(odds?.white3, fractionalOddsFormat)}</td>
                                    <td>
                                        {minBetMain} - {maxBetWhite3}
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

const renderStatistical = (t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("title_StatisticalTable", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>{t("pf_result", { ns: TogleeNamespace.Common })}</th>
                                    <th>{t("header_description", { ns: TogleeNamespace.Common })}</th>
                                    <th>{t("header_symbol", { ns: TogleeNamespace.Common })}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("betoption_3red", { ns: TogleeNamespace.SpecificGame })}</td>
                                    {renderThreeRed()}
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("betoption_2red1white", { ns: TogleeNamespace.SpecificGame })}</td>
                                    {renderTwoRedOneWhite()}
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("betoption_1red2white", { ns: TogleeNamespace.SpecificGame })}</td>
                                    {renderOneRedTwoWhite()}
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("betoption_3white", { ns: TogleeNamespace.SpecificGame })}</td>
                                    {renderThreeWhite()}
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even"></span>
                                        </div>
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

const renderMd5 = (t: Function, locale?: string) => {
    const rootImgUrl = "/static/images/sedie3/";
    return (
        <MD5Tolgee
            {...{
                step1ImageUrl: `${rootImgUrl}md5_step1_${locale}.png?v=${buildVersion}`,
                step2ImageUrl: `${rootImgUrl}md5_step2_${locale}.png?v=${buildVersion}`,
                step3ImageUrl: `${rootImgUrl}md5_step3.png?v=${buildVersion}`,
                step4ImageUrl: `${rootImgUrl}md5_step4.png?v=${buildVersion}`,
                note: t("md5example_para_3", { ns: TogleeNamespace.SpecificGame }),
            }}
        />
    );
};

const SeDie3Contents: React.FC<SeDie3ContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel, environment }) => {
    const { t } = useTranslate(["SeDie3", "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
                <div className="content">{t("intro_para", { ns: TogleeNamespace.SpecificGame })}</div>
            </li>
            {renderGameRules(t, gameConfigs.maxBet, userStakeLevel)}
            {renderPayout(t, gameConfigs, userStakeLevel, fractionalOddsFormat)}
            {renderStatistical(t)}
            {environment === ENVIRONMENT.sc && renderMd5(t, locale)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default SeDie3Contents;
