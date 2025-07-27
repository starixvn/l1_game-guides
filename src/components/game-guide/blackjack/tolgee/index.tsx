import React from "react";
import { TolgeeProvider, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import Styles from "../blackjack.module.scss";

const tolgee = initTolgee(["Blackjack"]);

const CardPointValuesTable = () => {
    const { t } = useTranslate(["Blackjack"]);
    
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>{t("table_card")}</th>
                        <th> A</th>
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
                        <td>
                            <span className="font-weight-medium">{t("table_point")}</span>
                        </td>
                        <td>{t("table_ace_value")}</td>
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

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined) => {
    const { t } = useTranslate(["Blackjack"]);
    const wrapperImg = "wrapper-img";
    const optionsWidth = "options-width";
    
    return (
        <>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4", { minBet, maxBet })}</li>
                <li>{t("gamerules_para_5")}</li>
                <li>{t("gamerules_para_6")}</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{t("gamerules_player_rules_title")}</span>
                        <ul className="desc">
                            <li>{t("gamerules_player_blackjack")}</li>
                            <li>{t("gamerules_player_push")}</li>
                            <li>{t("gamerules_player_bust")}</li>
                            <li>
                                {t("gamerules_player_options_intro")}
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles[optionsWidth]}>{t("table_options")}</th>
                                                <th>{t("table_description")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {t("option_hit")}
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_hit.png"
                                                        alt="guide_hit"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>{t("option_hit_desc_1")}</li>
                                                        <li>{t("option_hit_desc_2")}</li>
                                                        <li>{t("option_hit_desc_3")}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {t("option_stand")}
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_stop.png"
                                                        alt="guide_stop"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>{t("option_stand_desc")}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {t("option_split")}
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_split.png"
                                                        alt="guide_split"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>{t("option_split_desc_1")}</li>
                                                        <li>{t("option_split_desc_2")}</li>
                                                        <li>{t("option_split_desc_3")}</li>
                                                    </ul>
                                                    <strong>{t("option_split_note_title")}</strong>
                                                    <ul className="desc">
                                                        <li>{t("option_split_note_1")}</li>
                                                        <li>{t("option_split_note_2")}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {t("option_double")}
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_double.png"
                                                        alt="guide_double"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>{t("option_double_desc")}</li>
                                                    </ul>
                                                    <strong>{t("option_double_note")}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{t("gamerules_dealer_rules_title")}</span>
                        <ul className="desc">
                            <li>{t("gamerules_dealer_para_1")}</li>
                            <li>{t("gamerules_dealer_para_2")}</li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    const { t } = useTranslate(["Blackjack"]);
    
    return (
        <li className="guide-item">
            <h2>{t("payouts_title")}</h2>
            <ul className="desc">
                <li>
                    {t("payouts_para_1")} <strong>{t("payouts_note")}</strong> {t("payouts_para_2")}
                </li>
                <li>
                    {t("payouts_para_3")}
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>{t("table_odds")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("payouts_blackjack_win")}</td>
                                    <td>{formatOdds(odds?.blackjack, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_normal_win")}</td>
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

const BlackjackGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate(["Blackjack"]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    <p className="content">
                        {t("intro_para_1", { gameName })}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain)}</li>
                <li className="guide-item">
                    <h2>{t("point_calculation_title")}</h2>
                    <ul className="desc">
                        <li>{t("point_calculation_para_1")}</li>
                        <li>{t("point_calculation_para_2")}</li>
                        <li>{t("point_calculation_para_3")}</li>
                        <li>{t("point_calculation_para_4")}<CardPointValuesTable /></li>
                    </ul>
                    <strong>{t("point_calculation_example_title")}</strong>
                    <ul className="detail">
                        <li>{t("point_calculation_example_1")}</li>
                        <li>{t("point_calculation_example_2")}</li>
                    </ul>
                </li>
                {renderPayouts(odds, fractionalOddsFormat)}
                <TermsAndConditionsTolgee extendDetails={[
                    t("terms_para_1")
                ]} />
            </ul>
        </>
    );
};

const BlackjackGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <BlackjackGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default BlackjackGuideTolgeeWrapper; 