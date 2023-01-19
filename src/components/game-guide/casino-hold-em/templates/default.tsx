import React from "react";
import { Markup } from "interweave";

import { renderTermsAndConditions } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-number";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

import Styles from "../casino-hold-em.module.scss";
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
        const { introduction } = this.state.translationResource;

        return (
            <>
                <h2>{introduction.title}</h2>
                <p className="content">{introduction.description}</p>
                <p className="content">
                    {introduction.md5.sentence1}
                    <a href="#md5" className={Styles["link"]}>
                        {introduction.md5.sentence2}
                    </a>{" "}
                    {introduction.md5.sentence3}
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
                                <Markup content={foldCall.fold} />
                            </li>
                            <li>
                                <Markup content={foldCall.call} />
                            </li>
                        </ul>
                    </li>
                    <li>{afterClick}</li>
                    <li>{gameRule.theTwo}</li>
                    <li>
                        <Markup content={StringFormat(gameRule.maximumTotal, (maxBetFollowChoice?.maxBetRound ?? 0).toString())} />
                    </li>
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
                                    <li>
                                        <Markup
                                            content={StringFormat(
                                                cardValues.description.line3,
                                                `<span class="casino-black">♠</span>`,
                                                `<span class="casino-black">♣</span>`,
                                                `<span class="red">♦</span>`,
                                                `<span class="red">♥</span>`
                                            )}
                                        />
                                    </li>
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
                                                        <td>{handRanking.table.description.royalFlush}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/sanhrong.png"
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
                                                        <td>{handRanking.table.description.straightFlush}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/sanhthung.png"
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
                                                        <td>{handRanking.table.description.fourOfAKind}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/tuquyfull.png"
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
                                                        <td>{handRanking.table.description.fullHouse}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/culu.png"
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
                                                        <td>{handRanking.table.description.flush}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/thung.png"
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
                                                        <td>{handRanking.table.description.straight}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/sanh.png"
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
                                                        <td>{handRanking.table.description.threeOfAKind}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/sam.png"
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
                                                        <td>{handRanking.table.description.twoPair}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/2doi.png"
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
                                                        <td>{handRanking.table.description.pair}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/doi.png"
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
                                                        <td>{handRanking.table.description.highCard}</td>
                                                        <td>
                                                            <span className={Styles["wrapper-card"]}>
                                                                <img
                                                                    src="/static/images/casino-hold-em/mauthau.png"
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
                        <span className="font-weight-medium title-text">{gameRule.bettingOption}</span>
                        <ul className="style-number-dot-number ">
                            <li className="number-dot-number">
                                <span className="title-text">{anteBet.title}</span>
                                <ul className="desc">
                                    <li>{anteBet.description.line1}</li>
                                    <li>{anteBet.description.line2}</li>
                                </ul>
                            </li>
                            <li className="number-dot-number">
                                <span className="title-text">{aaBet.title}</span>
                                <ul className="desc">
                                    <li>{aaBet.description.line1}</li>
                                    <li>{aaBet.description.line2}</li>
                                    <li>{aaBet.description.line3}</li>
                                </ul>
                            </li>
                            <li className="number-dot-number">
                                <span className="title-text">{callBet.title}</span>
                                <ul className="desc">
                                    <li>{callBet.description.line1}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{handQualification.title}</span>
                        <ul className="desc">
                            <li>{handQualification.description}</li>
                        </ul>
                        <div className="table-container text-center">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>{handQualification.table.title.dealer}</td>
                                        <td>{handQualification.table.title.DealerDoes}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{handQualification.table.col1.playerBeat}</td>
                                        <td>{handQualification.table.col2.playerWins}</td>
                                        <td rowSpan={3}>{handQualification.table.col3.playerWins}</td>
                                    </tr>
                                    <tr>
                                        <td>{handQualification.table.col1.player}</td>
                                        <td>{handQualification.table.col2.playerLoses}</td>
                                    </tr>
                                    <tr>
                                        <td>{handQualification.table.col1.playerAndDealer}</td>
                                        <td>{handQualification.table.col2.bothThe}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </>
        );
    }

    renderPayout() {
        const { payOuts, common } = this.state.translationResource;
        const { gameConfigs, fractionalOddsFormat } = this.props;
        const { odds } = gameConfigs;
        return (
            <>
                <h2>{payOuts.title}</h2>
                <ul className="desc">
                    <li>{payOuts.description.line1}</li>
                    <li>{payOuts.description.line2}</li>
                    <li>{payOuts.description.line3}</li>
                </ul>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{payOuts.anteBet}</span>
                        <div className="table-container text-center">
                            <table className="table table-small">
                                <thead>
                                    <tr>
                                        <td>{common.handResult}</td>
                                        <td>{common.odds}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{common.hand.royalFlush}</td>
                                        <td>{formatOdds(odds?.AnteBet_royalFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.straightFlush}</td>
                                        <td>{formatOdds(odds?.AnteBet_straightFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.fourOfAKind}</td>
                                        <td>{formatOdds(odds?.AnteBet_fourKind, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.fullHouse}</td>
                                        <td>{formatOdds(odds?.AnteBet_fullHouse, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.flush}</td>
                                        <td>{formatOdds(odds?.AnteBet_flush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.straight}</td>
                                        <td rowSpan={5}>{formatOdds(odds?.AnteBet_straight, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.threeOfAKind}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.twoPair}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.pair}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.hand.highCard}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{payOuts.callBet.title}</span>
                        <ul className="desc">
                            <li>{payOuts.callBet.description.line1}</li>
                            <li>
                                {payOuts.callBet.description.line2} {formatOdds(odds?.CallBet_callBet, fractionalOddsFormat)}
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{payOuts.aaBet}</span>
                        <div className="table-container">
                            <div className="table-container text-center">
                                <table className="table table-small">
                                    <thead>
                                        <tr>
                                            <td>{common.handResult}</td>
                                            <td>{common.odds}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{common.hand.royalFlush}</td>
                                            <td>{formatOdds(odds?.AABet_royalFlush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.straightFlush}</td>
                                            <td>{formatOdds(odds?.AABet_straightFlush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.fourOfAKind}</td>
                                            <td>{formatOdds(odds?.AABet_fourKind, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.fullHouse}</td>
                                            <td>{formatOdds(odds?.AABet_fullHouse, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.flush}</td>
                                            <td>{formatOdds(odds?.AABet_flush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.straight}</td>
                                            <td rowSpan={5}>{formatOdds(odds?.AABet_straight, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.threeOfAKind}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.twoPair}</td>
                                        </tr>
                                        <tr>
                                            <td>{common.hand.PairOfAces}</td>
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

    renderBetLimit() {
        const { betLimit } = this.state.translationResource;
        const { maxBetFollowChoice } = this.props;
        return (
            <>
                <h2>{betLimit.title}</h2>
                <table className="table table-small text-center">
                    <thead>
                        <tr>
                            <td>{betLimit.table.title.options}</td>
                            <td>{betLimit.table.title.betLimit}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{betLimit.table.content.ante}</td>
                            <td>
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                            </td>
                        </tr>
                        <tr>
                            <td>{betLimit.table.content.call}</td>
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

    renderMD5() {
        const { md5 } = this.state.translationResource;
        const { MD5Technology, MD5Validation } = md5;
        const { locale } = this.props;
        return (
            <>
                <h2> {md5.title} </h2>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="title-text">{MD5Technology.title}</span>
                        <ul className="desc">
                            <li>{MD5Technology.description["MD5 allows players"]}</li>
                            <li>{MD5Technology.description["The game results"]}</li>
                            <li>
                                <Markup content={MD5Technology.description["Players can manually"]} />
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="title-text">{MD5Validation.title}</span>
                        <ul className="desc">
                            <li>
                                <Markup content={MD5Validation.steps.step1} />
                            </li>
                            <li>
                                <Markup content={MD5Validation.steps.step2} />
                            </li>
                            <li>
                                <Markup content={MD5Validation.steps.step3} />
                            </li>
                            <li>
                                <Markup content={MD5Validation.steps.step4} />
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="content">{MD5Validation.description}</div>
                <div className="content">
                    <Markup content={MD5Validation.example.description} />
                </div>
                <>
                    <ul className="desc">
                        <li>
                            <Markup content={MD5Validation.example.step1} />
                            <img
                                className="format-img auto-center format-mobile"
                                src={`/static/images/casino-hold-em/md5_${locale}.png?v=3`}
                                alt="md5"
                            />
                        </li>
                        <li>
                            <Markup content={MD5Validation.example.step2} />
                            <img
                                className="format-img auto-center format-mobile"
                                src={`/static/images/casino-hold-em/md5_result_${locale}.png?v=4`}
                                alt="md5_result"
                            />
                            <div>
                                {MD5Validation.example.note.title}
                                <ul className="detail">
                                    <li>
                                        <Markup
                                            content={StringFormat(
                                                MD5Validation.example.note.line1,
                                                `(
                                        <span class="casino-black">J♣</span>, <span className="red">10♥</span>)`,
                                                ` (
                                            <span class="red">3♦</span>, <span className="casino-black">2♠</span>)`,
                                                `(<span class="casino-black">K♣</span>, <span class="red">5♥</span>,
                                            <span class="casino-black">3♠</span>, <span class="red">10♦</span>,
                                            <span class="red">4♦</span>)`
                                            )}
                                        />
                                    </li>
                                    <li>
                                        <Markup
                                            content={StringFormat(
                                                MD5Validation.example.note.line2,
                                                ` (
                                                    <span class="casino-black">J♣</span>, <span class="red">10♥</span>)`,
                                                `(<span class="red">3♦</span>, <span class="casino-black">2♠</span>)`
                                            )}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Markup content={MD5Validation.example.step3} />
                            <img
                                className="format-img auto-center"
                                src="/static/images/casino-hold-em/hash-darling.png?v=3"
                                alt="hash-darling"
                            />
                        </li>
                        <li>
                            <Markup content={MD5Validation.example.step4} />
                            <img
                                className="format-img auto-center"
                                src="/static/images/casino-hold-em/md5-checksum.png?v=2"
                                alt="md5-checksum"
                            />
                        </li>
                    </ul>
                </>
            </>
        );
    }
    render() {
        return (
            <>
                <ul className="game-guide">
                    <li className="guide-item">{this.renderIntroduce()}</li>
                    <li className="guide-item">{this.renderGameRule()}</li>
                    <li className="guide-item">{this.renderPayout()}</li>
                    <li className="guide-item">{this.renderBetLimit()}</li>
                    <li id="md5" className="guide-item">
                        {this.renderMD5()}
                    </li>

                    {renderTermsAndConditions("", 39, this.props.locale)}
                </ul>
            </>
        );
    }
}
export default CasinoHoldGuideTemplate;
