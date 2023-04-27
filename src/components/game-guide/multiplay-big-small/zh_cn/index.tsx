import React, { useEffect } from "react";

import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsCN } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import MD5 from "../../base/md5";

const renderMd5Cn = (locale?: string) => {
    return (
        <MD5
            locale={locale}
            step1ImageUrl={"/static/images/mega-bigsmall/md5_step1_cn.png?v=3"}
            step2ImageUrl={"/static/images/mega-bigsmall/md5_step2_cn.png?v=3"}
            step3ImageUrl={"/static/images/mega-bigsmall/md5_step3_en.png?v=1"}
            step4ImageUrl={"/static/images/mega-bigsmall/md5_step4_en.png?v=1"}
            note={<div>注：从左到右，&#123;6, 2, 5&#125; 分别对应三个骰子的点数。</div>}
        />
    );
};

const MultiplayBigSmallGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>介绍</h2>
                    <p className="content">
                        "{gameName}" 是一款简单的骰子游戏，由4个赌桌组成：拉斯维加斯、滨海湾、澳门和蒙特卡洛，其中滨海湾和蒙特卡罗是涡轮版，下注时间将缩短。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>对于每张桌子，骰杯将在游戏回合开始时摇动。</li>
                        <li>玩家可以下注大或小，但不能同时下注。</li>
                        <ul className="detail">
                            <li>大: 如果三个骰子的总点数 &gt;= 11，玩家将获胜 </li>
                            <li>小: 如果三个骰子的总点数 &lt;= 10，则玩家获胜 </li>
                        </ul>
                        <li>玩家可以在下注时间结束前再次下注相同的选项来增加赌注。 注意，投注无法取消。</li>
                        <li>
                            最小赌注和最大赌注必须在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}{" "}
                            之间，每轮最大总赌注为 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>下注时间结束后，将显示结果。 如果三个骰子的结果与您的赌注相符，则您获胜。</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>大, 小的赔率为 {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>中奖金额根据投注赔率计算。</li>
                        <li>支付包括初始投注。</li>
                        <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && renderMd5Cn(props.locale)}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideCN;
