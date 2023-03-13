import React from "react";
import { Markup } from "interweave";
import { GameGuideProps } from "../../../game-guide/type";
import { IHiLoMiniTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../helpers/string-helper";
import { BaseState } from "../../game-guide-mini";
import { getHiLoTranslationResource } from "../languages";
import { GameConfigProps, MaxBetChoicesProps } from "../../big-small/type";
import Styles from "../hi-lo.module.scss";

class HiLoMiniGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    S extends BaseState<IHiLoMiniTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: getHiLoTranslationResource(props.locale),
        } as S;
    }

    renderIntroduction() {
        const { introduction } = this.state.translationResource;
        return <p className="content">{introduction}</p>;
    }

    renderWinningCondition() {
        const { winningCondition } = this.state.translationResource;
        const { title, description } = winningCondition;
        return (
            <>
                <h2>{title}</h2>
                <ul className="desc">
                    <li>
                        {description.thePlayerCan}
                        <ul className="plus">
                            <li>{description.collect}</li>
                            <li>{description.playContinue}</li>
                        </ul>
                    </li>
                    <li>
                        {description.unfinishedGame}
                        <ul className="plus">
                            <li>{description.firstTurn}</li>
                            <li>{description.otherTurns}</li>
                        </ul>
                    </li>
                    <li>{description.arrangeCards}</li>
                    <li>
                        {description.allTheSuits} {description.heart}
                        <span className={Styles["red"]}>♥</span>
                        {description.spade}
                        <span className={Styles["black"]}>♠</span>
                        {description.diamond}
                        <span className={Styles["red"]}>♦</span>
                        {description.andClub}
                        <span className={Styles["black"]}>♣</span>
                        {description.equalValue}
                    </li>
                </ul>
            </>
        );
    }

    renderPayout() {
        const { payout } = this.state.translationResource;
        return (
            <>
                <h2> {payout.title}</h2>
                <ul className="desc">
                    <li>
                        <Markup content={StringFormat(payout.description)} />
                    </li>
                </ul>
            </>
        );
    }

    render() {
        return (
            <>
                <ul className="game-guide">
                    <li>{this.renderIntroduction()}</li>
                    <li className="guide-item-instant">{this.renderWinningCondition()}</li>
                    <li className="guide-item-instant">{this.renderPayout()}</li>
                </ul>
            </>
        );
    }
}
export default HiLoMiniGuideTemplate;
