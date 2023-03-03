import React, { useEffect } from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";
import { renderPromotionNoteCN } from "../../../shared/promotion-note/zh_cn";

const BigSmallGuideZH_CN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName}或俗称 Sicbo 或 Tai Sai，是一种用三个骰子进行的游戏。 玩家下注并预测三个骰子的总点数是大还是小。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>骰杯在游戏开始时摇动。</li>
                        <li>在下注时间内，玩家可以下大注或小注，但不能同时下注。</li>
                        <ul className="detail">
                            <li>大: 如果三个骰子的总点数 &gt;= 11，玩家将获胜 </li>
                            <li>小: 如果三个骰子的总点数 &lt;= 10，则玩家获胜 </li>
                        </ul>
                        <li>玩家可以在下注时间结束前通过使用相同选项再次下注来增加赌注金额。 注意，投注无法取消。</li>
                        <li>
                            最小赌注和最大赌注必须在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}{" "}
                            之间，每轮最大总赌注为 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>下注时间结束后，将显示结果。 如果三个骰子的结果与您的赌注相符，则您获胜。</li>
                        <li>
                            平衡投注池：如果大和小的总投注额不同，则差额将退还给最新投注的玩家。
                            <p>
                                <strong>例子：</strong> 玩家 A 在 大下注 100，玩家 B 在 小下注 40，而 C 在 小下注 80。
                                为了平衡大和小的总投注额，系统将退还 20 给玩家 C。
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>大, 小的赔率为 {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>
                            中奖金额根据投注赔率计算。 <strong>注意</strong>, 支付包括初始投注。
                        </li>
                        <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
                        {renderPromotionNoteCN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/big-small/md5_step1_cn.png?v=3"}
                        step2ImageUrl={"/static/images/big-small/md5_step2_cn.png?v=3"}
                        step3ImageUrl={"/static/images/big-small/md5_step3.png?v=1"}
                        step4ImageUrl={"/static/images/big-small/md5_step4.png?v=1"}
                        note={<div>注：从左到右，&#123;6, 2, 5&#125; 分别对应三个骰子的点数。</div>}
                    />
                )}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default BigSmallGuideZH_CN;
