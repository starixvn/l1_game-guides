import { T, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { ReactNode } from "react";
import {formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import Styles from "./marbles.module.scss";
import { COMMON, MARBLES_158 } from "./namespace-tolgee";
import { MARBLE_FOOTBALL } from "../marble-football/namespace-tolgee";
import { RangeValue } from ".";

const PAYOUT_HEADER_STYLE = "payout-header";
const BET_OPTION_STYLE = "bet-option";

const oddsRange = {
        home: {
            min: 2.28,
            max: 2.29,
        },
        away: {
            min: 2.28,
            max: 2.29,
        },
        draw: {
            min: 6.42,
            max: 6.53,
        },
        over: {
            min: 1.93,
            max: 1.96,
        },
        under: {
            min: 1.96,
            max: 1.99,
        },
        odd: {
            min: 1.88,
            max: 2.04,
        },
        even: {
            min: 1.88,
            max: 2.04,
        },
};


interface MarblesContentProps {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}

const formatOddRange = (range: RangeValue, fractionalOddsFormat = false) => {
    if (range.value) {
        return formatOdds(range.value, fractionalOddsFormat);
    }
    return `${formatOdds(range.min, fractionalOddsFormat)} - ${formatOdds(range.max, fractionalOddsFormat)}`;
};

const Content = (props: MarblesContentProps) => {
    const { gameConfigs, userStakeLevel } = props;
    const maxBetTmp = Math.min(userStakeLevel?.maxBet ?? gameConfigs?.maxBet, gameConfigs?.maxBet);

    const maxBetMain = numberWithCommas(maxBetTmp);
    return (
        <ul className={`game-guide`}>
            <MarblesIntroduction />
            <MarblesGameRules maxBet={maxBetMain} />
            <MarblesPayout {...props} />
            <TermsAndConditionsTolgee />
        </ul>
    );
};

const MarblesIntroduction = () => {
    const { t } = useTranslate([MARBLES_158,MARBLE_FOOTBALL, COMMON]);
    return (
        <li className={`guide-item`}>
            <h2>{t("title_introduction", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("intro_para1", { ns: MARBLES_158, game_name: t("game_name", { ns: MARBLES_158 }) })}</li>
                    <li>{t("intro_para2", { ns: MARBLES_158 })}</li>
                </ul>
            </div>
        </li>
    );
};

const generateChain = (start: number, end: number, t: (index: number) => ReactNode) => {
    const chain = [];
    for (let i = start; i <= end; i++) {
        chain.push(t(i));
    }

    return chain;
};

const MarblesGameRules = ({ maxBet }: { maxBet: string }) => {
    const { t } = useTranslate([MARBLES_158, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    {generateChain(1, 3, (index) => (
                        <li key={index}>{t(`game_rules_para${index}`, { ns: MARBLES_158 })}</li>
                    ))}
                    <ul className={`${Styles["example-list"]}`}>
                            <li>{t(`game_rules_para4`, { ns: MARBLES_158 })}</li>
                            <li>{t(`game_rules_para5`, { ns: MARBLES_158 })}</li>
                    </ul>
                    <li>{t(`game_rules_para6`, { ns: MARBLES_158 })}</li>
                    <li>{t(`game_rules_para7`, { ns: MARBLES_158 })}</li>

                    <li>
                        <T keyName="game_rules_para9" ns={MARBLES_158} params={{ maxbet: maxBet }} />
                    </li>

                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles[PAYOUT_HEADER_STYLE]}>
                                    <th className={`bold ${Styles[BET_OPTION_STYLE]}`}>{t("header_betoption", { ns: COMMON })}</th>
                                    <th className="bold">{t("guide_header_winning_condition", { ns: COMMON })}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("glossary_home", { ns: MARBLES_158 })}</td>
                                    <td>{t("win_condition_home", { ns: MARBLES_158 })}</td>
                                </tr>
    
                                <tr>
                                    <td>{t("glossary_away", { ns: MARBLES_158 })}</td>
                                    <td>{t("win_condition_away", { ns: MARBLES_158 })}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_draw", { ns: MARBLES_158 })}</td>
                                    <td>{t("win_condition_draw", { ns: MARBLES_158 })}</td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>{t("glossary_over", { ns: MARBLES_158 })}</td>
                                    <td>{t("win_condition_over", { ns: MARBLES_158 })}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_undergoal", { ns: MARBLES_158 })}</td>
                                    <td>{t("win_condition_under", { ns: MARBLES_158 })}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_odd", { ns: MARBLES_158 })}</td>
                                    <td>{t("win_condition_odd", { ns: MARBLES_158 })}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_even", { ns: MARBLES_158 })}</td>
                                    <td>{t("win_condition_even", { ns: MARBLES_158 })}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <li>
                        <Markup content={t(`game_supported_para`, { ns: MARBLES_158 })} />
                    </li>
                    <ul className={`${Styles["example-list"]}`}>
                        {generateChain(1, 8, (index) => (
                            <li key={index}>{t(`game_supported_list${index}`, { ns: MARBLES_158 })}</li>
                        ))}
                    </ul>
                </ul>
            </div>
        </li>
    );
};

const MarblesPayout = ({ gameConfigs, userStakeLevel, fractionalOddsFormat }: MarblesContentProps) => {
    const { t } = useTranslate([MARBLES_158, COMMON]);
    const { maxBetPerChoices, minBet, maxBet } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetHome = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.home));
    const maxBetAway = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.away));
    const maxBetDraw = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.draw));
    const maxBetUnder = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.under));
    const maxBetOver = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.over));
    const maxBetOdd = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.odd));
    const maxBetEven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.even));

    const homeOddRange = formatOddRange(oddsRange.home, fractionalOddsFormat);
    const awayOddRange = formatOddRange(oddsRange.away, fractionalOddsFormat);
    const drawOddRange = formatOddRange(oddsRange.draw, fractionalOddsFormat);
    const overOddRange = formatOddRange(oddsRange.over, fractionalOddsFormat);
    const underOddRange = formatOddRange(oddsRange.under, fractionalOddsFormat);
    const oddOddRange = formatOddRange(oddsRange.odd, fractionalOddsFormat);
    const evenOddRange = formatOddRange(oddsRange.even, fractionalOddsFormat);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("payouts_para_1", { ns: COMMON })}</li>
                    <li>{t("payouts_para_2", { ns: COMMON })}</li>
                    <li>{t("payouts_para_3", { ns: COMMON })}</li>
                    <li>{t("payouts_para_4", { ns: MARBLES_158 })}</li>
                    <li>{t("payouts_para_5", { ns: MARBLES_158 })}</li>
                    <li>{t("payout_para_table", { ns: MARBLES_158 })}</li>
                    <li>{t("payouts_para_6", { ns: MARBLES_158 })}</li>
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles[PAYOUT_HEADER_STYLE]}>
                                    <th className={`bold ${Styles[BET_OPTION_STYLE]}`}>
                                        {t("header_betoption", { ns: COMMON })}
                                    </th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: COMMON })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>
                                        <Markup content={t("header_betlimit", { ns: COMMON })} />{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                            <tr>
                                                <td>{t("glossary_home", { ns: MARBLES_158 })}</td>
                                                <td>{homeOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetHome}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_away", { ns: MARBLES_158 })}</td>
                                                <td>{awayOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetAway}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_draw", { ns: MARBLES_158 })}</td>
                                                <td>{drawOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetDraw}
                                                </td>
                                            </tr>
                                            <tr></tr>
                                            <tr>
                                                <td>{t("glossary_over", { ns: MARBLES_158 })}</td>
                                                <td>{overOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOver}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_undergoal", { ns: MARBLES_158 })}</td>
                                                <td>{underOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetUnder}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_odd", { ns: MARBLES_158 })}</td>
                                                <td>{oddOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOdd}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_even", { ns: MARBLES_158 })}</td>
                                                <td>{evenOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetEven}
                                                </td>
                                            </tr>
                                        </tbody>
                            
                        </table>
                    </div>
                </ul>
            </div>
        </li>
    );
};

export default Content;
