import React from "react";
import { useTheme } from "next-themes";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { locales, Themes } from "../../../../common/constants";
import Styles from "../three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (odds: OddsProps | undefined, maxBet: string | undefined) => {
    const bet = 10;
    const winRed = bet * (odds?.red ?? 0);
    const winDiamonds = bet * (odds?.diamonds ?? 0);
    const imgRed = "img-red";
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>ผู้เล่นสามารถเดิมพันได้มากกว่าหนึ่งตัวเลือกที่แสดงอยู่บนโต๊ะเกม.</li>
                <li>ต้องทำวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง. หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้.</li>
                <li>เมื่อหมดเวลาเดิมพัน ไพ่จะถูกเปิดขึ้น.</li>
                <li>ยอดเดิมพันสูงสุดต่อรอบคือ {maxBet} </li>
                <li>
                    สำรับมาตรฐานที่มีไพ่ 52 ใบ (ไม่รวม Joker) จะถูกสับเปลี่ยนทุกรอบ.{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>ตัวเลือก</th>
                                    <th>เงื่อนไขการชนะ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>แดง</td>
                                    <td className="text-start">การมีการ์ดอย่างน้อย 2 ใบ คือข้าวหลามตัดหรือหัวใจในผลลัพธ์.</td>
                                </tr>
                                <tr>
                                    <td>ดำ</td>
                                    <td className="text-start">การมีไพ่อย่างน้อย 2 ใบ คือโพดำหรือดอกจิกในผลลัพธ์.</td>
                                </tr>
                                <tr>
                                    <td>ข้าวหลามตัด</td>
                                    <td className="text-start">การมีการ์ดอย่างน้อย 1 ใบจะเป็นข้าวหลามตัดในผลลัพธ์.</td>
                                </tr>
                                <tr>
                                    <td>หัวใจ</td>
                                    <td className="text-start">การมีการ์ดอย่างน้อย 1 ใบจะเป็นหัวใจในผลลัพธ์. </td>
                                </tr>
                                <tr>
                                    <td>โพดำ</td>
                                    <td className="text-start">การมีไพ่อย่างน้อย 1 ใบเป็นโพดำในผลลัพธ์.</td>
                                </tr>
                                <tr>
                                    <td>ดอกจิก</td>
                                    <td className="text-start">การมีไพ่อย่างน้อย 1 ใบจะเป็นดอกจิกในผลลัพธ์. </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>หมายเหตุ:</strong> สำหรับตัวเลือก ข้าวหลามตัด ,หัวใจ , โพดำ, และ ดอกจิก
                การจ่ายเงินจะไม่เปลี่ยนแปลงหากผลลัพธ์มีไพ่ชุดเดียวกันมากกว่า 1 ใบ.
            </p>
            <p>
                <strong>ตัวอย่างเช่น :</strong>
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

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย.</li>
                <li>การจ่ายเงินจะรวมกับเงินเดิมพันเริ่มต้นด้วย.</li>
                <li>
                    จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>ตัวเลือก</th>
                                    <th>อัตราต่อรอง </th>
                                    <th>การจำกัดการเดิมพัน (ต่ำสุดสูงสุด)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>แดง</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ดำ</td>
                                </tr>
                                <tr>
                                    <td>ข้าวหลามตัด</td>
                                    <td rowSpan={4}>{formatOdds(odds?.diamonds, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>หัวใจ</td>
                                </tr>
                                <tr>
                                    <td>โพดำ</td>
                                </tr>
                                <tr>
                                    <td>ดอกจิก</td>
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
                    src={`./static/images/three-cards/table_text_red_th.png`}
                    alt="red"
                ></img>
                <p>{t("threecards:red")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["black"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["black-en"] : Styles["black"]} ${
                        Styles[classMobile]
                    }`}
                    src={`./static/images/three-cards/table_txt_black_th.png`}
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

const ThreeCardsGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isSM = theme === Themes.blue ? false : true;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "threecards"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className={`content ${Styles["content-customize"]}`}>                        
                        เกมส์ไพ่สามใบนั้นเป็นเกมที่น่าตื่นเต้นอีกเกมหนึ่ง ที่เล่นใบไพ่ 52 ใบ มาตรฐานทั่วไป (ยกเว้น โจ๊กเกอร์ ) มีตัวเลือกการเดิมพัน 6 แบบ ได้แก่ แดง ดำ ข้าวหลามตัด (<span className={Styles["img-red"]}>♦</span>),หัวใจ (<span className={Styles["img-red"]}>♥</span>), โพดำ(<span className={Styles["img-black"]}>♠</span>), และ ดอกจิก (<span className={Styles["img-black"]}>♣</span>). 
                        จุดประสงค์ของเกมนี้คือการทายชุดไพ่ที่จั่วได้ 3 ใบในแต่ละรอบ หากผลลัพธ์ตรงกับเดิมพันของผู้เล่น ผู้เล่นจะชนะ
                    </p>
                    <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>{renderChoiceImage(locales.en, isSM, t)}</div>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default ThreeCardsGuideTH;
