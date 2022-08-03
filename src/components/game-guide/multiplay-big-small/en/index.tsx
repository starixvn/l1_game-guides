import React, { useEffect } from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step1_en.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step2_en.png?v=3" alt="md5-result" />
                    <div>Note: From the left to right, &#123;6, 2, 5&#125; correspond to the the value of three dice.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const MultiplayBigSmallGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment } = props;
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
                        {gameName} - the “unbalanced betting pool” version of Big Small that consists of 4 games: Las Vegas, Marina Bay,
                        Macau, and Monte Carlo, in which Marina Bay and Monte Carlo are turbo versions with shortened betting time. Mega Big
                        Small allows you to play 4 games at the same time with many exciting new experiences. The game is played with three
                        dice and the players place bets on whether the total points of the three dice are BIG or SMALL.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>For each game, the dice cup will be shaken at the beginning of the game round.</li>
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
                            Once the betting time has expired, the result will be shown. If the outcome of three dice matches your bet, you
                            win.
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>The payout on Big, Small is 1: {odds?.big}</li>
                        <li>The winning amount is calculated according to the payout ratio.</li>
                        <li>The Payout includes the initial stake.</li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideEN;
