import React, { useEffect } from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-number";
import Styles from "../texas-hold.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { TexasHoldemLanguage } from "../languages/types";

type TexasHoldemGameGuideProps = GameGuideProps<GameConfigProps, MaxBetChoicesProps> & { language: TexasHoldemLanguage };

const renderGameRule = (maxBet: string | number | undefined, language: TexasHoldemLanguage) => {
    return (
        <>
            <h2>{language.gameRules["Game Rules"]}</h2>
            <ul className="desc">
                <li>{language.gameRules["Select the desired chip with"]}</li>
                <li>{language.gameRules["Note, Ante bet is"]}</li>
                <li>{language.gameRules["Click on the Deal button to"]}</li>
                <li>
                    <strong>{language.gameRules["Swap Cards"]}</strong>
                    <ul className="detail">
                        <li>{language.gameRules["Swap Cards is"]}</li>
                    </ul>
                </li>
                <li>{language.gameRules["Note: The Swap cards feature can"]}</li>
                <li>
                    {language.gameRules["After the two hole cards are"]}
                    <ul className="detail">
                        <li>
                            <strong>{language.gameRules.FOLD}: </strong> {language.gameRules["the Player will surrender"]}
                        </li>
                        <li>
                            <strong>{language.gameRules.CALL}: </strong>
                            {language.gameRules["the Player will continue playing"]}
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>{language.gameRules["Turn & River bet"]}</strong>: {language.gameRules["are additional bets"]}
                    <ul className="detail">
                        <li>
                            <strong>{language.gameRules["Turn bet"]}: </strong>
                            {language.gameRules["before a fourth community card is dealt"]}
                        </li>
                        <li>
                            <strong>{language.gameRules["River bet"]}: </strong>
                            {language.gameRules["the River is the"]}
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>{language.gameRules.Check}: </strong>
                    {language.gameRules["To skip placing bets on Turn or River"]}
                </li>
                <li>{language.gameRules["The two personal cards are combined with 5 community cards"]}</li>
                <li>
                    {language.gameRules["The maximum total stake per round is"]}
                    {maxBet}. {language.gameRules["Note, placed bets cannot be canceled after cards are dealt"]}
                </li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text"> {language.gameRules["Ranking Level"]}</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">
                            <span className="title-text">{language.gameRules["Card Values"]}</span>
                            <ul className="desc">
                                <li>{language.gameRules["The card’s value is "]}</li>
                                <li>
                                    {language.gameRules["The Ace can be used as"]}
                                    <ul className="detail">
                                        <li>{language.gameRules["For example: In a straight, "]}</li>
                                    </ul>
                                </li>
                                <li>
                                    {language.gameRules["All the suits"]} - {language.gameRules.heart} (
                                    <span className={Styles["red"]}>♥</span>), {language.gameRules.spade} (
                                    <span className={Styles["black"]}>♠</span>), {language.gameRules.diamond} (
                                    <span className={Styles["red"]}>♦</span>), {language.gameRules["and club"]}(
                                    <span className={Styles["black"]}>♣</span>) {language.gameRules["have equal value"]}.
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">{language.gameRules["Hand Ranking"]}</span>
                            <ul className="desc">
                                <li>
                                    {language.gameRules["List of poker hand ranking levels from highest to lowest."]}
                                    <div className="table-container text-center">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <td>{language.gameRules.Hand}</td>
                                                    <td>{language.gameRules.Description}</td>
                                                    <td>{language.gameRules.Example}</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>{language.gameRules["Royal Flush"]} </strong>
                                                    </td>
                                                    <td>{language.gameRules["Ace, King, Queen, Jack, and 10 in the same suit"]}</td>
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
                                                        <strong> {language.gameRules["Straight Flush"]} </strong>
                                                    </td>
                                                    <td>{language.gameRules["Five cards in the same suit, all in a rank sequence"]}</td>
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
                                                        <strong> {language.gameRules["Four of a Kind"]} </strong>
                                                    </td>
                                                    <td>{language.gameRules["Four cards of the same rank"]}</td>
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
                                                        <strong>{language.gameRules["Full House"]} </strong>
                                                    </td>
                                                    <td>{language.gameRules["Three of a Kind and a Pair"]} </td>
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
                                                        <strong>{language.gameRules.Flush} </strong>
                                                    </td>
                                                    <td>{language.gameRules["Five cards in the same suit"]}</td>
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
                                                        <strong>{language.gameRules.Straight}</strong>
                                                    </td>
                                                    <td>{language.gameRules["Five cards a rank sequence"]}</td>
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
                                                        <strong>{language.gameRules["Three of a Kind"]} </strong>
                                                    </td>
                                                    <td>{language.gameRules["Three cards of the same rank"]}</td>
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
                                                        <strong>{language.gameRules["Two Pair"]} </strong>
                                                    </td>
                                                    <td>{language.gameRules["Two pairs of different ranks"]}</td>
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
                                                        <strong>{language.gameRules.Pair}</strong>
                                                    </td>
                                                    <td>{language.gameRules["Two cards of the same rank"]}</td>
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
                                                        <strong>{language.gameRules["High Card"]}</strong>
                                                    </td>
                                                    <td>{language.gameRules["Highest card when no higher hand is available"]}</td>
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
                                <li>{language.gameRules["The Poker hand consists of five cards"]}</li>
                            </ul>
                            <p>
                                <strong>{language.gameRules.Example}</strong>
                            </p>
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>{language.gameRules.Cards}</td>
                                            <td>{language.gameRules.Combination}</td>
                                            <td>{language.gameRules.Result}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{language.gameRules.Player}</td>
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
                                            <td>{language.gameRules["Two Pair"]}</td>
                                        </tr>
                                        <tr>
                                            <td>{language.gameRules.Dealer}</td>
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
                                            <td>{language.gameRules.Pair}</td>
                                        </tr>
                                        <tr>
                                            <td>{language.gameRules["Community Cards"]}</td>
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
                            <div>=&gt; {language.gameRules["The Player wins"]}</div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>{language.gameRules.Cards}</td>
                                            <td>{language.gameRules.Combination}</td>
                                            <td>{language.gameRules.Result}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{language.gameRules.Player}</td>
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
                                            <td>{language.gameRules.Dealer}</td>
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
                                            <td>{language.gameRules.Pair}</td>
                                        </tr>
                                        <tr>
                                            <td>{language.gameRules["Community Cards"]}</td>
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
                            <div>=&gt; {language.gameRules["The Dealer wins"]}</div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>{language.gameRules.Cards}</td>
                                            <td>{language.gameRules.Combination}</td>
                                            <td>{language.gameRules.Result}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{language.gameRules.Player}</td>
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
                                            <td>{language.gameRules["Two Pair"]}</td>
                                        </tr>
                                        <tr>
                                            <td>{language.gameRules.Dealer}</td>
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
                                            <td>{language.gameRules["Two Pair"]}</td>
                                        </tr>
                                        <tr>
                                            <td>{language.gameRules["Community Cards"]}</td>
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
                            <div>=&gt; {language.gameRules["The Dealer wins"]}</div>
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>{language.gameRules.Cards}</td>
                                            <td>{language.gameRules.Combination}</td>
                                            <td>{language.gameRules.Result}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{language.gameRules.Player}</td>
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
                                            <td>{language.gameRules["Two Pair"]}</td>
                                        </tr>
                                        <tr>
                                            <td>{language.gameRules.Dealer}</td>
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
                                            <td>{language.gameRules["Two Pair"]}</td>
                                        </tr>
                                        <tr>
                                            <td>{language.gameRules["Community Cards"]}</td>
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
                            <div>=&gt; {language.gameRules["Result is a “Tie”"]}.</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined,
    language: TexasHoldemLanguage
) => {
    return (
        <>
            <h2>{language.payout.Payout}</h2>
            <ul className="desc">
                <li>{language.payout["All winning amounts are"]}</li>
                <li>{language.payout["The winning amount is calculated"]}</li>
                <li>
                    {language.payout["If Player’s hand beats Dealer’s hand"]}:
                    <ul className="detail">
                        <li>
                            {language.payout["With a Three of a Kind or lower"]} {`=>`}{" "}
                            {language.payout["the Call, Turn and River bets are won, and Ante is pushed."]}
                        </li>
                        <li>
                            {language.payout["With a Straight or higher"]} {`=>`}{" "}
                            {language.payout["All bets (Ante, Call, Turn, and River) will win."]}
                        </li>
                    </ul>
                </li>
                <li>
                    {language.payout["Payout and Bet Limit"]}{" "}
                    <div className="table-container text-center">
                        <table className="table table-medium">
                            <thead>
                                <tr>
                                    <td>{language.payout.Option}</td>
                                    <td>{language.payout.Odds}</td>
                                    <td>{language.payout["Bet Limit (Min-Max)"]}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{language.payout["Ante (with Three of a Kind or lower)"]}</td>
                                    <td>{language.payout.Push}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{language.payout["Ante (with Straight or higher)"]} </td>
                                    <td>{formatOdds(odds?.AnteBet_flush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{language.payout.Call}</td>
                                    <td>{formatOdds(odds?.call, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetCallBetChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{language.payout.Turn}</td>
                                    <td>{formatOdds(odds?.turn, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetTurnBetChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{language.payout.River}</td>
                                    <td>{formatOdds(odds?.river, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetRiverBetChoice}
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

export const renderMD5 = (language: TexasHoldemLanguage) => {
    return (
        <>
            <h2> {language.md5["MD5 (Message-Digest algorithm 5)"]} </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">{language.md5["MD5 Technology"]}</span>
                    <ul className="desc">
                        <li>
                            {
                                language.md5[
                                    "MD5 allows Players to check the authenticity and transparency of game results through 3rd parties."
                                ]
                            }
                        </li>
                        <li>{language.md5["The game results will be randomly generated by the system before the cards are revealed."]}</li>
                        <li>
                            {language.md5["Players can manually check whether or not the results generated before the cards are revealed"]}(
                            <strong>{language.md5.MD5}</strong> {language.md5.string}) {language.md5["and the publishing results"]} (
                            {language.md5.string} <strong>{language.md5.Result}</strong>) {language.md5["are matched"]}.
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">{language.md5["MD5 Validation"]}</span>
                    <ul className="desc">
                        <li>
                            <span>
                                <strong>{language.md5["Step 1"]}</strong>: {language.md5["Copy the"]} <strong>{language.md5.MD5}</strong>{" "}
                                {language.md5["key after pressing the Deal button"]}.
                            </span>
                        </li>
                        <li>
                            <span>
                                <strong>{language.md5["Step 2"]}</strong>: {language.md5.Copy}{" "}
                                <strong> {language.md5["the Result"]}</strong>{" "}
                                {language.md5["after the fifth community card (River) is dealt."]}
                            </span>
                        </li>
                        <li>
                            <strong>{language.md5["Step 3"]}</strong>: {language.md5["Go to"]}{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            {language.md5["and paste the Key string into the MD5 box"]}.
                        </li>
                        <li>
                            <strong>{language.md5["Step 4"]}</strong>: {language.md5["Press the"]}{" "}
                            <strong>“{language.md5["hash darling, hash!"]}”</strong>{" "}
                            {language.md5["button and compare the newly generated"]} <strong>{language.md5["checksum MD5"]}</strong>{" "}
                            {language.md5["string with the MD5 string in"]} <strong>{language.md5["Step 1"]}.</strong>
                        </li>
                        <li>{language.md5["If two strings are matching, prove that"]}</li>
                    </ul>
                </li>
            </ul>

            <div className="content">
                <strong> {language.gameRules.Example}:</strong>{" "}
                {language.md5["Check the authenticity and transparency of Poker game results."]}
                <ul className="desc">
                    <li>
                        <strong>{language.md5["Step 1"]}:</strong>
                        {language.md5["Copy the MD5 key after pressing the DEAL button."]}
                        <img className="format-img auto-center format-mobile" src="/static/images/texas-hold/md5-en.png#v1" alt="md5-en" />
                    </li>
                    <li>
                        <strong>{language.md5["Step 2"]}:</strong>{" "}
                        {language.md5["Copy the Result after the fifth community card (River) is dealt."]}
                        <img
                            className="format-img auto-center format-mobile"
                            src="/static/images/texas-hold/result-en.png#v1"
                            alt="md5-result"
                        />
                    </li>
                    <li>
                        <strong>{language.md5.Note}</strong>
                        <ul className="detail">
                            <li>
                                {language.md5["From left to right, the cards are displayed in the order: Player’s cards"]} ({" "}
                                <span className={Styles["black"]}>J♣</span>, <span className={Styles["black"]}>3♠</span>),{" "}
                                {language.md5["Dealer’s cards"]} (<span className={Styles["red"]}>2♥</span>,{" "}
                                <span className={Styles["red"]}>Q♥</span>), {language.md5["and the five"]} {language.md5["community cards"]}{" "}
                                (<span className={Styles["red"]}>4♦</span>, <span className={Styles["black"]}>6♠</span>,{" "}
                                <span className={Styles["red"]}>10♥</span>, <span className={Styles["red"]}>10♦</span>,{" "}
                                <span className={Styles["black"]}>10♣</span>)
                            </li>
                            <li>
                                {
                                    language.md5[
                                        "If the Player has swapped his cards with Dealer then the display order will be: Dealer’s cards"
                                    ]
                                }
                                ( <span className={Styles["black"]}>J♣</span>, <span className={Styles["black"]}>3♠</span>),{" "}
                                {language.md5["Player’s cards"]}(<span className={Styles["red"]}>2♥</span>,{" "}
                                <span className={Styles["red"]}>Q♥</span>), {language.md5["and the five"]} {language.md5["community cards"]}
                                .
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>{language.md5["Step 3"]}:</strong> Go to{" "}
                        <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                            https://md5.services/
                        </a>{" "}
                        {language.md5["and paste the Key string into the MD5 box"]}
                        <div className="wrapper-md5-img-hash">
                            <img
                                className="format-img auto-center"
                                src="/static/images/texas-hold/hash-darling.png#v1"
                                alt="hash-darling"
                            />
                        </div>
                    </li>
                    <li>
                        <strong>{language.md5["Step 4"]}:</strong> {language.md5["Press the “hash darling, hash!” button and compare"]}{" "}
                        <strong>{language.md5["Step 1"]}</strong>.
                        <div className="wrapper-md5-img">
                            <img
                                className="format-img auto-center"
                                src="/static/images/texas-hold/md5-checksum.png#v1"
                                alt="md5-checksum"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

const TexasHoldGuideTemplate: React.FC<TexasHoldemGameGuideProps> = (props) => {
    const { gameConfigs, maxBetFollowChoice, isScrollMD5, fractionalOddsFormat, language } = props;
    const { odds } = gameConfigs;

    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{language.introduction.Introduction}</h2>
                    <p className="content">{language.introduction["Texas Holdem is"]}</p>
                    <p className="content">
                        {language.introduction["In addition, a new feature"]} -{" "}
                        <a href="#md5" className={Styles["link"]}>
                            {language.introduction["MD5 (Message-Digest algorithm 5)"]}
                        </a>{" "}
                        {language.introduction["that allows the Player to"]}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound, language)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat, language)}</li>
                <li id="md5" className="guide-item">
                    {renderMD5(language)}
                </li>

                {renderTermsAndConditionsEN("", 42)}
            </ul>
        </>
    );
};
export default TexasHoldGuideTemplate;
