import React, { useEffect } from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-number/en";
import ScrollToMD5 from "../../../shared/md5-number";
import Styles from "../texas-hold.module.scss";

const renderGameRule = (maxBet: string | number | undefined) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Select the desired chip with the value that suits you best and place it on Ante.</li>
                <li>
                    <strong>Ante bet:</strong> To start a new game round, the Player clicks on the DEAL button for the cards to be dealt.
                    The Player is dealt two cards face-up (the “Hole cards”), and the Dealer is dealt two cards face-down.
                </li>

                <li>
                    <strong>Call bet:</strong> After the two cards are dealt, the Player has to evaluate their hand strength and decide to
                    CALL or FOLD.
                    <ul className="detail">
                        <li>
                            <strong>CALL:</strong> The Player continue playing with an additional Call bet that equals twice the Ante bet.
                            The 3 community cards (the Flop) are dealt face-up in the middle of the table.
                        </li>
                        <li>
                            <strong>FOLD:</strong> The Player forfeits the Call bet and loses the Ante bet. The game round ends.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Turn and River bets:</strong> The Player sequentially is offered two additional bets Turn bet and River bet that
                    equals the stake of the Ante bet.
                    <ul className="detail">
                        <li>
                            <strong>BET TURN </strong>and <strong>BET RIVER:</strong> If you are confident about your hand’s potential,
                            click on the appropriate button, otherwise click on the CHECK button. The last two community cards the fourth
                            card (the Turn) and the fifth card (the River) are dealt.
                        </li>
                        <li>
                            <strong>CHECK:</strong> The Player continues playing without placing additional bets. The last two community
                            cards are dealt.
                        </li>
                    </ul>
                </li>
                <li>
                    After the 5 community cards are dealt, the Player and the Dealer use their hole cards and combine them with the five
                    community cards to create the best possible five-card Poker hand.
                    <ul className="detail">
                        <li>
                            If the Dealer’s hand beats the Player’s hand, the Player loses the game and all the bets on Ante, Call, Turn and
                            River lose.
                        </li>
                        <li>If the Player’s hand and the Dealer’s hand tie, it is a push and all bets return to Players.</li>
                        <li>
                            If Player’s hand beats Dealer’s hand:
                            <ul>
                                <li>+ With a hand lower than a Straight, the Call, Turn and River bets win. The Ante return to Players.</li>
                                <li>+ With a Straight or higher, all the bets Ante, Call, Turn, and River bets win.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    To start a new game round, the available account balance must be ≥ 3 times (greater than or equal) the stake of the Ante
                    bet.
                </li>
                <li>The maximum total stake per round is {maxBet}.</li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Ranking Level</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">
                            <span className="title-text">Card Values</span>
                            <ul className="desc">
                                <li>
                                    The card&apos;s value is ranked from the highest to the lowest in the following order: Ace (A), King
                                    (K), Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3 and 2.
                                </li>
                                <li>
                                    The Ace can be used as both the highest and lowest card.{" "}
                                    <ul className="detail">
                                        <li>
                                            For example: In a straight, the A can be used as A, K, Q, J, 10 as the highest value or 5, 4, 3,
                                            2, A as the lowest value card.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    All the suits - heart (<span className={Styles["red"]}>♥</span>), spade (
                                    <span className={Styles["black"]}>♠</span>), diamond (<span className={Styles["red"]}>♦</span>), and
                                    club (<span className={Styles["black"]}>♣</span>) have equal value.
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">Hand Ranking</span>
                            <ul className="desc">
                                <li>
                                    List of poker hand ranking levels from highest to lowest.
                                    <div className="table-container text-center">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <td>Hand</td>
                                                    <td>Description</td>
                                                    <td>Example</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Royal Flush</strong>
                                                    </td>
                                                    <td>Ace, King, Queen, Jack, and 10 in the same suit</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/sanhrong.png"
                                                                alt="sanhrong"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Straight Flush</strong>
                                                    </td>
                                                    <td>Five cards in the same suit, all in a rank sequence</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/sanhthung.png"
                                                                alt="sanhthung"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Four of a Kind</strong>
                                                    </td>
                                                    <td>Four cards of the same rank</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/tuquyfull.png"
                                                                alt="tuquy"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Full House</strong>
                                                    </td>
                                                    <td>Three of a Kind and a Pair</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/culu.png"
                                                                alt="culu"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Flush</strong>
                                                    </td>
                                                    <td>Five cards in the same suit</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/thung.png"
                                                                alt="thung"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Straight</strong>
                                                    </td>
                                                    <td>Five cards a rank sequence</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/sanh.png"
                                                                alt="sanh"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Three of a Kind</strong>
                                                    </td>
                                                    <td>Three cards of the same rank</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/sam.png"
                                                                alt="sam"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Two Pair</strong>
                                                    </td>
                                                    <td>Two pairs of different ranks</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/2doi.png"
                                                                alt="haidoi"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Pair</strong>
                                                    </td>
                                                    <td>Two cards of the same rank</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/doi.png"
                                                                alt="doi"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>High card</strong>
                                                    </td>
                                                    <td>Highest card when no higher hand is available</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-holdem/mauthau.png"
                                                                alt="mauthau"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li>
                                    The Poker hand consists of five cards. If the Player and the Dealer share a winning hand, then the
                                    individual cards will be used to break the Tie. If the highest card in the Player’s hand is equal, the
                                    second-highest card should be compared, and so on.
                                </li>
                            </ul>
                            <p>
                                <strong>Example</strong>
                            </p>
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Cards</td>
                                            <td>Combination</td>
                                            <td>Result</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Player</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    A<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    A<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>Two Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Dealer</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Community Cards</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    6<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                =&gt; The Player wins because the Player’s hand has Two Pair which is higher than a pair of the Dealer’s
                                hand.
                            </div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Cards</td>
                                            <td>Combination</td>
                                            <td>Result</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Player</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Dealer</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    9<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    9<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    6<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Community Cards</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    6<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    3<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                =&gt; The Dealer wins because the Dealer has a pair of J which is higher than a pair of 5 of the Player’s
                                hand.
                            </div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Cards</td>
                                            <td>Combination</td>
                                            <td>Result</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Player</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Two Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Dealer</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    4<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    10<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    10<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>Two Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Community Cards</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    3<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                =&gt; The Dealer wins. The Player’s hand and Dealer’s hand have two pair (a pair of A and a pair of 7, but
                                the individual card of the Dealer’s hand (10) is higher than the Player’s hand (5).
                            </div>
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Cards</td>
                                            <td>Combination</td>
                                            <td>Result</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Player</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    6<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Two Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Dealer</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    4<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    2<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Two Pair</td>
                                        </tr>
                                        <tr>
                                            <td>Community Cards</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                =&gt; The Player and Dealer tie because the combination cards of the Player’s hand and the Dealer’s hand are
                                the same.
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <h2>Payout</h2>
            <ul className="desc">
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                <li>The winning amount is calculated according to the payout ratio. Note, the Payout includes the initial stake.</li>
                <li>
                    If Player’s hand beats Dealer’s hand:
                    <ul className="detail">
                        <li>With a hand lower than a Straight, the Call, Turn and River bets are won, and Ante pushes (Tie).</li>
                        <li>With a Straight or higher, all the bets Ante, Call, Turn, and River bets won</li>
                    </ul>
                </li>
                <li>
                    Payout and Bet Limit{" "}
                    <div className="table-container text-center">
                        <table className="table table-small">
                            <thead>
                                <tr>
                                    <td>Option</td>
                                    <td>Odds</td>
                                    <td>Bet Limit (Min-Max)</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ante (with a hand lower than Straight)</td>
                                    <td>Push</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetAnteBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>Ante (with a hand of Straight or higher) </td>
                                    <td>1 - {odds?.AnteBet_flush}</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetAnteBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>Call</td>
                                    <td>1 - {odds?.call}</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetCallBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>Turn</td>
                                    <td>1 - {odds?.turn}</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetTurnBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>River</td>
                                    <td>1 - {odds?.river}</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetRiverBetChoice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const TexasHoldGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, isScrollMD5 } = props;
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
                        Texas Hold’em is one of the world’s most popular Poker games. The game is played with a standard 52-card deck
                        (excluding Joker), and the cards are reshuffled after each round. The objective of this game is to obtain a higher
                        ranking Poker hand than the Dealer. Using your own hole cards combines with the five community cards to create the
                        best possible five-card Poker hand.
                    </p>
                    <p className="content">
                        In addition, a new feature -{" "}
                        <a href="#md5" className={Styles["link"]}>
                            {" "}
                            MD5 (Message-Digest algorithm 5){" "}
                        </a>
                        that allows the Player to check the fairness and authenticity of every game result.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice)}</li>
                <li id="md5" className="guide-item">
                    {renderMD5EN(42)}
                </li>

                {renderTermsAndConditionsEN("", 42)}
            </ul>
        </>
    );
};
export default TexasHoldGuideEN;
