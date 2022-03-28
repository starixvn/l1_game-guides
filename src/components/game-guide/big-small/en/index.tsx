import React, {useEffect} from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-number/en";
import ScrollToMD5 from "../../../shared/md5-number";

const renderMD5Example = () => {
    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of Big Small game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.                 
                    <div>
                    Note: From the left to right, &#123;6, 2, 1&#125; correspond to the the value of three dice.
                    </div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/casino-holdem/hash-darling.png?v=1" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash, darling hash!” button and compare the newly generated checksum MD5 string with the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/casino-holdem/md5-checksum.png?v=1" />
                </li>
            </ul>            
        </>
    );
}

const BigSmallGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5 } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
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
                            Min bet and Max bet must be between {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain} and the
                            maximum total stake per round is {maxBetFollowChoice?.maxBetMain}
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
                        <li>The payout on Big, Small is 1: {odds?.big}</li>
                        <li>
                            The winning amount is calculated according to the payout ratio. <strong>Note</strong>, the Payout includes the
                            initial stake.
                        </li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                    </ul>
                </li>
                <li id="md5" className="guide-item">
                    {renderMD5EN(1)}
                    {renderMD5Example()}
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default BigSmallGuideEN;
