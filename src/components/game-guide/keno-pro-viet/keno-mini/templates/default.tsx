import { Markup } from "interweave";
import { formatOdds } from "../../../../../helpers/number-helper";
import { renderMD5 } from "../../../../shared/md5-count-down-timer";
import KenoProGuideTemplate from "../../keno-max/templates/default";
import { getKenoMiniTranslationResource } from "../languages";
import Styles from "../keno-mini.module.scss";

export default class KenoMiniGuideTemplate extends KenoProGuideTemplate {
    getTranslationResult(locale?: string) {
        return getKenoMiniTranslationResource(locale);
    }

    renderTableBigSmall(): JSX.Element {
        const { bettingOptions } = this.state.translationResource;
        return this.renderBettingOptionsTable([1, 2, 7, 11, 15, 24, 25, 28, 33, 35], 181, bettingOptions.bigSmall.winningText);
    }

    renderTableOddEven(): JSX.Element {
        const { bettingOptions } = this.state.translationResource;
        return this.renderBettingOptionsTable([4, 5, 10, 11, 12, 24, 27, 30, 34, 40], 197, bettingOptions.oddEven.winningText);
    }

    renderTableFiveElements(): JSX.Element {
        const { bettingOptions } = this.state.translationResource;
        return this.renderBettingOptionsTable([5, 7, 13, 17, 23, 24, 33, 37, 38, 40], 237, bettingOptions.fiveElement.winningText);
    }

    renderPayoutsTableBody(): JSX.Element {
        const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = this.props;
        const { odds } = gameConfigs;
        const { payouts } = this.state.translationResource;

        return (
            <tbody>
                <tr>
                    <td>{payouts.big}</td>
                    <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                    <td rowSpan={4}>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.small}</td>
                    <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                </tr>
                <tr>
                    <td>{payouts.odd}</td>
                    <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
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
                                {this.renderExampleMD5Step1("f2bbd32524fe6e2e41eaaaa0eacd6d86")}
                            </li>
                            <li>
                                <Markup content={md5.step2} />
                                {this.renderExampleMD5Step2("{237}_{#26907421fad9b51da1169691982}")}
                                <div>{md5.note}</div>
                            </li>
                            <li>
                                <Markup content={md5.step3} />
                                <div className={Styles["wrapper-img-hash"]}>
                                    <img
                                        className="format-img auto-center"
                                        src="/static/images/keno-mini/md5_step3.png?v=1"
                                        alt="hash-darling"
                                    />
                                </div>
                            </li>
                            <li>
                                <Markup content={md5.step4} />
                                <div className={Styles["wrapper-img"]}>
                                    <img
                                        className="format-img auto-center"
                                        src="/static/images/keno-mini/md5_step4.png?v=1"
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
}
