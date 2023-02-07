import React from "react";
import { useTranslation } from "next-i18next";

import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { CardPointValuesTable } from "..";
import Styles from "../blackjack.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsCN } from "../../../shared";

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined) => {
    const wrapperImg = "wrapper-img";
    const optionsWidth = "options-width";
    return (
        <>
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>选择筹码值并单击您要下注的每手牌的圆圈（下注点）</li>
                <li>玩家可以同时玩多只手（最多 3 只）</li>
                <li>点击“Deal”按钮确认投注，或点击“X”重置您的投注。 请注意，发牌后无法取消投注。</li>
                <li>
                    最小赌注和最大赌注必须在 {minBet} - {maxBet} 之间，每手的最大总赌注为 {maxBet}
                </li>
                <li>玩家单击“发牌”按钮后，将为每个玩家和庄家发两张牌。 玩家的牌面朝上发牌，而庄家 - 第一张牌面朝上，另一张牌面朝下。</li>
                <li>每轮后洗牌。</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">玩家手牌规则</span>
                        <ul className="desc">
                            <li>如果玩家在前两张牌（二十一点）上获得 21 点，玩家将自动获胜，除了发牌者也有二十一点。</li>
                            <li>当闲家和庄家都拥有二十一点时，结果为平局（平局），赌注返还给闲家。</li>
                            <li>如果玩家的总点数超过 21（破产）。 玩家输了，即使庄家也超过 21</li>
                            <li>
                                根据游戏规则，根据前两张牌的总点数，玩家最多有四个选项：“拿牌”、“停牌”、“加倍”或“分牌”。
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles[optionsWidth]}>选项</th>
                                                <th>描述</th>
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
                                                        <li>获得一张额外的牌来提高你的手牌总数。</li>
                                                        <li>在总手牌值达到 21 或破产之前，您可以抽的牌数量没有限制。</li>
                                                        <li>如果玩家的手牌超过 21，则无论庄家有什么牌，玩家都会输掉该手牌。</li>
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
                                                        <li>如果玩家想要停止抽牌并结束回合，请单击“停牌”按钮。</li>
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
                                                            如果一手牌的前两张牌具有相同的值（例如，6-6 或 J-Q），玩家可以将牌分成两手牌。
                                                        </li>
                                                        <li>选择“分牌”后，将额外下注与您原来的赌注相等的赌注。</li>
                                                        <li>玩家每手只能分牌一次。</li>
                                                    </ul>
                                                    <strong>注意：</strong>
                                                    <ul className="desc">
                                                        <li>拆分 A-A 有一个例外，即每张新手只发一张额外的牌。</li>
                                                        <li>这手牌共有21点，分牌后有2张牌算21点，不是21点。</li>
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
                                                            如果前两张牌的总点数为 9、10 或 11
                                                            点，则玩家可以将原来的赌注翻倍并只获得一张额外的牌。 发牌后，手牌将站立。
                                                        </li>
                                                    </ul>
                                                    <strong>注意：</strong> 拆分后的手牌不适用“加倍”。
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">庄家手牌规则</span>
                        <ul className="desc">
                            <li>庄家在玩家完成后开始他/她的手牌。 庄家必须在“16 或以下”上画牌，并站在“17 及以上”上。</li>
                            <li>如果闲家和庄家的点数相同，则结果为平局（平局）并返回投注。</li>
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
                    中奖金额根据派彩率计算。
                    <strong>请注意，</strong> 支付包括初始投注。
                </li>
                <li>
                    投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>赔率</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>二十一点赢</td>
                                    <td>{formatOdds(odds?.blackjack, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>正常获胜</td>
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

const BlackjackGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "blackjack"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName}（也称为“21”）是一款有趣且令人愉快的赌场纸牌游戏。 游戏使用六副标准的 52 张牌（不包括 Joker）洗牌。
                        在二十一点中，玩家与庄家对战，游戏的目的是让您的牌的总点数尽可能接近 21，但不超过 21。
                        如果您的牌的总点数比庄家的牌更接近 21，则玩家将获胜。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain)}</li>
                <li className="guide-item">
                    <h2>积分计算规则</h2>
                    <ul className="desc">
                        <li>从 2 到 10 的所有牌都按面值计算，无论花色如何，面牌（J、Queen、King）计为 10</li>
                        <li>一张 A 算作 1 或 11，以最适合您的手牌为准。</li>
                        <li>拥有 21 点的手牌（前两张牌上 21 点）将胜过使用 3 张或更多牌获得的 21 点。</li>
                        <li>卡点值：{CardPointValuesTable(t)}</li>
                    </ul>
                    <strong>例子: </strong>
                    <ul className="detail">
                        <li>包含九 (9)、八 (8) 和 Ace (A) 的手 =&gt; 手的值是 18</li>
                        <li>包含七 (7) 和 A (A) 的手 =&gt; 手的价值是 18</li>
                    </ul>
                </li>
                {renderPayouts(odds, fractionalOddsFormat)}
                {renderTermsAndConditionsCN([
                    "未完成的游戏回合可以恢复，并且必须在玩家按下“发牌”按钮后的 24 小时内完成。<br>\
                            未完成的游戏将在 24 小时后自动结算。 玩家的手牌被视为&#34;停牌&#34;，系统将根据中断时桌上的牌计算输赢。",
                ])}
            </ul>
        </>
    );
};
export default BlackjackGuideCN;
