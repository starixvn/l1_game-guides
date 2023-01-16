import React from "react";
import { Markup } from "interweave";

import { renderTermsAndConditionsEN } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-number";
import { renderMD5EN } from "../../../shared/md5-number/en";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import BetLimit from "./bet-limit";
import Payouts from "./payouts";

import Styles from "../casino-hold.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { ICasinoHoldTranslationResource } from "../languages/types";
import { getCasinoHoldTranslationResource } from "../languages";
import { StringFormat } from "../../../../helpers/string-helper";

export interface BaseState<TranslationResource> {
    translationResource: TranslationResource;
}

class CasinoHoldGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    S extends BaseState<ICasinoHoldTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: getCasinoHoldTranslationResource(props.locale),
        } as S;
    }
    componentDidMount() {
        this.props.isScrollMD5 && ScrollToMD5();
    }

    renderIntroduce() {
        const { main } = this.state.translationResource;

        return (
            <>
                <h2>{main.introduction}</h2>
                <p className="content">{main.description}</p>
                <p className="content">
                    {main.md5.sentence1}
                    <a href="#md5" className={Styles["link"]}>
                        {main.md5.sentence2}
                    </a>{" "}
                    {main.md5.sentence3}
                </p>
            </>
        );
    }

    renderGameRule() {
        const { gameRule, common } = this.state.translationResource;
        const {
            title,
            description,
            swapCard,
            note,
            foldCall,
            afterClick,
            cardValues,
            handRanking,
            anteBet,
            aaBet,
            callBet,
            handQualification,
        } = gameRule;
        const { maxBetFollowChoice } = this.props;
        return (
            <>
                <h2>{title}</h2>
                <ul className="desc">
                    <li>{description.line1}</li>
                    <li>{description.line2}</li>
                    <li>{description.line3}</li>
                    <li>{description.line4}</li>
                    <li>
                        {swapCard.title}
                        <ul className="detail">
                            <li>{swapCard.description}</li>
                        </ul>
                    </li>
                    <li>{note}</li>
                    <li>
                        {foldCall.description}
                        <ul className="detail">
                            <li>
                                <Markup content={foldCall.call} />
                            </li>
                            <li>
                                <Markup content={foldCall.call} />
                            </li>
                        </ul>
                    </li>
                    <li>{afterClick}</li>
                    <li>{gameRule.theTwo}</li>
                    <li>{StringFormat(gameRule.maximumTotal)}</li>
                </ul>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{gameRule.rankingLevel}</span>
                        <ul className="style-number-dot-number">
                            <li className="number-dot-number">
                                <span className="title-text">{cardValues.title}</span>
                                <ul className="desc">
                                    <li>{cardValues.description.line1}</li>
                                    <li>{cardValues.description.line2}</li>
                                    <li>{cardValues.description.line3}</li>
                                </ul>
                            </li>
                            <li className="number-dot-number">
                                <span className="title-text">{handRanking.title}</span>
                                <ul className="desc">
                                    <li>
                                        {handRanking.line1}
                                        <div className="table-container text-center">
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <td>{handRanking.table.title.hand}</td>
                                                        <td>{handRanking.table.title.description}</td>
                                                        <td>{handRanking.table.title.example}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong>{common.hand.royalFlush}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row1}</td>
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
                                                            <strong>{common.hand.straightFlush}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row2}</td>
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
                                                            <strong>{common.hand.fourOfAKind}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row3}</td>
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
                                                            <strong>{common.hand.fullHouse}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row4}</td>
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
                                                            <strong>{common.hand.flush}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row5}</td>
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
                                                            <strong>{common.hand.straight}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row6}</td>
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
                                                            <strong>{common.hand.threeOfAKind}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row7}</td>
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
                                                            <strong>{common.hand.twoPair}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row8}</td>
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
                                                            <strong>{common.hand.pair}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row9}</td>
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
                                                            <strong>{common.hand.highCard}</strong>
                                                        </td>
                                                        <td>{handRanking.table.description.row10}</td>
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
                                    <li>{handRanking.line2}</li>
                                </ul>
                                <p>
                                    <strong>{common.example}</strong>
                                </p>
                                <div className="table-container text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td>{common.cards}</td>
                                                <td>{common.combination}</td>
                                                <td>{common.result}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{common.player}</td>
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
                                                <td>{common.hand.twoPair}</td>
                                            </tr>
                                            <tr>
                                                <td>{common.dealer}</td>
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
                                                <td>{common.hand.pair}</td>
                                            </tr>
                                            <tr>
                                                <td>{common.communityCards}</td>
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
                                <div>=&gt; {handRanking.example.player}</div>
                                <br />
                                <div className="table-container text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td>{common.cards}</td>
                                                <td>{common.combination}</td>
                                                <td>{common.result}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{common.player}</td>
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
                                                <td>{common.hand.twoPair}</td>
                                            </tr>
                                            <tr>
                                                <td>{common.dealer}</td>
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
                                                <td>{common.hand.twoPair}</td>
                                            </tr>
                                            <tr>
                                                <td>{common.communityCards}</td>
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
                                <div>=&gt; {handRanking.example.dealer}</div>
                                <br />
                                <div className="table-container text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td>{common.cards}</td>
                                                <td>{common.combination}</td>
                                                <td>{common.result}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{common.player}</td>
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
                                                <td>{common.hand.twoPair}</td>
                                            </tr>
                                            <tr>
                                                <td>{common.dealer}</td>
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
                                                <td>{common.hand.twoPair}</td>
                                            </tr>
                                            <tr>
                                                <td>{common.communityCards}</td>
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
                                <div>=&gt; {handRanking.example.result}</div>
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
                                        &quot;Ante&quot; Bet is a mandatory option that the player must place bet before any cards are
                                        dealt.
                                    </li>
                                    <li>
                                        The Player will win Ante Bet if he can make the best possible five-card poker hand using a
                                        combination of two hole cards and five community cards to beat the Dealer&apos;s hand.
                                    </li>
                                </ul>
                            </li>
                            <li className="number-dot-number">
                                <span className="title-text">AA Bet</span>
                                <ul className="desc">
                                    <li>
                                        A side bet known as the &quot;AA&quot; bet, is based on the poker value of the player&apos;s two
                                        cards and the first three community cards. The Player will win &quot;AA&quot; bet if he can achieve
                                        a pair of aces or better, no matter what Dealer has.
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
                                        Call bet is an additional bet decided by the Player whether he wants to continue the game round.
                                        Call bet amount is twice the original Ante bet.{" "}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">Hand Qualification</span>
                        <ul className="desc">
                            <li>
                                The Dealer must have <strong>at least a pair of fours</strong> to make a qualifying hand. If the Dealer
                                fails to qualify, the Ante bet is paid out according to the payout table while the Call bet will be pushed.
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
    }

    renderPayout(odds: any, fractionalOddsFormat: any) {
        return (
            <>
                <h2>Payout</h2>
                <ul className="desc">
                    <li>The winning amount is calculated according to the betting odds.</li>
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
                                        <td>Odds</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Royal Flush</td>
                                        <td>{formatOdds(odds?.AnteBet_royalFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Straight Flush</td>
                                        <td>{formatOdds(odds?.AnteBet_straightFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Four of a Kind</td>
                                        <td>{formatOdds(odds?.AnteBet_fourKind, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Full House</td>
                                        <td>{formatOdds(odds?.AnteBet_fullHouse, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Flush</td>
                                        <td>{formatOdds(odds?.AnteBet_flush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Straight</td>
                                        <td rowSpan={5}>{formatOdds(odds?.AnteBet_straight, fractionalOddsFormat)}</td>
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
                            <li>Payout {formatOdds(odds?.CallBet_callBet, fractionalOddsFormat)}</li>
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
                                            <td>Odds</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Royal Flush</td>
                                            <td>{formatOdds(odds?.AABet_royalFlush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Straight Flush</td>
                                            <td>{formatOdds(odds?.AABet_straightFlush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Four of a Kind</td>
                                            <td>{formatOdds(odds?.AABet_fourKind, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Full House</td>
                                            <td>{formatOdds(odds?.AABet_fullHouse, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Flush</td>
                                            <td>{formatOdds(odds?.AABet_flush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Straight</td>
                                            <td rowSpan={5}>{formatOdds(odds?.AABet_straight, fractionalOddsFormat)}</td>
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
    }

    renderBetLimit(maxBetFollowChoice: any) {
        return (
            <>
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
            </>
        );
    }
    render() {
        const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat, locale } = this.props;
        const { odds } = gameConfigs;

        return (
            <>
                <ul className="game-guide">
                    <li className="guide-item">{this.renderIntroduce()}</li>
                    <li className="guide-item">{this.renderGameRule()}</li>
                    <li className="guide-item">
                        <Payouts odds={odds} fractionalOddsFormat={fractionalOddsFormat} />
                    </li>
                    <li className="guide-item">
                        <BetLimit maxBetFollowChoice={maxBetFollowChoice} />
                    </li>
                    <li id="md5" className="guide-item">
                        {renderMD5EN(39)}
                    </li>

                    {renderTermsAndConditionsEN("", 39)}
                </ul>
            </>
        );
    }
}
export default CasinoHoldGuideTemplate;
