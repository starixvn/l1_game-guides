import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { KenoMatchMD5, minPayoutBlue, minPayoutRed, minPayoutOver, minPayoutUnder } from "../index";
import { renderMD5EN } from "../../../shared/md5/en";
import Styles from "../keno-match.module.scss";

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
                                    <td rowSpan={3} className={Styles["bet-team-wd"]}>
                                        Team Blue
                                    </td>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points of 10 randomly drawn numbers for team Blue {`>`} team Red. <br />+
                                        All bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of team Blue {`>`} team Red. <br />+ All
                                        bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles["bet-team-wd"]}>
                                        Team Red
                                    </td>
                                    <td className="text-start">First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points of 10 randomly drawn numbers for team Red {`>`} team Blue. <br />+
                                        All bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of team Red {`>`} team Blue. <br />+ All
                                        bets will be refunded if the total points of both teams are equal.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles["bet-team-wd"]}>
                                        Over
                                    </td>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams {`>=`} 811
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams {`>=`} 1621
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles["bet-team-wd"]}>
                                        Under
                                    </td>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams {`<`} 811
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams {`<`} 1621
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles["bet-team-wd"]}>
                                        Even
                                    </td>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams is an even number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams is an even number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles["bet-team-wd"]}>
                                        Odd
                                    </td>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>First Half</td>
                                    <td className="text-start">
                                        Player wins if the total points (in the First Half) of both teams is an odd number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time</td>
                                    <td rowSpan={2} className="text-start">
                                        Player wins if the total points (First Half + Full Time) of both teams is an odd number.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps, minBet: number, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <h2>Payouts</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio.</li>
                <li>The Payout includes the initial stake.</li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <ul className="game-guide-alpha">
                        <li>
                            <strong>a) Place bets before any numbers are drawn for the “First Half” result</strong>
                            <div className="table-container">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className={Styles["payouts-option-width"]}>
                                                Options
                                            </th>
                                            <th>Payouts</th>
                                            <th>
                                                Bet Limit <br></br>(Min-Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Team Blue</td>
                                            <td>First Half</td>
                                            <td rowSpan={2}>1: {odds.fhBlue}</td>
                                            <td rowSpan={2}>
                                                {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetBlueChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Team Red</td>
                                            <td>First Half</td>
                                            <td rowSpan={2}>1: {odds.fhRed}</td>
                                            <td rowSpan={2}>
                                                {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetRedChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Over</td>
                                            <td>First Half</td>
                                            <td rowSpan={2}>1: {odds.fhOver}</td>
                                            <td rowSpan={2}>
                                                {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetOverChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Under</td>
                                            <td>First Half</td>
                                            <td rowSpan={2}>1: {odds.fhUnder}</td>
                                            <td rowSpan={2}>
                                                {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetUnderChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Even</td>
                                            <td>First Half</td>
                                            <td rowSpan={4}>1: {odds.fhEven}</td>
                                            <td rowSpan={4}>
                                                {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetEvenChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Full Time</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Odd</td>
                                            <td>First Half</td>
                                        </tr>
                                        <tr>
                                            <td>Full Time</td>
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
                                        <div className="table-container">
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
                                                        <th>Min</th>
                                                        <th>Max</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className={`text-start ${Styles["bet-team-wd"]}`}>Team Blue</td>
                                                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                                        <td className={Styles["bet-odd-wd"]}>
                                                            {minPayoutBlue} - {odds.liveFTBlue}
                                                        </td>
                                                        <td>1</td>
                                                        <td rowSpan={4} className="text-start">
                                                            The maximum bet limit will change according to the payout ratio.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles["bet-team-wd"]}`}>Team Red</td>
                                                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                                        <td className={Styles["bet-odd-wd"]}>
                                                            {minPayoutRed} - {odds.liveFTRed}
                                                        </td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles["bet-team-wd"]}`}>Over</td>
                                                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                                        <td className={Styles["bet-odd-wd"]}>
                                                            {minPayoutOver} - {odds.liveFTOver}
                                                        </td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles["bet-team-wd"]}`}>Under</td>
                                                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                                        <td className={Styles["bet-odd-wd"]}>
                                                            {minPayoutUnder} - {odds.liveFTUnder}
                                                        </td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles["bet-team-wd"]}`}>Even</td>
                                                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                                                            1:{odds.liveFTEven}
                                                        </td>
                                                        <td>1</td>
                                                        <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles["bet-team-wd"]}`}>Odd</td>
                                                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Full Time (Live)</td>
                                                        <td>1</td>
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
    const { gameConfigs, gameName, maxBetFollowChoice, gameId } = props;
    const { odds, minbet } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName}{" "}
                        {KenoMatchMD5.includes(gameId ? gameId : KenoMatchMD5[0])
                            ? "is a different version of Keno Match, with a new feature MD5 (Message-Digest algorithm 5) that allows players to check the fairness and authenticity of every game result."
                            : "is a completely new version of the traditional Keno game."}{" "}
                        The game consists of 2 sets of numbers, one for “Team Blue”, and another for “Team Red”, each set of 80 numbers
                        (from 01 to 80). The system will randomly draw 20 numbers (no duplicates) for each team, of which 10 numbers are
                        drawn for “First Half” and 10 numbers are drawn for “Full Time”. The object of this game is to predict the total
                        score of the numbers drawn for each team.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderBettingOptions()}</li>
                <li className="guide-item">{renderPayouts(odds, minbet, maxBetFollowChoice)}</li>
                {KenoMatchMD5.includes(gameId ? gameId : KenoMatchMD5[0]) && <li className="guide-item">{renderMD5EN()}</li>}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default KenoMatchGuideEN;
