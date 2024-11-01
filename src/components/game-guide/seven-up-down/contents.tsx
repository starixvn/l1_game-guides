import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";

import { formatOdds, formatOddsWithoutOne, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import Styles from "./seven-up-down.module.scss";
import { SevenUpDownContentsProps } from "./type";

const ns = "7Up7Down";

const renderGameRules = (
    t: Function,
    gameConfigs: GameConfigs,
    userStakeLevel: UserStakeLevelProps | undefined,
    fractionalOddsFormat?: boolean
) => {
    const { odds, minBet, maxBet, maxBetPerChoices } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const maxBetUp = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.up));
    const maxBetSeven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.seven));

    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns })}</li>
                <li>{t("gamerules_para_2", { ns })}</li>
                <li>
                    <Markup content={t("gamerules_para_3", { ns: "Common", maxbet: maxBetMain })} />
                </li>
                <li>{t("gamerules_para_4", { ns: "Common" })}</li>
            </ul>
            <table className="table text-center">
                <thead>
                    <tr className={Styles["payout-header"]}>
                        <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: "Common" })}</th>
                        <th className={`bold ${Styles["nowrap"]}`}>{t("guide_header_winning_condition", { ns: "Common" })}</th>
                        <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: "Common" })}</th>
                        <th className={`bold ${Styles["nowrap"]}`}>
                            <Markup content={t("header_betlimit", { ns: "Common" })} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{t(`glossary_up`, { ns })}</td>
                        <td>{t(`descrip_up`, { ns })}</td>
                        <td>{formatOdds(odds?.up, fractionalOddsFormat)}</td>
                        <td>
                            {minBetMain} - {maxBetUp}
                        </td>
                    </tr>
                    <tr>
                        <td>{t(`glossary_down`, { ns })}</td>
                        <td>{t(`descrip_down`, { ns })}</td>
                        <td>{formatOdds(odds?.down, fractionalOddsFormat)}</td>
                        <td>
                            {minBetMain} - {maxBetUp}
                        </td>
                    </tr>
                    <tr>
                        <td>{t(`glossary_7`, { ns })}</td>
                        <td>{t(`descrip_7`, { ns })}</td>
                        <td>{formatOdds(odds?.seven, fractionalOddsFormat)}</td>
                        <td>
                            {minBetMain} - {maxBetSeven}
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderMultiplierFeatures = (t: Function, gameConfigs: GameConfigs, fractionalOddsFormat?: boolean) => {
    const { multipliers, odds } = gameConfigs;
    const exampleMultiplier = 5;
    const exampleStake = 100;
    const oddsSeven = odds?.seven;

    return (
        <li className="guide-item">
            <h2>{t("multiplier_feature_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    <Markup
                        content={t("multiplier_para_1", { ns, min_value: Math.min(...multipliers), max_value: Math.max(...multipliers) })}
                    />
                </li>
                <li>{t("multiplier_para_2", { ns })}</li>
            </ul>
            <p>
                <Markup content={t("multiplier_para_1", { ns: "Common" })} />
            </p>
            <p>
                <Markup content={t("example_bold", { ns: "Common" })} />
                <ul className="desc">
                    <li>{t("multiplier_example_1", { ns })}</li>
                    <li>{t("multiplier_example_2", { ns })}</li>
                    <li>{t("multiplier_example_3", { ns })}</li>
                </ul>
            </p>

            <table className="table text-center">
                <thead>
                    <tr className={Styles["payout-header"]}>
                        <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: "Common" })}</th>
                        <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: "Common" })}</th>
                        <th className={`bold ${Styles["nowrap"]}`}>{t("title_multiplier", { ns: "Common" })}</th>
                        <th className={`bold ${Styles["nowrap"]}`}>{t("header_stake", { ns: "Common" })}</th>
                        <th className={`bold ${Styles["nowrap"]}`}>{t("header_win", { ns: "Common" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7</td>
                        <td>{formatOddsWithoutOne(oddsSeven, fractionalOddsFormat)}</td>
                        <td className={Styles["highlight-multiplier"]}>{`${exampleMultiplier}x`}</td>
                        <td>{exampleStake}</td>
                        <td>
                            <span className={Styles["highlight-win"]}>
                                {(oddsSeven - 1) * exampleMultiplier * exampleStake + exampleStake}{" "}
                            </span>
                            <br />
                            <span>
                                ({oddsSeven - 1} * {exampleMultiplier} * {exampleStake} + {exampleStake})
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderPayout = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { maxWinPerRound, maxBet } = gameConfigs;
    const maxBetMain = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetMain);

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{<Markup content={t("payouts_para_3", { ns: "Common" })} />}</li>
                <li>{t("payouts_para_2", { ns: "Common" })}</li>
                <li>{<Markup content={t("payouts_para_4", { ns: "Common", maxwin: maxWin })} />}</li>
            </ul>
        </li>
    );
};

const renderSHA256 = (t: Function) => {
    const result = "{1,6}";
    const multiplier = "2x";
    const choice = "7";
    const multiplierChoice = `{2x:${choice}}`;

    return (
        <li className="guide-item">
            <h2>{t("sha256_title", { ns: "Common" })}</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text"> {t("sha256_technology_title", { ns: "Common" })}</span>
                    <ul className="desc">
                        <li>{t("sha256_technology_1", { ns: "Common" })}</li>
                        <li>{t("sha256_technology_2", { ns: "Common" })}</li>
                        <li>{t("sha256_technology_3", { ns: "Common" })}</li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text"> {t("sha256_validation_title", { ns: "Common" })}</span>
                    <p>{t("sha256_validation_1", { ns: "Common" })}</p>
                    <ul className="desc">
                        <li>
                            <Markup content={t("sha256_validation_2", { ns: "Common" })} />
                            <img className={Styles["example-img"]} src="/static/images/seven-up-down/sha-key.png?v=3" alt="sha-key" />
                        </li>
                        <li>
                            <Markup content={t("sha256_validation_3", { ns: "Common" })} />
                            <img className={Styles["example-img"]} src="/static/images/seven-up-down/sha-result.png?v=3" alt="sha-result" />
                            <p>
                                <Markup
                                    content={t("sha256_validation_4", {
                                        ns,
                                        result: result,
                                        multiplier_betchoice: multiplierChoice,
                                        betchoice: choice,
                                        multiplier: multiplier,
                                    })}
                                />
                            </p>
                        </li>
                        <li>
                            <Markup content={t("sha256_validation_5", { ns: "Common" })} />
                            <div className={`${Styles["sha-verify-box"]}  auto-center`}>
                                <img
                                    className={Styles["example-img"]}
                                    src="/static/images/sh256/verify-result-box.png?v=2"
                                    alt="verify-result-box"
                                />
                                <span className={Styles["sha-result"]}>{`${result}${multiplierChoice}_{#1659020f56c148a9fc3c59c0fe}`}</span>
                            </div>
                        </li>
                        <li>
                            <Markup content={t("sha256_validation_6", { ns: "Common" })} />
                            <div className={`${Styles["sha-verify-box"]}  auto-center`}>
                                <img
                                    className={Styles["example-img"]}
                                    src="/static/images/sh256/after-verify-result.png?v=2"
                                    alt="verify-result-box"
                                />
                                <span className={Styles["sha-key"]}>B0A90EF51E4106E6B36943019C0F1D570333DC19EF96B925AE158A859F4BA88E</span>
                            </div>
                        </li>
                        <p>
                            <Markup content={t("sha256_validation_7", { ns: "Common" })} />
                        </p>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const Contents: React.FC<SevenUpDownContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate([ns, "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <p className="content">{t("intro_para", { ns })}</p>
            </li>
            {renderGameRules(t, gameConfigs, userStakeLevel, fractionalOddsFormat)}
            {renderMultiplierFeatures(t, gameConfigs, fractionalOddsFormat)}
            {renderPayout(t, gameConfigs, userStakeLevel)}
            {renderSHA256(t)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default Contents;
