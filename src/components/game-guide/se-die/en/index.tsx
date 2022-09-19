import React, { useEffect } from "react";

import { SeDieMini } from "..";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderTermsAndConditionsEN } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { RedWhiteDataOnTable, StatisticalTable } from "../../../shared/se-die/en";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderGameRule = (maxBetMain: number | string, gameId = 0) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    Buttons are placed on the plate and covered with a bowl. The dealer will pick up the plate and shake it when the plate
                    is still covered with the bowl. The players place their bets and the betting options are:
                </li>

                <li className="contentBeforeEmpty">{renderGameRuleTable(gameId)}</li>
                <li>Once the betting time has expired, the dealer removes the bowl from the plate and the result will be shown.</li>
                <li>
                    Players can bet on one or more betting options shown on the game table. All bets must be placed before the betting time
                    expires. Note, placed bets cannot be canceled.
                </li>
                <li>The maximum total stake per round is {maxBetMain}</li>
            </ul>
        </>
    );
};

const renderGameRuleTable = (gameId: number) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
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
                    {RedWhiteDataOnTable()}
                    {!SeDieMini.includes(gameId) && (
                        <tr>
                            <td>2 red, 2 white</td>
                            <td>2 red, 2 white</td>
                            {renderTwoRedTwoWhite()}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const renderStatistical = () => {
    return (
        <li className="guide-item">
            <h2>Statistical Table</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const renderMD5Example = (gameName: string, gameId: any) => {
    const currentGameType = SeDieMini.includes(gameId) ? "mini-sedie" : "sedie";

    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step1_en.png?v=4`}
                        alt="md5-string"
                    />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step2_en.png?v=4`}
                        alt="md5-result"
                    />
                    <div>Note: Red and white correspond to two sides of the button.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/sedie/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/sedie/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    const gameDescription = () => {
        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return " -  a new version with “Multiplay” feature that allows you to play 4 games (Mini Se Die, Mini Se Die 2, Mini Se Die 3, and Mini Se Die 4) at the same time with many exciting new experiences. ";
            case 22:
                return "is another version of the Se Die game with higher betting limits. ";
            default:
                return "is a popular game in Asian countries. ";
        }
    };
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} {gameDescription()}
                        The game is played with 4 colored buttons, each button has two sides colored in red and white. The objective of this
                        game is to predict the outcome of 4 buttons. If the outcome matches the player’s bet, the player wins.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>The winning amount is calculated according to the payout ratio.</li>
                        <li>The Payout includes the initial stake.</li>
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
                                            <td rowSpan={2}>1:{odds?.even}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>EVEN</td>
                                        </tr>
                                        <tr>
                                            <td>4 red</td>
                                            <td rowSpan={2}>1:{odds?.red4}</td>

                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4 white</td>
                                        </tr>
                                        <tr>
                                            <td>3 red, 1 white</td>
                                            <td rowSpan={2}>1:{odds?.red3}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 red, 3 white</td>
                                        </tr>
                                        {!SeDieMini.includes(gameId ? gameId : SeDieMini[0]) && (
                                            <tr>
                                                <td>2 red, 2 white</td>
                                                <td>1:{odds?.red2}</td>
                                                <td>
                                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatistical()}
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                        {renderMD5Example(gameName, gameId)}
                    </li>
                )}

                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
