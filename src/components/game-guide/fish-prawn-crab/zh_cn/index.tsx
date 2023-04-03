import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

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

const FishPrawnCrabGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName}，也被称为 Hoo Hey How，是亚洲流行的使用三个骰子的游戏。
                        每个骰子包含六个独特的符号（鱼、虾、蟹、公鸡、葫芦和麈）。 有 6
                        个投注选项可下注，每个符号一个。玩家下注将出现哪些符号。
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">麈</div>
                        <div className="text">葫芦</div>
                        <div className="text">公鸡</div>
                        <div className="text">鱼</div>
                        <div className="text">蟹</div>
                        <div className="text">虾</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>骰杯将在游戏回合开始时摇动。</li>
                        <li>当下注时间结束时，将显示骰子结果。</li>
                        <li>符号将根据它们在游戏桌上的位置从 1 到 6 编号。 并且分配的号码只会在设置时间内显示。</li>
                        <li>
                            最小赌注和最大赌注必须在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice}{" "}
                            之间，每轮最大总赌注为 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            投注赔率：
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} 如果所选符号出现一次。</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} 如果所选符号出现两次。</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} 如果所选符号出现三次。</li>
                            </ul>
                        </li>
                        <li>玩家可以对游戏桌上显示的一个或多个投注选项进行投注。 注意，投注无法取消。</li>
                        <li>中奖金额根据投注赔率计算。支付包括初始投注。</li>
                        <li>
                            投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                            <div>
                                <strong>例子：</strong>
                                <ul className="detail">
                                    <li>
                                        在“鱼”上投注 10 并出现一个鱼符号，然后您将获得{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong>
                                    </li>
                                    <li>
                                        在“蟹”上投注 10 并出现两个螃蟹符号，那么您将获得{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/fish-prawn-crab/md5_step1_zh_cn.png?v=4"}
                        step2ImageUrl={"/static/images/fish-prawn-crab/md5_step2_zh_cn.png?v=4"}
                        step3ImageUrl={"/static/images/fish-prawn-crab/md5_step3_en.png?v=5"}
                        step4ImageUrl={"/static/images/fish-prawn-crab/md5_step4_en.png?v=5"}
                        note={<div>注：从左到右，{"{3, 1, 2}"} 分别对应出现在三个骰子上的每个符号的指定编号</div>}
                    />
                )}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideCN;
