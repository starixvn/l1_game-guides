import React from "react";

import { useTranslate } from "@tolgee/react";
import { Trans } from "next-i18next";
import { useImgVersionContext } from "../../../contexts/img-version";
import { formatOdds } from "../../../helpers/number-helper";
import { GameGuideProps } from "../type";
import Styles from "./pontoon.module.scss";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "./type";
let imgSrc = "",
    imgVer = "";

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined, t: Function) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4")}</li>
                <li>{t("gamerules_para_5")}</li>
                <li>{t("gamerules_para_6")}</li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, fractionalOddsFormat = false, t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("title_payouts", {ns: "Common"})}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1")}</li>
                <li>{t("payouts_para_2")}
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th className={Styles["col-ex"]}></th>
                                    <th>{t("header_odds", {ns: "Common"})}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("pontoon_win")}</td>
                                    <td>{formatOdds(odds?.blackjack, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("five-card_win")}</td>
                                    <td>{formatOdds(odds?.regular, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("normal_win")}</td>
                                    <td>{formatOdds(odds?.regular, fractionalOddsFormat)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const CardPointValuesTable = (t: Function) => {
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr className={Styles["row-card"]}>
                        <th className={Styles["col-card"]}><Trans>{t("card")}</Trans></th>
                        <th className={Styles["col-card-first"]}> A</th>
                        <th> 2</th>
                        <th> 3</th>
                        <th> 4</th>
                        <th> 5</th>
                        <th> 6</th>
                        <th> 7</th>
                        <th> 8</th>
                        <th> 9</th>
                        <th> 10</th>
                        <th> J</th>
                        <th> Q</th>
                        <th> K</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Trans>{t("point")}</Trans></td>
                        <td>1 {t("or")} 11</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const PointCaculationRules = (t: Function) => {
    return (
        <div>
            <h2>{t("title_point_calculation")}</h2>
            <ul className="desc">
                <li>{t("point_calculation_para_1")}
                    <div>{CardPointValuesTable(t)}</div>
                </li>
                <li>{t("point_calculation_para_2")}
                    <strong>Example: </strong>
                    <ul className="detail">
                        <li>A hand containing a Nine (9), Eight (8), and Ace (A) {`=>`} the hand’s value is 18.</li>
                        <li>A hand containing a Seven (7) and Ace (A) {`=>`} the hand’s value is 18</li>
                    </ul>
                </li>
                <li>{t("point_calculation_para_6")}
                    <ul className="detail">
                        <li>{t("point_calculation_para_7")}</li>
                        <li>{t("point_calculation_para_8")}</li>
                        <li>{t("point_calculation_para_9")}</li>
                        <li>{t("point_calculation_para_10")}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

const PlayerHandRules = (t: Function) => {
    return (
        <div>
            <h2>{t("title_rule_for_player")}</h2>
            <ul className="desc">
                <li>{t("rule_for_player_para_1")}</li>
                <li>{t("rule_for_player_para_2")}</li>
                <li>{t("rule_for_player_para_3")}
                <div className="table-container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className={Styles["col-option"]}>{t("header_option")}</th>
                            <th>{t("header_description", {ns: "Common"})}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t("hit")}</td>
                            <td className="text-start">{t("desc_hit_para_1")}<br/>
                                <ul className="desc">
                                    <li><Trans>{t("desc_hit_para_2")}</Trans></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Stand                                
                            </td>
                            <td className="text-start">
                                <ul className="desc">
                                    <li>{t("desc_stand_para_1")}</li>
                                    <li>{t("desc_stand_para_2")}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Split                               
                            </td>
                            <td className="text-start">
                                <ul className="desc">
                                    <li>{t("desc_split_para_1")}</li>
                                    <li>{t("desc_split_para_2")}</li>
                                    <li>T{t("desc_split_para_3")}</li>
                                </ul>
                                <Trans>{t("desc_split_para_4")}</Trans>
                                <ul className="desc">
                                    <li>{t("desc_split_para_5")}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Double                               
                            </td>
                            <td className="text-start">
                                <ul className="desc">
                                    <li>{t("desc_double_para_1")}</li>
                                    <li>{t("desc_double_para_2")}</li>
                                    <li>{t("desc_double_para_3")}</li>
                                    <li>{t("desc_double_para_4")}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </li>
            </ul>           
        </div>
        
    );
};


const DealerHandRules = (t: Function) => {
    return (
        <div>
            <h2>{t("title_rule_for_dealer")}</h2>
            <ul className="desc">
                <li>{t("rule_for_dealer_para_1")}</li>
                <li>{t("rule_for_dealer_para_2")}</li>
                <li>{t("rule_for_dealer_para_3")}</li>
            </ul>
        </div>
    );
};
const renderTermsAndConditions = (t: Function) => {
    return (
        <li className={`guide-item ${Styles["guide-item"]}`}>
            <h2 className={Styles["heading1"]}>{t("termsandconditions-title", { ns: "Common" })}</h2>
            <ul className="style-number-rule">
                {[1, 2, 3, 4].map((paraIndex) => (
                    <li key={`para-${paraIndex}`} className="number-dot">
                        {t(`termsandconditions_para_${paraIndex}`, { ns: "Common" })}
                    </li>
                ))}
            </ul>
        </li>
    );
};

const Contents: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { imgVersion } = useImgVersionContext();
    const { t } = useTranslate(["Pontoon", "Common"]);
    imgVer = imgVersion ?? "";
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("title_introduction", { ns: "Common" })}</h2>
                    <p className="content">{t("intro_para_1")}</p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain, t)}</li>
                <li className="guide-item">{PointCaculationRules(t)}</li>
                <li className="guide-item">{PlayerHandRules(t)}</li>
                <li className="guide-item">{DealerHandRules(t)}</li>
                {renderPayouts(odds, fractionalOddsFormat, t)}
                {renderTermsAndConditions(t)}
            </ul>
        </>
    );
};
export default Contents;
