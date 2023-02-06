import React from "react";
import { Markup } from "interweave";
import { GameGuideProps } from "../../../game-guide/type";
import { IDragonTigerMiniTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../helpers/string-helper";
import { BaseState } from "../../game-guide-mini";
import { getDragonTigerTranslationResource } from "../languages";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import Styles from "../dragon-tiger.module.scss";

class DragonTigerMiniGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    S extends BaseState<IDragonTigerMiniTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: getDragonTigerTranslationResource(props.locale),
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
                        {description.ruleDrawCards}
                        <ul className="plus">
                            {description.winOption.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </li>
                    <li>{description.compareCardValue}</li>
                    {description.cardPointValues}
                    <ul className="plus">
                        {description.cardValues.map((cardValue, index) => (
                            <li key={index}>{cardValue}</li>
                        ))}
                    </ul>
                </ul>
            </>
        );
    }

    renderBetLimit() {
        const { betLimit } = this.state.translationResource;
        const { maxBetFollowChoice } = this.props;
        const { table } = betLimit;
        return (
            <>
                <h2> {betLimit.title}</h2>
                <ul className="desc">
                    <li>
                        <Markup content={StringFormat(betLimit.maxBetRound, (maxBetFollowChoice?.maxBetMain ?? 0).toString())} />
                    </li>
                    <li>{betLimit.tieResult}</li>

                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    {table.headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{table.dragon}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{table.tiger}</td>
                                </tr>
                                <tr>
                                    <td>{table.tie}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTie}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ul>
            </>
        );
    }

    render() {
        return (
            <>
                <ul className="game-guide">
                    <li>{this.renderIntroduction()}</li>
                    <li className={Styles["guide-item-instant"]}>{this.renderWinningCondition()}</li>
                    <li className={Styles["guide-item-instant"]}>{this.renderBetLimit()}</li>
                </ul>
            </>
        );
    }
}
export default DragonTigerMiniGuideTemplate;
