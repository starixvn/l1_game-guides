import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { PayoutOrRuleDataOnTable } from "../../../shared/se-die/en";

const renderGameRule = (maxbet: string, minbet: string, odds: OddsProps) => {
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
                                    <th>Mô Tả</th>
                                </tr>
                            </thead>
                            <tbody>{PayoutOrRuleDataOnTable()}</tbody>
                        </table>
                    </div>
                </li>
                <li>
                    Make sure you bet an amount you’re comfortable with. Click Confirm to complete or Cancel button if you want to reset all
                    your bets.
                </li>
                <li>
                    Players can increase their stake amount by placing another bet with the same selection before the betting time expires.
                </li>
                <li>
                    Min bet and Max bet must be between {minbet} - {maxbet} and the maximum total stake per round is {maxbet}
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

const renderPayouts = (odds: object | any) => {
    return (
        <li className="guide-item">
            <h2>Payouts</h2>
            <ul className="desc">
                <li>The payout on ODD, EVEN is 1:{odds.even}</li>
                <li>The winning amount is calculated according to the payout ratio. Note, the Payout includes the initial stake.</li>
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
            </ul>
        </li>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a mini version of Se Die game that includes only two bet options ODD and EVEN. The game is played with
                        4 colored buttons, each button has two sides colored in red and white. The objective of this game is to predict the
                        outcome of 4 buttons. If the outcome matches the player’s bet, the player wins.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(numberWithCommas(maxbet), numberWithCommas(minbet), odds)}</li>

                {renderPayouts(odds)}
                {renderTermsAndConditionsEN()}
            </ul>
        </div>
    );
};
export default SeDieGuideEN;
