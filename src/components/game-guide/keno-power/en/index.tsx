import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { KenoPowerMD5 } from "../index";
import { renderMD5EN } from "../../../shared/md5/en";
import Styles from "../keno-match.module.scss";

const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Make sure you bet an amount you’re comfortable with.</li>
                <li>The Punters can bet on one or more betting options shown on the game table.</li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>The maximum total stake per round is {maxBetRound}</li>
                <li className="contentBeforeEmpty">{renderBettingOptions()}</li>
            </ul>
        </>
    );
};

const renderBettingOptions = () => {
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Bet Types</th>
                        <th>Options</th>
                        <th>Winning Conditions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Team Blue/Team Red
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Team Blue</td>
                        <td className="text-start">
                            Punter wins if the total points of Team Blue {`>`} Team Red.
                            <br />
                            +All bets will be refunded if the total points of Team Blue and Team Red are equal.
                        </td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Team Red</td>
                        <td className="text-start">
                            Punter wins if the total points of Team Red {`>`} Team Blue.
                            <br />+ + All bets will be refunded if the total points of Team Red and Team Blue are equal.
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Sum Big/Small
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Big</td>
                        <td className="text-start">Punter wins if the total points of both Team Blue and Team Red {`>=`} 1621</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Small</td>
                        <td className="text-start">Punter wins if the total points of both Team Blue and Team Red {`<`} 1621</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Sum Even/Odd
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Even</td>
                        <td className="text-start">Punter wins if the total points of both Team Blue and Team Red is an even number.</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Odd</td>
                        <td className="text-start">Punter wins if the total points of both Team Blue and Team Red is an odd number.</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Team Blue <br /> Big/Small
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Big</td>
                        <td className="text-start">Big Punter wins if the total points of Team Blue {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Small</td>
                        <td className="text-start">Punter wins if the total points of Team Blue {`<`} 811</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Team Red <br /> Big/Small
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Big</td>
                        <td className="text-start">Punter wins if the total points of Team Red {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Small</td>
                        <td className="text-start">Punter wins if the total points of Team Red {`<`} 811</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (odds: OddsProps, minBet: number, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <h2>Payouts</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio. </li>
                <li>The Payout includes the initial stake. </li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th className={Styles["payouts-option-width"]}>Bet Types</th>
                                    <th>Options</th>
                                    <th>Payouts</th>
                                    <th>
                                        Bet Limit <br></br>(Min - Max)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Team Blue/ Team Red</td>
                                    <td>Team Blue</td>
                                    <td rowSpan={6}>1: {odds.blue}</td>
                                    <td rowSpan={6}>
                                        {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetBlueChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Team Red</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Sum Big/Small</td>
                                    <td>Big</td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Sum Even/Odd</td>
                                    <td>Even</td>
                                </tr>
                                <tr>
                                    <td>Odd</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>
                                        Team Blue <br />
                                        Big/Small
                                    </td>
                                    <td>Big</td>
                                    <td rowSpan={4}>1: {odds.blue}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetBlueRedChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>
                                        Team Red <br />
                                        Big/Small
                                    </td>
                                    <td>Big</td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const md5Title = () => {
    return (
        <>
            is a different version of Keno Power, with a new feature
            <a href="#md5" className="md5-title">
                <strong> MD5 (Message-Digest algorithm 5) </strong>
            </a>
            that allows players to check the fairness and authenticity of every game result. The game
        </>
    );
};

const KenoPowerGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId } = props;
    const { odds, minbet } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} {KenoPowerMD5.includes(gameId ? gameId : KenoPowerMD5[0]) ? md5Title() : ""} consists of 2 sets of
                        numbers, one for the “Team Blue”, and another for “Team Red”, each set of 80 numbers (from 01 to 80). The system
                        will randomly draw 20 numbers (no duplicates) for Team Red, Team Blue. The object of this game is to predict the
                        total score of the numbers drawn.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(odds, minbet, maxBetFollowChoice)}</li>
                {KenoPowerMD5.includes(gameId ? gameId : KenoPowerMD5[0]) && (
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                    </li>
                )}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default KenoPowerGuideEN;
