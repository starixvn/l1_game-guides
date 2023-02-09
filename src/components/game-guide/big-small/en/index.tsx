import React, { useEffect } from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

const BigSmallGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
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
                        <li>The dice cup is shaken at the beginning of the game round.</li>
                        <li>During the betting time, the players can bet on either BIG or SMALL, but not on both.</li>
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
                            Once the betting time has expired, the result will be shown. If the outcome of three dice matches your bet, you
                            win.
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
                        <li>The payout on Big, Small is {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>
                            The winning amount is calculated according to the betting odds. <strong>Note</strong>, the Payout includes the
                            initial stake.
                        </li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/big-small/md5_step1_en.png?v=3"}
                        step2ImageUrl={"/static/images/big-small/md5_step2_en.png?v=3"}
                        step3ImageUrl={"/static/images/big-small/md5_step3.png?v=1"}
                        step4ImageUrl={"/static/images/big-small/md5_step4.png?v=1"}
                        note={<div>Note: From the left to right, &#123;6, 2, 5&#125; correspond to the the value of three dice.</div>}
                    />
                )}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default BigSmallGuideEN;
