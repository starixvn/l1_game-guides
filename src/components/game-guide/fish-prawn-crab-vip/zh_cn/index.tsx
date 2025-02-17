import React from "react";
import { isShowedMD5, renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { useTheme } from "next-themes";
import Styles from "../fish-prawn-crab-vip.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderListIcon } from "../en";

const FishPrawnCrabGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, environment, orientation } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isPortraitGame = !isShowedMD5(environment, orientation);

    const cssClassColumnTable = isPortraitGame ? `${Styles["table-portrait-mode"]}` : "";
    const cssClassIconWrapper = isPortraitGame ? `${Styles["icon-wrapper-portrait-mode"]}` : "";
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName} 是传统游戏鱼虾蟹的增强版，具有新的图形界面和更多的投注选项。
                        游戏使用三个标准骰子，每个骰子包含六个独特的符号（鱼、虾、蟹、公鸡、葫芦和麈）。
                        游戏的目的是预测掷骰子的结果，玩家下注将出现哪些符号。
                    </p>
                    <div className={`${Styles["wrapper-icon"]} icon-wrapper ${cssClassIconWrapper}`}>
                        {renderListIcon(theme, isPortraitGame)}
                        <div className="text">麈</div>
                        <div className="text">葫芦</div>
                        <div className="text">公鸡</div>
                        <div className="text">鱼</div>
                        <div className="text">蟹</div>
                        <div className="text">虾</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>选择您想玩的筹码值。玩家可以对游戏桌上显示的一个或多个投注选项进行投注。</li>
                        <li>所有投注必须在投注时间到期之前进行。 注意，投注无法取消。</li>
                        <li>一旦下注时间结束，骰杯将被移除并显示结果。</li>
                        <li>每轮最大总赌注为 {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>
                            中奖金额根据投注赔率计算。 <strong>注意，</strong>支付包括初始投注。
                        </li>
                        <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>选项</th>
                                            <th>获胜条件</th>
                                            <th style={{ width: 150 }}>赔率</th>
                                            <th className={`${Styles["min-max-width"]} ${cssClassColumnTable}`}>
                                                投注限额 <br></br>（最低 - 最高）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>特定符号（鱼、虾、蟹、公鸡、葫芦、麈）</td>
                                            <td className="text-start">如果所选符号出现一次。 </td>
                                            <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                            <td rowSpan={5}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFish}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">如果所选符号出现两次。</td>
                                            <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">如果所选符号出现三次。</td>
                                            <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                        </tr>
                                        {!isPortraitGame && (
                                            <>
                                                <tr>
                                                    <td>山（公鸡、葫芦、麈）</td>
                                                    <td className="text-start">
                                                        投注 “山” 组的 3 个符号。 如果结果中出现至少两个山组符号，则玩家将获胜。
                                                    </td>
                                                    <td>{formatOdds(odds?.mountain, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>海洋（鱼、虾、蟹）</td>
                                                    <td className="text-start">
                                                        投注 “海洋” 组的 3 个符号。 如果结果中出现至少两个来自海洋组的符号，则玩家将获胜。
                                                    </td>
                                                    <td>{formatOdds(odds?.ocean, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>任何三重奏</td>
                                                    <td className="text-start">要赢得这个赌注，所有三个骰子必须显示相同的符号。</td>
                                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                                    <td>
                                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <strong>例子:</strong>
                    </p>
                    <ul className="desc">
                        <li>
                            <strong>特定符号</strong>
                            <ul className="detail">
                                <li>下注“鱼”，结果是鱼、葫芦、螃蟹，则玩家获胜。</li>
                                <li>下注“鱼”，结果是葫芦、螃蟹、螃蟹，则玩家输。</li>
                            </ul>
                        </li>

                        {!isPortraitGame && (
                            <>
                                <li>
                                    <strong>海洋/山</strong>
                                    <ul className="detail">
                                        <li>在海洋组下注，结果是鱼、虾、麈，则玩家获胜。</li>
                                        <li>在山组下注，结果是鱼、麈、麈，则玩家获胜。</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>任何三重奏</strong>
                                    <ul className="detail">
                                        <li>对任何三重选项下注，结果是螃蟹、螃蟹、螃蟹，然后玩家获胜。</li>
                                    </ul>
                                </li>
                            </>
                        )}
                    </ul>
                </li>
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideCN;
