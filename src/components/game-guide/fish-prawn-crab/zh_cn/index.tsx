import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";

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
                        <div className="text">螃蟹</div>
                        <div className="text">虾</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>The dice cup will be shaken at the beginning of the game round.</li>
                        <li>When the betting time has expired, the dice results will be displayed. 如果您下注的符号出现，您就赢了。</li>
                        <li>
                            Symbols will be numbered from 1 to 6 according to their position on the game table. And the assigned number will
                            be shown during the setting time only.
                        </li>
                        <li>
                            最小赌注和最大赌注必须在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice}{" "}
                            之间，每轮最大总赌注为 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Betting Odds：
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} 如果所选符号出现一次。</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} 如果所选符号出现两次。</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} 如果所选符号出现三次。</li>
                            </ul>
                        </li>
                        <li>玩家可以对游戏桌上显示的一个或多个投注选项进行投注。 注意，下注不能取消。</li>
                        <li>中奖金额根据派彩率计算。支付包括初始投注。</li>
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
                                        在“螃蟹”上投注 10 并出现两个螃蟹符号，那么您将获得{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li className="guide-item">
                        {renderMD5EN()}
                        <div className="content">
                            <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
                        </div>
                        <ul className="desc">
                            <li>
                                <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step1_en.png?v=3"
                                    alt="md5-string"
                                />
                            </li>
                            <li>
                                <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step2_en.png?v=3"
                                    alt="md5-result"
                                />
                                <div>
                                    Note: From the left to right, &#123;5, 1, 1&#125; correspond to the assigned number of each symbol that
                                    appears on three dice
                                </div>
                            </li>
                            <li>
                                <strong>Step 3:</strong> Go to{" "}
                                <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                    https://md5.services/
                                </a>{" "}
                                and paste the Result into the MD5 box.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step3_en.png?v=1"
                                    alt="hash-darling"
                                />
                            </li>
                            <li>
                                <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5
                                string with the MD5 string in Step 1.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step4_en.png?v=1"
                                    alt="md5-checksum"
                                />
                            </li>
                        </ul>
                    </li>
                )}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideCN;
