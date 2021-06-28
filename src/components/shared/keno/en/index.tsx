import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../../pages";
import { ChoicesMaxBetProMaxProps, OddsProMaxProps } from "../../../game-guide/keno-pro-max/type";

export const renderFiveElements = () => {
    return (
        <>
            <span className="font-weight-medium">Five Elements (Gold, Wood, Water, Fire, Earth)</span>
            <ul className="desc">
                <li>
                    <strong>Gold:</strong> The sum of the 20 numbered balls drawn, ranges from 210 to 695.
                </li>
                <li>
                    <strong>Wood:</strong> The sum of the 20 numbered balls drawn, ranges from 696 to 763.
                </li>
                <li>
                    <strong>Water:</strong> The sum of the 20 numbered balls drawn, ranges from 764 to 855.
                </li>
                <li>
                    <strong>Fire:</strong> The sum of the 20 numbered balls drawn, ranges from 856 to 923.
                </li>
                <li>
                    <strong>Earth:</strong> The sum of the 20 numbered balls drawn, ranges from 924 to 1410.
                </li>
            </ul>
        </>
    );
};

export const renderGameRule = (
    odds: OddsProMaxProps,
    maxBet: number,
    minBet: number,
    choicesMaxBet: ChoicesMaxBetProMaxProps,
    userStakeLevel: UserStakeLevelProps,
    isMini = false
) => {
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : 0, maxBet));
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled. </li>
                <li>
                    Once the betting time has expired, the system will randomly draw {isMini ? 10 : 20} numbered balls and the result will
                    be shown.
                </li>
                <li>
                    The winning amount is calculated according to the payout ratio. <strong>Note,</strong> the Payout includes the initial
                    stake.
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th>Options</th>
                                    <th>Payouts</th>
                                    <th>Bet Limit (Min-Max)</th>
                                    <th>Max Total Stake Per Round</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Big</td>
                                    <td rowSpan={4}> 1: {odds.big}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.big)}
                                    </td>
                                    <td rowSpan={9}>{maxBetRound}</td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                </tr>
                                <tr>
                                    <td>Odd</td>
                                </tr>
                                <tr>
                                    <td>Even</td>
                                </tr>
                                <tr>
                                    <td>Gold</td>
                                    <td>1: {odds.gold}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.gold)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wood</td>
                                    <td>1: {odds.wood}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.wood)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Water</td>
                                    <td>1: {odds.water}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.water)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fire</td>
                                    <td>1: {odds.fire}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.fire)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Earth</td>
                                    <td>1: {odds.earth}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.earth)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
            </ul>
        </>
    );
};
