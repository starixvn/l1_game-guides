import { T } from "@tolgee/react";
import React from "react";
import { buildVersion } from "../../../common/constants";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import Styles from "./bandar-qiu-qiu-game.module.scss";

export const bandarQiuQiuRootImgUrl = "/static/images/bandar-qiu-qiu/";
enum ComparisonOperators {
    GreaterThan = ">",
    LessThan = "<",
    Equal = "=",
}

const BandarQiuQiuGameRules: React.FC<{
    t: Function;
    maxBet: number;
    userStakeLevel: UserStakeLevelProps | undefined;
    locale: string | undefined;
}> = ({ t, maxBet, userStakeLevel, locale }) => {
    return (
        <li className={`guide-item ${Styles["custom-list"]}`}>
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                {[1, 2, 3].map((index) => (
                    <li key={index}>{t(`gamerules_para_${index}`)}</li>
                ))}
                <HandRankingContent t={t} />
                <CompareOrdinaryCardContent t={t} locale={locale} />
                <li>
                    {" "}
                    <T
                        keyName="game_rule_para_13"
                        params={{ maxbet: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                    />
                </li>
            </ul>
        </li>
    );
};

const HandRankingContent: React.FC<{ t: Function }> = ({ t }) => {
    const data = {
        header: {
            handRanking: t("header_hand_ranking"),
            description: t("header_description", { ns: "Common" }),
            example: t("header_example"),
        },
        body: [
            {
                handRanking: "glossary_hand_ranking_six_devil",
                description: "desc_six_devil",
                exampleImageName: "hank-ranking-sixdevil",
            },
            {
                handRanking: "glossary_hand_ranking_twin",
                description: "desc_twin",
                exampleImageName: "hank-ranking-twin",
            },
            {
                handRanking: "glossary_hand_ranking_small",
                description: "desc_small",
                exampleImageName: "hank-ranking-small",
            },
            {
                handRanking: "glossary_hand_ranking_big",
                description: "desc_big",
                exampleImageName: "hank-ranking-big",
            },
            {
                handRanking: "glossary_hand_ranking_qiuqiu",
                description: "desc_qiuqiu",
                exampleImageName: "hank-ranking-qiuqiu",
            },
            {
                handRanking: "glossary_hand_ranking_ordinary",
                description: "desc_ordinary_card",
                exampleImageName: "hank-ranking-ordinarycard",
            },
        ],
    };

    return (
        <li className={Styles["contentBeforeEmpty"]}>
            <div className="table-container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            {Object.values(data.header).map((header, index) => (
                                <th key={index} className="bold">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.body.map((row, index) => (
                            <tr key={index}>
                                <td>{t(row.handRanking)}</td>
                                <td>{t(row.description)}</td>
                                <td>
                                    <div className={`${Styles["dice"]}`}>
                                        <img
                                            className={` format-img auto-center`}
                                            src={`${bandarQiuQiuRootImgUrl}game-rules/hank-ranking-rules/${row.exampleImageName}.png?v=${buildVersion}}`}
                                            alt=""
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ul className="desc">
                <li className={Styles["level-2"]}>{t("gamerules_para_4")}</li>
            </ul>
        </li>
    );
};

const CompareOrdinaryCardContent: React.FC<{ t: Function; locale: string | undefined }> = ({ t, locale }) => {
    return (
        <li>
            {t("game_rules_para_5")}
            <ul className="desc">
                <li className={Styles["level-2"]}>{t("game_rules_para_6")}</li>
                <li className={Styles["level-2"]}>
                    {t("game_rules_para_6.1")}
                    <div className="auto-center">
                        <div className={Styles["set-container"]}>
                            <p style={{ padding: "0 4rem" }}>{t("set_1", { ns: "BandarQiuQiu" })}</p>
                            <p style={{ padding: "0 4rem" }}>{t("set_2", { ns: "BandarQiuQiu" })}</p>
                        </div>

                        <img
                            className={`format-img auto-center ${Styles["set1_set2"]}`}
                            src={`${bandarQiuQiuRootImgUrl}game-rules/set1-set2/set1_set2.png?v=${buildVersion}`}
                            alt=""
                        />
                    </div>
                </li>
                <li className={Styles["level-2"]}>{t("game_rules_para_7")}</li>
                <CardValuesContent t={t} />
                <ComparingRulesContent t={t} />
            </ul>
        </li>
    );
};

const CardValuesContent: React.FC<{ t: Function }> = ({ t }) => {
    return (
        <li className={Styles["level-2"]}>
            {t("game_rules_para_8")}
            <ul className="desc">
                {Object.entries({
                    doublecards: 11,
                    bigcards: 10,
                    smallcards: 9,
                }).map(([key, value], index) => (
                    <li className={Styles["level-3"]} key={index}>
                        {t(`game_rules_para_${value}`)}
                        <div className={`${Styles["dice"]}`}>
                            <img
                                className={`format-img auto-center`}
                                src={`${bandarQiuQiuRootImgUrl}game-rules/card-value/rule-${key}.png?v=${buildVersion}}`}
                                alt=""
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </li>
    );
};

const ComparingRulesContent: React.FC<{ t: Function }> = ({ t }) => {
    const exampleDescriptionIndexes = [1, 2, 3];
    const data = {
        headers: ["header_compare_set1", "header_compare_set2", "header_comparing_rule", "header_example"],
        body: [
            {
                set1Operator: ComparisonOperators.LessThan,
                set2Operator: ComparisonOperators.GreaterThan,
                rule: "compare_rule_bigger_cards",
                result: (
                    <ul className="desc">
                        {exampleDescriptionIndexes.map((index) => (
                            <li key={index}>{t(`example_1_para_${index}`)}</li>
                        ))}
                    </ul>
                ),
            },
            {
                set1Operator: ComparisonOperators.GreaterThan,
                set2Operator: ComparisonOperators.LessThan,
                rule: "compare_rule_bigger_cards",
                result: (
                    <ul className="desc">
                        {exampleDescriptionIndexes.map((index) => (
                            <li key={index}>{t(`example_2_para_${index}`)}</li>
                        ))}
                    </ul>
                ),
            },
            {
                set1Operator: ComparisonOperators.GreaterThan,
                set2Operator: ComparisonOperators.GreaterThan,
                rule: "compare_player_win",
                result: <span>{`${t("compare_player_win")}`}</span>,
            },
            {
                set1Operator: ComparisonOperators.Equal,
                set2Operator: ComparisonOperators.GreaterThan,
                rule: "compare_player_win",
                result: <span>{`${t("compare_player_win")}`}</span>,
            },
            {
                set1Operator: ComparisonOperators.Equal,
                set2Operator: ComparisonOperators.LessThan,
                rule: "compare_banker_win",
                result: <span>{`${t("compare_banker_win")}`}</span>,
            },
            {
                set1Operator: ComparisonOperators.Equal,
                set2Operator: ComparisonOperators.Equal,
                rule: "compare_rule_bigger_cards",
                result: (
                    <ul className="desc">
                        {exampleDescriptionIndexes.map((index) => (
                            <li key={index}>{t(`example_6_para_${index}`)}</li>
                        ))}
                    </ul>
                ),
            },
            {
                set1Operator: ComparisonOperators.Equal,
                set2Operator: ComparisonOperators.Equal,
                rule: "compare_rule_bigger_cards",
                result: (
                    <ul className="desc">
                        {exampleDescriptionIndexes.map((index) => (
                            <li key={index}>{t(`example_7_para_${index}`)}</li>
                        ))}
                    </ul>
                ),
            },
        ],
    };

    return (
        <li className={Styles["level-2"]}>
            {t("game_rules_para_12")}
            <div className="table-container">
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            {data.headers.map((header, index) => (
                                <th key={index} className={`bold ${Styles["nowrap"]}`}>
                                    {t(header)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {data.body.map((row, index) => (
                            <tr key={index}>
                                <td className={Styles["nowrap"]}>{`${t("player")} ${row.set1Operator} ${t("banker")}`}</td>
                                <td className={Styles["nowrap"]}>{`${t("player")} ${row.set2Operator} ${t("banker")}`}</td>
                                <td>{t(row.rule)}</td>
                                <td>
                                    <div>
                                        {t("player")}:{" "}
                                        <img
                                            className={`${Styles["dice"]} format-img auto-center`}
                                            src={`${bandarQiuQiuRootImgUrl}game-rules/comparing-rules/example-player-${
                                                index + 1
                                            }.png?v=${buildVersion}}`}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <div>{t("banker")}:</div>
                                        <div>
                                            <img
                                                className={`${Styles["dice"]} format-img auto-center`}
                                                src={`${bandarQiuQiuRootImgUrl}game-rules/comparing-rules/example-banker-${
                                                    index + 1
                                                }.png?v=${buildVersion}}`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        {`${t("example_compare")}: `}
                                        {row.result}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </li>
    );
};

export default BandarQiuQiuGameRules;
