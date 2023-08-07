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
        const { title, table } = betLimit;
        return (
            <>
                <h2> {title}</h2>                
                <ul >
                    <li>                       
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
                                        <td>{table.rows.big}</td>
                                        <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{table.rows.small}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        {table.rows.specificNumber}
                                        </td>
                                        <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
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
export default SicBoGuideTemplate;
