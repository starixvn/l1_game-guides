import React from "react";
import { useTheme } from "next-themes";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { locales, Themes } from "../../../../common/constants";
import Styles from "../three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    const imgRed = "img-red";
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。</li>
                <li>所有投注必須在投注時間到期之前進行。注意，投注無法取消。</li>
                <li>下注時間一到，就會翻牌。</li>
                <li>每輪最大總賭注為 {maxBet}</li>
                <li>
                    52 張牌（不包括小丑）的標準牌組在每輪後洗牌。{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>選項</th>
                                    <th>獲勝條件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>紅</td>
                                    <td className="text-start">結果中至少有 2 張牌是方塊或紅心。</td>
                                </tr>
                                <tr>
                                    <td>黑</td>
                                    <td className="text-start">結果中至少有 2 張牌是黑桃或梅花</td>
                                </tr>
                                <tr>
                                    <td>方塊</td>
                                    <td className="text-start">結果中至少有 1 張牌是方塊。</td>
                                </tr>
                                <tr>
                                    <td>紅心</td>
                                    <td className="text-start">結果中至少有 1 張牌是紅心。</td>
                                </tr>
                                <tr>
                                    <td>黑桃</td>
                                    <td className="text-start">結果中至少有一張牌是黑桃。</td>
                                </tr>
                                <tr>
                                    <td>梅花</td>
                                    <td className="text-start">結果中至少有 1 張牌是梅花。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>注意:</strong> 對於方塊、紅心、黑桃和梅花選項，如果結果有超過 1 張相同花色的牌，則獎金不會改變。
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
                <li>中獎金額根據投注賠率計算。</li>
                <li>支付包括初始投注。</li>
                <li>
                    投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>選項</th>
                                    <th>賠率 </th>
                                    <th>投注限額（最小最大）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>紅</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>黑</td>
                                </tr>
                                <tr>
                                    <td>方塊</td>
                                    <td rowSpan={4}>{formatOdds(odds?.diamonds, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>紅心</td>
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
                    src={`./static/images/three-cards/table_text_red_tw.png`}
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

const ThreeCardsGuideZH_TW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isSM = theme === Themes.blue ? false : true;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "threecards"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        三張牌是另一種令人興奮的紙牌遊戲，使用一副標準的 52 張牌（不包括小丑）來玩。 有 6 種投注選項，包括紅、黑、, 方塊 (
                        <span className={Styles["img-red"]}>♦</span>), 紅心 (<span className={Styles["img-red"]}>♥</span>), 黑桃 (
                        <span className={Styles["img-black"]}>♠</span>), 和梅花 (<span className={Styles["img-black"]}>♣</span>).
                        這個遊戲的目的是預測每輪抽出的 3 張牌的花色。如果結果與玩家的賭注相符，則玩家獲勝。
                    </p>
                    <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>{renderChoiceImage(locales.en, isSM, t)}</div>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default ThreeCardsGuideZH_TW;
