import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { formatOdds } from "../../../../helpers/number-helper";

const OddEvenTurboGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName} 是一款类似于大小的简单骰子游戏。游戏用三个骰子进行，玩家预测三个骰子的总点数是单数或双数。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>骰杯在游戏开始时摇动。</li>
                        <li>玩家可以下注大或小，但不能同时下注。</li>
                        <ul className="detail">
                            <li>单数：如果三个骰子的总点数为奇数，则玩家获胜。 </li>
                            <li>双数：如果三个骰子的总点数为偶数，则玩家获胜。 </li>
                        </ul>
                        <li>确保你下注一个你觉得合适的金额。 点击确认完成或如果您想重置所有投注，请取消按钮</li>
                        <li>玩家可以在下注时间到期之前通过使用相同选项再次下注来增加赌注金额。</li>
                        <li>
                            最小赌注和最大赌注必须在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}{" "}
                            之间，每轮最大总赌注为 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>下注时间结束后，将显示结果。如果三个骰子的结果与您的赌注相符，则您获胜。</li>
                        <li>
                            平衡投注池：如果单和双投注的总金额不同，那么差距金额将退还给拥有最新投注单的玩家。<br></br>
                            <strong>例子：</strong> 玩家 A 在 单上下注 60，玩家 B 在 双上下注 70， C 在 双上下注 20。
                            为平衡单数和双数的投注总额，系统将向玩家 C 返还 20 元，向玩家 B 返还 10 元。
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>单, 双的赔率为 {formatOdds(odds?.even, fractionalOddsFormat)}</li>
                        <li>
                            中奖金额根据派彩率计算。 <strong>請注意,</strong> 支付包括初始投注。
                        </li>
                        <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
                    </ul>
                </li>
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default OddEvenTurboGuideCN;
