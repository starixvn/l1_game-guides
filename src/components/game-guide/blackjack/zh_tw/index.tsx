import React from "react";
import { useTranslation } from "next-i18next";

import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { CardPointValuesTable } from "..";
import Styles from "../blackjack.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsTW } from "../../../shared";

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined) => {
    const wrapperImg = "wrapper-img";
    const optionsWidth = "options-width";
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>選擇籌碼值並單擊您要下注的每手牌的圓圈（下注點）</li>
                <li>玩家可以同時玩多隻手（最多 3 只）</li>
                <li>點擊“Deal”按鈕確認投注，或點擊“X”重置您的投注。注意，發牌後無法取消投注。</li>
                <li>
                    最小賭注和最大賭注必須在 {minBet} - {maxBet} 之間，每手的最大總賭注為 {maxBet}
                </li>
                <li>玩家單擊“發牌”按鈕後，將為每個玩家和莊家發兩張牌。 玩家的牌面朝上發牌，而莊家 - 第一張牌面朝上，另一張牌面朝下。</li>
                <li>每輪後洗牌。</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">玩家手牌規則</span>
                        <ul className="desc">
                            <li>如果玩家在前兩張牌（二十一點）上獲得 21 點，玩家將自動獲勝，除了發牌者也有二十一點。</li>
                            <li>當閒家和莊家都擁有二十一點時，結果為平局（平局），賭注返還給閒家。</li>
                            <li>如果玩家的總點數超過 21（破產）。玩家輸了，即使莊家也超過 21</li>
                            <li>
                                根據遊戲規則，根據前兩張牌的總點數，玩家最多有四個選項：“拿牌”、“停牌”、“加倍”或“分牌”。
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles[optionsWidth]}>選項</th>
                                                <th> 描述</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    拿牌
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_hit.png"
                                                        alt="guide_hit"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>獲得一張額外的牌來提高你的手牌總數。</li>
                                                        <li>在總手牌值達到 21 或破產之前，您可以抽的牌數量沒有限制。</li>
                                                        <li>如果玩家的手牌超過 21，則無論莊家有什麼牌，玩家都會輸掉該手牌。</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    停牌
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_stop.png"
                                                        alt="guide_stop"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>如果玩家想要停止抽牌並結束回合，請單擊“停牌”按鈕。</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    分牌
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_split.png"
                                                        alt="guide_split"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            如果一手牌的前兩張牌具有相同的值（例如，6-6 或 J-Q），玩家可以將牌分成兩手牌。
                                                        </li>
                                                        <li>選擇“分牌”後，將額外下注與您原來的賭注相等的賭注。</li>
                                                        <li>玩家每手只能分牌一次。</li>
                                                    </ul>
                                                    <strong>注意：</strong>
                                                    <ul className="desc">
                                                        <li>拆分 A-A 有一個例外，即每張新手只發一張額外的牌。</li>
                                                        <li>這手牌共有21點，分牌後有2張牌算21點，不是21點。</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    加倍
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_double.png"
                                                        alt="guide_double"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            如果前兩張牌的總點數為 9、10 或 11
                                                            點，則玩家可以將原來的賭注翻倍並只獲得一張額外的牌。 發牌後，手牌將站立。
                                                        </li>
                                                    </ul>
                                                    <strong>注意：</strong> 拆分後的手牌不適用“加倍”。
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">莊家手牌規則</span>
                        <ul className="desc">
                            <li>莊家在玩家完成後開始他/她的手牌。 莊家必須在“16 或以下”上畫牌，並站在“17 及以上”上。</li>
                            <li>如果閒家和莊家的點數相同，則結果為平局（平局）並返回投注。</li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>支出</h2>
            <ul className="desc">
                <li>
                    中獎金額根據派彩率計算。
                    <strong>注意，</strong> 支付包括初始投注。
                </li>
                <li>
                    投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>賠率</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>二十一點贏</td>
                                    <td>{formatOdds(odds?.blackjack, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>正常獲勝</td>
                                    <td>{formatOdds(odds?.regular, fractionalOddsFormat)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const BlackjackGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "blackjack"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName}（也稱為“21”）是一款有趣且令人愉快的賭場紙牌遊戲。 遊戲使用六副標準的 52 張牌（不包括 Joker）洗牌。
                        在二十一點中，玩家與莊家對戰，遊戲的目的是讓您的牌的總點數盡可能接近 21，但不超過 21。
                        如果您的牌的總點數比莊家的牌更接近 21，則玩家將獲勝。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain)}</li>
                <li className="guide-item">
                    <h2>積分計算規則</h2>
                    <ul className="desc">
                        <li>從 2 到 10 的所有牌都按面值計算，無論花色如何，面牌（J、Queen、King）計為 10</li>
                        <li>一張 A 算作 1 或 11，以最適合您的手牌為準。</li>
                        <li>擁有 21 點的手牌（前兩張牌上 21 點）將勝過使用 3 張或更多牌獲得的 21 點。</li>
                        <li>卡點值：{CardPointValuesTable(t)}</li>
                    </ul>
                    <strong>例子：</strong>
                    <ul className="detail">
                        <li>包含九 (9)、八 (8) 和 Ace (A) 的手 =&gt; 手的值是 18</li>
                        <li>包含七 (7) 和 A (A) 的手 =&gt; 手的價值是 18</li>
                    </ul>
                </li>
                {renderPayouts(odds, fractionalOddsFormat)}
                {renderTermsAndConditionsTW([
                    `未完成的遊戲回合可以恢復，並且必須在玩家按下“發牌”按鈕後的 24 小時內完成。<br>
                            未完成的遊戲將在 24 小時後自動結算。 玩家的手牌被視為&#34;停牌&#34;，系統將根據中斷時桌上的牌計算輸贏。`,
                ])}
            </ul>
        </>
    );
};
export default BlackjackGuideTW;
