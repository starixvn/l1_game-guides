import React from "react";
import Image from "next/image";

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
                <li>Players can bet on one or more betting options shown on the game table.</li>
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
                            Player wins if the total points of Team Blue {`>`} Team Red.
                            <br />+ All bets will be refunded if the total points of both teams are equal.
                        </td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Team Red</td>
                        <td className="text-start">
                            Player wins if the total points of Team Red {`>`} Team Blue.
                            <br />+ All bets will be refunded if the total points of both teams are equal.
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Sum Big/Small
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Big</td>
                        <td className="text-start">Player wins if the total points of both teams {`>=`} 1621</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Small</td>
                        <td className="text-start">Player wins if the total points of both teams {`<`} 1621</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Sum Even/Odd
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Even</td>
                        <td className="text-start">Player wins if the total points of both teams are an even number.</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Odd</td>
                        <td className="text-start">Player wins if the total points of both teams are an odd number.</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Team Blue <br /> Big/Small
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Big</td>
                        <td className="text-start">Big Player wins if the total points of Team Blue {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Small</td>
                        <td className="text-start">Player wins if the total points of team Blue {`<`} 811</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Team Red <br /> Big/Small
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Big</td>
                        <td className="text-start">Player wins if the total points of Team Red {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Small</td>
                        <td className="text-start">Player wins if the total points of Team Red {`<`} 811</td>
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
                                    <td rowSpan={2}>Team Blue/Team Red</td>
                                    <td className="text-start">Team Blue</td>
                                    <td rowSpan={6}>1: {odds.blue}</td>
                                    <td rowSpan={6}>
                                        {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetBlueChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Team Red</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Sum Big/Small</td>
                                    <td className="text-start">Big</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Small</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Sum Even/Odd</td>
                                    <td className="text-start">Even</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Odd</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Team Blue Big/Small</td>
                                    <td className="text-start">Big</td>
                                    <td rowSpan={4}>1: {odds.blue}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetBlueRedChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Small</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Team Red Big/Small</td>
                                    <td className="text-start">Big</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Small</td>
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
                        numbers, one for “Team Blue”, and another for “Team Red”, each set of 80 numbers (from 01 to 80). The system will
                        randomly draw 20 numbers (no duplicates) for each team. The object of this game is to predict the total score of the
                        numbers drawn.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(odds, minbet, maxBetFollowChoice)}</li>
                {KenoPowerMD5.includes(gameId ? gameId : KenoPowerMD5[0]) && (
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                        <div>
                            <strong>Example</strong>: check the authenticity and transparency of final results.
                            <ul className="desc">
                                <li>
                                    <strong>Step 1</strong>: Copy the MD5 string before the result is announced.
                                    <div className={Styles["md5-section"]}>
                                        <span className={`${Styles["text"]}`}>
                                            <strong>MD5:</strong> 0117dd60c97979c91700a94136c9cf3c
                                        </span>
                                        <div className={Styles["copy-box"]}>
                                            <span className={Styles["copy-text"]}>Copy</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <strong>Step 2</strong>: Copy key string after the system publishes the result.
                                    <div className={Styles["md5-section"]}>
                                        <span className={`${Styles["text"]}`}>
                                            <strong>Key:</strong> [<span className={Styles["blue"]}>684</span>;
                                            <span className={Styles["red"]}>778</span>]6a158a9ecb9d4eba0e67c0b6a
                                        </span>
                                        <div className={Styles["copy-box"]}>
                                            <span className={Styles["copy-text"]}>Copy</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            Noted: <span className={Styles["blue"]}>684</span> and <span className={Styles["red"]}>778</span> are results of
                            Team Blue and Team Red respectively.
                            <ul className="desc">
                                <li>
                                    <strong>Step 3</strong>: Go to{" "}
                                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                        https://md5.services/
                                    </a>{" "}
                                    and paste the key string into the MD5 box
                                    <div className={Styles["wrapper-img-hash"]}>
                                        <Image
                                            src={`/static/images/keno-power/md5-hash.png`}
                                            alt="md5-copy"
                                            width={387}
                                            height={120}
                                            layout="responsive"
                                            loading="eager"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <strong>Step 4</strong>: Press the “hash, darling hash!” button and compare the newly generated checksum
                                    MD5 string with the MD5 string in Step 1
                                    <div className={Styles["wrapper-img"]}>
                                        <Image
                                            src={`/static/images/keno-power/md5.png`}
                                            alt="md5-copy"
                                            width={362}
                                            height={98}
                                            layout="responsive"
                                            loading="eager"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                )}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default KenoPowerGuideEN;
