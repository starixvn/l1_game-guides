import React from "react";
import { useTranslation } from "next-i18next";

import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { CardPointValuesTable } from "..";
import Styles from "../blackjack.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined) => {
    const wrapperImg = "wrapper-img";
    const optionsWidth = "options-width";
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Select the chip value and click on the circle (betting spot) of each hand you want to bet.</li>
                <li>The Players can play with more than one hand at the same time (up to 3).</li>
                <li>
                    Click the “Deal” button to confirm bets, or “X” to reset your bets. Note, placed bets cannot be canceled after cards are
                    dealt.
                </li>
                <li>
                    Min bet and Max bet must be between {minBet} - {maxBet} and the maximum total stake per hand is {maxBet}
                </li>
                <li>
                    After the Players click the “Deal” button, two cards are dealt for each Players’ hand and Dealer. Players’ cards are
                    dealt face up while Dealer - the first card face up, the other face down.
                </li>
                <li>Cards are shuffled after each round.</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> Rules for the Player’s hand</span>
                        <ul className="desc">
                            <li>
                                If the Player gets 21 points on the first two cards (Blackjack), the Player will win automatically, except
                                DeaIer also has Blackjack.
                            </li>
                            <li>
                                When both the Player and the Dealer have Blackjack, the result is a Push (Tie) and the bet is returned to
                                the Player.
                            </li>
                            <li>If the Player’s total goes over 21 (Bust). The Player loses, even if the Dealer also exceeds 21.</li>
                            <li>
                                Depending on the total points of the first two cards, the Player will have up to four options: {`"Hit"`},{" "}
                                {`"Stand"`}, {`"Double"`}, or {`"Split"`}, as per the game rules.
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles[optionsWidth]}>Options</th>
                                                <th> Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Hit
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_hit.png"
                                                        alt="guide_hit"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>Get an additional card to improve your hand totals.</li>
                                                        <li>
                                                            There is no limit on the number of cards you can draw until the total hand value
                                                            is 21 or Bust.
                                                        </li>
                                                        <li>
                                                            If the Player’s hand goes over 21, the player loses for that hand, no matter
                                                            what the Dealer has.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Stand
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_stop.png"
                                                        alt="guide_stop"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            Click the “Stand” button If the Player wants to stop drawing cards and end turn.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Split
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_split.png"
                                                        alt="guide_split"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            If the first two cards of a hand have the same value (for instance, 6-6 or J-Q),
                                                            the Player can split the cards into two separate hands.
                                                        </li>
                                                        <li>
                                                            Once “Split” is selected, an additional bet equal to your original bet is
                                                            placed.
                                                        </li>
                                                        <li>The player can split only once per hand.</li>
                                                    </ul>
                                                    <strong>Note:</strong>
                                                    <ul className="desc">
                                                        <li>
                                                            There is an exception with splitting A-A in that only one additional card is
                                                            dealt for each new hand.
                                                        </li>
                                                        <li>
                                                            The hand has a total of 21 points with 2 cards after splitting is considered 21,
                                                            not Blackjack.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Double
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_double.png"
                                                        alt="guide_double"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            If the total points of the first two cards are 9, 10, or 11 points, the Player
                                                            can double the original bet and receive an additional card only. The hand will
                                                            stand after the card is dealt.
                                                        </li>
                                                    </ul>
                                                    <strong>Note:</strong> “Double” is not applied for hands after splitting.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">Rules for the Dealer’s hand</span>
                        <ul className="desc">
                            <li>
                                The Dealer starts his/her hand after the player has completed. The Dealer must draw on {`"16 or less"`} and
                                stand on {`"17 and more"`}.
                            </li>
                            <li>If the Player and the Dealer have the same total, the outcome is PUSH (Tie) and the bet is returned. </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
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
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Payouts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Blackjack Win</td>
                                    <td>{formatOdds(odds?.blackjack, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Normal Win</td>
                                    <td>{formatOdds(odds?.regular, fractionalOddsFormat)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const BlackjackGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "blackjack"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} (also called {`"21"`}) is a fun and enjoyable casino card game. The game is played with six standard
                        decks of 52 cards (excluding Joker) shuffled together. In Blackjack, the Player plays against the Dealer, and the
                        object of the game is to have the total points of your cards as close to 21 as possible, without going over 21. The
                        Player will win if the total points of your cards are closer to 21 than the {`Dealer's`} cards.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain)}</li>
                <li className="guide-item">
                    <h2>Point Calculation Rules</h2>
                    <ul className="desc">
                        <li>
                            All cards from 2 to 10 are counted at face value, regardless of suit, and face cards (Jack, Queen, King) are
                            counted as ten.
                        </li>
                        <li>An Ace is counted as either 1 or 11, whichever is best for your hand. </li>
                        <li>
                            The hand with Blackjack (21 points on the first two cards) will win over a 21 achieved with 3 or more cards.
                        </li>
                        <li>Card’s point values:{CardPointValuesTable(t)}</li>
                    </ul>
                    <strong>Example: </strong>
                    <ul className="detail">
                        <li>A hand containing a Nine (9), Eight (8), and Ace (A) {`=>`} the hand’s value is 18.</li>
                        <li>A hand containing a Seven (7) and Ace (A) {`=>`} the hand’s value is 18</li>
                    </ul>
                </li>
                {renderPayouts(odds, fractionalOddsFormat)}
                {renderTermsAndConditionsEN("", 23)}                
            </ul>
        </>
    );
};
export default BlackjackGuideEN;
