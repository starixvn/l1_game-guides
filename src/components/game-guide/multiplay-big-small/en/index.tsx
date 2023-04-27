import React, { useEffect } from "react";

import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import MD5 from "../../base/md5";


const MultiplayBigSmallGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat } = props;
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
                        "{gameName}" is a simple dice game that consists of 4 tables: Las Vegas, Marina Bay, Macau, and Monte Carlo, in which Marina Bay and Monte Carlo are turbo versions with shortened betting time.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>For each table, the dice cup will be shaken at the beginning of the game round.</li>
                        <li>The players can bet on either BIG or SMALL, but not on both.</li>
                        <ul className="detail">
                            <li>BIG: the player will win if the total points of three dice &gt;= 11</li>
                            <li>SMALL: the player will win if the total points of the three dice &lt;= 10</li>
                        </ul>
                        <li>
                            Players can increase their stakes by placing another bet with the same selection before the betting time
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
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>The payout on Big, Small is {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>The winning amount is calculated according to the betting odds.</li>
                        <li>The Payout includes the initial stake.</li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && <MD5
                    locale={props.locale}
                    step1ImageUrl={"/static/images/mega-bigsmall/md5_step1_en.png?v=3"}
                    step2ImageUrl={"/static/images/mega-bigsmall/md5_step2_en.png?v=3"}
                    step3ImageUrl={"/static/images/mega-bigsmall/md5_step3_en.png?v=1"}
                    step4ImageUrl={"/static/images/mega-bigsmall/md5_step4_en.png?v=1"}
                    note={<div>Note: From the left to right, &#123;6, 2, 5&#125; correspond to the value of three dice.</div>}
                />}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideEN;
