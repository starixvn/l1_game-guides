import React, { useEffect } from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";
import { renderPromotionNoteTW } from "../../../shared/promotion-note/zh_tw";

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
                        {gameName}或俗稱 Sicbo 或 Tai Sai，是一種用三個骰子進行的遊戲。玩家下注並預測三個骰子的總點數是大還是小。
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
                        <li>玩家可以在下注時間結束前通過使用相同選項再次下注來增加賭注金額。 注意，投注無法取消。</li>
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
                            中獎金額根據投注賠率計算。 <strong>注意</strong>, 支付包括初始投注。
                        </li>
                        <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
                        {renderPromotionNoteTW(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/big-small/md5_step1_tw.png?v=3"}
                        step2ImageUrl={"/static/images/big-small/md5_step2_tw.png?v=3"}
                        step3ImageUrl={"/static/images/big-small/md5_step3.png?v=1"}
                        step4ImageUrl={"/static/images/big-small/md5_step4.png?v=1"}
                        note={<div>注：從左到右，&#123;6, 2, 5&#125;分別對應三個骰子的點數。</div>}
                    />
                )}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default BigSmallGuideZH_TW;
