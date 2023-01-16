import { formatOdds } from "../../../../helpers/number-helper";
import { OddsProps } from "../type";

const Payouts: React.FunctionComponent<{ odds: OddsProps | undefined; fractionalOddsFormat: boolean | undefined }> = (props) => {
    const { odds, fractionalOddsFormat } = props;
    return (
        <>
            <h2>Payout</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the betting odds.</li>
                <li>
                    <strong>Note</strong>, the Payout includes the initial stake.
                </li>
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Ante bet</span>
                    <div className="table-container text-center">
                        <table className="table table-small">
                            <thead>
                                <tr>
                                    <td>Hand Result</td>
                                    <td>Odds</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Royal Flush</td>
                                    <td>{formatOdds(odds?.AnteBet_royalFlush, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Straight Flush</td>
                                    <td>{formatOdds(odds?.AnteBet_straightFlush, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Four of a Kind</td>
                                    <td>{formatOdds(odds?.AnteBet_fourKind, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Full House</td>
                                    <td>{formatOdds(odds?.AnteBet_fullHouse, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Flush</td>
                                    <td>{formatOdds(odds?.AnteBet_flush, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Straight</td>
                                    <td rowSpan={5}>{formatOdds(odds?.AnteBet_straight, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Three of a Kind</td>
                                </tr>
                                <tr>
                                    <td>Two Pair</td>
                                </tr>
                                <tr>
                                    <td>Pair</td>
                                </tr>
                                <tr>
                                    <td>High card</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Call bet</span>
                    <ul className="desc">
                        <li>Player will win the Call bet only if the Dealer qualifies and you beat their hand. </li>
                        <li>Payout {formatOdds(odds?.CallBet_callBet, fractionalOddsFormat)}</li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">AA bet</span>
                    <div className="table-container">
                        <div className="table-container text-center">
                            <table className="table table-small">
                                <thead>
                                    <tr>
                                        <td>Hand Result</td>
                                        <td>Odds</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Royal Flush</td>
                                        <td>{formatOdds(odds?.AABet_royalFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Straight Flush</td>
                                        <td>{formatOdds(odds?.AABet_straightFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Four of a Kind</td>
                                        <td>{formatOdds(odds?.AABet_fourKind, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Full House</td>
                                        <td>{formatOdds(odds?.AABet_fullHouse, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Flush</td>
                                        <td>{formatOdds(odds?.AABet_flush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Straight</td>
                                        <td rowSpan={5}>{formatOdds(odds?.AABet_straight, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Three of a Kind</td>
                                    </tr>
                                    <tr>
                                        <td>Two Pair</td>
                                    </tr>
                                    <tr>
                                        <td>Pair of Aces</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Payouts;
