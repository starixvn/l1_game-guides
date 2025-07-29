import { Markup } from "interweave";
import React from "react";
import { formatOdds } from "../../../../helpers/number-helper";
import { StringFormat } from "../../../../helpers/string-helper";

import { renderTermsAndConditions } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../fantan.module.scss";
import { getFanTanTranslationResource } from "../languages";
import { IFanTanTranslationResource } from "../languages/types";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import MD5 from "../../base/md5";

export default class FanTanTemplate extends React.Component<
    GameGuideProps<GameConfigProps, MaxBetChoicesProps> & { translationResource?: IFanTanTranslationResource },
    { translationResource: IFanTanTranslationResource }
> {
    constructor(props: GameGuideProps<GameConfigProps, MaxBetChoicesProps> & { translationResource?: IFanTanTranslationResource }) {
        super(props);
        this.state = {
            translationResource: props.translationResource || getFanTanTranslationResource(props.locale),
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

    renderGameRule() {
        const { gameRules } = this.state.translationResource;
        const { example } = gameRules;
        const { maxBetFollowChoice } = this.props;

        return (
            <li className="guide-item">
                <h2>{gameRules.title}</h2>
                <ul className="desc">
                    <li>{gameRules.description}</li>
                    {this.renderExampleDetail()}

                    {example.descriptions.map((des, index) => (
                        <li key={index}>
                            <Markup content={des} />
                        </li>
                    ))}
                    <li>{StringFormat(example.maxBet, `${maxBetFollowChoice?.maxBetMain}`)}</li>
                </ul>
            </li>
        );
    }

    renderExampleDetail() {
        const { example } = this.state.translationResource.gameRules;
        return (
            <li>
                <b>{example.title}: </b>
                <ul className="detail">
                    {example.resultDetails.map((detail, index) => (
                        <li key={index}>
                            <Markup content={detail} />
                        </li>
                    ))}
                </ul>
                {this.renderExampleTable()}
            </li>
        );
    }

    renderExampleTable() {
        const { table, gameRules } = this.state.translationResource;
        const { winningCondition } = gameRules;
        return (
            <div className="table-container">
                <table className="table table-medium">
                    <thead>
                        <tr className="text-center">
                            <th>{table.betType}</th>
                            <th>{table.betOption}</th>
                            <th>{table.winningCondition}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2} className="text-center">
                                {table.oddEven}
                            </td>
                            <td>{table.odd}</td>
                            <td>{winningCondition.odd}</td>
                        </tr>
                        <tr>
                            <td>{table.even}</td>
                            <td>{winningCondition.even}</td>
                        </tr>
                        <tr>
                            <td rowSpan={4} className="text-center">
                                {table.fan}
                            </td>
                            <td>{table.fan1}</td>
                            <td>{winningCondition.fan1}</td>
                        </tr>
                        <tr>
                            <td>{table.fan2}</td>
                            <td>{winningCondition.fan2}</td>
                        </tr>
                        <tr>
                            <td>{table.fan3}</td>
                            <td>{winningCondition.fan3}</td>
                        </tr>
                        <tr>
                            <td>{table.fan4}</td>
                            <td>{winningCondition.fan4}</td>
                        </tr>
                        <tr>
                            <td rowSpan={4} className="text-center">
                                {table.kwok}
                            </td>
                            <td>1 2 {table.kwok}</td>
                            <td>{winningCondition.kwok12}</td>
                        </tr>
                        <tr>
                            <td>2 3 {table.kwok}</td>
                            <td>{winningCondition.kwok23}</td>
                        </tr>
                        <tr>
                            <td>3 4 {table.kwok}</td>
                            <td>{winningCondition.kwok34}</td>
                        </tr>
                        <tr>
                            <td>4 1 {table.kwok}</td>
                            <td>{winningCondition.kwok41}</td>
                        </tr>
                        <tr>
                            <td rowSpan={4} className="text-center">
                                {table.chun}
                            </td>
                            <td>2 3 4 {table.chun}</td>
                            <td>{winningCondition.chun234}</td>
                        </tr>
                        <tr>
                            <td>1 3 4 {table.chun}</td>
                            <td>{winningCondition.chun134}</td>
                        </tr>
                        <tr>
                            <td>1 2 4 {table.chun}</td>
                            <td>{winningCondition.chun124}</td>
                        </tr>
                        <tr>
                            <td>1 2 3 {table.chun}</td>
                            <td>{winningCondition.chun123}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                    <table className="table text-center table-medium">
                        <thead>
                            <tr>
                                <th>{table.betType}</th>
                                <th>{table.betOption}</th>
                                <th>{table.odds}</th>
                                <th className={Styles["bet-limit-width"]}>{table.betLimit}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={2} className="text-center">
                                    {table.oddEven}
                                </td>
                                <td className={Styles["text-left"]}>{table.odd}</td>
                                <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                <td rowSpan={2}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                </td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>{table.even}</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}>{table.fan}</td>
                                <td className={Styles["text-left"]}>{table.fan1}</td>
                                <td rowSpan={4}>{formatOdds(odds?.fan1, fractionalOddsFormat)}</td>
                                <td rowSpan={4}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFan1}
                                </td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>{table.fan2}</td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>{table.fan3}</td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>{table.fan4}</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}>{table.kwok}</td>
                                <td className={Styles["text-left"]}>1 2 {table.kwok}</td>
                                <td rowSpan={4}>{formatOdds(odds?.kwok12, fractionalOddsFormat)}</td>
                                <td rowSpan={4}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetKwok12}
                                </td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>2 3 {table.kwok}</td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>3 4 {table.kwok}</td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>4 1 {table.kwok}</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}>{table.chun}</td>
                                <td className={Styles["text-left"]}>2 3 4 {table.chun}</td>
                                <td rowSpan={4}>{formatOdds(odds?.chun123, fractionalOddsFormat)}</td>
                                <td rowSpan={4}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChun123}
                                </td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>1 3 4 {table.chun}</td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>1 2 4 {table.chun}</td>
                            </tr>
                            <tr>
                                <td className={Styles["text-left"]}>1 2 3 {table.chun}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        );
    }

    renderMD5() {
        const { locale } = this.props;
        const { md5 } = this.state.translationResource;
        return (
            <MD5
                locale={locale}
                step1ImageUrl={`/static/images/fantan/${locale}/md5_step1.png?v=1`}
                step2ImageUrl={`/static/images/fantan/${locale}/md5_step2.png?v=1`}
                step3ImageUrl={"/static/images/fantan/md5_step3.png?v=1"}
                step4ImageUrl={"/static/images/fantan/md5_step4.png?v=1"}
                note={
                    <div>
                        <Markup content={md5.note} />
                    </div>
                }
            />
        );
    }

    render(): React.ReactNode {
        return (
            <>
                <ul className="game-guide">
                    {this.renderIntroduction()}
                    {this.renderGameRule()}
                    {this.renderPayouts()}
                    {this.renderMD5()}
                    {renderTermsAndConditions(this.props.locale)}
                </ul>
            </>
        );
    }
}
