import { T, useTranslate } from "@tolgee/react";
import { COMMON, MARBLE_FOOTBALL2 } from "./namespace-tolgee";
import { ReactNode } from "react";
import Styles from "./marble-football2.module.scss";
import { Markup } from "interweave";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigs } from "../type";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { MARBLE_FOOTBALL } from "../marble-football/namespace-tolgee";

interface RangeValue {
    min?: number;
    max?: number;
    value?: number;
}

interface HalfMatchOddsRange {
    home: RangeValue;
    away: RangeValue;
    draw: RangeValue;
    over: RangeValue;
    under: RangeValue;
    odd: RangeValue;
    even: RangeValue;
}

interface MarbleFootbal2OddsRangeProps {
    prematch: HalfMatchOddsRange;
    live: HalfMatchOddsRange;
}

interface MarbleFootball2GameConfigs extends GameConfigs {
    oddsRange: MarbleFootbal2OddsRangeProps;
}

interface MarbleFootballContentProps {
    gameConfigs: MarbleFootball2GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}

const MarbleFootballContent = (props: MarbleFootballContentProps) => {
    const { maxBet } = props.gameConfigs;
    return (
        <ul className={`game-guide`}>
            <MarbleFootBallIntroduction />
            <MarbleFootballGameRules maxBet={maxBet} />
            <MarbleFootballPayout {...props} />
            <TermsAndConditionsTolgee />
        </ul>
    );
};

const MarbleFootBallIntroduction = () => {
    const { t } = useTranslate([MARBLE_FOOTBALL2, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_introduction", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("intro_para1", { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>{t("intro_para2", { ns: MARBLE_FOOTBALL2 })}</li>
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

const MarbleFootballGameRules = ({ maxBet }: { maxBet: number }) => {
    const { t } = useTranslate([MARBLE_FOOTBALL2, MARBLE_FOOTBALL, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t(`game_rules_para`, { ns: MARBLE_FOOTBALL2 })}</li>
                    {generateChain(1, 9, (index) => (
                        <li key={index}>{t(`game_rules_para${index}`, { ns: MARBLE_FOOTBALL2 })}</li>
                    ))}
                    <li>
                        <T keyName="game_rules_para10" ns={MARBLE_FOOTBALL2} params={{ maxbet: numberWithCommas(maxBet) }} />
                    </li>
                    <li>{t(`game_rules_para11`, { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>{t(`game_rules_para12`, { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>
                        {" "}
                        <Markup content={t(`game_rules_para13`, { ns: MARBLE_FOOTBALL2 })} />
                    </li>
                    <ul className={`${Styles["example-list"]}`}>
                        {generateChain(1, 8, (index) => (
                            <li key={index}>{t(`game_rules_para13_list${index}`, { ns: MARBLE_FOOTBALL2 })}</li>
                        ))}
                    </ul>
                </ul>
            </div>
        </li>
    );
};

const MarbleFootballPayout = ({ gameConfigs, userStakeLevel, fractionalOddsFormat }: MarbleFootballContentProps) => {
    const { t } = useTranslate([MARBLE_FOOTBALL2, COMMON]);
    const { odds, maxBetPerChoices, minBet, maxBet, oddsRange } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetHome = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.home));
    const maxBetAway = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.away));
    const maxBetDraw = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.draw));
    const maxBetUnder = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.under));
    const maxBetOver = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.over));
    const maxBetOdd = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.odd));
    const maxBetEven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.even));




    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("payout_para1", { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>{t("payout_para2", { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>{t("payout_para3", { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>{t("payout_para4", { ns: MARBLE_FOOTBALL2 })}</li>
                    <li className="contentBeforeEmpty">
                        <ol className={Styles["payout-sections-parenthesis"]}>
                            <li>
                                <strong>{t("payout_subtitle_pre_match_betting", { ns: MARBLE_FOOTBALL2 })}</strong>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr className={Styles["payout-header"]}>
                                                <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: COMMON })}</th>
                                                <th className="bold">{t("guide_header_winning_condition", { ns: COMMON })}</th>
                                                <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: MARBLE_FOOTBALL2 })}</th>
                                                <th className={`bold ${Styles["nowrap"]}`}>
                                                    <Markup content={t("header_betlimit", { ns: MARBLE_FOOTBALL2 })} />{" "}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t("glossary_home", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_home", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.home, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetHome}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_away", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_away", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.away, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetAway}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_draw", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_draw", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.draw, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetDraw}
                                                </td>
                                            </tr>
                                            <tr>
                                                
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_over", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_over", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.over, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOver}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_under", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_under", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.under, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetUnder}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_odd", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_odd", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOdd}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_even", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_even", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetEven}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li>
                                <strong>{t("payout_subtitle_live_betting", { ns: MARBLE_FOOTBALL2 })}</strong>
                                <ul className="desc">
                                    <li>{t("payout_para6", { ns: MARBLE_FOOTBALL2 })}</li>
                                    <li>{t("payout_para7", { ns: MARBLE_FOOTBALL2 })}</li>
                                    <li>{t("payout_para8", { ns: MARBLE_FOOTBALL2 })}</li>
                                </ul>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr className={Styles["payout-header"]}>
                                                <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: COMMON })}</th>
                                                <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: MARBLE_FOOTBALL2 })}</th>
                                                <th className={`bold ${Styles["nowrap"]}`}>
                                                    <Markup content={t("header_betlimit", { ns: MARBLE_FOOTBALL2 })} />{" "}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t("glossary_home_live", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.home, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetHome}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_away_live", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.away, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetAway}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_draw_live", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.draw, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetDraw}
                                                </td>
                                            </tr>
                                            <tr>
                                                
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_over_live", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.over, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOver}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_under_live", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.under, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetUnder}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_odd_live", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOdd}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_even_live", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetEven}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </li>
    );
};

export default MarbleFootballContent;
