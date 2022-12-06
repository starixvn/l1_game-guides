import React from "react";
import { useTranslation } from "next-i18next";

import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { CardPointValuesTable } from "..";
import Styles from "../blackjack.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsTH } from "../../../shared";

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined) => {
    const wrapperImg = "wrapper-img";
    const optionsWidth = "options-width";
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>เลือกมูลค่าชิปและคลิกที่วงกลม (จุดเดิมพัน) ของแต่ละมือที่คุณต้องการเดิมพัน</li>
                <li>ผู้เล่นสามารถเล่นได้มากกว่าหนึ่งมือในเวลาเดียวกัน (มากถึง 3)</li>
                <li>
                    คลิกปุ่ม “ดีล” เพื่อยืนยันการเดิมพัน หรือ “X” เพื่อรีเซ็ตการเดิมพันของคุณ
                    หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้หลังจากแจกไพ่แล้ว
                </li>
                <li>
                    เดิมพันขั้นต่ำและเดิมพันสูงสุดต้องอยู่ระหว่าง {minBet} - {maxBet} และเงินเดิมพันรวมสูงสุดต่อมือคือ {maxBet}
                </li>
                <li>
                    หลังจากที่ผู้เล่นคลิกปุ่ม “ดีล” จะมีการแจกไพ่สองใบสำหรับมือของผู้เล่นและเจ้ามือแต่ละคน ไพ่ของผู้เล่นหงายขึ้นในขณะที่เจ้ามือ - ไพ่ใบแรกหงายหน้าอีกใบคว่ำหน้า
                </li>
                <li>ไพ่จะถูกสับหลังจากแต่ละรอบ</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">กฎสำหรับมือของผู้เล่น</span>
                        <ul className="desc">
                            <li>
                                หากผู้เล่นได้รับ 21 แต้มจากไพ่สองใบแรก (แบล็คแจ็ค) ผู้เล่นจะชนะโดยอัตโนมัติ ยกเว้น DeaIer มีแบล็คแจ็คด้วย
                            </li>
                            <li>
                                เมื่อทั้งผู้เล่นและเจ้ามือมีแบล็คแจ็ค ผลที่ได้คือ เสมอ (เสมอ) และเงินเดิมพันจะถูกส่งคืนให้กับผู้เล่น
                            </li>
                            <li>Iถ้ายอดรวมของผู้เล่นมากกว่า 21 (Bust) ผู้เล่นแพ้แม้ว่าเจ้ามือจะเกิน 21 ก็ตาม</li>
                            <li>
                                ขึ้นอยู่กับคะแนนรวมของไพ่สองใบแรก ผู้เล่นจะมีสี่ตัวเลือก: “Hit”, “Stand”, “Double” หรือ “Split” ตามกฎของเกม
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles[optionsWidth]}>ตัวเลือก</th>
                                                <th> คำอธิบาย</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    สู้
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_hit.png"
                                                        alt="guide_hit"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>รับการ์ดเพิ่มเติมเพื่อปรับแต้มในมือของคุณ</li>
                                                        <li>
                                                            ไม่มีการจำกัดจำนวนไพ่ที่คุณสามารถจั่วได้จนกว่ามูลค่ารวมของมือจะเท่ากับ 21 หรือ Bust
                                                        </li>
                                                        <li>
                                                            ถ้ามือของผู้เล่นเกิน 21 ผู้เล่นแพ้สำหรับมือนั้น ไม่ว่าเจ้ามือจะมีอะไรก็ตาม
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    หยุด
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_stop.png"
                                                        alt="guide_stop"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            คลิกปุ่ม “Stand” หากผู้เล่นต้องการหยุดจั่วไพ่และจบเทิร์น
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    เรียกไพ่เพิ่ม
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_split.png"
                                                        alt="guide_split"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            หากไพ่สองใบแรกของมือมีค่าเท่ากัน (เช่น 6-6 หรือ JQ) ผู้เล่นสามารถแยกไพ่ออกเป็นสองมือแยกกัน
                                                        </li>
                                                        <li>
                                                            เมื่อเลือก “เรียกไพ่เพิ่ม” แล้ว จะมีการวางเดิมพันเพิ่มเติมเท่ากับเดิมพันเดิมของคุณ
                                                        </li>
                                                        <li>ผู้เล่นสามารถเรียกไพ่เพิ่มได้เพียงมือละ 1 ครั้ง</li>
                                                    </ul>
                                                    <strong>หมายเหตุุ:</strong>
                                                    <ul className="desc">
                                                        <li>
                                                            มีข้อยกเว้นในการเรียกไไพ่เพิ่ม A-A ในการแจกไพ่เพิ่มเพียงใบเดียวสำหรับแต่ละมือใหม่
                                                        </li>
                                                        <li>
                                                            ในมือมีแต้มรวม 21 แต้มด้วยไพ่ 2 ใบหลังจากเรียกไพ่เพิ่มเป็น 21 ไม่ใช่แบล็คแจ็ค
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    เดิมพันเพิ่ม
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_double.png"
                                                        alt="guide_double"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            หากแต้มรวมของไพ่สองใบแรกเป็น 9, 10 หรือ 11 แต้ม ผู้เล่นสามารถเดิมพันเพิ่มของเงินเดิมพันเดิมและรับไพ่เพิ่มเท่านั้น มือจะยึดหลังจากแจกไพ่
                                                        </li>
                                                    </ul>
                                                    <strong>หมายเหตุ</strong>: ไม่ใช้ “เรียกไพ่เพิ่ม” กับมือหลังจากแยกไพ่
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">กฎสำหรับมือของเจ้ามือ</span>
                        <ul className="desc">
                            <li>
                                เจ้ามือเริ่มมือของเขา/หลังจากที่ผู้เล่นรับไพ่สำเร็จ เจ้ามือต้องเสมอที่ “16 หรือน้อยกว่า” และยึดมากกว่า “7 ขึ้นไป”
                            </li>
                            <li>ถ้าผู้เล่นและเจ้ามือมีผลรวมเท่ากัน ผลลัพธ์จะเป็น PUSH (เสมอ) และเงินเดิมพันจะถูกส่งคืน </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <li className="guide-item">
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>
                    จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย 
                    หมายเหตุ การจ่ายเงินจะรวมเงินเดิมพันเริ่มต้นด้วย
                </li>
                <li>
                    จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>ราคาต่อรอง</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>แบล็คแจ็คชนะ</td>
                                    <td>{formatOdds(odds?.blackjack, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>ชนะปกติ</td>
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

const BlackjackGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "blackjack"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} (เรียกอีกอย่างว่า {`21`}) เป็นเกมไพ่คาสิโนที่สนุกสนานและเพลิดเพลิน เกมนี้เล่นโดยใช้สำรับมาตรฐานหกสำรับ 52 ใบ (ไม่รวมโจ๊กเกอร์) ที่สับรวมกัน
                        ในแบล็คแจ็ค ผู้เล่นจะเล่นกับเจ้ามือ และเป้าหมายของเกมคือการมีแต้มรวมของไพ่ของคุณให้ใกล้เคียงกับ 21 มากที่สุดเท่าที่จะเป็นไปได้ โดยไม่ให้เกิน 21 
                        ผู้เล่นจะชนะถ้าแต้มรวมของไพ่ของคุณใกล้ 21 มากกว่าไพ่ของเจ้ามือ
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain)}</li>
                <li className="guide-item">
                    <h2>กฎการคำนวณคะแนน</h2>
                    <ul className="desc">
                        <li>
                            ไพ่ทั้งหมดตั้งแต่ 2 ถึง 10 จะถูกนับตามมูลค่าที่ตราไว้ โดยไม่คำนึงถึงชุด และไพ่หน้าไพ่ (แจ็ค ควีน คิง) จะถูกนับเป็นสิบ
                        </li>
                        <li>เอซจะถูกนับเป็น 1 หรือ 11 อย่างใดอย่างหนึ่งดีที่สุดสำหรับมือของคุณ</li>
                        <li>
                            มือที่มีแบล็กแจ็ก (21 แต้มในไพ่สองใบแรก) จะชนะมากกว่า 21 แต้มด้วยไพ่ 3 ใบขึ้นไป
                        </li>
                        <li>แต้มของไพ่:{CardPointValuesTable(t)}</li>
                    </ul>
                    <strong>ตัวอย่าง : </strong>
                    <ul className="detail">
                        <li>มือที่มีเก้า (9), แปด (8) และเอซ (A) =&gt; มูลค่าของมือคือ 18</li>
                        <li>มือที่มีเจ็ด (7) และเอซ (A) =&gt; มูลค่าของมือคือ 18</li>
                    </ul>
                </li>
                {renderPayouts(odds, fractionalOddsFormat)}
                {renderTermsAndConditionsTH("", 23)}        
            </ul>
        </>
    );
};
export default BlackjackGuideTH;
