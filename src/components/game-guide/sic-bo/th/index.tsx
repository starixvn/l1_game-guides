import React from "react";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../sic-bo.module.scss";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>เลือกมูลค่าชิปที่คุณต้องการเล่น ผู้เล่นสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม</li>
                <li>ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้</li>
                <li>เมื่อหมดเวลาเดิมพัน ถ้วยลูกเต๋าจะถูกเปิดขึ้นและแสดงผล</li>
                <li>ยอดเดิมพันสูงสุดต่อรอบคือ {maxBet}</li>
                <li>
                    จำนวนเงินเดิมพันทั้งหมดของผู้เล่นทั้งหมดที่แสดงในแต่ละตัวเลือกการเดิมพันนั้นใช้สำหรับอ้างอิงเท่านั้น 
                    สำหรับตลาดและสกุลเงินต่างๆ ยอดรวมจะถูกแปลงตามอัตราภายในที่บริษัทกำหนด
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    t: TFunction,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>
                    จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย หมายเหตุ การจ่ายเงินรวมนั้นจะรวมเงินเดิมพันด้วย
                    stake.
                </li>
                <li>
                    จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["bet-option-width"]}>ตัวเลือก</th>
                                    <th className={Styles["bet-choice-width"]}>ทางเลือก</th>
                                    <th>อัตราต่อรอง</th>
                                    <th className={Styles["bet-limit-width"]}>
                                        วงเงินเดิมพัน  <br></br>(ต่ำสุด - สูงสุด)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>ใหญ่ เล็ก</td>
                                    <td>ใหญ่</td>
                                    <td rowSpan={2}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>เล็ก</td>
                                </tr>
                                <tr>
                                    <td>ตองใดๆ</td>
                                    <td>ตองใดๆ</td>
                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>หมายเลขเฉพาะ</td>
                                    <td rowSpan={3}>เดิมพันหมายเลขใดก็ได้ตั้งแต่ 1 ถึง 6</td>
                                    <td className="text-start">
                                        {formatOdds(odds?.single, fractionalOddsFormat)} ถ้าหมายเลขที่เลือกปรากฏครั้งเดียว
                                    </td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecific1}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.double, fractionalOddsFormat)} ถ้าหมายเลขที่เลือกปรากฏสองครั้ง
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.triple, fractionalOddsFormat)} ถ้าหมายเลขที่เลือกปรากฏบนลูกเต๋าทั้งสามลูก
                                    </td>
                                </tr>
                                {renderPayoutsTableOnBody(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderPayoutsTableOnBody = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    t: TFunction,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <tr>
                <td rowSpan={14}>{t("sicbo:totalPoints")}</td>
                <td>4</td>
                <td rowSpan={2}>{formatOdds(odds?.total4, fractionalOddsFormat)}</td>
                <td rowSpan={8}>
                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal4}
                </td>
            </tr>
            <tr>
                <td>17</td>
            </tr>
            <tr>
                <td>5</td>
                <td rowSpan={2}>{formatOdds(odds?.total5, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>16</td>
            </tr>
            <tr>
                <td>6</td>
                <td rowSpan={2}>{formatOdds(odds?.total6, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>15</td>
            </tr>
            <tr>
                <td>7</td>
                <td rowSpan={2}>{formatOdds(odds?.total7, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>14</td>
            </tr>
            <tr>
                <td>8</td>
                <td rowSpan={2}>{formatOdds(odds?.total8, fractionalOddsFormat)}</td>
                <td rowSpan={6}>
                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal8}
                </td>
            </tr>
            <tr>
                <td>13</td>
            </tr>
            <tr>
                <td>9</td>
                <td rowSpan={4}>{formatOdds(odds?.total9, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>10</td>
            </tr>
            <tr>
                <td>11</td>
            </tr>
            <tr>
                <td>12</td>
            </tr>
        </>
    );
};

const SicBoGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "sicbo"]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} เป็นเกมลูกเต๋าคาสิโนที่ได้รับความนิยมอย่างแพร่หลายในเอเชีย เกมนี้เล่นด้วยลูกเต๋ามาตรฐานสามลูก 
                        วัตถุประสงค์ของเกมนี้คือการทำนายผลการทอยลูกเต๋า ผู้เล่นสามารถเดิมพันผลลูกเต๋าที่เฉพาะเจาะจงและมูลค่ารวมของลูกเต๋าได้
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>ตัวเลือกการเดิมพัน</h2>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th className={Styles["bet-option-width"]}>ตัวเลือก</th>
                                            <th className={Styles["bet-choice-width"]}>ทางเลือก</th>
                                            <th>คำอธิบาย</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>ใหญ่ เล็ก</td>
                                            <td>ใหญ่</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>เดิมพันคะแนนรวมของลูกเต๋าสามลูกอยู่ระหว่าง 11 ถึง 17 แต้ม </li>
                                                    <li>หากลูกเต๋าสามลูกมีมูลค่าเท่ากัน คุณจะแพ้การเดิมพันนี้</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>เล็ก</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>เดิมพันคะแนนรวมของลูกเต๋าสามลูกอยู่ระหว่าง 4 ถึง 10 แต้ม</li>
                                                    <li>หากลูกเต๋าสามลูกมีมูลค่าเท่ากัน คุณจะแพ้การเดิมพันนี้</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ตองใดๆ</td>
                                            <td>ตองใดๆ</td>
                                            <td className="text-start">ในการชนะเดิมพันนี้ ลูกเต๋าทั้งสามจะต้องแสดงหมายเลขเดียวกัน</td>
                                        </tr>
                                        <tr>
                                            <td>หมายเลขเฉพาะ</td>
                                            <td>เดิมพันหมายเลขใดก็ได้ตั้งแต่ 1 ถึง 6</td>
                                            <td className="text-start">
                                                เดิมพันหมายเลขเฉพาะตั้งแต่ 1 ถึง 6 หากหมายเลขที่เลือกปรากฏในสามลูกเต๋า คุณจะชนะ
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>คะแนนรวม</td>
                                            <td>เดิมพันหมายเลขใดก็ได้ตั้งแต่ 4 ถึง 17</td>
                                            <td className="text-start">
                                                เดิมพันคะแนนรวมของลูกเต๋าสามลูก ผู้เล่นทายว่าคะแนนรวมของลูกเต๋าสามลูกเท่ากับตัวเลขที่เลือกหรือไม่
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderPayouts(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                <li className="guide-item">
                    {renderMD5EN()}
                    <div className="content">
                        <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step1_th.png?v=4" alt="md5-string" />
                        </li>
                        <li>
                            <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step2_th.png?v=4" alt="md5-result" />
                            <div>Note: From the left to right, &#123;3, 2, 1&#125; correspond to the the value of three dice.</div>
                        </li>
                        <li>
                            <strong>Step 3:</strong> Go to{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            and paste the Result into the MD5 box.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step3_en.png?v=1" alt="hash-darling" />
                        </li>
                        <li>
                            <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5
                            string with the MD5 string in Step 1.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step4_en.png?v=1" alt="md5-checksum" />
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default SicBoGuideTH;
