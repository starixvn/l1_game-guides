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
                <li>Select the desired chip with the value that suits you best and place bet on Ante.</li>
                <li>Note, Ante bet is a mandatory option that the Player must place bet before any cards are dealt.</li>
                <li>Click on the Deal button to start the game round, the Player and the Dealer each receive two hole cards.</li>
                <li>
                    <strong>Swap Card</strong>
                    <ul className="detail">
                        <li>
                            Swap Card is an optional feature and can be turned ON/ OFF. It allows player to choose either to swap his
                            two-hole cards with Dealer’s cards before cards are face-up or keep the cards without changing.
                        </li>
                    </ul>
                </li>
                <li>Note: The Swap feature can only be ON/OFF before the game round is started.</li>
                <li>
                    After the two hole cards are dealt and face up, the Player must decide whether to CALL or FOLD.
                    <ul className="detail">
                        <li>
                            <strong>FOLD: </strong> the Player will surrender his hand and lose the Ante bet. The game round is over.
                        </li>
                        <li>
                            <strong>CALL: </strong>the Player will continue playing with an additional Call bet, equal to twice the Ante
                            bet, and three community cards (Flop card) are dealt face-up in the middle of the table.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Turn {`&`} River bet</strong>: are additional bets decided by Player whether he wants to raise his bet.
                    <ul className="detail">
                        <li>
                            <strong>Turn bet: </strong>before a fourth community card is dealt face up (the Turn), Player can increase the
                            stake by placing bet on “Turn” option with the same bet amount placed on Ante.
                        </li>
                        <li>
                            <strong>River bet: </strong>the River is the fifth and final community card. Similar to the Turn bet, before the
                            River card is dealt, Player will have the option of placing an additional River bet.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Check: </strong>To skip placing bets on Turn or River, simply click on “Check” button.
                </li>
                <li>
                    The two personal cards are combined with 5 community cards to make the best five-card Poker hand. The Player will win if
                    the Player has a better hand than the Dealer
                </li>
                <li>The maximum total stake per round is {maxBet}. Note, placed bets cannot be canceled after cards are dealt.</li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text"> Ranking Level</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">
                            <span className="title-text">Card Values</span>
                            <ul className="desc">
                                <li>
                                    The card’s value is ranked from the highest to the lowest in the following order: Ace (A), King (K),
                                    Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3 and 2.
                                </li>
                                <li>
                                    The Ace can be used as both the highest and lowest card.
                                    <ul className="detail">
                                        <li>
                                            For example: In a straight, the A can be used as A, K, Q, J, 10 as the highest value or 5, 4, 3,
                                            2, A as the lowest value card.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    All the suits - heart (<span className={Styles["red"]}>♥</span>, spade
                                    <span className={Styles["black"]}>♠</span>, diamond <span className={Styles["red"]}>♦</span>, and club
                                    <span className={Styles["black"]}>♣</span>) have equal value.
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
                                                        <strong>Royal Flush </strong>
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
                                                        <strong> Straight Flush </strong>
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
                                                        <strong> Four of a Kind </strong>
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
                                                        <strong>Full House </strong>
                                                    </td>
                                                    <td>Three of a Kind and a Pair </td>
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
                                                        <strong>Flush </strong>
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
                                                        <strong>Three of a Kind </strong>
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
                                                        <strong>Two Pair </strong>
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
                                                        <strong>High Card</strong>
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
                            <div>=&gt; The Player wins.</div>
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
                            <div>=&gt; The Dealer wins.</div>
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
                            <div>=&gt; The Dealer wins.</div>
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
                            <div>=&gt; Result is a “Tie”.</div>
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
                        <li>With a Three of a Kind or lower {`=>`} the Call, Turn and River bets are won, and Ante is pushed.</li>
                        <li>With a Straight or higher {`=>`} All bets (Ante, Call, Turn, and River) will win.</li>
                    </ul>
                </li>
                <li>
                    Payout and Bet Limit{" "}
                    <div className="table-container text-center">
                        <table className="table table-medium">
                            <thead>
                                <tr>
                                    <td>Option</td>
                                    <td>Odds</td>
                                    <td>Bet Limit (Min-Max)</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ante (win with Three of a Kind or lower)</td>
                                    <td>Push</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetAnteBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>Ante (win with Straight or higher) </td>
                                    <td>1 : {odds?.AnteBet_flush}</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetAnteBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>Call</td>
                                    <td>1 : {odds?.call}</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetCallBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>Turn</td>
                                    <td>1 : {odds?.turn}</td>
                                    <td>1 - {maxBetFollowChoice?.maxBetTurnBetChoice}</td>
                                </tr>
                                <tr>
                                    <td>River</td>
                                    <td>1 : {odds?.river}</td>
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

export const renderMD5 = () => {
    return (
        <>
            <h2> MD5 (Message-Digest algorithm 5) </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">Md5 Technology</span>
                    <ul className="desc">
                        <li>MD5 allows Players to check the authenticity and transparency of game results through 3rd parties.</li>
                        <li>The game results will be randomly generated by the system before the cards are revealed.</li>
                        <li>
                            Players can manually check whether or not the results generated before the cards are revealed (
                            <strong>MD5</strong> string) and the publishing results (String <strong>Result</strong>) are matched.
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text"> Steps for Checking</span>
                    <ul className="desc">
                        <li>
                            <span>
                                <strong>Step 1</strong>: Copy the <strong>MD5</strong> key after pressing the Deal button.
                            </span>
                        </li>
                        <li>
                            <span>
                                <strong>Step 2</strong>: Copy <strong> the String Result</strong> after the fifth community card (River) is
                                dealt.
                            </span>
                        </li>
                        <li>
                            <strong>Step 3</strong>: Go to{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            and paste the String Result into the MD5 box.
                        </li>
                        <li>
                            <strong>Step 4</strong>: Press the <strong>“hash darling, hash!”</strong> button and compare the newly generated{" "}
                            <strong>checksum MD5</strong> string with the MD5 string in <strong>Step 1.</strong>
                        </li>
                        <li>
                            If two strings are matching, prove that the outcome of that game round is transparent and the game result is
                            unchanged from the random result generated by the system before the cards are revealed.
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of Poker game results.
                <ul className="desc">
                    <li>
                        <strong>Step 1:</strong>Copy the MD5 key after pressing the DEAL button.
                        <img className={`format-img auto-center ${Styles["format-mobile"]}`} src="/static/images/texas-hold/md5-en.png" />
                    </li>
                    <li>
                        <strong>Step 2:</strong> Copy the string Result after the fifth community card (River) is dealt.
                        <img
                            className={`format-img auto-center ${Styles["format-mobile"]}`}
                            src="/static/images/texas-hold/result-en.png"
                        />
                    </li>
                    <li>
                        <strong>Note</strong>
                        <ul className="detail">
                            <li>
                                From left to right, the cards are displayed in the order: Player’s cards (A, B), Dealer’s cards (C, D), and
                                the five community cards (L, M, N, O)
                            </li>
                            <li>
                                If the Player has swapped his cards with Dealer then the display order will be: Dealer’s cards (A, B),
                                Player’s cards (C, D), and the five community cards (L, M, N, O)
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Step 3:</strong> Go to{" "}
                        <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                            https://md5.services/
                        </a>{" "}
                        and paste the Key string into the MD5 box
                        <div className="wrapper-md5-img-hash">
                            <img className="format-img auto-center" src="/static/images/texas-hold/hash-darling.png" />
                        </div>
                    </li>
                    <li>
                        <strong>Step 4:</strong> Press the “hash, darling hash!” button and compare the newly generated checksum MD5 string
                        with the MD5 string in <strong>Step 1</strong>.
                        <div className="wrapper-md5-img">
                            <img className="format-img auto-center" src="/static/images/texas-hold/md5-checksum.png" />
                        </div>
                    </li>
                </ul>
            </div>
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
                        Texas Hold’em is one of the world’s most popular poker games. The game is played with a standard 52-card deck
                        (excluding Joker), and the cards are reshuffled after each round. The objective of this game is to obtain a higher
                        ranking Poker hand than the Dealer. Using your two hole cards combines with the five community cards to create the
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
                    {renderMD5()}
                </li>

                {renderTermsAndConditionsEN("", 42)}
            </ul>
        </>
    );
};
export default TexasHoldGuideEN;
