import React from "react";
import { Markup } from "interweave";

import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../../game-guide/type";
import { IBaccaratMiniTranslationResource } from "../languages/types";
import { getBaccaratMiniTranslationResource } from "../languages";
import { StringFormat } from "../../../../helpers/string-helper";
import { BaseState } from "../../game-guide-mini";

class BaccaratMiniGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    S extends BaseState<IBaccaratMiniTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: getBaccaratMiniTranslationResource(props.locale),
        } as S;
    }

    renderIntroduction() {
        const { introduction } = this.state.translationResource;
        return (
            <>
                <h2>{introduction.title}</h2>
                <p className="content">{introduction.description}</p>
            </>
        );
    }

    renderGameRules() {
        const { gameRule } = this.state.translationResource;
        const { maxBetFollowChoice } = this.props;
        const { title, description } = gameRule;
        return (
            <>
                <h2>{title}</h2>
                <ul className="desc">
                    <li>{description.byDefault}</li>
                    <li>{description.theThirdCard}</li>
                    <li>{description.theGameDetermines}</li>
                    <li>
                        <Markup content={StringFormat(description.theCards, (maxBetFollowChoice?.maxBetMain ?? 0).toString())} />
                    </li>
                </ul>
            </>
        );
    }

    renderPayouts() {
        const { payouts } = this.state.translationResource;
        const { maxBetFollowChoice } = this.props;
        const { title, description, table } = payouts;
        return (
            <>
                <h2> {title}</h2>
                <ul className="desc">
                    <li>{description.thePayout}</li>
                    <li>
                        {description.note}
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th>{table.header.options}</th>
                                        <th>{table.header.betLimit}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{table.rows.player}</td>
                                        <td rowSpan={2}>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{table.rows.banker}</td>
                                    </tr>
                                    <tr>
                                        <td>{table.rows.tie}</td>
                                        <td>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </>
        );
    }

    render() {
        return (
            <>
                <ul className="game-guide">
                    <li className="guide-item-instant">{this.renderIntroduction()}</li>
                    <li className="guide-item-instant">{this.renderGameRules()}</li>
                    <li className="guide-item-instant">{this.renderPayouts()}</li>
                </ul>
            </>
        );
    }
}
export default BaccaratMiniGuideTemplate;
