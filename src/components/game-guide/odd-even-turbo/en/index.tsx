import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";

const OddEvenTurboGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minBet, maxBet } = gameConfigs;
    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a simple dice game similar to Big Small. The game is played with three dice and the players predict
                        the total points of the three dice is ODD or EVEN.
                    </p>
                </li>
                <li className="guide-item">
                    <h2> Game Rules</h2>
                    <ul className="desc">
                        <li>The players can bet on either ODD or EVEN, but not on both.</li>
                        <ul className="detail">
                            <li>ODD: the player will win if the total points of three dice is an odd number. </li>
                            <li>EVEN: the player will win if the total points of three dice is an even number. </li>
                        </ul>
                        <li>
                            Make sure you bet an amount you’re comfortable with. Click Confirm to complete or Clear button if you want to
                            reset all your bets.
                        </li>
                        <li>
                            Players can increase their stake amount by placing another bet with the same selection before the betting time
                            expires.
                        </li>
                        <li>
                            Min bet and Max bet must be between {numberWithCommas(minBet)} - {numberWithCommas(maxBet)} and the maximum
                            total stake per round is {maxBetRound}
                        </li>
                        <li>
                            The dice will be shaken and the result will be shown. If the outcome of three dice matches your bet, you win.
                        </li>
                        <li>
                            Balanced Betting Pool: if the total amounts bet on ODD and EVEN are different then the gap amount will be
                            refunded to the players who have the latest bet ticket.<br></br>
                            <strong>Example:</strong> Player A bets 60 on ODD, player B bets 70 on EVEN, and C bets 20 on EVEN. To balance
                            the total amounts bet on ODD and EVEN, the system will refund 20 to player C and 10 to player B.
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>The payout on ODD, EVEN is 1:{odds.even}</li>
                        <li>
                            The winning amount is calculated according to the payout ratio. <strong>Note,</strong> the Payout includes the
                            initial stake.
                        </li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                    </ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default OddEvenTurboGuideEN;
