import React from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { minPayoutBlue, minPayoutRed, minPayoutOver, minPayoutUnder } from "../index";
import Styles from "../keno-match.module.scss";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import KenoMatchMD5 from "../md5";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";
const classBetOddWd = "bet-odd-wd";
const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Make sure you bet an amount you’re comfortable with.</li>
                <li>Players can bet on one or more betting options shown on the game table.</li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>The maximum total stake per round is {maxBetRound}</li>
            </ul>
        </>
    );
};

const renderBettingOptions = () => {
    return (
        <>
            <h2>Betting Options</h2>
            <ul className="desc">
                <li>
                    Each round has two draws, with the first draw is for {`"`}First Half{`"`} result and the second is for {`"`}Full Time
                    {`"`}.
                </li>
                <li>
                    The Player will have two different intervals to place bet:
                    <ul className="detail">
                        <li>
                            Place bets before any numbers are drawn for the “First Half” result, you can place bets on “First Half” and
                            “Full Time”, applicable to all bet types. The payout ratio is fixed and stays the same across all game rounds.
                        </li>
                        <li>
                            <strong> Live Betting</strong>: Place bets right after the results of the First Half for both teams are
                            announced. <strong>Note</strong>, only place bets in {`"`}Full Time{`"`}. The payout ratio will change based on
                            the result of the “First Half”.
                        </li>
                    </ul>
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Options</th>
                                    <th>Winning Conditions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Team Blue
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points of 10 randomly drawn numbers for team Blue {`>`} team Red. <br />+
                                        All bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of team Blue {`>`} team Red. <br />+ All
                                        bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Team Red
                                    </td>
                                    <td className="text-start">First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points of 10 randomly drawn numbers for team Red {`>`} team Blue. <br />+
                                        All bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of team Red {`>`} team Blue. <br />+ All
                                        bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Over
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams {`>=`} 811
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams {`>=`} 1621
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Under
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams {`<`} 811
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams {`<`} 1621
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Even
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams are an even number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams are an even number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Odd
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams are an odd number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams are an odd number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    const getMinMaxOdd = (min: number, max: number | undefined) => {
        return `${fractionalOddsFormat ? numberWithCommas(min - 1) : min} - ${fractionalOddsFormat && max ? numberWithCommas(max - 1) : max
            }`;
    };
    return (
        <>
            <h2>Payouts</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the betting odds.</li>
                <li>The Payout includes the initial stake.</li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <ul className="game-guide-alpha">
                        <li>
                            <strong>a) Place bets before any numbers are drawn for the “First Half” result</strong>
                            <div className={`table-container ${Styles["table-payouts-bet"]}`}>
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className={Styles["payouts-option-width"]}>
                                                Options
                                            </th>
                                            <th>Odds</th>
                                            <th>
                                                Bet Limit <br></br>(Min-Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Team Blue</td>
                                            <td className="text-start">First Half</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhBlue, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Team Red</td>
                                            <td className="text-start">First Half</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhRed, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetRedChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Over</td>
                                            <td className="text-start">First Half</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhOver, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetOverChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Under</td>
                                            <td className="text-start">First Half</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhUnder, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetUnderChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Even</td>
                                            <td className="text-start">First Half</td>
                                            <td rowSpan={4}>{formatOdds(odds?.fhEven, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetEvenChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Odd</td>
                                            <td className="text-start">First Half</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Full Time</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>
                            <strong>b) Live Betting</strong>
                            <div>
                                For bet options <strong>Team Blue/Red - Full Time (Live)</strong> and{" "}
                                <strong>Over/Under - Full Time (Live)</strong>
                                <ul className="detail">
                                    <li>
                                        The payout ratio will vary depending on the {`"`}First Half{`"`} result of both teams
                                    </li>
                                    <li>The maximum bet limit will change according to the payout ratio.</li>
                                </ul>
                                <ul className="desc">
                                    <li>
                                        <strong>Team Blue/Red - Full Time (Live)</strong>: Payout is only available when the total score
                                        difference between Team Blue and Team Red in the {`"`}First Half{`"`}, is between -150 and 150
                                    </li>
                                    <li>
                                        <strong>Over/Under - Full Time (Live)</strong>: Payout is only available when the total score in the
                                        “First Half” of both teams is between 661 and 980
                                    </li>
                                    <li className="contentBeforeEmpty">
                                        <div className={`table-container ${Styles["table-payouts-bet-live"]}`}>
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2} rowSpan={2}>
                                                            Options
                                                        </th>
                                                        <th rowSpan={2}>
                                                            Payouts<br></br>(Min - Max)
                                                        </th>
                                                        <th colSpan={2}>Bet Limit</th>
                                                    </tr>
                                                    <tr>
                                                        <th className={Styles["payouts-min-wd"]}>Min</th>
                                                        <th>Max</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Team Blue</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutBlue, odds?.liveFTBlue)}
                                                        </td>
                                                        <td> {maxBetFollowChoice?.minBetRound}</td>
                                                        <td rowSpan={4} className="text-start">
                                                            The maximum bet limit will change according to the payout ratio.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Team Red</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutRed, odds?.liveFTRed)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Over</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutOver, odds?.liveFTOver)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Under</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutUnder, odds?.liveFTUnder)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Even</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                                            {formatOdds(odds?.liveFTEven, fractionalOddsFormat)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Odd</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Full Time (Live)</td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const KenoMatchGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} consists of 2 sets of numbers, one for “Team Blue”, and another for “Team Red”, each set of 80 numbers
                        (from 01 to 80). The system will randomly draw 20 numbers (no duplicates) for each team, of which 10 numbers are
                        drawn for “First Half” and 10 numbers are drawn for “Full Time”. The object of this game is to predict the total
                        score of the numbers drawn for each team.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderBettingOptions()}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                <KenoMatchMD5
                    locale={props.locale}
                    environment={props.environment}
                    md5Key="96f67fca97c5ed9547ac67fd4a428747"
                    md5Result={`{<span class=${Styles["blue"]}>363</span>;<span class=${Styles["red"]}>467</span>}_{#26907421fad9b51da1169691982}`}
                    step3ImageUrl="/static/images/keno-match/md5-hash.png#1"
                    step4ImageUrl="/static/images/keno-match/md5.png#1"
                    note={<div>
                        Noted: <span className={Styles["blue"]}>363</span> and <span className={Styles["red"]}>467</span> are
                        first haft result of Team Blue and Team Red respectively
                    </div>}
                />
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default KenoMatchGuideEN;
