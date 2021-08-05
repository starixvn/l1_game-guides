import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { StatisticalTable } from "../../../shared/se-die/en";

const renderGameRule = (maxbet: string) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    The players can bet on either ODD or EVEN, but not on both.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Options</th>
                                    <th>Winning Conditions</th>
                                    <th>Descriptions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>ODD</td>
                                    <td>3 red, 1 white</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>1 red, 3 white</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>EVEN</td>
                                    <td>4 red</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>4 white</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>2 red, 2 white</td>
                                    {renderTwoRedTwoWhite()}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>
                    Players can increase their stake amount by placing another bet with the same selection before the betting time expires.
                </li>
                <li>The maximum total stake per round is {maxbet}. Note, placed bets cannot be canceled.</li>
                <li>
                    Balanced Betting Pool: if the total amounts bet on ODD and EVEN are different then the gap amount will be refunded to
                    the players who have the latest bet ticket.
                </li>
                <li>
                    Balanced Betting Pool: if the total amounts bet on ODD and EVEN are different then the gap amount will be refunded to
                    the players who have the latest bet ticket.<br></br>
                    <strong>Example</strong>: Player A bets 100 on ODD, player B bets 30 on EVEN, and C bets 90 on EVEN. To balance the
                    total amounts bet on ODD and EVEN, the system will refund 20 to player C.
                </li>
            </ul>
        </>
    );
};

const renderStatisticTable = () => {
    return (
        <li className="guide-item">
            <h2>Statistical Table</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a mini version of Se Die game that includes only two bet options ODD and EVEN. The game is played with
                        4 colored buttons, each button has two sides colored in red and white. The objective of this game is to predict the
                        outcome of 4 buttons. If the outcome matches the player’s bet, the player wins.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(numberWithCommas(maxbet))}</li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>
                            The winning amount is calculated according to the payout ratio. Note, the Payout includes the initial stake.
                        </li>
                        <li>
                            All winning amounts are instantly added to your account balance when bets are settled.
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>Options</th>
                                            <th>Payouts</th>
                                            <th>
                                                Bet Limit <br /> (Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ODD</td>
                                            <td rowSpan={2}>1:{odds.even}</td>
                                            <td rowSpan={2}>
                                                {numberWithCommas(minbet)} - {numberWithCommas(maxbet)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>EVEN</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatisticTable()}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
