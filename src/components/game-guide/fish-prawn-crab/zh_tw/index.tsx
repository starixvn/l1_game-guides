import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import { renderMD5TW } from "../../../shared/md5-count-down-timer/zh_tw";

export const renderIconChoice = () => {
    return (
        <>
            <div className="symbol-size icon-nai"></div>
            <div className="symbol-size icon-bau"></div>
            <div className="symbol-size icon-ga"></div>
            <div className="symbol-size icon-ca"></div>
            <div className="symbol-size icon-cua"></div>
            <div className="symbol-size icon-tom"></div>
        </>
    );
};

const FishPrawnCrabGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName}，也被稱為 Hoo Hey How，是亞洲流行的使用三個骰子的遊戲。
                        每個骰子包含六個獨特的符號（魚、蝦、蟹、公雞、葫蘆和麈）。 有 6
                        個投注選項可下注，每個符號一個。玩家下注將出現哪些符號。
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
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
                        <li>骰杯將在遊戲回合開始時搖動。</li>
                        <li>當下注時間結束時，將顯示骰子結果。</li>
                        <li>符號將根據它們在遊戲桌上的位置從 1 到 6 編號。並且分配的號碼只會在設置時間內顯示。</li>
                        <li>
                            最小賭注和最大賭注必須在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice}{" "}
                            之間，每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            投注賠率：
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} 如果所選符號出現一次。</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} 如果所選符號出現兩次。</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} 如果所選符號出現三次。</li>
                            </ul>
                        </li>
                        <li>玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。 注意，下注不能取消。</li>
                        <li>中獎金額根據派彩率計算。支付包括初始投注。</li>
                        <li>
                            投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                            <div>
                                <strong>例子：</strong>
                                <ul className="detail">
                                    <li>
                                        在“魚”上投注 10 並出現一個魚符號，然後您將獲得{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong>
                                    </li>
                                    <li>
                                        在“螃蟹”上投注 10 並出現兩個螃蟹符號，那麼您將獲得{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li className="guide-item">
                        {renderMD5TW()}
                        <div className="content">
                            <strong> 示例:</strong> 檢查結果的真實性和透明度。
                        </div>
                        <ul className="desc">
                            <li>
                                <strong>第一步:</strong> 在公佈結果前複製MD5密鑰。
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step1_zh_tw.png?v=4"
                                    alt="md5-string"
                                />
                            </li>
                            <li>
                                <strong>第二步:</strong> 發布後復制結果。
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step2_zh_tw.png?v=4"
                                    alt="md5-result"
                                />
                                <div>注：從左到右，{"{(5, 1, 1)}"}分別對應出現在三個骰子上的每個符號的指定編號</div>
                            </li>
                            <li>
                                <strong>第三步:</strong> Go to{" "}
                                <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                    https://md5.services/
                                </a>{" "}
                                並將結果粘貼到 MD5 框中。
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step3_en.png?v=2"
                                    alt="hash-darling"
                                />
                            </li>
                            <li>
                                <strong>第四步:</strong> 按“hash darling，hash！” 按鈕，並將新生成的 MD5 checksum 字符串與步驟 1 中的 MD5
                                密鑰進行比較。
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step4_en.png?v=2"
                                    alt="md5-checksum"
                                />
                            </li>
                        </ul>
                    </li>
                )}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideTW;
