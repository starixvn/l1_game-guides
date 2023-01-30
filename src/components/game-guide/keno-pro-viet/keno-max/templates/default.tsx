import React from "react";

import { ENVIRONMENT } from "../../../../../common/constants";
import { renderTermsAndConditions } from "../../../../shared";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import Styles from "../keno-max.module.scss";
import { formatOdds } from "../../../../../helpers/number-helper";
import { IKenoTranslationResource } from "../languages/types";
import { getKenoTranslationResource } from "../languages";
import { StringFormat } from "../../../../../helpers/string-helper";
import { Markup } from "interweave";
import { renderMD5 } from "../../../../shared/md5-count-down-timer";

export default class KenoProGuideTemplate extends React.Component<
    GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    { translationResource: IKenoTranslationResource }
> {
    constructor(props: GameGuideProps<GameConfigProps, MaxBetChoicesProps>) {
        super(props);
        this.state = {
            translationResource: this.getTranslationResult(props.locale),
        };
    }

    getTranslationResult(locale?: string) {
        return getKenoTranslationResource(locale);
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
                    {gameRules.description.lines.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                    <li>
                        <Markup content={StringFormat(gameRules.description.maximum, maxBetFollowChoice?.maxBetMain || "0")} />
                    </li>
                    {gameRules.description.otherLine && <li>{gameRules.description.otherLine}</li>}
                </ul>
            </li>
        );
    }

    renderBettingOptions() {
        const { bettingOptions } = this.state.translationResource;
        return (
            <li className="guide-item">
                <h2>{bettingOptions.title}</h2>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.bigSmall.title}</span>
                        <ul className="desc">
                            {bettingOptions.bigSmall.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">{this.renderTableBigSmall()}</div>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.oddEven.title}</span>
                        <ul className="desc">
                            {bettingOptions.oddEven.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">{this.renderTableOddEven()}</div>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.fiveElement.title}</span>
                        <ul className="desc">
                            {bettingOptions.fiveElement.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">{this.renderTableFiveElements()}</div>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }

    renderTableBigSmall() {
        const { bettingOptions } = this.state.translationResource;
        return this.renderBettingOptionsTable(
            [7, 11, 17, 20, 21, 23, 33, 40, 41, 42],
            883,
            bettingOptions.bigSmall.winningText,
            [45, 48, 56, 58, 59, 69, 71, 72, 73, 77]
        );
    }

    renderTableOddEven() {
        const { bettingOptions } = this.state.translationResource;
        return this.renderBettingOptionsTable(
            [4, 5, 8, 18, 23, 30, 35, 37, 39, 40],
            798,
            bettingOptions.oddEven.winningText,
            [42, 44, 46, 49, 50, 56, 60, 61, 71, 80]
        );
    }

    renderTableFiveElements() {
        const { bettingOptions } = this.state.translationResource;
        return this.renderBettingOptionsTable(
            [3, 5, 10, 11, 15, 19, 20, 27, 29, 35],
            698,
            bettingOptions.fiveElement.winningText,
            [37, 40, 42, 47, 48, 52, 57, 62, 68, 71]
        );
    }

    renderBettingOptionsTable(firstRow: number[], totalSum: number, winningText: string, secondRow?: number[]) {
        const { bettingOptions } = this.state.translationResource;

        return (
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th colSpan={10} className="bold">
                            <b>{bettingOptions.example.drawResult}</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {firstRow.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    {secondRow && (
                        <tr>
                            {secondRow.map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    )}
                    <tr>
                        <td colSpan={10}>
                            <strong>{bettingOptions.example.totalSum}</strong> = {totalSum}. {winningText}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    renderPayouts() {
        const { payouts } = this.state.translationResource;

        return (
            <li className="guide-item">
                <h2>{payouts.title}</h2>
                <ul className="desc">
                    {payouts.descriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>
                                        <b>{payouts.options}</b>
                                    </th>
                                    <th>
                                        <b>{payouts.odds}</b>
                                    </th>
                                    <th>
                                        <b>
                                            {payouts.betLimit}
                                            <br />({payouts.min}-{payouts.max})
                                        </b>
                                    </th>
                                </tr>
                            </thead>
                            {this.renderPayoutsTableBody()}
                        </table>
                    </div>
                </ul>
            </li>
        );
    }

    renderPayoutsTableBody() {
        const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = this.props;
        const { odds } = gameConfigs;
        const { payouts } = this.state.translationResource;
        return (
            <tbody>
                <tr>
                    <td>{payouts.big}</td>
                    <td rowSpan={4}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                    <td rowSpan={4}>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.small}</td>
                </tr>
                <tr>
                    <td>{payouts.odd}</td>
                </tr>
                <tr>
                    <td>{payouts.even}</td>
                </tr>
                <tr>
                    <td>{payouts.gold}</td>
                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.wood}</td>
                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.water}</td>
                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.fire}</td>
                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.earth}</td>
                    <td>{formatOdds(odds?.earth, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
                    </td>
                </tr>
            </tbody>
        );
    }

    renderMD5() {
        const { md5 } = this.state.translationResource;
        return (
            <li id="md5" className="guide-item">
                {renderMD5(this.props.locale)}
                {
                    <div className="content">
                        <Markup content={md5.example} />
                        <ul className="desc">
                            <li>
                                <Markup content={md5.step1} />
                                {this.renderExampleMD5Step1("520e543659d05eb7024f9f76d85479f7")}
                            </li>
                            <li>
                                <Markup content={md5.step2} />
                                {this.renderExampleMD5Step2("{363}_{#26907421fad9b51da1169691982}")}
                                <div>{md5.note}</div>
                            </li>
                            <li>
                                <Markup content={md5.step3} />
                                <div className={Styles["wrapper-img-hash"]}>
                                    <img
                                        className="format-img auto-center"
                                        src="/static/images/mega-keno/md5_step3.png?v=1"
                                        alt="hash-darling"
                                    />
                                </div>
                            </li>
                            <li>
                                <Markup content={md5.step4} />
                                <div className={Styles["wrapper-img"]}>
                                    <img
                                        className="format-img auto-center"
                                        src="/static/images/mega-keno/md5_step4.png?v=1"
                                        alt="md5-checksum"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                }
            </li>
        );
    }

    renderExampleMD5Step1(md5Key: string) {
        const { environment } = this.props;
        const { md5 } = this.state.translationResource;

        return environment === ENVIRONMENT.sc ? (
            <img className="format-img auto-center" src={`${md5.image1}?v=2`} alt="md5-string" />
        ) : (
            <div className={Styles["md5-section"]}>
                <span className={`${Styles["text"]}`}>
                    <strong>{md5.md5Key}:</strong> {md5Key}
                </span>
                <div className={Styles["copy-box"]}>
                    <span className={Styles["copy-text"]}>{md5.copy}</span>
                </div>
            </div>
        );
    }

    renderExampleMD5Step2(result: string) {
        const { environment } = this.props;
        const { md5 } = this.state.translationResource;

        return environment === ENVIRONMENT.sc ? (
            <img className="format-img auto-center" src={`${md5.image2}?v=3`} alt="md5-string" />
        ) : (
            <div className={Styles["md5-section"]}>
                <span className={`${Styles["text"]}`}>
                    <strong>{md5.result}:</strong> {result}
                </span>
                <div className={Styles["copy-box"]}>
                    <span className={Styles["copy-text"]}>{md5.copy}</span>
                </div>
            </div>
        );
    }

    render() {
        const { locale } = this.props;
        return (
            <ul className="game-guide">
                {this.renderIntroduction()}
                {this.renderGameRules()}
                {this.renderBettingOptions()}
                {this.renderPayouts()}
                {this.renderMD5()}
                {renderTermsAndConditions("", undefined, locale)}
            </ul>
        );
    }
}
