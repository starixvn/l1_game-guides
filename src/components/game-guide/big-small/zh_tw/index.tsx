import React, { useEffect } from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderMD5TW } from "../../../shared/md5-count-down-timer/zh_tw";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> 示例</strong>: 檢查比賽結果的真實性和透明度
            </div>
            <ul className="desc">
                <li>
                    <strong>第一步</strong>: 在公佈結果前複製MD5密鑰。
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step1_tw.png?v=4" alt="md5-string" />
                </li>
                <li>
                    <strong>第二步</strong>: 系统发布结果后复制结果。
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step2_tw.png?v=4" alt="md5-result" />
                    <div>注：從左到右，&#123;6, 2, 5&#125;分別對應三個骰子的點數。</div>
                </li>
                <li>
                    <strong>第三步</strong>: 轉到{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    並將結果粘貼到 MD5 框中。
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>第四步</strong>: 按“hash darling，hash！” 按鈕，將新生成的校驗和MD5 字符串與第一步中的 MD5 字符串進行比較。
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const BigSmallGuideZH_TW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} 大小或俗稱 Sicbo 或 Tai Sai，是一種用三個骰子進行的遊戲。玩家下注並預測三個骰子的總點數是大還是小。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>骰杯在遊戲開始時搖動。</li>
                        <li>在下注時間內，玩家可以下大注或小注，但不能同時下注。</li>
                        <ul className="detail">
                            <li>大: 如果三個骰子的總點數 &gt;= 11，玩家將獲勝 </li>
                            <li>小: 如果三個骰子的總點數 &lt;= 10，則玩家獲勝 </li>
                        </ul>
                        <li>玩家可以在下注時間結束前通過使用相同選項再次下注來增加賭注金額。 請注意，投注無法取消。</li>
                        <li>
                            最小賭注和最大賭注必須在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}{" "}
                            之間，每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>下注時間結束後，將顯示結果。 如果三個骰子的結果與您的賭注相符，則您獲勝。</li>
                        <li>
                            平衡投注池：如果大和小的總投注額不同，則差額將退還給最新投注的玩家。
                            <p>
                                <strong>例子</strong>: 玩家 A 在 大下注 100，玩家 B 在 小下注 40，而 C 在 小下注 80。
                                為了平衡大和小的總投注額，系統將退還 20 給玩家 C。
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>大, 小的賠率為 {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>
                            中獎金額根據派彩率計算。 <strong>請注意</strong>, 支付包括初始投注。
                        </li>
                        <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5TW()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default BigSmallGuideZH_TW;
