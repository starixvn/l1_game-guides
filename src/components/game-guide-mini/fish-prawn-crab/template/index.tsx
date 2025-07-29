import React from "react";
import { Markup } from "interweave";

import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../../game-guide/type";
import { StringFormat } from "../../../../helpers/string-helper";
import { BaseState } from "../../game-guide-mini";
import { IFishPrawnCrabMiniTranslationResource } from "../languages/types";
import { getFishPrawnCrabMiniTranslationResource } from "../languages";

class FishPrawnCrabMiniGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps> & { translationResource?: IFishPrawnCrabMiniTranslationResource },
    S extends BaseState<IFishPrawnCrabMiniTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: props.translationResource || getFishPrawnCrabMiniTranslationResource(props.locale),
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
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </>
        );
    }

    renderBetLimit() {
        const { betLimit } = this.state.translationResource;
        const { maxBetFollowChoice } = this.props;
        return (
            <>
                <h2> {betLimit.title}</h2>
                <ul className="desc">
                    <li>
                        <Markup
                            content={StringFormat(
                                betLimit.description,
                                (maxBetFollowChoice?.minBetMain ?? 0).toString(),
                                (maxBetFollowChoice?.maxBetChoice ?? 0).toString(),
                                (maxBetFollowChoice?.maxBetMain ?? 0).toString()
                            )}
                        />
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
                    <li className="guide-item-instant">{this.renderBetLimit()}</li>
                </ul>
            </>
        );
    }
}
export default FishPrawnCrabMiniGuideTemplate;
