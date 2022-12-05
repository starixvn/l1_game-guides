import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
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

const FishPrawnCrabGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName}，也被稱為 Hoo Hey How，是亞洲流行的使用三個骰子的遊戲。
                        每個骰子包含六個獨特的符號（魚、蝦、蟹、公雞、葫蘆和麈）。 有 6
                        個投注選項可下注，每個符號一個。玩家下注將出現哪些符號。
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">麈</div>
                        <div className="text">葫蘆</div>
                        <div className="text">公雞</div>
                        <div className="text">魚</div>
                        <div className="text">螃蟹</div>
                        <div className="text">蝦</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>The dice cup will be shaken at the beginning of the game round.</li>
                        <li>When the betting time has expired, the dice results will be displayed. 如果您下注的符號出現，您就贏了。</li>
                        <li>
                            Symbols will be numbered from 1 to 6 according to their position on the game table. And the assigned number will
                            be shown during the setting time only.
                        </li>
                        <li>
                            最小賭注和最大賭注必須在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice}{" "}
                            之間，每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            支出：
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} 如果所選符號出現一次。</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} 如果所選符號出現兩次。</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} 如果所選符號出現三次。</li>
                            </ul>
                        </li>
                        <li>玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。 注意，下注不能取消。</li>
                        <li>中獎金額根據派彩率計算。支付包括初始投注。</li>
                        <li>
                            投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                            <div>
                                <strong>例子：</strong>
                                <ul className="detail">
                                    <li>
                                        在“魚”上投注 10 並出現一個魚符號，然後您將獲得{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong>
                                    </li>
                                    <li>
                                        在“螃蟹”上投注 10 並出現兩個螃蟹符號，那麼您將獲得{" "}
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
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideTW;
