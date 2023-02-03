import React from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import Styles from "../keno-match.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import KenoMatchMD5 from "../../keno-match/md5";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";
const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Make sure you bet an amount you’re comfortable with.</li>
                <li>Players can bet on one or more betting options shown on the game table.</li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>The maximum total stake per round is {maxBetRound}</li>
                <li className="contentBeforeEmpty">{renderBettingOptions()}</li>
            </ul>
        </>
    );
};

const renderBettingOptions = () => {
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Bet Types</th>
                        <th>Options</th>
                        <th>Winning Conditions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Team Blue/Team Red
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Team Blue</td>
                        <td className="text-start">
                            Player wins if the total points of Team Blue {`>`} Team Red.
                            <br />+ All bets will be refunded if the total points of both teams are equal.
                        </td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Team Red</td>
                        <td className="text-start">
                            Player wins if the total points of Team Red {`>`} Team Blue.
                            <br />+ All bets will be refunded if the total points of both teams are equal.
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Sum Big/Small
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Big</td>
                        <td className="text-start">Player wins if the total points of both teams {`>=`} 1621</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Small</td>
                        <td className="text-start">Player wins if the total points of both teams {`<`} 1621</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Sum Even/Odd
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Even</td>
                        <td className="text-start">Player wins if the total points of both teams are an even number.</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Odd</td>
                        <td className="text-start">Player wins if the total points of both teams are an odd number.</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Team Blue <br /> Big/Small
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Big</td>
                        <td className="text-start">Player wins if the total points of Team Blue {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Small</td>
                        <td className="text-start">Player wins if the total points of team Blue {`<`} 811</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Team Red <br /> Big/Small
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Big</td>
                        <td className="text-start">Player wins if the total points of Team Red {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Small</td>
                        <td className="text-start">Player wins if the total points of Team Red {`<`} 811</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <h2>Payouts</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the betting odds. </li>
                <li>The Payout includes the initial stake. </li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th className={Styles["payouts-option-width"]}>Bet Types</th>
                                    <th>Options</th>
                                    <th>Odds</th>
                                    <th>
                                        Bet Limit <br></br>(Min - Max)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Team Blue/Team Red</td>
                                    <td className="text-start">Team Blue</td>
                                    <td rowSpan={6}>{formatOdds(odds?.blue, fractionalOddsFormat)}</td>
                                    <td rowSpan={6}>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Team Red</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Sum Big/Small</td>
                                    <td className="text-start">Big</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Small</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Sum Even/Odd</td>
                                    <td className="text-start">Even</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Odd</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Team Blue Big/Small</td>
                                    <td className="text-start">Big</td>
                                    <td rowSpan={4}>{formatOdds(odds?.blueBig, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueRedChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Small</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Team Red Big/Small</td>
                                    <td className="text-start">Big</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Small</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const KenoPowerGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} consists of 2 sets of numbers, one for “Team Blue”, and another for “Team Red”, each set of 80 numbers
                        (from 01 to 80). The system will randomly draw 20 numbers (no duplicates) for each team. The object of this game is
                        to predict the total score of the numbers drawn.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                <KenoMatchMD5
                    locale={props.locale}
                    environment={props.environment}
                    md5Key="96f67fca97c5ed9547ac67fd4a428747"
                    md5Result={`{<span class=${Styles["blue"]}>899</span>;<span class=${Styles["red"]}>807</span>}_{#336772f6b52eadd147e9c5ceeaa}`}
                    step3ImageUrl="/static/images/keno-power/md5-hash.png#1"
                    step4ImageUrl="/static/images/keno-power/md5.png#1"
                    note={<div>
                        Noted: <span className={Styles["blue"]}>899</span> and <span className={Styles["red"]}>807</span> are
                        results of Team Blue and Team Red respectively.
                    </div>}
                />
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default KenoPowerGuideEN;
