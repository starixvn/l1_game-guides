import { formatOdds } from "../../../../../helpers/number-helper";
import KenoProGuideTemplate from "../../keno-max/templates/default";
import { getKenoMiniTranslationResource } from "../languages";
import KenoMD5 from "../../keno-max/templates/md5";
import { JSX } from "react";

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
        const { locale, environment } = this.props;
        const { md5 } = this.state.translationResource;
        return (
            <KenoMD5
                locale={locale}
                environment={environment}
                md5Key="f2bbd32524fe6e2e41eaaaa0eacd6d86"
                md5Result="{237}_{#26907421fad9b51da1169691982}"
                step1ImageUrl={md5.image1}
                step2ImageUrl={md5.image2}
                step3ImageUrl="/static/images/keno-mini/md5_step3.png"
                step4ImageUrl="/static/images/keno-mini/md5_step4.png"
                note={md5.note}
            />
        );
    }
}
