import React from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../bitcoin-master.module.scss";

const renderGameRule = (maxBetRound: string | undefined) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    The object of this game is to predict the last recorded bitcoin value after 60 seconds (Result Price) is an Odd or Even
                    number, Up or Down compared with the initial value (Betting Price).
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Bettype</th>
                                    <th>Options</th>
                                    <th>Winning Conditions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Up/Down</td>
                                    <td>Up</td>
                                    <td className="text-start">The “Result Price” is higher than the “Betting Price”.</td>
                                </tr>
                                <tr>
                                    <td>Down</td>
                                    <td className="text-start">The “Result Price” is lower than the “Betting Price”.</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Even/Odd</td>
                                    <td>Even</td>
                                    <td className="text-start">
                                        The Result Price is an even number.
                                        <br></br>+ Note: A number is even if its units digit is even.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Odd</td>
                                    <td className="text-start">
                                        The Result Price is an odd number.
                                        <br></br>+ Note: A number is odd if its units digit is odd.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>
                    There are 2 types of bets: Up/Down, Even/Odd. For each bettype, the Players are only allowed to place bets on one
                    option.
                </li>
                <li className="contentBeforeEmpty">
                    <strong>Example:</strong> With Up/Down bettype, the players can bet on either Up or Down, but not on both.
                </li>
                <li>
                    Players can increase their stake amount by placing another bet with the same selection before the betting time expires.
                </li>
                <li>The maximum total stake per round is {maxBetRound}. Note, placed bets cannot be canceled.</li>
                <li>
                    For Up/Down bettype, the stake will be refunded in case the Bitcoin value does not change after 60s, the “Result Price”
                    is equal to “Betting Price”.
                </li>
                <li>
                    The Bitcoin (USD) value shown in the game is the average of real-time data from 4 exchanges:
                    <div className={Styles["wrapper"]}>
                        <div className={Styles["wrapper-binance"]}>
                            <img src={`/static/images/bitcoin-master/Binance.png`} alt="Binance" loading="eager" />
                        </div>
                        <div className={Styles["wrapper-huobi"]}>
                            <img src={`/static/images/bitcoin-master/Huobi.png`} alt="Huobi" loading="eager" />
                        </div>
                        <div className={Styles["wrapper-okex"]}>
                            <img src={`/static/images/bitcoin-master/OKEX.png`} alt="OKEX" loading="eager" />
                        </div>
                        <div className={Styles["wrapper-mexc"]}>
                            <img src={`/static/images/bitcoin-master/mexc_global.png`} alt="mexc_global" loading="eager" />
                        </div>
                    </div>
                </li>
                <strong>Example:</strong>
                <ul className="desc">
                    <li className="contentBeforeEmpty">
                        Bitcoin value at the starting time (Betting Price) = <strong>57,761.13</strong>
                    </li>
                    <li className="contentBeforeEmpty">
                        Bitcoin value at 60 seconds (Result Price) = <strong>58,011.08</strong>
                    </li>
                </ul>
            </ul>
            <ul className="desc">
                <li>
                    Up/Down
                    <ul className="desc">
                        <li className="contentBeforeEmpty">+ Result Price {`>`} Betting Price. Place a bet on the option “Up” will win</li>
                    </ul>
                </li>
                <li>
                    Even/Odd
                    <ul className="desc">
                        <li className="contentBeforeEmpty">+ Result Price is an odd number (58,011). Place a bet on “Odd” will win</li>
                    </ul>
                </li>
            </ul>

            <p>
                <strong>Balanced Betting Pool</strong>: With the same bettype, if the total amounts bet on each option are different then
                the gap amount will be refunded to the players who have the latest bet ticket.
                <br></br>
                <strong>Example:</strong> With Up/Down bettype, player A bets 100 on UP, player B bets 40 on DOWN, and C bets 80 on DOWN. To
                balance the total amounts bet on UP and DOWN, the system will refund 20 to player C.
            </p>
        </>
    );
};

const BitcoinMasterGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a new type of betting game that allows players to place bets based on Bitcoin value for the next 60
                        seconds. There are 4 options: Up, Down, Even, Odd.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>The winning amount is calculated according to the payout ratio.</li>
                        <li>The Payout includes the initial stake.</li>
                        <li>
                            All winning amounts are instantly added to your account balance when bets are settled.
                            <div className="table-container">
                                <table className="table text-center table-medium left">
                                    <thead>
                                        <tr>
                                            <th>Bettype</th>
                                            <th>Options</th>
                                            <th>Payouts</th>
                                            <th>
                                                Bet Limit
                                                <br /> (Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Up/Down</td>
                                            <td>Up</td>
                                            <td rowSpan={2}>1: {odds?.up}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetUp}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Down</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Even/Odd</td>
                                            <td>Even</td>
                                            <td rowSpan={2}>1: {odds?.odd}</td>
                                        </tr>
                                        <tr>
                                            <td>Odd</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsEN("", 43)}
            </ul>
        </>
    );
};
export default BitcoinMasterGuideEN;
