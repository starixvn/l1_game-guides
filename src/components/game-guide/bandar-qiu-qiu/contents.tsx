import React from "react";
import { useTranslate, T } from "@tolgee/react";
import { Markup } from "interweave";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { BandarQiuQiuGameContentsProps } from "./type";
import Styles from "./bandar-qiu-qiu-game.module.scss";
import MD5Tolgee from "../base/md5/md5-tolgee";
import { buildVersion } from "../../../common/constants";

const bandarQiuQiuRootImgUrl = "/static/images/bandar-qiu-qiu/";
const renderGameRules = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li >{t("gamerules_para_1", { ns: "BandarQiuQiu" })}</li>
                <li >{t("gamerules_para_2", { ns: "BandarQiuQiu" })}</li>
                <li >{t("gamerules_para_3", { ns: "BandarQiuQiu" })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className="bold">{t("header_hand_ranking", { ns: "BandarQiuQiu" })}</th>
                                    <th className="bold">{t("header_description", { ns: "Common" })}</th>
                                    <th className="bold">{t("header_example", { ns: "BandarQiuQiu" })}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        {t("glossary_hand_ranking_six_devil", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        {t("desc_six_devil", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        <img className="format-img auto-center " src={`${bandarQiuQiuRootImgUrl}rule-sixdevil.png?v=${buildVersion}}`} alt="" />
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t("glossary_hand_ranking_twin", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        {t("desc_twin", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        <img className="format-img auto-center " src={`${bandarQiuQiuRootImgUrl}rule-twin.png?v=${buildVersion}}`} alt="" />
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t("glossary_hand_ranking_small", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        {t("desc_small", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        <img className="format-img auto-center " src={`${bandarQiuQiuRootImgUrl}rule-small.png?v=${buildVersion}}`} alt="" />
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t("glossary_hand_ranking_big", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        {t("desc_big", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}rule-big.png?v=${buildVersion}}`} alt="" />
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t("glossary_hand_ranking_qiuqiu", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        {t("desc_qiuqiu", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        <img className="format-img auto-center " src={`${bandarQiuQiuRootImgUrl}rule-qiuqiu.png?v=${buildVersion}}`} alt="" />
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t("glossary_hand_ranking_ordinary", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        {t("desc_ordinary_card", { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td>
                                        <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}rule-ordinarycard.png?v=${buildVersion}}`} alt="" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div >{t("gamerules_para_4", { ns: "BandarQiuQiu" })}</div>
                </li>
                <li >{t("game_rules_para_5", { ns: "BandarQiuQiu" })}
                    <div className="table-container">
                        <ul className="desc">
                            <li >{t("game_rules_para_6", { ns: "BandarQiuQiu" })}
                                <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}rule-set1set2.png?v=${buildVersion}}`} alt="" />
                            </li>
                            <li >{t("game_rules_para_7", { ns: "BandarQiuQiu" })}</li>
                            <li >{t("game_rules_para_8", { ns: "BandarQiuQiu" })}
                                <ul className="desc">
                                    <li >{t("game_rules_para_9", { ns: "BandarQiuQiu" })}
                                        <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}rule-smallcards.png?v=${buildVersion}}`} alt="" />
                                    </li>
                                    <li >{t("game_rules_para_10", { ns: "BandarQiuQiu" })}
                                        <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}rule-bigcards.png?v=${buildVersion}}`} alt="" />
                                    </li>
                                    <li >{t("game_rules_para_11", { ns: "BandarQiuQiu" })}
                                        <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}rule-doublecards.png?v=${buildVersion}}`} alt="" />
                                    </li>
                                </ul>
                            </li>
                            <li >{t("game_rules_para_12", { ns: "BandarQiuQiu" })}
                                <div className="table-container">
                                    <table className="table">
                                        <thead className="text-center">
                                            <tr>
                                                <th className="bold">{t("header_compare_set1", { ns: "BandarQiuQiu" })}</th>
                                                <th className="bold">{t("header_compare_set2", { ns: "BandarQiuQiu" })}</th>
                                                <th className="bold">{t("header_comparing_rule", { ns: "BandarQiuQiu" })}</th>
                                                <th className="bold">{t("header_example", { ns: "BandarQiuQiu" })}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-left">
                                            <tr >
                                                <td className={Styles["nowrap"]}>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} < ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td className={Styles["nowrap"]}>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} > ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {t("compare_rule_bigger_cards", { ns: "BandarQiuQiu" })}
                                                </td>
                                                <td>
                                                    <div>{t("player", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-11.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>{t("banker", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-12.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>
                                                        {t("example_compare", { ns: "BandarQiuQiu" })}
                                                        <ul className="desc">
                                                            <li >{t("example_1_para_1", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_1_para_2", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_1_para_3", { ns: "BandarQiuQiu" })}</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} > ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} < ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {t("compare_rule_bigger_cards", { ns: "BandarQiuQiu" })}
                                                </td>
                                                <td>
                                                    <div>{t("player", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-21.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>{t("banker", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-22.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>
                                                        {t("example_compare", { ns: "BandarQiuQiu" })}
                                                        <ul className="desc">
                                                            <li >{t("example_2_para_1", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_2_para_2", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_2_para_3", { ns: "BandarQiuQiu" })}</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} > ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} > ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {t("compare_player_win", { ns: "BandarQiuQiu" })}
                                                </td>
                                                <td>
                                                    <div>{t("player", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-31.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>{t("banker", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-32.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>
                                                        {`${t("example_compare", { ns: "BandarQiuQiu" })} :  ${t("compare_player_win", { ns: "BandarQiuQiu" })}`}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} = ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} > ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {t("compare_player_win", { ns: "BandarQiuQiu" })}
                                                </td>
                                                <td>
                                                    <div>{t("player", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-41.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>{t("banker", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-42.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>
                                                        {`${t("example_compare", { ns: "BandarQiuQiu" })} :  ${t("compare_player_win", { ns: "BandarQiuQiu" })}`}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} = ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} < ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {t("compare_banker_win", { ns: "BandarQiuQiu" })}
                                                </td>
                                                <td>
                                                    <div>{t("player", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-51.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>{t("banker", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-52.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>
                                                        {`${t("example_compare", { ns: "BandarQiuQiu" })} :  ${t("compare_banker_win", { ns: "BandarQiuQiu" })}`}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} = ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} = ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {t("compare_rule_bigger_cards", { ns: "BandarQiuQiu" })}
                                                </td>
                                                <td>
                                                    <div>{t("player", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-61.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>{t("banker", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-62.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>
                                                        {t("example_compare", { ns: "BandarQiuQiu" })}
                                                        <ul className="desc">
                                                            <li >{t("example_6_para_1", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_6_para_2", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_6_para_3", { ns: "BandarQiuQiu" })}</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr >
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} = ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {`${t("player", { ns: "BandarQiuQiu" })} = ${t("banker", { ns: "BandarQiuQiu" })}`}
                                                </td>
                                                <td>
                                                    {t("compare_rule_bigger_cards", { ns: "BandarQiuQiu" })}
                                                </td>
                                                <td>
                                                    <div>{t("player", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-71.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>{t("banker", { ns: "BandarQiuQiu" })}: <img className="format-img auto-center" src={`${bandarQiuQiuRootImgUrl}example-72.png?v=${buildVersion}}`} alt="" /></div>
                                                    <div>
                                                        {t("example_compare", { ns: "BandarQiuQiu" })}
                                                        <ul className="desc">
                                                            <li >{t("example_7_para_1", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_7_para_2", { ns: "BandarQiuQiu" })}</li>
                                                            <li >{t("example_7_para_3", { ns: "BandarQiuQiu" })}</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li > <T
                                keyName="game_rule_para_13"
                                params={{ maxbet: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                            /></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const renderPayout = (t: Function, gameConfigs: GameConfigs, fractionalOddsFormat?: boolean) => {
    const { odds } = gameConfigs;

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
                                    <th className="bold">{t("header_hand_ranking", { ns: "BandarQiuQiu" })}</th>
                                    <th className="bold"><Markup content={t("header_odds", { ns: "Common" })} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        {t(`glossary_hand_ranking_six_devil`, { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.sixDevil, fractionalOddsFormat)}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_hand_ranking_twin`, { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.twin, fractionalOddsFormat)}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_hand_ranking_small`, { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.small, fractionalOddsFormat)}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_hand_ranking_big`, { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.big, fractionalOddsFormat)}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_hand_ranking_qiuqiu`, { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.qiuQiu, fractionalOddsFormat)}
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        {t(`glossary_hand_ranking_ordinary`, { ns: "BandarQiuQiu" })}
                                    </td>
                                    <td >
                                        {formatOdds(odds?.ordinaryCard, fractionalOddsFormat)}
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

const renderMd5 = (t: Function, locale: string | undefined) => {
    const rootImgUrl = "/static/images/dragon-tiger-fight/";
    const notedElement = `<div>
        <div class="bold">${t("Example_md5_note", { ns: "BandarQiuQiu" })}</div>
        <ul class="desc"> 
            <li>${t(`example_md5_note_1`, {
        "md5Result": `{<img src="${bandarQiuQiuRootImgUrl}md5result.png"/>}`
    })}</li>
            <li>${t("example_md5_note_2", { ns: "BandarQiuQiu" })}</li>
        </ul>
    </div>`;

    return (
        <MD5Tolgee {...{
            step1ImageUrl: `${rootImgUrl}md5_step1_${locale}.png?v=${buildVersion}`,
            step2ImageUrl: `${rootImgUrl}md5_step2_${locale}.png?v=${buildVersion}`,
            step3ImageUrl: `${rootImgUrl}md5_step3.png?v=${buildVersion}`,
            step4ImageUrl: `${rootImgUrl}md5_step4.png?v=${buildVersion}`,
            note: <Markup content={notedElement} />

        }} />
    );
}
const BandarQiuQiuGameContents: React.FC<BandarQiuQiuGameContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate(["BandarQiuQiu", "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className="content">{t("intro_para_1", { ns: "BandarQiuQiu" })}</div>
            </li>
            {renderGameRules(t, gameConfigs.maxBet, userStakeLevel)}
            {renderPayout(t, gameConfigs, fractionalOddsFormat)}
            {renderMd5(t, locale)}
            < TermsAndConditionsTolgee />
        </ul >
    );
};

export default BandarQiuQiuGameContents;
