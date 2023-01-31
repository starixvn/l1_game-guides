import React from "react";
import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { useTheme } from "next-themes";
import Styles from "../fish-prawn-crab-vip.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderListIcon } from "../en";

const FishPrawnCrabGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} 是傳統遊戲魚蝦蟹的增強版，具有新的圖形界面和更多的投注選項。
                        遊戲使用三個標準骰子，每個骰子包含六個獨特的符號（魚、蝦、蟹、公雞、葫蘆和麈）。
                        遊戲的目的是預測擲骰子的結果，玩家下注將出現哪些符號
                    </p>
                    <div className="icon-wrapper">
                        {renderListIcon(theme)}
                        <div className="text">麈</div>
                        <div className="text">葫蘆</div>
                        <div className="text">公雞</div>
                        <div className="text">魚</div>
                        <div className="text">螃蟹</div>
                        <div className="text">蝦</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>選擇您想玩的籌碼值。 玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。</li>
                        <li>所有投注必須在投注時間到期之前進行。 請注意，投注無法取消。</li>
                        <li>一旦下注時間結束，骰杯將被移除並顯示結果。</li>
                        <li>每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>
                            中獎金額根據派彩率計算 <strong>請注意，</strong> 支付包括初始投注。
                        </li>
                        <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>選項</th>
                                            <th>獲勝條件</th>
                                            <th>賠率</th>
                                            <th className={Styles["min-max-width"]}>
                                                投注限額 <br></br>（最低 - 最高）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>特定符號（魚、蝦、蟹、公雞、葫蘆、麈）</td>
                                            <td className="text-start">如果所選符號出現一次。</td>
                                            <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                            <td rowSpan={5}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFish}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">如果所選符號出現兩次。</td>
                                            <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">如果所選符號出現三次。</td>
                                            <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>山（公雞、葫蘆、麈）</td>
                                            <td className="text-start">
                                                投注 “山” 組的 3 個符號。 如果結果中出現至少兩個山組符號，則玩家將獲勝。
                                            </td>
                                            <td>{formatOdds(odds?.mountain, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>海洋（魚、蝦、蟹）</td>
                                            <td className="text-start">
                                                投注 “海洋” 組的 3 個符號。 如果結果中出現至少兩個來自海洋組的符號，則玩家將獲勝。
                                            </td>
                                            <td>{formatOdds(odds?.ocean, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>任何三重奏</td>
                                            <td className="text-start">要贏得這個賭注，所有三個骰子必須顯示相同的符號。</td>
                                            <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                            </td>
                                        </tr>
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
                            <strong>特定符號</strong>
                            <ul className="detail">
                                <li>下注“魚”，結果是魚、葫蘆、螃蟹，則玩家獲勝。</li>
                                <li>下注“魚”，結果是葫蘆、螃蟹、螃蟹，則玩家輸。</li>
                            </ul>
                        </li>

                        <li>
                            <strong>海洋/山</strong>
                            <ul className="detail">
                                <li>在海洋組下注，結果是魚、蝦、麈，則玩家獲勝。</li>
                                <li>在山組下注，結果是魚、麈、麈，則玩家獲勝。</li>
                            </ul>
                        </li>
                        <li>
                            <strong>任何三重奏</strong>
                            <ul className="detail">
                                <li>對任何三重選項下注，結果是螃蟹、螃蟹、螃蟹，然後玩家獲勝。</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideTW;
