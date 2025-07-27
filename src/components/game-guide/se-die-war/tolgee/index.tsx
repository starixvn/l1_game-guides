import React from "react";
import { useTheme } from "next-themes";
import { TolgeeProvider, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/en";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import Styles from "../se-die-war.module.scss";
import { Themes } from "../../../../common/constants";

const NAMESPACE = "SeDieWar";

const tolgee = initTolgee([NAMESPACE]);

const renderGameRule = (maxBet: string | undefined) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4", { maxBet })}</li>
                <li>{t("gamerules_para_5")}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th colSpan={2}>{t("table_options")}</th>
                                    <th>{t("table_winning_conditions")}</th>
                                    <th>{t("table_descriptions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>{t("option_player")}</td>
                                    <td colSpan={2} className="text-start">
                                        {t("option_player_desc")}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>{t("option_banker")}</td>
                                    <td colSpan={2} className="text-start">
                                        {t("option_banker_desc")}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>{t("option_tie")}</td>
                                    <td colSpan={2} className="text-start">
                                        {t("option_tie_desc")}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>{t("option_total_even")}</td>
                                    <td colSpan={2} className="text-start">
                                        {t("option_total_even_desc")}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>{t("option_total_odd")}</td>
                                    <td colSpan={2} className="text-start">
                                        {t("option_total_odd_desc")}
                                    </td>
                                </tr>
                                {renderGameRulePlayerOrBanker(false)}
                                {renderGameRulePlayerOrBanker(true)}
                            </tbody>
                        </table>
                    </div>
                    {renderGameRuleExample()}
                </li>
            </ul>
        </>
    );
};

const renderGameRulePlayerOrBanker = (isBanker = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <tr>
                <td rowSpan={9}>{isBanker ? t("option_banker") : t("option_player")}</td>
                <td rowSpan={2}>{t("option_odd")}</td>
                <td>{t("option_3_red_1_white")}</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td>{t("option_1_red_3_white")}</td>
                {renderOneRedThreeWhite()}
            </tr>
            <tr>
                <td rowSpan={3}>{t("option_even")}</td>
                <td>{t("option_4_red")}</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>{t("option_4_white")}</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>{t("option_2_red_2_white")}</td>
                {renderTwoRedTwoWhite()}
            </tr>
            {RedWhiteDataOnTable()}
        </>
    );
};

const renderGameRuleExample = () => {
    const { t } = useTranslate([NAMESPACE]);
    const oneRedThreeWhite = t("option_1_red_3_white");
    const threeRedOneWhite = t("option_3_red_1_white");
    return (
        <>
            <p>
                <strong>{t("example_title")}</strong>
            </p>
            <div>
                <strong>{t("example_banker_player_option")}</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>{t("example_banker_player_result")}</p>
            <div>
                <strong>{t("option_total_even")}</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>{t("example_total_even_result")}</p>
            <div>
                <strong>{t("option_total_odd")}</strong>
                {renderGameRuleTable([t("option_2_red_2_white"), oneRedThreeWhite])}
            </div>
            <p>{t("example_total_odd_result")}</p>
        </>
    );
};

const renderGameRuleTable = (data: string[]) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>{t("table_options")}</th>
                        <th>{t("table_results")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{t("option_player")}</td>
                        <td>{data[0]}</td>
                    </tr>
                    <tr>
                        <td>{t("option_banker")}</td>
                        <td>{data[1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (odds: object | any, maxBetFollowChoice: undefined | MaxBetChoicesProps, fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <li className="guide-item">
            <h2>{t("payouts_title")}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1")}</li>
                <li>
                    {t("payouts_para_2")}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>{t("table_options")}</th>
                                    <th>{t("table_payouts")}</th>
                                    <th>{t("table_bet_limit")} ({t("table_min")} - {t("table_max")})</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("option_player")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={5}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_banker")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_tie")}</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_total_even")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_total_odd")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_player_even")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_player_odd")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_player_3_red")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_player_1_red")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_player_4_red")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_player_4_white")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_banker_even")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_banker_odd")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_banker_3_red")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_banker_1_red")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_banker_4_red")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_banker_4_white")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const { t } = useTranslate([NAMESPACE]);
    const pathImg = theme === Themes.light || Themes.infoSite ? "dark/guide-stats-en.png" : "guide-stats-en.png?1";
    
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    <p className="content">
                        {t("intro_para_1", { gameName })}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item">
                    <h2>{t("scoreboard_title")}</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <strong className="title-text">{t("scoreboard_odd_even_title")}</strong>
                            {StatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <strong className="title-text">{t("scoreboard_statistical_round_title")}</strong>
                            <div className={Styles["wrapper-guide-stats"]}>
                                <img src={`/static/images/sedie-war/${pathImg}`} alt="guide-stats-en" loading="eager" />
                            </div>

                            <p>
                                <strong>{t("scoreboard_note")}</strong> {t("scoreboard_note_desc")}
                            </p>
                        </li>
                    </ul>
                </li>
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const SeDieGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <SeDieGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default SeDieGuideTolgeeWrapper; 