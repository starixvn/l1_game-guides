import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";

const BigSmallGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minBet, maxBet } = gameConfigs;
    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} or commonly known as Sicbo or Tai Sai, is a game played with three dice. The players place bets and
                        predict the total points of the three dice are BIG or SMALL.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>The players can bet on either BIG or SMALL, but not on both.</li>
                        <ul className="detail">
                            <li>BIG: the player will win if the total points of three dice &gt;= 11</li>
                            <li>SMALL: the player will win if the total points of the three dice &lt;= 10</li>
                        </ul>
                        <li>
                            Players can increase their stake amount by placing another bet with the same selection before the betting time
                            expires. Note, placed bets cannot be canceled.
                        </li>
                        <li>
                            Min bet and Max bet must be between {numberWithCommas(minBet)} - {numberWithCommas(maxBet)} and the maximum
                            total stake per round is {maxBetRound}
                        </li>
                        <li>
                            The dice will be shaken and the result will be shown. If the outcome of three dice matches your bet, you win.
                        </li>
                        <li>
                            Balanced Betting Pool: if the total amounts bet on BIG and SMALL are different then the gap amount will be
                            refunded to the players who have the latest bet ticket.
                            <p>
                                <strong>Example:</strong> Player A bets 100 on BIG, player B bets 40 on SMALL, and C bets 80 on SMALL. To
                                balance the total amounts bet on BIG and SMALL, the system will refund 20 to player C.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>The payout on Big, Small is 1: {odds.big}</li>
                        <li>
                            The winning amount is calculated according to the payout ratio. <strong>Note</strong>, the Payout includes the
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
export default BigSmallGuideEN;
