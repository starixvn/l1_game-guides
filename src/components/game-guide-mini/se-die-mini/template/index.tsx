import React from "react";
import { Markup } from "interweave";

import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../../game-guide/type";
import { ISeDieMiniTranslationResource } from "../languages/types";
import { getSeDieMiniTranslationResource } from "../languages";
import { StringFormat } from "../../../../helpers/string-helper";
import { renderDot } from "../../../shared/dot";
import { BaseState } from "../../game-guide-mini";
import Styles from "../sedie-mini.module.scss";

class SeDieMiniGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    S extends BaseState<ISeDieMiniTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: getSeDieMiniTranslationResource(props.locale),
        } as S;
    }

    renderDot(condition: boolean[]) {
        return <span className={Styles["content-dots"]}>{renderDot(condition)}</span>;
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
                    <li>{description.even}</li>
                    <li>{description.odd}</li>
                    <li>
                        {description.otherBet}
                        {this.renderDot([true, true, true, true])}, {this.renderDot([false, false, false, false])},{" "}
                        {this.renderDot([false, true, true, true])}, {this.renderDot([false, false, false, true])} {description.ifThe}
                    </li>
                </ul>
            </>
        );
    }

    renderBetLimit() {
        const { betLimit } = this.state.translationResource;

        const { maxBetFollowChoice } = this.props;
        const { title, description, table } = betLimit;
        return (
            <>
                <h2> {title}</h2>
                <ul className="desc">
                    <li>
                        <Markup content={StringFormat(description, (maxBetFollowChoice?.maxBetMain ?? 0).toString())} />

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
                                        <td>{table.rows.oddEven}</td>
                                        <td>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.renderDot([false, true, true, true])} {table.rows.or}{" "}
                                            {this.renderDot([false, false, false, true])}
                                        </td>
                                        <td>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.renderDot([true, true, true, true])} {table.rows.or}{" "}
                                            {this.renderDot([false, false, false, false])}
                                        </td>
                                        <td>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
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
                    <li>{this.renderIntroduction()}</li>
                    <li className="guide-item-instant">{this.renderWinningCondition()}</li>
                    <li className="guide-item-instant">{this.renderBetLimit()}</li>
                </ul>
            </>
        );
    }
}
export default SeDieMiniGuideTemplate;
