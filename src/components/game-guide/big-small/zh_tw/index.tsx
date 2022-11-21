import React, { useEffect } from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step1_en.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step2_en.png?v=3" alt="md5-result" />
                    <div>Note: From the left to right, &#123;6, 2, 5&#125; correspond to the the value of three dice.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
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
                        <li>The dice cup is shaken at the beginning of the game round.</li>
                        <li>During the betting time, the players can bet on either BIG or SMALL, but not on both.</li>
                        <ul className="detail">
                            <li>大: 如果三個骰子的總點數 &gt;= 11，玩家將獲勝 </li>
                            <li>小: 如果三個骰子的總點數 &lt;= 10，則玩家獲勝 </li>
                        </ul>
                        <li>
                            玩家可以在下注時間結束前通過使用相同選項再次下注來增加賭注金額。 請注意，投注無法取消。
                        </li>
                        <li>
                            最小賭注和最大賭注必須在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain} 之間，每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Once the betting time has expired, the result will be shown. 如果三個骰子的結果與您的賭注相符，則您獲勝。
                        </li>
                        <li>
                            平衡投注池：如果大和小的總投注額不同，則差額將退還給最新投注的玩家。
                            <p>
                                <strong>例子:</strong> 玩家 A 在 大下注 100，玩家 B 在 小下注 40，而 C 在 小下注 80。 為了平衡大和小的總投注額，系統將退還 20 給玩家 C。
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>大, 小的賠率為  {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>
                            中獎金額根據派彩率計算。 <strong>請注意</strong>, 支付包括初始投注。
                        </li>
                        <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default BigSmallGuideZH_TW;
