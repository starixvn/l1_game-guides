import React from "react";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsEN } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, ChoicesMaxBetProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../sic-bo.module.scss";

const renderGameRule = (maxBet: number) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Select the chip value you wish to play. Players can bet on one or more betting options shown on the game table.</li>
                <li> All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>Once the betting time has expired, the dice cup will be removed and the result is shown.</li>
                <li>The maximum total stake per round is {numberWithCommas(maxBet)}</li>
                <li>
                    The total stake amount of all players shown on each bet option is only for reference. For different markets and
                    currencies, the totals are converted based on the internal rates set by the company.
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, minBet: number, choicesMaxBet: ChoicesMaxBetProps, t: TFunction) => {
    return (
        <li className="guide-item">
            <h2>Payouts</h2>
            <ul className="desc">
                <li>
                    The winning amount is calculated according to the payout ratio. <strong>Note,</strong> the Payout includes the initial
                    stake.
                </li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["bet-option-width"]}>Options</th>
                                    <th className={Styles["bet-choice-width"]}>Choices</th>
                                    <th>Payouts</th>
                                    <th className={Styles["bet-limit-width"]}>
                                        Bet Limit <br></br>(Min-Max)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Big Small</td>
                                    <td>Big</td>
                                    <td rowSpan={2}>1:{odds?.big}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.big)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                </tr>
                                <tr>
                                    <td>Any Triple</td>
                                    <td>Any Triple</td>
                                    <td>1:{odds?.anyTriple}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.anyTriple)}
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>Specific Number</td>
                                    <td rowSpan={3}>Bet on any number from 1 to 6</td>
                                    <td className="text-start">1:{odds?.single} if the chosen number appears once.</td>
                                    <td rowSpan={3}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.specific1)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">1:{odds?.double} if the chosen number appears twice.</td>
                                </tr>
                                <tr>
                                    <td className="text-start">1:{odds?.triple} if the chosen number appears on all three dice.</td>
                                </tr>
                                {renderPayoutsTableOnBody(odds, minBet, choicesMaxBet, t)}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderPayoutsTableOnBody = (odds: OddsProps | undefined, minBet: number, choicesMaxBet: ChoicesMaxBetProps, t: TFunction) => {
    return (
        <>
            <tr>
                <td rowSpan={14}>{t("totalPoints")}</td>
                <td>4</td>
                <td rowSpan={2}>1:{odds?.total4}</td>
                <td rowSpan={8}>
                    {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.total4)}
                </td>
            </tr>
            <tr>
                <td>17</td>
            </tr>
            <tr>
                <td>5</td>
                <td rowSpan={2}>1:{odds?.total5}</td>
            </tr>
            <tr>
                <td>16</td>
            </tr>
            <tr>
                <td>6</td>
                <td rowSpan={2}>1:{odds?.total6}</td>
            </tr>
            <tr>
                <td>15</td>
            </tr>
            <tr>
                <td>7</td>
                <td rowSpan={2}>1:{odds?.total7}</td>
            </tr>
            <tr>
                <td>14</td>
            </tr>
            <tr>
                <td>8</td>
                <td rowSpan={2}>1:{odds?.total8}</td>
                <td rowSpan={6}>
                    {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.total8)}
                </td>
            </tr>
            <tr>
                <td>13</td>
            </tr>
            <tr>
                <td>9</td>
                <td rowSpan={4}>1:{odds?.total9}</td>
            </tr>
            <tr>
                <td>10</td>
            </tr>
            <tr>
                <td>11</td>
            </tr>
            <tr>
                <td>12</td>
            </tr>
        </>
    );
};

const SicBoGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minBet, maxBet, maxBetPerChoices } = gameConfigs;
    const { t } = useTranslation(gameName.toLocaleLowerCase());

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a casino dice game that is widely popular in Asia. The game is played with three standard dice. The
                        objective of this game is to predict the outcome of the dice roll. The player can bet on specific dice outcomes and
                        the total value of the dice.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBet)}</li>
                <li className="guide-item">
                    <h2>Betting Options</h2>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th className={Styles["bet-option-width"]}>Options</th>
                                            <th className={Styles["bet-choice-width"]}>Choices</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Big Small</td>
                                            <td>Big</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li> Bet on the total score of three dice is between 11 and 17 points. </li>
                                                    <li> If three dice are of equal value, you lose this bet</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Small</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li> Bet on the total score of three dice is between 4 and 10 points.</li>
                                                    <li> If three dice are of equal value, you lose this bet</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Any Triple</td>
                                            <td>Any Triple</td>
                                            <td className="text-start">To win this bet, all three dice must show the same number. </td>
                                        </tr>
                                        <tr>
                                            <td>Specific Number</td>
                                            <td>Bet on any number from 1 to 6</td>
                                            <td className="text-start">
                                                Bet on a specific number from 1 to 6. If the chosen number has appeared among three dice,
                                                you win{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Total Points</td>
                                            <td>Bet on any number from 4 to 17</td>
                                            <td className="text-start">
                                                Bet on the total score of three dice. The player predicts whether the total score of three
                                                dice is equal to a chosen number.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderPayouts(odds, minBet, maxBetPerChoices, t)}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default SicBoGuideEN;
