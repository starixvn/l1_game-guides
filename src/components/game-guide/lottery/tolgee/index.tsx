import React from "react";
import { TolgeeProvider, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import Styles from "../lottery.module.scss";

const tolgee = initTolgee(["Lottery"]);

const exampleTitle = "example-title";
const tableSmall = "table-small";
const textRedLight = "text-red-light";

const renderGameRule = (maxBet: string | undefined) => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4", { maxBet })}</li>
            </ul>
        </li>
    );
};

const renderBettingOptions = () => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <li className="guide-item">
            <h2>{t("betting_options_title")}</h2>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th colSpan={2}>{t("table_options")}</th>
                        <th>{t("table_descriptions")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="text-center">
                            {t("option_4_sets")}
                        </td>
                        <td>
                            <p>{t("option_4_sets_desc_1")}</p>
                            <p>
                                <strong>{t("option_4_sets_note")}</strong> {t("option_4_sets_desc_2")}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            {t("option_special")}
                        </td>
                        <td>{t("option_special_desc")}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            {t("option_head")}
                        </td>
                        <td>{t("option_head_desc")}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            {t("option_tail")}
                        </td>
                        <td>{t("option_tail_desc")}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            {t("option_27_sets")}
                        </td>
                        <td>
                            <p>{t("option_27_sets_desc_1")}</p>
                            <p>
                                <strong>{t("option_27_sets_note")}</strong> {t("option_27_sets_desc_2")}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="text-center">
                            {t("option_others")}
                        </td>
                        <td className="text-center">{t("option_big")}</td>
                        <td>{t("option_big_desc")}</td>
                    </tr>
                    <tr>
                        <td className="text-center">{t("option_small")}</td>
                        <td>{t("option_small_desc")}</td>
                    </tr>
                    <tr>
                        <td className="text-center">{t("option_odd")}</td>
                        <td>{t("option_odd_desc")}</td>
                    </tr>
                    <tr>
                        <td className="text-center">{t("option_even")}</td>
                        <td>{t("option_even_desc")}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>{t("example_title")}</strong>
                <ul className={Styles["many-example"]}>
                    <li>{BettingOptions4Sets()}</li>
                    <li>{BettingOptionsSpecial()}</li>
                    <li>{BettingOptionsHead()}</li>
                    <li>{BettingOptionsTail()}</li>
                    <li>{BettingOptions27Sets()}</li>
                </ul>
            </div>
        </li>
    );
};

const BettingOptions4Sets = () => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <>
            <div className={Styles[exampleTitle]}>{t("example_4_sets_title")}</div>
            <ul className="desc">
                <li>{t("example_4_sets_para_1")}</li>
                <li>{t("example_4_sets_para_2")}</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>{t("table_rng_lottery")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>{t("prize_7th")}</td>
                        <td>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>14</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>94</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>{t("example_4_sets_result")}</p>
        </>
    );
};

const BettingOptionsSpecial = () => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <>
            <div className={Styles[exampleTitle]}>{t("example_special_title")}</div>
            <ul className="desc">
                <li>{t("example_special_para_1")}</li>
                <li>{t("example_special_para_2")}</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>{t("table_rng_lottery")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>{t("prize_special")}</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>62</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>{t("example_special_result")}</p>
        </>
    );
};

const BettingOptionsHead = () => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <>
            <div className={Styles[exampleTitle]}>{t("example_head_title")}</div>
            <ul className="desc">
                <li>{t("example_head_para_1")}</li>
                <li>{t("example_head_para_2")}</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>{t("table_rng_lottery")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>{t("prize_special")}</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>6</span>
                                <span className={Styles[textRedLight]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>{t("example_head_result")}</p>
        </>
    );
};

const BettingOptionsTail = () => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <>
            <div className={Styles[exampleTitle]}>{t("example_tail_title")}</div>
            <ul className="desc">
                <li>{t("example_tail_para_1")}</li>
                <li>{t("example_tail_para_2")}</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>{t("table_rng_lottery")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>{t("prize_special")}</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>0906</span>
                                <span className={Styles["text-red"]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>{t("example_tail_result")}</p>
        </>
    );
};

const BettingOptions27Sets = () => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <>
            <div className={Styles[exampleTitle]}>{t("example_27_sets_title")}</div>
            <ul className="desc">
                <li>{t("example_27_sets_para_1")}</li>
                <li>{t("example_27_sets_para_2")}</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th>{t("table_prizes")}</th>
                        <th colSpan={12}>{t("table_rng_lottery")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{t("prize_special")}</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles[textRedLight]}>763</span>
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                    </tr>
                    <tr>
                        <td>{t("prize_1st")}</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles["text-grey"]}>684</span>00
                        </td>
                    </tr>
                    <tr>
                        <td>{t("prize_2nd")}</td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>164</span>75
                        </td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>507</span>06
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>{t("prize_3rd")}</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>339</span>12
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>665</span>66
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>228</span>83
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>516</span>76
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>451</span>05
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>321</span>82
                        </td>
                    </tr>
                    <tr>
                        <td>{t("prize_4th")}</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>08</span>69
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>03</span>60
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>01</span>79
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>84</span>05
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>{t("prize_5th")}</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>28</span>50
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>62</span>72
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>40</span>43
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>53</span>86
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>64</span>23
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>42</span>31
                        </td>
                    </tr>
                    <tr>
                        <td>{t("prize_6th")}</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>87
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>8</span>65
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>92
                        </td>
                    </tr>
                    <tr>
                        <td>{t("prize_7th")}</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>97</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>26</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>33</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>{t("example_27_sets_result_1")}</p>
            <p>{t("example_27_sets_result_2")}</p>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    const { t } = useTranslate(["Lottery"]);
    return (
        <li className="guide-item">
            <h2>{t("payouts_title")}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1")}</li>
                <li>
                    <strong>{t("payouts_note")}</strong> {t("payouts_para_2")}
                </li>
                <li>{t("payouts_para_3")}</li>
            </ul>
            <table className={`table text-center table-medium`}>
                <thead>
                    <tr>
                        <th colSpan={2}>{t("table_options")}</th>
                        <th>{t("table_odds")}</th>
                        <th>
                            {t("table_bet_limit")} <br></br>({t("table_min")}-{t("table_max")})
                        </th>
                        <th className={Styles["payout-max-total-width"]}>{t("table_max_total_stake")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>{t("option_4_sets")}</td>
                        <td>{formatOdds(odds?.["4Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets4}
                        </td>
                        <td rowSpan={9}>{maxBetFollowChoice?.maxBetMain}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{t("option_special")}</td>
                        <td>{formatOdds(odds?.special, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecial}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{t("option_head")}</td>
                        <td>{formatOdds(odds?.head, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetHead}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{t("option_tail")}</td>
                        <td>{formatOdds(odds?.tail, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTail}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{t("option_27_sets")}</td>
                        <td>{formatOdds(odds?.["27Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets27}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>{t("option_others")}</td>
                        <td>{t("option_big")}</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>{t("option_small")}</td>
                    </tr>
                    <tr>
                        <td>{t("option_odd")}</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>{t("option_even")}</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderViewStatistic = () => {
    const { t } = useTranslate(["Lottery"]);
    const statsList = "stats-list";
    const resultRow = "result-row";
    const statsResult = "stats-result";
    const subNumber = "sub-number";
    return (
        <li className="guide-item">
            <h2>{t("statistic_title")}</h2>
            <ul className="desc">
                <li>{t("statistic_para_1")}</li>
                <li>
                    {t("statistic_para_2")}
                    <ul className={Styles[statsList]}>
                        <li>
                            <strong>{t("statistic_4_sets")}</strong> {t("statistic_4_sets_desc")}
                        </li>
                        <li>
                            <strong>{t("statistic_special")}</strong> {t("statistic_special_desc")}
                        </li>
                        <li>
                            <strong>{t("statistic_27_sets")}</strong> {t("statistic_27_sets_desc")}
                        </li>
                        <li>
                            <strong>{t("statistic_head")}</strong> {t("statistic_head_desc")}
                        </li>
                        <li>
                            <strong>{t("statistic_tail")}</strong> {t("statistic_tail_desc")}
                        </li>
                        <li>
                            <strong>{t("statistic_others")}</strong> {t("statistic_others_desc")}
                        </li>
                    </ul>
                    <ul className={Styles["many-example"]}>
                        <li>
                            <div className={Styles[exampleTitle]}>{t("statistic_example_1_title")}</div>
                            <ul className={Styles[statsList]}>
                                <li>
                                    {t("statistic_example_1_desc_1")} <span className={Styles["text-red"]}>{t("statistic_red")}</span>)
                                </li>
                                <li>
                                    {t("statistic_example_1_desc_2")} <span className={Styles["text-blue"]}>{t("statistic_blue")}</span>)
                                </li>
                            </ul>
                            <p className="bold">{t("example_title")}</p>
                            <p>{t("statistic_example_4_sets_desc")}</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>44</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>24</span>
                                </div>
                                <p>{t("statistic_example_4_sets_result")}</p>
                            </div>
                            <p>{t("statistic_example_27_sets_desc")}</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>00</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>0</span>
                                </div>
                                <p>{t("statistic_example_27_sets_result")}</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>{t("statistic_example_2_title")}</div>
                            <p>{t("statistic_example_2_desc")}</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    {t("statistic_example_2_condition_1")} <span className={Styles["text-red"]}>{t("statistic_red")}</span>.
                                </li>
                                <li>
                                    {t("statistic_example_2_condition_2")}{" "}
                                    <span className={Styles["text-blue"]}>{t("statistic_blue")}</span>.
                                </li>
                            </ul>
                            <p className="bold">{t("example_title")}</p>
                            <p>{t("statistic_example_head_desc")}</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>1</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>32</span>
                                </div>
                                <p>{t("statistic_example_head_result")}</p>
                            </div>
                            <p>{t("statistic_example_tail_desc")}</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>7</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>4</span>
                                </div>
                                <p>{t("statistic_example_tail_result")}</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>{t("statistic_example_3_title")}</div>
                            <p>{t("statistic_example_3_desc")}</p>
                            <p className="bold">{t("example_title")}</p>
                            <div className={Styles["others"]}>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-red"]}`}>{t("option_odd")}</span>
                                    <span className={`${Styles[subNumber]}`}>48%</span>
                                </div>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-white"]}`}>{t("option_even")}</span>
                                    <span className={`${Styles[subNumber]}`}>52%</span>
                                </div>
                            </div>
                            <p>{t("statistic_example_3_result")}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const LotteryGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, locale } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate(["Lottery"]);

    // Handle locale changes
    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    <p className="content">{t("intro_para_1", { gameName })}</p>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <table className={`table text-center ${Styles["table-medium"]}`}>
                                <thead>
                                    <tr>
                                        <th>{t("table_prizes")}</th>
                                        <th colSpan={12}>{t("table_rng_lottery")}</th>
                                        <th>{t("table_no_of_results")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("prize_special")}</td>
                                        <td colSpan={12} className="bold">
                                            <span className={Styles["text-red"]}>76349</span>
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>{t("prize_first")}</td>
                                        <td colSpan={12} className="bold">
                                            68400
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>{t("prize_second")}</td>
                                        <td colSpan={6} className="bold">
                                            16475
                                        </td>
                                        <td colSpan={6} className="bold">
                                            50706
                                        </td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>{t("prize_third")}</td>
                                        <td colSpan={4} className="bold">
                                            33912
                                        </td>
                                        <td colSpan={4} className="bold">
                                            66566
                                        </td>
                                        <td colSpan={4} className="bold">
                                            22883
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            51676
                                        </td>
                                        <td colSpan={4} className="bold">
                                            45105
                                        </td>
                                        <td colSpan={4} className="bold">
                                            32182
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("prize_fourth")}</td>
                                        <td colSpan={3} className="bold">
                                            0869
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0360
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0179
                                        </td>
                                        <td colSpan={3} className="bold">
                                            8405
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>{t("prize_fifth")}</td>
                                        <td colSpan={4} className="bold">
                                            2850
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6272
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4043
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            5386
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6423
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4231
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("prize_sixth")}</td>
                                        <td colSpan={4} className="bold">
                                            287
                                        </td>
                                        <td colSpan={4} className="bold">
                                            865
                                        </td>
                                        <td colSpan={4} className="bold">
                                            292
                                        </td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>{t("prize_seventh")}</td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>97</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>26</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>42</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>33</span>
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={13}></td>
                                        <td className="bold">{t("table_total")} = 27</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {renderBettingOptions()}
                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderViewStatistic()}
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const LotteryGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <LotteryGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default LotteryGuideTolgeeWrapper;
