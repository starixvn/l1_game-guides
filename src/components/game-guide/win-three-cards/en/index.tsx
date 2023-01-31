import React from "react";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../win-three.module.scss";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { formatOdds } from "../../../../helpers/number-helper";
import { baseTermAndConditionEn } from "../../base/terms-and-conditions/languages/en";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>At the beginning, three face-down cards will be dealt to both the Dragon and Phoenix hands. </li>
                <li>
                    Player selects the chip value and places it on the desired bet options. All bets must be placed before the betting time
                    expires. Note that, the placed bets cannot be canceled.
                </li>
                <li>
                    The player can place bets on any available options except for the Dragon and Phoenix, player can only bet on either
                    Dragon or Phoenix.
                </li>
                <li>Once the betting time has expired, the system will reveal the game results.</li>
                <li>The game determines the win or loss by comparing the hand rankings between Dragon and Phoenix.</li>
                <li>
                    If both hands Dragon and Phoenix are of equal rank (card types and card values), the game result is Tie and all bets are
                    refunded.
                </li>
                <li>The standard deck with 52 cards (excluding the Joker) is shuffled after every round.</li>
                <li>The maximum total stake per round is {maxBet}</li>
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className={Styles["payout-option"]}>Bet Options</th>
                                <th>Winning Conditions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>Dragon</td>
                                <td className="text-start">The Dragon hand has a higher ranking.</td>
                            </tr>
                            <tr>
                                <td>Phoenix</td>
                                <td className="text-start">The Phoenix hand has a higher ranking.</td>
                            </tr>
                            <tr>
                                <td>Pair 8 Plus</td>
                                <td className="text-start">
                                    The winning hand has contained Pair 9 to Pair A, Straight, Flush, Straight Flush, Three of a Kind.
                                </td>
                            </tr>
                            <tr>
                                <td>Three of a Kind</td>
                                <td className="text-start">The result of winning hand is “Three of a Kind”. </td>
                            </tr>
                            <tr>
                                <td>Straight Flush</td>
                                <td className="text-start">The result of winning hand is “Straight Flush”.</td>
                            </tr>
                            <tr>
                                <td>Flush</td>
                                <td className="text-start">The result of winning hand is “Flush”. </td>
                            </tr>
                            <tr>
                                <td>Straight </td>
                                <td className="text-start">The result of winning hand is “Straight”. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Payouts</h2>
            <ul className="desc">
                <li>
                    The winning amount is calculated according to the betting odds. <br></br>
                    <strong>Note:</strong> the payouts include the initial stake.
                </li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Bet Options</th>
                                    <th>Odds</th>
                                    <th>
                                        Bet Limit <br></br> (Min - Max)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dragon</td>
                                    <td>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phoenix</td>
                                    <td>{formatOdds(odds?.phoenix, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPhoenix}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pair 8 Plus </td>
                                    <td>{formatOdds(odds?.pair8Plus, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPair8Plus}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Three of a Kind</td>
                                    <td>{formatOdds(odds?.threeOfAKind, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetThreeOfAKind}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Straight Flush</td>
                                    <td>{formatOdds(odds?.straightFlush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flush</td>
                                    <td>{formatOdds(odds?.flush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Straight</td>
                                    <td>{formatOdds(odds?.straight, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraight}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderCardType = () => {
    return (
        <>
            <li className="guide-item">
                <h2>Card Type</h2>
                <div className="table-container text-center">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>Card Type</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>
                                    <strong>235</strong>
                                </td>
                                <td className="text-start">
                                    Three cards 2, 3, 5 with different suits; or any two cards among 2, 3, 5 are the same suit and the other
                                    one with a different suit.
                                </td>
                                <td width={250}>
                                    <span className={Styles["wrapper-card"]}>
                                        <img
                                            src="/static/images/win-three-cards/235-1.png"
                                            alt="235"
                                            height={65}
                                            loading="eager"
                                            style={{ marginBottom: 5 }}
                                        />
                                    </span>{" "}
                                    <br></br>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/235-2.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Three of a Kind</strong>
                                </td>
                                <td className="text-start">Three cards of the same rank.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/threeKind.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Straight Flush</strong>
                                </td>
                                <td className="text-start">Three cards of the same suit in the sequence rank.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straightFlush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Flush</strong>
                                </td>
                                <td className="text-start">Three cards of the same suit with different ranks.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/flush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Straight</strong>
                                </td>
                                <td className="text-start">Three cards in the sequence with different suits.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straight.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Pair</strong>
                                </td>
                                <td className="text-start">Two cards of the same rank.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/pair.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>High Card</strong>
                                </td>
                                <td className="text-start">Highest card when no higher hand is available.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/highCard.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </>
    );
};

export const renderRankingLevel = () => {
    return (
        <>
            <li className="guide-item">
                <h2>Ranking Level</h2>
                <ul className="desc">
                    <li>
                        <strong>Card Ranking</strong>
                        <ul className="detail">
                            <li>
                                A {">"} K {">"} Q {">"} J {">"} 10 {">"} 9 {">"} 8 {">"} 7 {">"} 6 {">"} 5 {">"} 4 {">"} 3 {">"} 2
                            </li>
                            <li>The card suit does not affect the card rank.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hand Ranking</strong>
                        <ul className="detail">
                            <li>
                                Three of a Kind {">"} Straight Flush {">"} Flush {">"} Straight {">"} Pair {">"} High Card.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>235 {">"} Three of a Kind</strong>
                        <ul className="detail">
                            <li>If there are 235 and “Three of a Kind” in the result, 235 card type is higher than “Three of a Kind”.</li>
                            <li>When there is no “Three of a Kind” card type in the result, 235 is the smallest high card.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Pair</strong>
                        <ul className="detail">
                            <li>If both Dragon and Phoenix have one Pair, the card values of Pair are compared. </li>
                            <li>If the card values are identical then the card value of the remaining card is compared.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Flush, High Card</strong>
                        <ul className="detail">
                            <li>
                                The card values on both sides are compared starting with the card having the highest value. If the highest
                                card in each hand is equal, the second-highest card will be compared, and so on.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Straight Flush, Straight</strong>
                        <ul className="detail">
                            <li>
                                In Straight Flush and Straight, the Ace (A) card can be used as the highest or lowest card value. <br></br>
                                Example: QKA {">"} JQK {">"} …… {">"} 234 {">"} A23
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </>
    );
};

const WinThreeCardsGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName}, known as Golden Flower, is an extremely popular card game in the Casino. This game uses a standard
                        52-card deck (excluding the Joker). The objective of the game is to compare the hand ranking between Dragon and
                        Phoenix to determine the outcome of the game. The hand with the higher ranking will win.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderCardType()}
                {renderRankingLevel()}
                <li className="guide-item">
                    {renderMD5EN()}
                    <div className="content">
                        <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step1_en.png?v=3"
                                alt="md5-string"
                            />
                        </li>
                        <li>
                            <strong>Step 2:</strong> Copy the Result after it is published.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step2_en.png?v=3"
                                alt="md5-result"
                            />
                            <div>
                                Note: From left to right, 8♠️ Q♥️ 5♥️ 9♠️ 9♣ 10♠️ corresponds to the order of dealt cards at the beginning
                                of the game round.
                            </div>
                        </li>
                        <li>
                            <strong>Step 3:</strong> Go to{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            and paste the Result into the MD5 box.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step3_vi.png?v=1"
                                alt="hash-darling"
                            />
                        </li>
                        <li>
                            <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5
                            string with the MD5 string in Step 1.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step4_vi.png?v=1"
                                alt="md5-checksum"
                            />
                        </li>
                    </ul>
                </li>
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionEn} /></li>
            </ul>
        </>
    );
};
export default WinThreeCardsGuideEN;
