import React from "react";
import { Markup } from "interweave";

import { renderTermsAndConditions } from "../../../shared";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

import Styles from "../dragon-tiger.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { IDragonTigerTranslationResource } from "../languages/types";
import { getDragonTigerTranslationResource } from "../languages";

export interface BaseState<TranslationResource> {
    translationResource: TranslationResource;
}

class DragonTigerGuideTemplate<
    P extends GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    S extends BaseState<IDragonTigerTranslationResource>
> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            translationResource: getDragonTigerTranslationResource(props.locale),
        } as S;
    }

    renderIntroduce() {
        const { introduction } = this.state.translationResource;
        const { title, description } = introduction;
        return (
            <>
                <h2>{title}</h2>
                <p className="content">
                    {description.dragonTiger}
                    {description.theGame}
                    {description.thereAre}
                </p>
            </>
        );
    }

    renderGameRule() {
        const { gameRule } = this.state.translationResource;
        const { cardPoint } = gameRule;
        return (
            <>
                <h2>{gameRule.title}</h2>
                <ul className="desc">
                    <li>{gameRule.twoCards}</li>
                    <li>
                        {gameRule.thePlayerBet}
                        {gameRule.thePlayerCan}
                    </li>
                    <li>
                        {gameRule.theGameDetermines}
                        {gameRule.maximum}
                    </li>
                    <li>
                        {cardPoint.title}
                        <ul className="detail">
                            <li>{cardPoint.ranking}</li>
                            <li>{cardPoint.aceStands}</li>
                            <li>{cardPoint.allCards}</li>
                        </ul>
                    </li>
                    <li>
                        {gameRule.playerCanBet}
                        {gameRule.allBets}
                        {gameRule.note}
                    </li>
                    <li>{gameRule.theStandard}</li>
                </ul>
            </>
        );
    }

    renderPayout() {
        const { payOuts, common } = this.state.translationResource;
        const { description, table, note } = payOuts;
        const { gameConfigs, fractionalOddsFormat } = this.props;
        const { maxBetFollowChoice } = this.props;
        const { odds } = gameConfigs;
        return (
            <>
                <h2>{payOuts.title}</h2>
                <ul className="desc">
                    <li>{description.theWinning}</li>
                    <li>{description.thePayout}</li>
                    <li>
                        {description.allWinning}
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>{table.header.options}</th>
                                        <th>{table.header.odds}</th>
                                        <th className={Styles["bet-limit-width"]}>
                                            <Markup content={table.header.betLimit} />
                                        </th>
                                        <th>{table.header.maxTotal}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{common.dragon}</td>
                                        <td rowSpan={2}>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                        <td rowSpan={2}>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                        </td>
                                        <td rowSpan={3}>{maxBetFollowChoice?.maxBetMain}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.tiger}</td>
                                    </tr>
                                    <tr>
                                        <td>{common.tie}</td>
                                        <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                        <td>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTie}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {note}
                    </li>
                </ul>
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
                    {renderTermsAndConditions(this.props.locale)}
                </ul>
            </>
        );
    }
}
export default DragonTigerGuideTemplate;
