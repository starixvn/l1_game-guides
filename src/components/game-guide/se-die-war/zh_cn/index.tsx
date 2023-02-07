import React from "react";
import { useTheme } from "next-themes";

import { renderTermsAndConditionsCN } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/cn";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../se-die-war.module.scss";
import { buildVersion, Themes } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2> 游戏规则</h2>
            <ul className="desc">
                <li>选择您想要的筹码值。所有投注必须在投注时间到期之前进行。</li>
                <li>请注意，投注无法取消。</li>
                <li>一旦投注时间结束，碗将被移除并显示结果。</li>
                <li>每轮最大总赌注为 {maxBet}</li>
                <li>每个投注选项显示的所有玩家的总投注额仅供参考。对于不同的市场和货币，总和是根据公司设定的内部汇率换算的。</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th colSpan={2}>选项</th>
                                    <th>获胜条件</th>
                                    <th>说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>玩家</td>
                                    <td colSpan={2} className="text-start">
                                        玩家结果中的红色按钮数量比庄家多。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>庄家</td>
                                    <td colSpan={2} className="text-start">
                                        庄家结果中的红色按钮数量多于玩家。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>平局</td>
                                    <td colSpan={2} className="text-start">
                                        玩家和庄家的结果相同。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>总双数</td>
                                    <td colSpan={2} className="text-start">
                                        玩家和庄家结果中的红色按钮总数为双数。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>总单数</td>
                                    <td colSpan={2} className="text-start">
                                        玩家和庄家结果中的红色按钮总数为单数。
                                    </td>
                                </tr>
                                {renderGameRulePlayerOrBanker(false)}
                                {renderGameRulePlayerOrBanker(true)}
                            </tbody>
                        </table>
                    </div>
                    {renderGameRuleExample()}
                </li>
            </ul>
        </>
    );
};

const renderGameRulePlayerOrBanker = (isBanker = false) => {
    return (
        <>
            <tr>
                <td rowSpan={9}>{isBanker ? "庄家" : "玩家"}</td>
                <td rowSpan={2}>单</td>
                <td>3 红，1 白</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td>1 红，3 白</td>
                {renderOneRedThreeWhite()}
            </tr>
            <tr>
                <td rowSpan={3}>双</td>
                <td>4 红</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 白</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>2 红，2 白</td>
                {renderTwoRedTwoWhite()}
            </tr>
            {RedWhiteDataOnTable()}
        </>
    );
};

const renderGameRuleExample = () => {
    const oneRedThreeWhite = "1 红，3 白";
    const threeRedOneWhite = "3 红，1 白";
    return (
        <>
            <p>
                <strong>例子</strong>
            </p>
            <div>
                <strong>庄家，玩家选项。 </strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>因为玩家结果中红色按钮的数量比庄家多。投注玩家选项将获胜。</p>
            <div>
                <strong>总双数</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>玩家和庄家结果中的红色按钮总数为 4。投注总双数将获胜。</p>
            <div>
                <strong>总单数</strong>
                {renderGameRuleTable(["2 红，2 白", oneRedThreeWhite])}
            </div>
            <p>玩家和庄家结果中的红色按钮总数为 3。投注总单将获胜。</p>
        </>
    );
};

const renderGameRuleTable = (data: string[]) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>选项</th>
                        <th>结果 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>玩家</td>
                        <td>{data[0]}</td>
                    </tr>
                    <tr>
                        <td>庄家</td>
                        <td>{data[1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (odds: object | any, maxBetFollowChoice: undefined | MaxBetChoicesProps, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>支付</h2>
            <ul className="desc">
                <li>中奖金额根据派彩率计算。请注意，支付包括初始股份。</li>
                <li>
                    投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>选项</th>
                                    <th>赔率</th>
                                    <th>投注限额（最小 - 最大）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>玩家</td>
                                    <td rowSpan={2}>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={5}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>庄家</td>
                                </tr>
                                <tr>
                                    <td>平局</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>总双数</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>总单数</td>
                                </tr>
                                <tr>
                                    <td>玩家 - 双数</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>玩家 - 单数</td>
                                </tr>
                                <tr>
                                    <td>玩家 - 3 红色</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>玩家 - 1 红色</td>
                                </tr>
                                <tr>
                                    <td>玩家 - 4 红色</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>玩家 - 4 白色</td>
                                </tr>
                                <tr>
                                    <td>庄家 - 双数</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>庄家 - 单数</td>
                                </tr>
                                <tr>
                                    <td>庄家 - 3 红</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>庄家 - 1 红</td>
                                </tr>
                                <tr>
                                    <td>庄家 - 4 红</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>庄家 - 4 白</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideZH_CN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const pathImg = theme === Themes.light ? `dark/guide-stats-cn.png?v=${buildVersion}` : `guide-stats-cn.png?v=${buildVersion}`;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName} 是色碟游戏的特殊版本。 游戏由 2 组按钮组成，一组用于庄家，一组用于玩家。 每组包括 4
                        个彩色按钮，其中，每个按钮都有红色和白色的两侧。 玩家对游戏桌上显示的一个或多个投注选项下注。
                        游戏根据结果中面对的红色或白色站点的数量来确定输赢。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item">
                    <h2>记分牌</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <strong className="title-text">单双</strong>
                            {StatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <strong className="title-text">统计轮结果</strong>
                            <div className={Styles["wrapper-guide-stats"]}>
                                <img src={`/static/images/sedie-war/${pathImg}`} alt="guide-stats-en" loading="eager" />
                            </div>

                            <p>
                                <strong>注意：</strong>统计轮中显示的数字是玩家和庄家结果中的红色按钮总数。
                            </p>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default SeDieGuideZH_CN;
