import { TolgeeProvider, useTranslate } from "@tolgee/react";
import React from "react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import Styles from "../roulette.module.scss";
import { renderGameRuleImage } from "../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";

const NAMESPACE = "OldRoulette";

const tolgee = initTolgee([NAMESPACE]);

const wrapperImg = "wrapper-img";
const tableSmall = "table-small";

const renderGameRule = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4")}</li>
                <li>{t("gamerules_para_5")}</li>
                <li>
                    {t("gamerules_para_6")} <strong>{t("gamerules_note")}</strong> {t("gamerules_para_7")}
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>{t("table_bet_types")}</th>
                                    <th>{t("table_odds")}</th>
                                    <th>
                                        {t("table_bet_limit")} <br></br> ({t("table_min")} - {t("table_max")})
                                    </th>
                                    <th>{t("table_max_total_stake")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("bet_straight_up")}</td>
                                    <td>{formatOdds(odds?.straightUp, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightUp}
                                    </td>
                                    <td rowSpan={12}>{maxBetFollowChoice?.maxBetMain}</td>
                                </tr>
                                <tr>
                                    <td>{t("bet_split")}</td>
                                    <td>{formatOdds(odds?.split, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSplit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("bet_street")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.street, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStreet}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("bet_triangle")}</td>
                                </tr>
                                <tr>
                                    <td>{t("bet_corner")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.corner, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetCorner}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("bet_four_numbers")}</td>
                                </tr>
                                <tr>
                                    <td>{t("bet_line")}</td>
                                    <td>{formatOdds(odds?.line, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetLine}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("bet_column")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.dozen, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDozen}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("bet_dozen")}</td>
                                </tr>
                                <tr>
                                    <td>{t("bet_red_black")}</td>
                                    <td rowSpan={3}>{formatOdds(odds?.redBlack, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRedBlack}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("bet_odd_even")}</td>
                                </tr>
                                <tr>
                                    <td>{t("bet_big_small")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>{t("gamerules_para_8")}</li>
            </ul>
        </>
    );
};

const renderBetChipsNotice = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <div className="table-container">
            <table className={`table text-center ${Styles["table-customize"]}`}>
                <thead>
                    <tr>
                        <th>{t("table_inside_bets")}</th>
                        <th>{t("table_outside_bets")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/A-X.png" alt="A-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_straight_up")}: </strong>
                                    {t("bet_straight_up_desc")}
                                    <br></br>+ {t("bet_straight_up_placement")}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/H-X.png" alt="H-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_column")}: </strong>
                                    {t("bet_column_desc")}
                                    <br></br>+ {t("bet_column_placement", { odds: formatOdds(odds?.column, fractionalOddsFormat) })}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/B-X.png" alt="B-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_split")}: </strong>
                                    {t("bet_split_desc")}
                                    <br></br>+ {t("bet_split_placement")}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/I-X.png" alt="I-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_dozen")}: </strong>
                                    {t("bet_dozen_desc")}
                                    <br></br>+ {t("bet_dozen_placement")}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/C-X.png" alt="C-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_street")}: </strong>
                                    {t("bet_street_desc")}
                                    <br></br>+ {t("bet_street_placement")}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/J-X.png" alt="J-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_red_black")}: </strong>
                                    {t("bet_red_black_desc")}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/D-X.png" alt="D-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_triangle")}: </strong>
                                    {t("bet_triangle_desc")}
                                    <br></br>+ {t("bet_triangle_placement")}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/K-X.png" alt="K-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_odd_even")}: </strong>
                                    {t("bet_odd_even_desc")}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/E-X.png" alt="E-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_corner")}: </strong>
                                    {t("bet_corner_desc")}
                                    <br></br>+ {t("bet_corner_placement")}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/L-X.png" alt="L-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_big_small")}: </strong>
                                    {t("bet_big_small_desc")}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/F-X.png" alt="F-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_four_numbers")}: </strong>
                                    {t("bet_four_numbers_desc")}
                                    <br></br>+ {t("bet_four_numbers_placement")}
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/G-X.png" alt="G-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>{t("bet_line")}: </strong>
                                    {t("bet_line_desc")}
                                    <br></br>+ {t("bet_line_placement")}
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderCallBetTiers = (fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <span className="font-weight-medium title-text">{t("call_bet_tiers_title")}</span>
            <ul className="desc">
                <li>{t("call_bet_tiers_desc_1")}</li>
                <li>{t("call_bet_tiers_desc_2")}</li>
            </ul>
            <p>
                <strong>{t("example_title")}</strong> {t("call_bet_tiers_example")}
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>{t("table_bet_type")}</th>
                            <th>{t("table_options")}</th>
                            <th>{t("table_stake")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={6}>{t("bet_split")}</td>
                            <td>5, 8</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>10, 11</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13, 16</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>23, 24</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27, 30</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>33, 36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>{t("table_total")}</strong>
                            </td>
                            <td>60</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetOrphelins = (fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <span className="font-weight-medium title-text">{t("call_bet_orphelins_title")}</span>
            <ul className="desc">
                <li>{t("call_bet_orphelins_desc_1")}</li>
                <li>
                    {t("call_bet_orphelins_desc_2")}
                    <ul className="plus">
                        <li>{t("call_bet_orphelins_desc_3")}</li>
                        <li>{t("call_bet_orphelins_desc_4")}</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>{t("example_title")}</strong> {t("call_bet_orphelins_example")}
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-orphelins_ex.png"
                        alt="game_guide-orphelins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-orphelins_ex.png" alt="game_guide-orphelins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>{t("table_bet_type")}</th>
                            <th>{t("table_options")}</th>
                            <th>{t("table_stake")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={4}>{t("bet_split")}</td>
                            <td>6, 9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>14, 17</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>17, 20</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>31, 34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>{t("bet_straight_up")}</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>{t("table_total")}</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetVoisins = (fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <span className="font-weight-medium title-text">{t("call_bet_voisins_title")}</span>
            <ul className="desc">
                <li>{t("call_bet_voisins_desc_1")}</li>
                <li>
                    {t("call_bet_voisins_desc_2")}
                    <ul className="plus">
                        <li>{t("call_bet_voisins_desc_3")}</li>
                        <li>{t("call_bet_voisins_desc_4")}</li>
                        <li>{t("call_bet_voisins_desc_5")}</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>{t("example_title")}</strong> {t("call_bet_voisins_example")}
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-voisins_ex.png"
                        alt="game_guide-voisins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-voisins_ex.png" alt="game_guide-voisins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>{t("table_bet_type")}</th>
                            <th>{t("table_options")}</th>
                            <th>{t("table_stake")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>{t("bet_split")}</td>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>18, 21</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>19, 22</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4, 7</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>{t("bet_triangle")}</td>
                            <td>0, 2, 3</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>{t("bet_corner")}</td>
                            <td>25, 26, 28, 29</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>{t("table_total")}</strong>
                            </td>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetZero = (fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <span className="font-weight-medium title-text">{t("call_bet_zero_title")}</span>
            <ul className="desc">
                <li>{t("call_bet_zero_desc_1")}</li>
                <li>
                    {t("call_bet_zero_desc_2")}
                    <ul className="plus">
                        <li>{t("call_bet_zero_desc_3")}</li>
                        <li>{t("call_bet_zero_desc_4")}</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>{t("example_title")}</strong> {t("call_bet_zero_example")}
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>{t("table_bet_type")}</th>
                            <th>{t("table_options")}</th>
                            <th>{t("table_stake")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>{t("bet_split")}</td>
                            <td>0, 3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>{t("bet_straight_up")}</td>
                            <td>26</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>{t("table_total")}</strong>
                            </td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetNeighbors = (fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <>
            <span className="font-weight-medium title-text">{t("call_bet_neighbors_title")}</span>
            <p>{t("call_bet_neighbors_desc_1")}</p>
            <ul className="desc">
                <li>{t("call_bet_neighbors_desc_2")}</li>
            </ul>

            <div className={Styles["wrapper-img-circle"]}>
                <img src="/static/images/roulette/game_guide-neighbors_1.png" alt="game_guide-neighbors_1" loading="lazy" />
            </div>
            <p>
                <strong>{t("example_title")}</strong> {t("call_bet_neighbors_example")}
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide_neighbors_ex.png"
                        alt="game_guide_neighbors_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide_neighbors_ex.png" alt="game_guide_neighbors_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>{t("table_bet_type")}</th>
                            <th>{t("table_options")}</th>
                            <th>{t("table_stake")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>{t("bet_straight_up")}</td>
                            <td>36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>{t("table_total")}</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderBettingOptions = (odds: OddsProps | undefined, fractionalOddsFormat = false, locale: string) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <li className="guide-item">
            <h2>{t("betting_options_title")}</h2>
            <p>{t("betting_options_desc")}</p>
            {renderGameRuleImage(fractionalOddsFormat, locale)}
            {renderBetChipsNotice(odds, fractionalOddsFormat)}
        </li>
    );
};

const renderCallBet = (fractionalOddsFormat = false) => {
    const { t } = useTranslate([NAMESPACE]);
    return (
        <li className="guide-item">
            <h2>{t("call_bet_title")}</h2>
            <p>{t("call_bet_desc")}</p>
            <div className={Styles[wrapperImg]}>
                <div className={Styles["wrapper-img-circle"]}>
                    <img src="/static/images/roulette/game_guide-cuoc_nhanh.png" alt="game_guide-cuoc_nhanh" loading="lazy" />
                </div>
            </div>

            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("call_bet_types_title")}</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">{renderCallBetTiers(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetOrphelins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetVoisins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetZero(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetNeighbors(fractionalOddsFormat)}</li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const RouletteGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, locale } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate([NAMESPACE]);

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
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {renderBettingOptions(odds, fractionalOddsFormat, locale || "en")}
                {renderCallBet(fractionalOddsFormat)}
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const RouletteGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <RouletteGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default RouletteGuideTolgeeWrapper;
