import React from "react";
import { useTheme } from "next-themes";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { locales, Themes } from "../../../../common/constants";
import Styles from "../three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    const imgRed = "img-red";
    return (
        <>
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>玩家可以对游戏桌上显示的一个或多个投注选项进行投注。</li>
                <li>所有投注必须在投注时间到期之前进行。注意，投注无法取消。</li>
                <li>下注时间一到，就会翻牌。</li>
                <li>每轮最大总赌注为 {maxBet}</li>
                <li>
                    52 张牌（不包括小丑）的标准牌组在每轮后洗牌。{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>选项</th>
                                    <th>获胜条件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>红</td>
                                    <td className="text-start">结果中至少有 2 张牌是方块或红心。</td>
                                </tr>
                                <tr>
                                    <td>黑</td>
                                    <td className="text-start">结果中至少有 2 张牌是黑桃或梅花</td>
                                </tr>
                                <tr>
                                    <td>方块</td>
                                    <td className="text-start">结果中至少有 1 张牌是方块。</td>
                                </tr>
                                <tr>
                                    <td>红心</td>
                                    <td className="text-start">结果中至少有 1 张牌是红心。</td>
                                </tr>
                                <tr>
                                    <td>黑桃</td>
                                    <td className="text-start">结果中至少有一张牌是黑桃。</td>
                                </tr>
                                <tr>
                                    <td>梅花</td>
                                    <td className="text-start">结果中至少有 1 张牌是梅花。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>注意:</strong>对于方块、红心、黑桃和梅花选项，如果结果有超过 1 张相同花色的牌，则奖金不会改变。
            </p>
            <p>
                <strong>例子：</strong>
            </p>
            <ul className="desc">
                <li>
                    Bet on Diamonds option. Payout will be the same if there are 1, 2, or 3 diamonds (
                    <span className={Styles[imgRed]}>♦</span>) in the results.
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>支付</h2>
            <ul className="desc">
                <li>中奖金额根据派彩率计算。</li>
                <li>支付包括初始投注。</li>
                <li>
                    投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>选项</th>
                                    <th>赔率 </th>
                                    <th>投注限额（最小最大）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>红</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>黑</td>
                                </tr>
                                <tr>
                                    <td>方块</td>
                                    <td rowSpan={4}>{formatOdds(odds?.diamonds, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>红心</td>
                                </tr>
                                <tr>
                                    <td>黑桃</td>
                                </tr>
                                <tr>
                                    <td>梅花</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderChoiceImage = (locale = "en", isSM: boolean, t: TFunction) => {
    const imgCustomize = "img-customize";
    const wrapperImg = "wrapper-img";
    const classMobile = isSM ? "sm" : "";

    return (
        <>
            <div className={`${Styles[wrapperImg]} ${Styles["red"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["red-en"] : Styles["red"]} ${Styles[classMobile]}`}
                    src={`./static/images/three-cards/table_text_red_cn.png`}
                    alt="red"
                ></img>
                <p>{t("threecards:red")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["black"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["black-en"] : Styles["black"]} ${
                        Styles[classMobile]
                    }`}
                    src={`./static/images/three-cards/table_txt_black_cn.png`}
                    alt="black"
                ></img>
                <p>{t("threecards:black")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["diamond"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["diamond"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_diamond.png"
                    alt="diamond"
                ></img>
                <p>{t("threecards:diamonds")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["heart"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["heart"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_heart.png"
                    alt="heart"
                ></img>

                <p>{t("threecards:hearts")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["spade"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["spade"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_spade.png"
                    alt="spade"
                ></img>
                <p>{t("threecards:spades")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["club"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["club"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_club.png"
                    alt="club"
                ></img>
                <p>{t("threecards:clubs")}</p>
            </div>
        </>
    );
};

const ThreeCardsGuideZH_CN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isSM = theme === Themes.blue ? false : true;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "threecards"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        三张牌是另一种令人兴奋的纸牌游戏，使用一副标准的 52 张牌（不包括小丑）来玩。有 6 种投注选项，包括红、黑、, 方块 (
                        <span className={Styles["img-red"]}>♦</span>), 红心 (<span className={Styles["img-red"]}>♥</span>), 黑桃 (
                        <span className={Styles["img-black"]}>♠</span>), 和梅花 (<span className={Styles["img-black"]}>♣</span>).
                        这个游戏的目的是预测每轮抽出的 3 张牌的花色。 如果结果与玩家的赌注相符，则玩家获胜。
                    </p>
                    <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>{renderChoiceImage(locales.en, isSM, t)}</div>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default ThreeCardsGuideZH_CN;
