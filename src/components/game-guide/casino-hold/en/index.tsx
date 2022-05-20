import React, { useEffect } from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-number/en";
import ScrollToMD5 from "../../../shared/md5-number";
import Styles from "../casino-hold.module.scss";

const renderGameRule = (maxBet: string | number | undefined) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    Select the chip with the value that suits you best and place the chip on the Ante bet or make an optional AA bonus bet.
                </li>
                <li>Note, Ante bet is a mandatory option that the player must place bet before any cards are dealt.</li>
                <li>Click on the Deal button to start the game round, the Player and the Dealer each receive two hole cards.</li>
                <li>Three community cards (Flop cards) are dealt face-up in the middle of the table.</li>
                <li>
                    Swap Cards
                    <ul className="detail">
                        <li>
                            Swap Cards is an optional feature and can be turned ON/ OFF. It allows the player to choose either to swap his
                            two hole cards with Dealer’s cards before cards are face-up or keep the cards without changing.
                        </li>
                    </ul>
                </li>
                <li>Note: The Swap cards feature can only be ON/OFF before the game round is started.</li>
                <li>
                    After the first three community cards are dealt, Player must decide whether to CALL or FOLD.
                    <ul className="detail">
                        <li>
                            <strong>FOLD:</strong> the Player will surrender his hand and lose both the Ante bet and optional AA bet. The
                            game round is over.
                        </li>
                        <li>
                            <strong>CALL:</strong> the Player will continue playing with an additional Call bet, equal to twice the Ante
                            bet.
                        </li>
                    </ul>
                </li>
                <li>
                    After clicking on the CALL button, the last two community cards are dealt and both Player and Dealer will reveal the
                    value of their cards.
                </li>
                <li>
                    The two personal cards are combined with 5 community cards to make the best five-card Poker hand. The Player will win
                    the Ante bet if the Player has a better hand than the Dealer.
                </li>
                <li>The maximum total stake per round is {maxBet}. Note, placed bets cannot be canceled after cards are dealt. </li>
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
                                    The Ace can be used as both the highest and lowest card, so can be used in a straight of A, K, Q, J, 10
                                    as the highest value or 5, 4, 3, 2, A as the lowest value card.
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
                                    List of poker hand ranking levels from highest to lowest
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
                                    individual cards will be used to break the Tie. If the highest card in Player’s hand is equal, the
                                    second-highest card should be compared, and so on.{" "}
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
                            <div>=&gt; Player wins</div>
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
                            <div>=&gt; Dealer wins</div>
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
                            <div>=&gt; Result is &quot;Tie&quot;</div>
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Betting Option</span>
                    <ul className="style-number-dot-number ">
                        <li className="number-dot-number">
                            <span className="title-text">Ante Bet</span>
                            <ul className="desc">
                                <li>
                                    &quot;Ante&quot; Bet is a mandatory option that the player must place bet before any cards are dealt.
                                </li>
                                <li>
                                    The Player will win Ante Bet if he can make the best possible five-card poker hand using a combination
                                    of two hole cards and five community cards to beat the Dealer&apos;s hand.
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">AA Bet</span>
                            <ul className="desc">
                                <li>
                                    A side bet known as the &quot;AA&quot; bet, is based on the poker value of the player&apos;s two cards
                                    and the first three community cards. The Player will win &quot;AA&quot; bet if he can achieve a pair of
                                    aces or better, no matter what Dealer has.
                                </li>
                                <li>
                                    &quot;AA&quot; Bet is not related to the Ante bet results. The Player might lose the game, but the
                                    &quot;AA&quot; Bet might win or vice versa.
                                </li>
                                <li>
                                    Note, if the Player selects &quot;FOLD&quot;, he will lose both the Ante bet and the optional
                                    &quot;AA&quot; bet.
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">Call Bet</span>
                            <ul className="desc">
                                <li>
                                    Call bet is an additional bet decided by the Player whether he wants to continue the game round. Call
                                    bet amount is twice the original Ante bet.{" "}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Hand Qualification</span>
                    <ul className="desc">
                        <li>
                            The Dealer must have <strong>at least a pair of fours</strong> to make a qualifying hand. If the Dealer fails to
                            qualify, the Ante bet is paid out according to the payout table while the Call bet will be pushed.
                        </li>
                    </ul>
                    <div className="table-container text-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>Dealer qualifies</td>
                                    <td>Dealer does not qualify</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Player beats Dealer</td>
                                    <td>Player wins both the Ante and Call bets.</td>
                                    <td rowSpan={3}>Player wins the Ante bet, Call bet is pushed.</td>
                                </tr>
                                <tr>
                                    <td>Player does not beat Dealer.</td>
                                    <td>Player loses both the Ante and Call bets.</td>
                                </tr>
                                <tr>
                                    <td>Player and Dealer are equal hand.</td>
                                    <td>Both the Ante and Call bets are pushed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined) => {
    return (
        <>
            <h2>Payout</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio.</li>
                <li>
                    <strong>Note</strong>, the Payout includes the initial stake.
                </li>
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Ante bet</span>
                    <div className="table-container text-center">
                        <table className="table table-small">
                            <thead>
                                <tr>
                                    <td>Hand Result</td>
                                    <td>Payouts</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Royal Flush</td>
                                    <td>1:{odds?.AnteBet_royalFlush}</td>
                                </tr>
                                <tr>
                                    <td>Straight Flush</td>
                                    <td>1:{odds?.AnteBet_straightFlush}</td>
                                </tr>
                                <tr>
                                    <td>Four of a Kind</td>
                                    <td>1:{odds?.AnteBet_fourKind}</td>
                                </tr>
                                <tr>
                                    <td>Full House</td>
                                    <td>1:{odds?.AnteBet_fullHouse}</td>
                                </tr>
                                <tr>
                                    <td>Flush</td>
                                    <td>1:{odds?.AnteBet_flush}</td>
                                </tr>
                                <tr>
                                    <td>Straight</td>
                                    <td rowSpan={5}>1:{odds?.AnteBet_straight}</td>
                                </tr>
                                <tr>
                                    <td>Three of a Kind</td>
                                </tr>
                                <tr>
                                    <td>Two Pair</td>
                                </tr>
                                <tr>
                                    <td>Pair</td>
                                </tr>
                                <tr>
                                    <td>High card</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Call bet</span>
                    <ul className="desc">
                        <li>Player will win the Call bet only if the Dealer qualifies and you beat their hand. </li>
                        <li>Payout 1:{odds?.CallBet_callBet}</li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">AA bet</span>
                    <div className="table-container">
                        <div className="table-container text-center">
                            <table className="table table-small">
                                <thead>
                                    <tr>
                                        <td>Hand Result</td>
                                        <td>Payouts</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Royal Flush</td>
                                        <td>1:{odds?.AABet_royalFlush}</td>
                                    </tr>
                                    <tr>
                                        <td>Straight Flush</td>
                                        <td>1:{odds?.AABet_straightFlush}</td>
                                    </tr>
                                    <tr>
                                        <td>Four of a Kind</td>
                                        <td>1:{odds?.AABet_fourKind}</td>
                                    </tr>
                                    <tr>
                                        <td>Full House</td>
                                        <td>1:{odds?.AABet_fullHouse}</td>
                                    </tr>
                                    <tr>
                                        <td>Flush</td>
                                        <td>1:{odds?.AABet_flush}</td>
                                    </tr>
                                    <tr>
                                        <td>Straight</td>
                                        <td rowSpan={5}>1:{odds?.AABet_straight}</td>
                                    </tr>
                                    <tr>
                                        <td>Three of a Kind</td>
                                    </tr>
                                    <tr>
                                        <td>Two Pair</td>
                                    </tr>
                                    <tr>
                                        <td>Pair of Aces</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

const CasinoHoldGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
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
                        Casino Hold’em is a variant of Texas Hold’em Poker. The game is played with a standard 52-card deck (excluding
                        Joker), and the cards are shuffled after each round. The Player will play against the Dealer and the object of this
                        game is to achieve the best possible five-card poker hand using a combination of two hole cards and five community
                        cards to beat the Dealer’s hand.
                    </p>
                    <p className="content">
                        In addition, a new feature -{" "}
                        <a href="#md5" className={Styles["link"]}>
                            MD5 (Message-Digest algorithm 5)
                        </a>{" "}
                        that allows the Player to check the fairness and authenticity of every game result.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound)}</li>
                <li className="guide-item">{renderPayouts(odds)}</li>
                <li className="guide-item">
                    <h2>Bet Limit</h2>
                    <table className="table table-small text-center">
                        <thead>
                            <tr>
                                <td>Options</td>
                                <td>Bet Limit(Min-Max)</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ante</td>
                                <td>
                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                                </td>
                            </tr>
                            <tr>
                                <td>Call</td>
                                <td>
                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetCallBetChoice}
                                </td>
                            </tr>
                            <tr>
                                <td>AA</td>
                                <td>
                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAaBetChoice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li id="md5" className="guide-item">
                    {renderMD5EN(39)}
                </li>

                {renderTermsAndConditionsEN("", 39)}
            </ul>
        </>
    );
};
export default CasinoHoldGuideEN;
