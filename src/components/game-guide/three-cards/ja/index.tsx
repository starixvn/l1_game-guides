import React from "react";
import { useTheme } from "next-themes";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsJA } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { locales, Themes } from "../../../../common/constants";
import Styles from "../three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    const imgRed = "img-red";
    return (
        <>
            <h2>ゲームルール</h2>
            <ul className="desc">
                <li>プレイヤーは、ゲームテーブルに表示されている1つまたは複数のベットオプションにベットできます。</li>
                <li>すべてのベットは、ベット時間が終了する前に配置する必要があります。注意：配置されたベットはキャンセルできません。</li>
                <li>ベット時間が終了すると、カードが公開されます。</li>
                <li>ラウンドあたりの最大総賭け金は {maxBet} です</li>
                <li>
                    52枚のカード（ジョーカーを除く）の標準デッキは、毎ラウンド後にシャッフルされます。{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>オプション</th>
                                    <th>勝利条件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>赤</td>
                                    <td className="text-start">結果にダイヤまたはハートのカードが少なくとも2枚あること。</td>
                                </tr>
                                <tr>
                                    <td>黒</td>
                                    <td className="text-start">結果にスペードまたはクラブのカードが少なくとも2枚あること。</td>
                                </tr>
                                <tr>
                                    <td>ダイヤ</td>
                                    <td className="text-start">結果にダイヤのカードが少なくとも1枚あること。</td>
                                </tr>
                                <tr>
                                    <td>ハート</td>
                                    <td className="text-start">結果にハートのカードが少なくとも1枚あること。</td>
                                </tr>
                                <tr>
                                    <td>スペード</td>
                                    <td className="text-start">結果にスペードのカードが少なくとも1枚あること。</td>
                                </tr>
                                <tr>
                                    <td>クラブ</td>
                                    <td className="text-start">結果にクラブのカードが少なくとも1枚あること。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>注意：</strong>ダイヤ、ハート、スペード、クラブのオプションについては、結果に同じスートのカードが1枚以上ある場合でも配当は変わりません。
            </p>
            <p>
                <strong>例：</strong>
            </p>
            <ul className="desc">
                <li>
                    ダイヤオプションにベット。結果にダイヤ（<span className={Styles[imgRed]}>♦</span>）が1枚、2枚、または3枚ある場合、配当は同じです。
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>配当</h2>
            <ul className="desc">
                <li>勝金額はベットオッズに従って計算されます。</li>
                <li>配当には初期賭け金が含まれます。</li>
                <li>
                    ベットが決済されると、すべての勝金額がすぐにアカウント残高に追加されます。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>オプション</th>
                                    <th>オッズ</th>
                                    <th>ベット制限（最小 - 最大）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>赤</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>黒</td>
                                </tr>
                                <tr>
                                    <td>ダイヤ</td>
                                    <td rowSpan={4}>{formatOdds(odds?.diamonds, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ハート</td>
                                </tr>
                                <tr>
                                    <td>スペード</td>
                                </tr>
                                <tr>
                                    <td>クラブ</td>
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
                    src={`./static/images/three-cards/table_text_red_ja.png`}
                    alt="red"
                ></img>
                <p>{t("threecards:red")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["black"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["black-en"] : Styles["black"]} ${
                        Styles[classMobile]
                    }`}
                    src={`./static/images/three-cards/table_txt_black_ja.png`}
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

const ThreeCardsGuideJA: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isSM = theme === Themes.blue ? false : true;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "threecards"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>紹介</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName} は、標準的な52枚のカードデッキ（ジョーカーを除く）でプレイされる、もう一つのエキサイティングなカードゲームです。
                        赤、黒、ダイヤ（<span className={Styles["img-red"]}>♦</span>）、ハート（<span className={Styles["img-red"]}>♥</span>）、スペード（<span className={Styles["img-black"]}>♠</span>）、クラブ（<span className={Styles["img-black"]}>♣</span>）の6つのベットオプションがあります。
                        このゲームの目標は、各ラウンドで引かれる3枚のカードのスートを予測することです。結果がプレイヤーのベットと一致する場合、プレイヤーが勝利します。
                    </p>
                    <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>{renderChoiceImage(locales.en, isSM, t)}</div>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderTermsAndConditionsJA()}
            </ul>
        </>
    );
};
export default ThreeCardsGuideJA; 