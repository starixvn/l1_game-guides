import React from "react";
import { GameGuide } from "../../type";
import { numberWithCommas } from "../../../../helpers/number-helper";

const FishPrawnCrabGuideEN: React.FC<GameGuide> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { maxBetMain, maxBetAnyTriple, maxBetRound } = maxBetFollowChoice;
    const { odds, minbet } = gameConfigs;
    const { single, double, triple, mountain, ocean, anyTriple } = odds;
    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an enhanced version of the traditional game Fish Prawn Crab with a new graphic interface and more
                        betting options. The game is played with three standard dice, and each die contains six unique symbols (fish, prawn,
                        crab, rooster, gourd, and stag). The objective of the game is to predict the outcome of the dice roll, players place
                        bets on which symbols will appear.
                    </p>
                    <div className="icon-wrapper">
                        <div className="symbol-size icon-nai vip"></div>
                        <div className="symbol-size icon-bau vip"></div>
                        <div className="symbol-size icon-ga vip"></div>
                        <div className="symbol-size icon-ca vip"></div>
                        <div className="symbol-size icon-cua vip"></div>
                        <div className="symbol-size icon-tom vip"></div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>
                            Select the chip value you wish to play. Players can bet on one or more betting options shown on the game table.
                        </li>
                        <li> All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                        <li>Once the betting time has expired, the dice cup will be removed and the result is shown.</li>
                        <li>The maximum total stake per round is {maxBetRound}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payout</h2>
                    <ul className="desc">
                        <li>
                            The winning amount is calculated according to the payout ratio. <strong>Note,</strong> the Payout includes the
                            initial stake.
                        </li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Options</th>
                                            <th>Winning Conditions</th>
                                            <th>Payouts</th>
                                            <th>Bet Limit (Min - Max)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>Specific Symbol (Fish, Prawn, Crab, Rooster, Gourd, Stag)</td>
                                            <td className="text-start">If the chosen symbol appears once. </td>
                                            <td>1: {single}</td>
                                            <td rowSpan={5}>
                                                {numberWithCommas(minbet)} - {maxBetMain}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">If the chosen symbol appears twice.</td>
                                            <td>1: {double}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">If the chosen symbol appears three times. </td>
                                            <td>1: {triple}</td>
                                        </tr>
                                        <tr>
                                            <td>Mountain (Rooster, Gourd, Stag)</td>
                                            <td className="text-start">
                                                Place a bet on the Mountain group of 3 symbols. The player will win if having at least two
                                                symbols from the Mountain group appear in the result.
                                            </td>
                                            <td>1: {mountain}</td>
                                        </tr>
                                        <tr>
                                            <td>Ocean (Fish, Prawn, Crab)</td>
                                            <td className="text-start">
                                                Place a bet on the Ocean group of 3 symbols. The player will win if having at least two
                                                symbols from the Ocean group appear in the result.
                                            </td>
                                            <td>1: {ocean}</td>
                                        </tr>
                                        <tr>
                                            <td>Any Triple</td>
                                            <td className="text-start">To win this bet, all three dice must show the same symbol.</td>
                                            <td>1: {anyTriple}</td>
                                            <td>
                                                {numberWithCommas(minbet)} - {maxBetAnyTriple}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <strong>Example:</strong>
                    </p>
                    <ul className="desc">
                        <li>
                            <strong> Specific Symbol</strong>
                            <ul className="detail">
                                <li>Place a bet on “Fish” and the result is Fish, Gourd, Crab then the player wins.</li>
                                <li>Place a bet on “Fish” and the result is Gourd, Crab, Crab then the player loses.</li>
                            </ul>
                        </li>

                        <li>
                            <strong> Ocean/ Mountain</strong>
                            <ul className="detail">
                                <li>Place a bet on the Ocean group and the result is Fish, Prawn, Stag then the player wins.</li>
                                <li>Place a bet on the Mountain group and the result is Fish, Stag, Stag then the player wins.</li>
                            </ul>
                        </li>
                        <li>
                            <strong> Any Triple</strong>
                            <ul className="detail">
                                <li>Place a bet on Any Triple option and the result is Crab, Crab, Crab then the player wins.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Terms and Conditions</h2>
                    <ul className="game-rules">
                        <li className="rule">
                            The Company reserves the right to cancel or void any bets because of a force majeure event including but not
                            limited to any technical errors, network service failures, power failures.
                        </li>
                        <li className="rule">
                            The Company reserves the right to cancel or void any bets of players we believe to be involved in fraud, money
                            laundering, or any other form of illegal or suspicious activities.
                        </li>
                        <li className="rule">
                            The Company reserves the right to cancel or void any bets when there is an error (caused by human or any other
                            factors), or a system failure resulting in an incorrect payout ratio.
                        </li>
                        <li className="rule">
                            All accepted bets will still be effective even if the member subsequently logs out or is disconnected from the
                            site for any reason.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default FishPrawnCrabGuideEN;
