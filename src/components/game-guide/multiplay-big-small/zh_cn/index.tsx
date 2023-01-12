import React, { useEffect } from "react";

import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsCN } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderMD5CN } from "../../../shared/md5-count-down-timer/zh_cn";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> 示例:</strong> 检查比赛结果的真实性和透明度
            </div>
            <ul className="desc">
                <li>
                    <strong>第一步:</strong> 在公布结果前复制MD5密钥。
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step1_en.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>第二步:</strong> 发布后复制结果。
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step2_en.png?v=3" alt="md5-result" />
                    <div>注：从左到右，&#123;6, 2, 5&#125; 分别对应三个骰子的点数。</div>
                </li>
                <li>
                    <strong>第三步:</strong> 转到{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    并将结果粘贴到 MD5 框中。
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>第四步:</strong> 按 “hash darling，hash!” 按钮，将新生成的校验和MD5 字符串与第一步中的 MD5 字符串进行比较。
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
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
                        {gameName} - 大小 的“不平衡投注池”版本，由拉斯维加斯、滨海湾、澳门和蒙特卡洛 4
                        个赌台组成，其中滨海湾和蒙特卡罗是缩短投注时间的涡轮版本。 {gameName} 可让您同时玩 4
                        桌游戏，体验许多激动人心的新体验。 游戏是用三个骰子进行的，玩家对三个骰子的总点数是大还是小下注。
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
                        <li>玩家可以在下注时间结束前再次下注相同的选项来增加赌注。 请注意，投注无法取消。</li>
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
                        <li>中奖金额根据派彩率计算。</li>
                        <li>支付包括初始投注。</li>
                        <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5CN()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideCN;
