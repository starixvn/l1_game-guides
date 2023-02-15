import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { formatOdds } from "../../../../helpers/number-helper";

const OddEvenTurboGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} 是一款類似於大小的簡單骰子遊戲。 遊戲用三個骰子進行，玩家預測三個骰子的總點數是單數或雙數。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>骰杯在遊戲開始時搖動。</li>
                        <li>玩家可以下注大或小，但不能同時下注。</li>
                        <ul className="detail">
                            <li>單數：如果三個骰子的總點數為奇數，則玩家獲勝。</li>
                            <li>雙數：如果三個骰子的總點數為偶數，則玩家獲勝。</li>
                        </ul>
                        <li>確保你下註一個你覺得合適的金額。 點擊確認完成或如果您想重置所有投注，請取消按鈕。</li>
                        <li>玩家可以在下注時間到期之前通過使用相同選項再次下注來增加賭注金額。</li>
                        <li>
                            最小賭注和最大賭注必須在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}{" "}
                            之間，每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>下注時間結束後，將顯示結果。如果三個骰子的結果與您的賭注相符，則您獲勝。</li>
                        <li>
                            平衡投注池：如果單和雙投注的總金額不同，那麼差距金額將退還給擁有最新投注單的玩家。<br></br>
                            <strong>例子：</strong> 玩家 A 在 單上下注 60，玩家 B 在 雙上下注 70， C 在 雙上下注 20。
                            為平衡單數和雙數的投注總額，系統將向玩家 C 返還 20 元，向玩家 B 返還 10 元。
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>單, 雙的賠率為 {formatOdds(odds?.even, fractionalOddsFormat)}</li>
                        <li>
                            中獎金額根據派彩率計算。 <strong>注意,</strong> 支付包括初始投注。
                        </li>
                        <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
                    </ul>
                </li>
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default OddEvenTurboGuideTW;
