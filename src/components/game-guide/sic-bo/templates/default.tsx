import React from "react";

import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../sic-bo.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { getSicBoTranslationResource } from "../languages";
import { ISicBoTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../helpers/string-helper";
import { Markup } from "interweave";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";
import MD5 from "../../base/md5";

export default class SicBoTemplate extends React.Component<
    GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    { translationResource: ISicBoTranslationResource }
> {
    constructor(props: GameGuideProps<GameConfigProps, MaxBetChoicesProps>) {
        super(props);
        this.state = {
            translationResource: getSicBoTranslationResource(props.locale),
        };
    }

    renderIntroduction() {
        const { introduction } = this.state.translationResource;
        return (
            <li className="guide-item">
                <h2>{introduction.title}</h2>
                <p className="content">{introduction.description}</p>
            </li>
        );
    }

    renderGameRules() {
        const { maxBetFollowChoice } = this.props;
        const { gameRules } = this.state.translationResource;

        return (
            <li className="guide-item">
                <h2>{gameRules.title}</h2>
                <ul className="desc">
                    {gameRules.descriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                    {StringFormat(gameRules.maximum, maxBetFollowChoice?.maxBetMain || "0")}
                    {gameRules.otherDescriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                </ul>
            </li>
        );
    }

    renderBettingOptions() {
        const { bettingOptions, table } = this.state.translationResource;

        return (
            <li className="guide-item">
                <h2>{bettingOptions.title}</h2>
                <ul className="desc">
                    <li className="contentBeforeEmpty">
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th className={Styles["bet-option-width"]}>{table.options}</th>
                                        <th className={Styles["bet-choice-width"]}>{table.choices}</th>
                                        <th>{table.description}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2}>
                                            {table.big} {table.small}
                                        </td>
                                        <td>{table.big}</td>
                                        <td className="text-start">
                                            <ul className="plus">
                                                {bettingOptions.description.big.map((des, index) => (
                                                    <li key={index}>{des}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{table.small}</td>
                                        <td className="text-start">
                                            <ul className="plus">
                                                {bettingOptions.description.small.map((des, index) => (
                                                    <li key={index}>{des}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{table.anyTriple}</td>
                                        <td>{table.anyTriple}</td>
                                        <td className="text-start">{bettingOptions.description.anyTriple}</td>
                                    </tr>
                                    <tr>
                                        <td>{table.specificNumber}</td>
                                        <td>{table.betOnAnyNumber}</td>
                                        <td className="text-start">{bettingOptions.description.specificNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>{table.totalPoints}</td>
                                        <td>{table.betOnTotalPoints}</td>
                                        <td className="text-start">{bettingOptions.description.totalPoints}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }

    renderPayouts() {
        const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = this.props;
        const { odds } = gameConfigs;
        const { payouts, table } = this.state.translationResource;

        return (
            <li className="guide-item">
                <h2>{payouts.title}</h2>
                <ul className="desc">
                    {payouts.descriptions.map((des, index) => (
                        <li key={index}>
                            <Markup content={des} />
                        </li>
                    ))}
                </ul>
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className={Styles["bet-option-width"]}>{table.options}</th>
                                <th className={Styles["bet-choice-width"]}>{table.choices}</th>
                                <th>{table.odds}</th>
                                <th className={Styles["bet-limit-width"]}>
                                    <Markup content={table.betLimit} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={2}>
                                    {table.big} {table.small}
                                </td>
                                <td>{table.big}</td>
                                <td rowSpan={2}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                <td rowSpan={2}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                </td>
                            </tr>
                            <tr>
                                <td>{table.small}</td>
                            </tr>
                            <tr>
                                <td>{table.anyTriple}</td>
                                <td>{table.anyTriple}</td>
                                <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>{table.specificNumber}</td>
                                <td rowSpan={3}>{table.betOnAnyNumber}</td>
                                <td className="text-start">
                                    {StringFormat(table.numberAppearsOnce, formatOdds(odds?.single, fractionalOddsFormat))}
                                </td>
                                <td rowSpan={3}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecific1}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-start">
                                    {StringFormat(table.numberAppearsTwice, formatOdds(odds?.double, fractionalOddsFormat))}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-start">
                                    {StringFormat(table.numberAppearsThreeTimes, formatOdds(odds?.triple, fractionalOddsFormat))}
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={14}>{table.totalPoints}</td>
                                <td>4</td>
                                <td rowSpan={2}>{formatOdds(odds?.total4, fractionalOddsFormat)}</td>
                                <td rowSpan={8}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal4}
                                </td>
                            </tr>
                            <tr>
                                <td>17</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td rowSpan={2}>{formatOdds(odds?.total5, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td rowSpan={2}>{formatOdds(odds?.total6, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td rowSpan={2}>{formatOdds(odds?.total7, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td rowSpan={2}>{formatOdds(odds?.total8, fractionalOddsFormat)}</td>
                                <td rowSpan={6}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal8}
                                </td>
                            </tr>
                            <tr>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td rowSpan={4}>{formatOdds(odds?.total9, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>12</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        );
    }

    render(): React.ReactNode {
        const { locale } = this.props;
        const { md5 } = this.state.translationResource;

        return (
            <>
                <ul className="game-guide">
                    {this.renderIntroduction()}
                    {this.renderGameRules()}
                    {this.renderBettingOptions()}
                    {this.renderPayouts()}
                    <MD5
                        locale={locale}
                        step1ImageUrl={md5.step1ImageUrl}
                        step2ImageUrl={md5.step2ImageUrl}
                        step3ImageUrl="/static/images/sicbo/md5_step3.png"
                        step4ImageUrl="/static/images/sicbo/md5_step4.png"
                        note={md5.note}
                    />
                    <BaseTermsAndConditions resources={this.state.translationResource.termsAndConditions} />
                </ul>
            </>
        );
    }
}
