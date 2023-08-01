import React from "react";
import { useTranslate, T } from "@tolgee/react";
import { Markup } from "interweave";
import { Cards } from "../base/base-baccarat/card-model";
import MD5Tolgee from "../base/md5/md5-tolgee";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { formatOdds } from "../../../helpers/number-helper";
import { DragonTigerFightContentsProps } from "./type";

const renderGameRules = (t: Function, maxBet: number, odds: any) => {
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li >{t("gamerules_para_1", { ns: "DragonTigerFight" })}</li>
                <li >{t("gamerules_para_2", { ns: "DragonTigerFight" })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className="bold">{t("header_betoption", { ns: "Common" })}</th>
                                    <th className="bold">{t("header_description", { ns: "Common" })}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(odds).map((choice, index) => (<tr key={index}>
                                        <td>
                                            {t(`glossary_${choice}`, { ns: "DragonTigerFight" })}
                                        </td>
                                        <td>
                                            {t(`descrip_${choice}`, { ns: "DragonTigerFight" })}
                                        </td>
                                    </tr>))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div> <Markup content={t("gamerules_para_3", { ns: "DragonTigerFight" })} /></div>
                </li>
                <li>
                    <Markup content={t("gamerules_para_5", { ns: "DragonTigerFight" })} /></li>
                <li >{t("gamerules_para_6", { ns: "DragonTigerFight" })}</li>
                <li >
                    {t("gamerules_para_7", { ns: "DragonTigerFight" })}
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className="bold">
                                        <Markup content={t("header_card", { ns: "DragonTigerFight" })} />
                                    </th>
                                    {Cards.map((card, index) => (
                                        <th key={card.name}>{card.name}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bold">
                                        <Markup content={t("header_point", { ns: "DragonTigerFight" })} />
                                    </td>
                                    {Cards.map((card, index) => (
                                        <td key={card.name}>{index + 1}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <ul className="detail">
                            <li>{t("gamerules_para_8", { ns: "DragonTigerFight" })}</li>
                            <li>{t("gamerules_para_9", { ns: "DragonTigerFight" })}</li>
                        </ul>
                    </div>
                </li>
                <li >{t("gamerules_para_10", { ns: "DragonTigerFight" })}</li>
                <li >{t("gamerules_para_11", { ns: "DragonTigerFight" })}</li>
            </ul>
        </li>
    );
};

const renderPayout = (t: Function, gameConfigs: GameConfigs, fractionalOddsFormat?: boolean) => {
    const { odds, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li >{t("payouts_para_1", { ns: "Common" })}</li>
                <li >{t("payouts_para_2", { ns: "Common" })}</li>
                <li >{t("payouts_para_3", { ns: "Common" })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className="bold">{t("header_betoption", { ns: "Common" })}</th>
                                    <th className="bold"><Markup content={t("header_odds", { ns: "Common" })} /></th>
                                    <th className="bold">{t("header_betlimit", { ns: "Common" })}</th>
                                    <th className="bold"><Markup content={t("header_maxround", { ns: "Common" })} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        {t(`glossary_dragon`, { ns: "DragonTigerFight" })}
                                    </td>
                                    <td rowSpan={2}>
                                        {formatOdds(odds?.dragon, fractionalOddsFormat)}
                                    </td>
                                    <td rowSpan={2}>
                                        {minBet} - {maxBetPerChoices.dragon}
                                    </td>
                                    <td rowSpan={7}>
                                        {maxBet}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_tiger`, { ns: "DragonTigerFight" })}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_tie`, { ns: "DragonTigerFight" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.tie, fractionalOddsFormat)}
                                    </td>
                                    <td >
                                        {minBet} - {maxBetPerChoices.tie}
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        {t(`glossary_redDragon`, { ns: "DragonTigerFight" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.redDragon, fractionalOddsFormat)}
                                    </td>
                                    <td >
                                        {minBet} - {maxBetPerChoices.redDragon}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {t(`glossary_blackDragon`, { ns: "DragonTigerFight" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.blackDragon, fractionalOddsFormat)}
                                    </td>
                                    <td >
                                        {minBet} - {maxBetPerChoices.blackDragon}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {t(`glossary_redTiger`, { ns: "DragonTigerFight" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.redTiger, fractionalOddsFormat)}
                                    </td>
                                    <td>
                                        {minBet} - {maxBetPerChoices.redTiger}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_blackTiger`, { ns: "DragonTigerFight" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.blackTiger, fractionalOddsFormat)}
                                    </td>
                                    <td>
                                        {minBet} - {maxBetPerChoices.blackTiger}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div><Markup content={t("payouts_para_4", { ns: "DragonTigerFight" })} /></div>
                </li>
            </ul>
        </li>
    );
};

const DragonTigerFightContents: React.FC<DragonTigerFightContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale }) => {
    const { t } = useTranslate(["DragonTigerFight", "Common"]);
    const rootImgUrl = "/static/images/dragon-tiger-fight/";

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className="content">{t("intro_para_1", { ns: "DragonTigerFight" })}</div>
            </li>
            {renderGameRules(t, gameConfigs.maxBet, gameConfigs.odds)}
            {renderPayout(t, gameConfigs, fractionalOddsFormat)}
            <MD5Tolgee {...{
                step1ImageUrl: `${rootImgUrl}md5_step1_${locale}.png?v=4`,
                step2ImageUrl: `${rootImgUrl}md5_step2_${locale}.png?v=5`,
                step3ImageUrl: `${rootImgUrl}md5_step3.png?v=1`,
                step4ImageUrl: `${rootImgUrl}md5_step4.png?v=1`,
                note: <Markup content={t(`md5example_para_3`, {
                    "cardSample": `{7<img src="${rootImgUrl}white-heart.png"/>2<img src="${rootImgUrl}black-ace.png"/>}`
                })} />

            }} />
            < TermsAndConditionsTolgee />
        </ul >
    );
};

export default DragonTigerFightContents;
