import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../dragon-tiger.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const DragonTigerGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} เป็นเกมไพ่ที่เล่นง่ายคล้ายกับ บาคาร่า เกมนี้เล่นด้วยสำรับไพ่มาตรฐาน 52 ใบหนึ่งสำรับ (ไม่รวม Joker) 
                        มีตัวเลือกการเดิมพัน 3 แบบ: มังกร เสือ และเสมอ
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>จั่วไพ่สองใบ หนึ่งใบสำหรับมังกรและอีกใบสำหรับเสือ </li>
                        <li>
                            ผู้เล่นเดิมพันมังกรหรือเสือตัวใดตัวหนึ่งจะชนะด้วยไพ่ที่มีมูลค่าสูงกว่า 
                            ผู้เล่นยังสามารถเดิมพันตัวเลือก “เสมอ” ได้หากพวกเขาทำนายว่ามังกรและเสือจะมีไพ่ที่มีมูลค่าเท่ากันโดยไม่คำนึงถึงชุด
                        </li>
                        <li>
                            เกมจะตัดสินการชนะหรือแพ้โดยการเปรียบเทียบดอกของไพ่แทนชุด K คือค่าสูงสุด ในขณะที่ Ace เป็นค่าต่ำสุด
                        </li>
                        <li>
                            ค่าแต้มของการ์ด:
                            <ul className="detail">
                                <li>
                                    การจัดอันดับไพ่จากต่ำสุดไปสูงสุดมีดังนี้: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10,Jack, Queen, and King.
                                </li>
                                <li>Ace stands for 1 point; Jack is 11 points; Queen stands for 12 points and King is 13 points.</li>
                                <li>All cards from 2 to 10 are counted at face value.</li>
                            </ul>
                        </li>
                        <li>
                            ผู้เล่นสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้
                        </li>
                        <li>สำรับมาตรฐานที่มีไพ่ 52 ใบ (ไม่รวม Joker) จะถูกสับเปลี่ยนทุกรอบ</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน </h2>
                    <ul className="desc">
                        <li>
                            จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น
                        </li>
                        <li>
                            จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>ตัวเลือก</th>
                                            <th>อัตราต่อรอง</th>
                                            <th className={Styles["bet-limit-width"]}>
                                                วงเงินเดิมพัน  <br /> (ต่ำสุด - สูงสุด)
                                            </th>
                                            <th>เดิมพันรวมสูงสุดต่อรอบ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>มังกร</td>
                                            <td rowSpan={2}>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                            </td>
                                            <td rowSpan={3}>{maxBetFollowChoice?.maxBetMain}</td>
                                        </tr>
                                        <tr>
                                            <td>เสือ</td>
                                        </tr>
                                        <tr>
                                            <td>เสมอ</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTie}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <strong>หมายเหตุ: </strong> ผู้เล่นเดิมพันมังกรหรือเสือจะเสีย 50% ของเงินเดิมพันหากผลออกมาเสมอกัน
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default DragonTigerGuideTH;
