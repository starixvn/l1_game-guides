import { T, useTranslate } from "@tolgee/react";
import { COMMON, MARBLE_FOOTBALL } from "./namespace-tolgee";
import { ReactNode } from "react";
import Styles from "./marble-football.module.scss";
import { Markup } from "interweave";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigs } from "../type";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";

interface MarbleFootballContentProps {
    gameConfigs: GameConfigs;
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
    const { t } = useTranslate([MARBLE_FOOTBALL, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_introduction", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("intro_para1", { ns: MARBLE_FOOTBALL })}</li>
                    <li>{t("intro_para2", { ns: MARBLE_FOOTBALL })}</li>
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
    const { t } = useTranslate([MARBLE_FOOTBALL, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    {generateChain(1, 7, (index) => (
                        <li key={index}>{t(`game_rules_para${index}`, { ns: MARBLE_FOOTBALL })}</li>
                    ))}
                    <li>
                        <T keyName="game_rules_para8" ns={MARBLE_FOOTBALL} params={{ maxbet: maxBet }} />
                    </li>
                </ul>
            </div>
        </li>
    );
};

const MarbleFootballPayout = ({ gameConfigs, userStakeLevel, fractionalOddsFormat }: MarbleFootballContentProps) => {
    const { t } = useTranslate([MARBLE_FOOTBALL, COMMON]);
    const { odds, maxBetPerChoices, minBet, maxBet, maxWinPerRound } = gameConfigs;
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
                    <li>{t("payouts_para1", { ns: MARBLE_FOOTBALL })}</li>
                    <li>{t("payouts_para2", { ns: MARBLE_FOOTBALL })}</li>
                    <T keyName="payouts_para3" ns={MARBLE_FOOTBALL} params={{ maxwin: numberWithCommas(maxWinPerRound || 0) }} />
                    <li>{t("payouts_para4", { ns: MARBLE_FOOTBALL })}</li>
                    <li>{t("payouts_para5", { ns: MARBLE_FOOTBALL })}</li>
                    <li className="contentBeforeEmpty">
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr className={Styles["payout-header"]}>
                                        <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: COMMON })}</th>
                                        <th className="bold">{t("guide_header_winning_condition", { ns: COMMON })}</th>
                                        <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: COMMON })}</th>
                                        <th className={`bold ${Styles["nowrap"]}`}>
                                            <Markup content={t("header_betlimit", { ns: COMMON })} />{" "}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("bet_choice_home", { ns: COMMON })}</td>
                                        <td>{t("win_condition_home", { ns: MARBLE_FOOTBALL })}</td>
                                        <td>{formatOdds(odds?.home, fractionalOddsFormat)}</td>
                                        <td className={Styles["nowrap"]}>
                                            {minBetMain} - {maxBetHome}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("bet_choice_away", { ns: COMMON })}</td>
                                        <td>{t("win_condition_away", { ns: MARBLE_FOOTBALL })}</td>
                                        <td>{formatOdds(odds?.away, fractionalOddsFormat)}</td>
                                        <td className={Styles["nowrap"]}>
                                            {minBetMain} - {maxBetAway}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("bet_choice_draw", { ns: COMMON })}</td>
                                        <td>{t("win_condition_draw", { ns: MARBLE_FOOTBALL })}</td>
                                        <td>{formatOdds(odds?.draw, fractionalOddsFormat)}</td>
                                        <td className={Styles["nowrap"]}>
                                            {minBetMain} - {maxBetDraw}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("bet_choice_over", { ns: COMMON })} 2.5</td>
                                        <td>{t("win_condition_over", { ns: MARBLE_FOOTBALL })}</td>
                                        <td>{formatOdds(odds?.over, fractionalOddsFormat)}</td>
                                        <td className={Styles["nowrap"]}>
                                            {minBetMain} - {maxBetOver}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("bet_choice_under", { ns: COMMON })} 2.5</td>
                                        <td>{t("win_condition_under", { ns: MARBLE_FOOTBALL })}</td>
                                        <td>{formatOdds(odds?.under, fractionalOddsFormat)}</td>
                                        <td className={Styles["nowrap"]}>
                                            {minBetMain} - {maxBetUnder}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("bet_choice_odd", { ns: COMMON })}</td>
                                        <td>{t("win_condition_odd", { ns: MARBLE_FOOTBALL })}</td>
                                        <td>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                        <td className={Styles["nowrap"]}>
                                            {minBetMain} - {maxBetOdd}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t("bet_choice_even", { ns: COMMON })}</td>
                                        <td>{t("win_condition_even", { ns: MARBLE_FOOTBALL })}</td>
                                        <td>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                        <td className={Styles["nowrap"]}>
                                            {minBetMain} - {maxBetEven}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    );
};

export default MarbleFootballContent;
