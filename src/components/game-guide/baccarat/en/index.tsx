import React from "react";

import { BaccaratVip } from "..";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../baccarat.module.scss";

const renderGameRule = (maxBetMain: number | string) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    Player and Banker, each hand will start with 2 cards face down. The Punters place bet on either of two hands which one
                    will win.
                </li>
                <li>
                    Another betting option is “Tie” if the Punters predict two hands will end in equal totals or they can also bet on Big,
                    Small, Player Pair, or Banker Pair options.
                </li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>The maximum total stake per round is {maxBetMain}</li>
                <li>Once the betting time has expired, the dealer turns the cards face up.</li>
                <li>Based on the total points of the first two cards, the dealer will determine whether either hand gets a third card.</li>
                <li>
                    The game determines the win or loss by comparing the total points of all cards on each hand and the winning hand is the
                    one closest to a total of 9 points.
                </li>
                <li>The standard deck with 52 cards (excluding Joker) is shuffled after every round.</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>Options</th>
                                    <th>Descriptions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Player</td>
                                    <td className="text-start">
                                        The Player hand will win if the total points of Player are higher than Banker.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker</td>
                                    <td className="text-start">
                                        The Banker hand will win if the total points of Banker are higher than Player.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tie</td>
                                    <td className="text-start">
                                        The Punter wins if two hands (Player and Banker) have finished with equal totals.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Player pair</td>
                                    <td className="text-start">
                                        The Punter wins if the first two cards of the Player are a pair, irrespective of suit.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker pair</td>
                                    <td className="text-start">
                                        The Punter wins if the first two cards of the Banker are a pair, irrespective of suit.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Big</td>
                                    <td className="text-start">
                                        The Punter wins if the total numbers of cards that have been dealt in one round are 5 of 6.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                    <td className="text-start">
                                        The Punter wins if the total numbers of cards that have been dealt in one round are 4.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPointCalculationRules = (gameName: string) => {
    return (
        <>
            <h2>Point Calculation Rules</h2>
            <ul className="desc">
                <li>
                    Card’s point values:
                    <ul className="detail">
                        <li>The cards (2 to 9) are counted at face value.</li>
                        <li>10 or face cards (Jack, Queen, King) have a value of 0, and Aces have a value of 1</li>
                    </ul>
                </li>
                <li>
                    When the total points exceed nine, the first digit of the total is dropped, and the second digit is the value of the
                    hand.
                </li>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>First Two Cards</th>
                            <th className={Styles["point-three-cards"]}>Third Card</th>
                            <th className={Styles["point-total"]}>Totals</th>
                            <th>Total Points Based On {gameName} Rules</th>
                        </tr>
                    </thead>
                    {renderTBodyPointCalculationRules()}
                </table>
            </ul>
        </>
    );
};

export const renderTBodyPointCalculationRules = () => {
    return (
        <>
            <tbody>
                <tr>
                    <td>4, 5</td>
                    <td></td>
                    <td>4 + 5 = 9</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>8, 8</td>
                    <td></td>
                    <td>8 + 8 = 16</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>7, 3</td>
                    <td></td>
                    <td>7 + 3 = 10</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>9, 4</td>
                    <td>8</td>
                    <td>9 + 4 + 8 = 21</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>A, K</td>
                    <td>10</td>
                    <td>1 + 0 + 0 = 1</td>
                    <td>1</td>
                </tr>
            </tbody>
        </>
    );
};

const BaccaratGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName}{" "}
                        {BaccaratVip.includes(gameId ? gameId : BaccaratVip[0])
                            ? "is an enhanced version of Baccarat with higher betting limits. "
                            : "is one of the most often-played card games in the casino. "}
                        The game is played with one standard 52-card deck (excluding Joker). There are 7 betting options and Punters can bet
                        on one or more betting options shown on the game table.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0)}</li>
                <li className="guide-item">{renderPointCalculationRules(gameName)}</li>
                <li className="guide-item">
                    <h2>Third Card Rules</h2>
                    <ul className="desc">
                        <li>A third card will be dealt according to the strict rules of the game.</li>
                        <li>
                            If the total points of the first two cards of either hand are 8 or 9, this is called a “Natural” and no more
                            cards are dealt, both the player and banker stand.
                        </li>

                        <ul className="style-number-dot">
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">Rules for the Player hand</span>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>Player’s first two cards total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0, 1, 2, 3, 4, 5</td>
                                                <td className="text-start">Draws a third card.</td>
                                            </tr>
                                            <tr>
                                                <td>6 or 7</td>
                                                <td className="text-start">The Player always stands.</td>
                                            </tr>
                                            <tr>
                                                <td>8 or 9 </td>
                                                <td className="text-start">
                                                    “Natural” and no more cards are dealt, both the player and banker stand.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li className="number-dot">
                                <span className="font-weight-medium title-text"> Rules for the Banker hand</span>
                                <ul className="desc">
                                    <li>
                                        If the Player hand gets the third card then the Banker draws a third card according to the following
                                        rules:
                                        <div className="table-container">
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th>Banker’s first two cards total</th>
                                                        <th>Banker draws when the Player’s third card has a point value:</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0, 1, 2</td>
                                                        <td className="text-start">The Banker always draws a third card.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td className="text-start">
                                                            The point value of 1, 2, 3, 4, 5, 6, 7, 9, 0 (not 8).
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td className="text-start">The point value of 2, 3, 4, 5, 6, 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td className="text-start">The point value of 4, 5, 6, 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td className="text-start">The point value of 6 or 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td className="text-start">The Banker always stands.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8 or 9</td>
                                                        <td className="text-start">
                                                            “Natural” and no more cards are dealt, both the player and banker stand.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        If the total points of {`Player's`} first two cards are 6 or 7 then the Banker will stand on a total
                                        of 6 or 7, and draw on a total of 5 or less.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>

                    <ul className="desc">
                        <li>The winning amount is calculated according to the payout ratio.</li>
                        <li>The Payout includes the initial stake.</li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                        <li className="contentBeforeEmpty">
                            <strong>Note:</strong> All bets on Player and Banker will be refunded if the result is a draw.
                            <div className="table-container">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th className={Styles["payouts-option-width"]}>Options</th>
                                            <th>Payouts</th>
                                            <th>
                                                Bet Limit <br></br>(Min-Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Player</td>
                                            <td>1: {odds?.player}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Banker</td>
                                            <td>1: {odds?.banker}</td>
                                        </tr>
                                        <tr>
                                            <td>Big</td>
                                            <td>1: {odds?.big}</td>
                                        </tr>
                                        <tr>
                                            <td>Small</td>
                                            <td>1: {odds?.small}</td>
                                        </tr>
                                        <tr>
                                            <td>Tie</td>
                                            <td>1: {odds?.tie}</td>
                                            <td rowSpan={3}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Player pair</td>
                                            <td rowSpan={2}>1: {odds?.playerPair}</td>
                                        </tr>
                                        <tr>
                                            <td>Banker pair</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default BaccaratGuideEN;
