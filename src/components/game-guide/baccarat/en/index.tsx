import React, { useEffect } from "react";

import { BaccaratId } from "..";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../baccarat.module.scss";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (gameId: number | undefined, maxBetMain: number | string, environment: string | undefined) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                {renderRuleContent(gameId, maxBetMain, environment)}

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
                                        The Punter wins if the total numbers of cards that have been dealt in one round are 5 or 6.
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

                {gameId === BaccaratId.BlockchainBaccarat && renderCutCard()}
            </ul>
        </>
    );
};

const renderCutCard = () => {
    return (
        <ul className="style-number-dot">
            <li className="number-dot">
                <span className="font-weight-medium title-text">Cut Card</span>
                <ul>
                    <li>
                        Cut Card: a special card is used to indicate where the shoe will end and all cards will be reshuffled. Cut Card will
                        be inserted in the middle of the card pack (416 cards) at the beginning of the new shoe.
                    </li>
                </ul>
                <img className={Styles["cut-card"]} src={`/static/images/blockchain-baccarat/cutcard.png`} alt="cut-card" loading="eager" />
            </li>
            <li className="number-dot">
                <span className="font-weight-medium title-text">Burn Card</span>

                <ul className="desc">
                    <li>
                        After the Cut Card has been inserted, there is a burn card process. The number of card that will be burned (discard
                        without using), is dependent on the value of the first card taken out of the new Shoe.
                    </li>
                </ul>
                <div>
                    <strong>Note</strong>: The first card on top of the card pack (416 cards) is also discarded.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>First Card</th>
                                    <th>A</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>J</th>
                                    <th>Q</th>
                                    <th>K</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Burn Value</strong>
                                    </td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <strong>Example</strong>:{" "}
                </div>
                <ul className="desc">
                    <li>If the first card is 5 {`=>`} 6 cards will be removed (5 burned cards + the first card)</li>
                    <li>If the first card is K {`=>`} 11 cards will be removed (10 burned cards + K card)</li>
                </ul>
            </li>
        </ul>
    );
};

const renderRuleContent = (gameId: number | undefined, maxBetMain: number | string, environment: string | undefined) => {
    if (gameId === BaccaratId.BlockchainBaccarat) {
        return (
            <>
                <li>
                    By default, 6 cards will be drawn at the beginning of each round. Player and Banker, each hand will start with 2 cards
                    face down.
                </li>
                <li>The third card will be dealt according to the total points of the first 2 cards on each hand.</li>
                <li>If the round ends with a total of less than 6 cards dealt, the remaining cards will be used for the next round.</li>
                <li>
                    The game determines the win or loss by comparing the total points of all cards on each hand and the winning hand is the
                    one closest to a total of 9 points.
                </li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>The maximum total stake per round is {maxBetMain} </li>
            </>
        );
    }

    return (
        <>
            <li>Player and Banker, each hand will start with 2 face - down cards.</li>
            {environment === ENVIRONMENT.sc && (
                <>
                    <li>The Punter predicts which one in two hands will win.</li>
                    <li>
                        The third card also will be drawn after finishing dealing 2 initial face-down cards for Player and Dealer’s hands.
                    </li>
                    <li>
                        The cards are numbered from one to six that correspond to the sequence of dealt cards at the beginning of the game
                        round.
                    </li>
                </>
            )}
            {environment === ENVIRONMENT.sm && <li>The Punter predicts which one in two hands will win.</li>}
            <li>
                Another betting option is “Tie” if the Punters predict two hands will end in equal totals or they can also bet on Big,
                Small, Player Pair, or Banker Pair options.
            </li>
            <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
            <li>The maximum total stake per round is {maxBetMain}</li>
            <li>Once the betting time has expired, the dealer turns the cards face up.</li>
            <li>Based on the total points of the first two cards, the dealer will determine whether either hand reveals a third card. </li>
            <li>
                The game determines the win or loss by comparing the total points of all cards on each hand and the winning hand is the one
                closest to a total of 9 points.
            </li>
            <li>The standard deck with 52 cards (excluding Joker) is shuffled after every round.</li>
        </>
    );
};

const renderPointCalculationRules = (gameName: string, gameId: number | undefined) => {
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
                            <th>Total Points Based On {gameId === BaccaratId.BlockchainBaccarat ? "Baccarat " : gameName} Rules</th>
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

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step1_en.png?v=1" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step2_en.png?v=1" alt="md5-result" />
                    <div>
                        Note: From the left to right, <span className={Styles["black"]}>7♠️</span>{" "}
                        <span className={Styles["black"]}>3♠️</span> <span className={Styles["red"]}>7♦️</span>{" "}
                        <span className={Styles["black"]}>K♣️</span> <span className={Styles["black"]}>2♠️</span>{" "}
                        <span className={Styles["red"]}>Q♦️</span> corresponds to the order of dealt cards at the beginning of the game
                        round.
                    </div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const renderContentIntroduction = (gameId: number | undefined) => {
    let content = "";
    switch (gameId) {
        case BaccaratId.Baccarat:
        case BaccaratId.VipBaccarat:
            if (gameId === BaccaratId.Baccarat) {
                content = "is one of the most often-played card games in the casino. ";
            } else {
                content = "is an enhanced version of Baccarat with higher betting limits.";
            }
            content +=
                "The game is played with one standard 52-card deck (excluding Joker). There are 7 betting options and Punters can bet on one or more betting options shown on the game table.";
            break;
        case BaccaratId.BlockchainBaccarat:
            content =
                " - a card game with Fairness Guarantees, the new breakthrough with blockchain technology. The game uses 8 decks of cards (416 cards excluding the joker). There are 7 betting options and Punters can bet on one or more betting options shown on the game table.";
            break;
    }

    return content;
};

const BaccaratGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, fractionalOddsFormat } = props;
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
                        {gameName} {renderContentIntroduction(gameId)}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(gameId, maxBetFollowChoice?.maxBetMain ?? 0, environment)}</li>
                <li className="guide-item">{renderPointCalculationRules(gameName, gameId)}</li>
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
                                                <th className={Styles["sum-two-cards"]}>Player’s first two cards total</th>
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
                                                        <th className={Styles["sum-two-cards"]}>Banker’s first two cards total</th>
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
                        <li>The winning amount is calculated according to the betting odds.</li>
                        <li>The Payout includes the initial stake.</li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                        <li className="contentBeforeEmpty">
                            <strong>Note:</strong> All bets on Player and Banker will be refunded if the result is a draw.
                            <div className="table-container">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th className={Styles["payouts-option-width"]}>Options</th>
                                            <th>Odds</th>
                                            <th>
                                                Bet Limit <br></br>(Min-Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Player</td>
                                            <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Banker</td>
                                            <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Big</td>
                                            <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Small</td>
                                            <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Tie</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td rowSpan={3}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Player pair</td>
                                            <td rowSpan={2}>{formatOdds(odds?.playerPair, fractionalOddsFormat)}</td>
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
                {environment === ENVIRONMENT.sc && gameId !== BaccaratId.BlockchainBaccarat && (
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
export default BaccaratGuideEN;
