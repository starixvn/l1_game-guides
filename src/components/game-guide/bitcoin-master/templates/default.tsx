import React from "react";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../bitcoin-master.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { IBitcoinMasterTranslationResource } from "../languages/types";
import { getBitcoinMasterTranslationResource } from "../languages";
import { Markup } from "interweave";
import { StringFormat } from "../../../../helpers/string-helper";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";

export default class BitcoinMasterTemplate extends React.Component<
    GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    { translationResource: IBitcoinMasterTranslationResource }
> {
    constructor(props: GameGuideProps<GameConfigProps, MaxBetChoicesProps>) {
        super(props);
        this.state = {
            translationResource: getBitcoinMasterTranslationResource(props.locale),
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
        const { gameRules, table } = this.state.translationResource;
        const { title, descriptions, balancedBettingPool, example1, example2, example3, winningConditions } = gameRules;
        return (
            <li className="guide-item">
                <h2>{title}</h2>
                <ul className="desc">
                    <li>{descriptions[0]}</li>
                    <li className="contentBeforeEmpty">
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>{table.betType}</th>
                                        <th>{table.options}</th>
                                        <th>{table.winningConditions}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2}>{table.upDown}</td>
                                        <td>{table.up}</td>
                                        <td className="text-start">{winningConditions.up}</td>
                                    </tr>
                                    <tr>
                                        <td>{table.down}</td>
                                        <td className="text-start">{winningConditions.down}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>{table.evenOdd}</td>
                                        <td>{table.even}</td>
                                        <td className="text-start">
                                            <Markup content={winningConditions.even} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{table.odd}</td>
                                        <td className="text-start">
                                            <Markup content={winningConditions.odd} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li>{descriptions[1]}</li>
                    <li className="contentBeforeEmpty">
                        <Markup content={example1.title} />
                    </li>
                    <li>{example1.increaseStake}</li>
                    <li>{StringFormat(example1.maxBet, `${maxBetFollowChoice?.maxBetMain}`)}</li>
                    {example1.otherDescriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                    <div className={Styles["wrapper"]}>
                        <div className={Styles["wrapper-binance"]}>
                            <img src={`/static/images/bitcoin-master/Binance.png`} alt="Binance" loading="eager" />
                        </div>
                        <div className={Styles["wrapper-huobi"]}>
                            <img src={`/static/images/bitcoin-master/Huobi.png`} alt="Huobi" loading="eager" />
                        </div>
                        <div className={Styles["wrapper-okex"]}>
                            <img src={`/static/images/bitcoin-master/OKEX.png`} alt="OKEX" loading="eager" />
                        </div>
                        <div className={Styles["wrapper-mexc"]}>
                            <img src={`/static/images/bitcoin-master/mexc_global.png`} alt="mexc_global" loading="eager" />
                        </div>
                    </div>
                    <strong>{example2.title}:</strong>
                    <ul className="desc">
                        {example2.descriptions.map((des, index) => (
                            <li key={index} className="contentBeforeEmpty">
                                <Markup content={des} />
                            </li>
                        ))}
                    </ul>
                </ul>
                <ul className="desc">
                    <li>
                        {example2.upDown.title}
                        <ul className="desc">
                            <li className="contentBeforeEmpty">{example2.upDown.description}</li>
                        </ul>
                    </li>
                    <li>
                        {example2.evenOdd.title}
                        <ul className="desc">
                            <li className="contentBeforeEmpty">{example2.evenOdd.description}</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <Markup content={balancedBettingPool} />
                    <br />
                    <Markup content={example3} />
                </p>
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
                        <li key={index}>{des}</li>
                    ))}
                    <div className="table-container">
                        <table className="table text-center table-medium left">
                            <thead>
                                <tr>
                                    <th>{table.betType}</th>
                                    <th>{table.options}</th>
                                    <th>{table.odds}</th>
                                    <th>
                                        <Markup content={table.betLimit} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>{table.upDown}</td>
                                    <td>{table.up}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.up, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetUp}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{table.down}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>{table.evenOdd}</td>
                                    <td>{table.even}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{table.odd}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ul>
            </li>
        );
    }

    render(): React.ReactNode {
        return (
            <ul className="game-guide">
                {this.renderIntroduction()}
                {this.renderGameRules()}
                {this.renderPayouts()}
                <li className="guide-item"><BaseTermsAndConditions resources={this.state.translationResource.termsAndConditions} /></li>
            </ul>
        );
    }
}
