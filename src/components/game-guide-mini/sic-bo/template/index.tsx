import React from "react";
import { Markup } from "interweave";

import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../../game-guide/type";
import { ISicBoTranslationResource } from "../languages/types";
import { getSicBoTranslationResource } from "../languages";
import { StringFormat } from "../../../../helpers/string-helper";
import { BaseState } from "../../game-guide-mini";
import Styles from "../sicbo.module.scss";

class SicBoGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    S extends BaseState<ISicBoTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: getSicBoTranslationResource(props.locale),
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
                <ul className={`${Styles["desc-row"]} desc`}>
                    <li>{description.number}</li>
                    <li>{description.big}</li>
                    <li>{description.small}</li>                   
                </ul>
                <div className={Styles["note"]}><Markup content={description.note} /></div>
            </>
        );
    }

    renderBetLimit() {
        const { betLimit } = this.state.translationResource;

        const { maxBetFollowChoice } = this.props;
        const { title, description } = betLimit;
        return (
            <>
                <h2> {title}</h2>
                <div><Markup content={StringFormat(description, (maxBetFollowChoice?.minBetMain ?? 0).toString(), (maxBetFollowChoice?.maxBetMain ?? 0).toString())} /></div>
            </>
        );
    }

    render() {
        return (
            <>
                <ul className="game-guide">
                    <li>{this.renderIntroduction()}</li>
                    <li className="guide-item-instant">{this.renderWinningCondition()}</li>
                    <li className="guide-item-instant">{this.renderBetLimit()}</li>
                </ul>
            </>
        );
    }
}
export default SicBoGuideTemplate;
