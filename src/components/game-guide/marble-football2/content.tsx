import { T, useTranslate } from "@tolgee/react";
import { COMMON, MARBLE_FOOTBALL2 } from "./namespace-tolgee";
import { ReactNode } from "react";
import Styles from "./marble-football2.module.scss";
import { Markup } from "interweave";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { MARBLE_FOOTBALL } from "../marble-football/namespace-tolgee";
import { MarbleFootball2GameConfigs, RangeValue } from ".";
import { GameConfigs } from "../type";

const oddsRange = {
    prematch: {
        home: {
            min: 2.34,
            max: 2.35
        },
        away: {
            min: 2.34,
            max: 2.35
        },
        draw: {
            min: 6.32,
            max: 6.56
        },
        over: {
            min: 1.97,
            max: 2.00
        },
        under: {
            min: 2.00,
            max: 2.03
        },   
        odd: {
            value: 2.00,
        },
        even: { 
            value: 2.00,
        }
            
    },
    live: {
        home: {
            min: 2.34,
            max: 2.35
        },
        away: {
            min: 2.34,
            max: 2.35
        },
        draw: {
            min: 6.32,
            max: 6.56
        },
        over: {
            min: 1.97,
            max: 2.00
        },
        under: {
            min: 2.00,
            max: 2.03
        },   
        odd: {
            min: 1.98,
            max: 2.08
        },
        even: { 
            min: 1.98,
            max: 2.08
        }
    }
}


interface MarbleFootballContentProps {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}

const formatOddRange = (range: RangeValue, fractionalOddsFormat: boolean = false) => {
    if (range.value) {
        return formatOdds(range.value, fractionalOddsFormat);
    }
    return `${formatOdds(range.min, fractionalOddsFormat)} - ${formatOdds(range.max, fractionalOddsFormat)}`;
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
                    {generateChain(1, 6, (index) => (
                        <li key={index}>{t(`game_rules_para${index}`, { ns: MARBLE_FOOTBALL2 })}</li>
                    ))}
                    <li>
                        <Markup content={t(`game_rules_para7`, { ns: MARBLE_FOOTBALL2 })} />
                    </li>
                    <li>{t(`game_rules_para8`, { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>{t(`game_rules_para9`, { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>
                        <T keyName="game_rules_para10" ns={MARBLE_FOOTBALL2} params={{ maxbet: numberWithCommas(maxBet) }} />
                    </li>
                    <li>{t(`game_rules_para11`, { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>{t(`game_rules_para12`, { ns: MARBLE_FOOTBALL2 })}</li>
                    <li>
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
    const { maxBetPerChoices, minBet, maxBet, } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetHome = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.home));
    const maxBetAway = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.away));
    const maxBetDraw = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.draw));
    const maxBetUnder = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.under));
    const maxBetOver = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.over));
    const maxBetOdd = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.odd));
    const maxBetEven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.even));
    const maxBetHomeLive = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.homeLive));
    const maxBetAwayLive = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.awayLive));
    const maxBetDrawLive = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.drawLive));
    const maxBetUnderLive = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.underLive));
    const maxBetOverLive = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.overLive));
    const maxBetOddLive = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.oddLive));
    const maxBetEvenLive = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.evenLive)); 

    const homeOddRange = formatOddRange(oddsRange.prematch.home, fractionalOddsFormat);
    const awayOddRange = formatOddRange(oddsRange.prematch.away, fractionalOddsFormat);
    const drawOddRange = formatOddRange(oddsRange.prematch.draw, fractionalOddsFormat);
    const overOddRange = formatOddRange(oddsRange.prematch.over, fractionalOddsFormat);
    const underOddRange = formatOddRange(oddsRange.prematch.under, fractionalOddsFormat);
    const oddOddRange = formatOddRange(oddsRange.prematch.odd, fractionalOddsFormat);
    const evenOddRange = formatOddRange(oddsRange.prematch.even, fractionalOddsFormat);

    const homeLiveOddRange = formatOddRange(oddsRange.live.home, fractionalOddsFormat);
    const awayLiveOddRange = formatOddRange(oddsRange.live.away, fractionalOddsFormat);
    const drawLiveOddRange = formatOddRange(oddsRange.live.draw, fractionalOddsFormat);
    const overLiveOddRange = formatOddRange(oddsRange.live.over, fractionalOddsFormat);
    const underLiveOddRange = formatOddRange(oddsRange.live.under, fractionalOddsFormat);
    const oddLiveOddRange = formatOddRange(oddsRange.live.odd, fractionalOddsFormat);
    const evenLiveOddRange = formatOddRange(oddsRange.live.even, fractionalOddsFormat);

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
                                                <td>{homeOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetHome}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_away", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_away", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{awayOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetAway}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_draw", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_draw", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{drawOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetDraw}
                                                </td>
                                            </tr>
                                            <tr>
                                                
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_over", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_over", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{overOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOver}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_under", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_under", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{underOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetUnder}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_odd", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_odd", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{oddOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOdd}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_even", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{t("win_condition_even", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{evenOddRange}</td>
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
                                                <td>{t("glossary_homeLive", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{homeLiveOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetHomeLive}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_awayLive", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{awayLiveOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetAwayLive}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_drawLive", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{drawLiveOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetDrawLive}
                                                </td>
                                            </tr>
                                            <tr>
                                                
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_overLive", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{overLiveOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOverLive}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_underLive", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{underLiveOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetUnderLive}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_oddLive", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{oddLiveOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetOddLive}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t("glossary_evenLive", { ns: MARBLE_FOOTBALL2 })}</td>
                                                <td>{evenLiveOddRange}</td>
                                                <td className={Styles["nowrap"]}>
                                                    {minBetMain} - {maxBetEvenLive}
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
