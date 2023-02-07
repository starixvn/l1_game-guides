import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { StatisticalTable } from "../../../shared/se-die/th";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>
                    ผู้เล่นสามารถเดิมพันได้ทั้งคี่หรือคู่ แต่ไม่ใช่ทั้งสองอย่างพร้อมกัน
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>ตัวเลือก</th>
                                    <th>เงื่อนไขการชนะ</th>
                                    <th>คำอธิบาย</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>คี่</td>
                                    <td>3 แดง 1 ขาว</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>1 แดง 3 ขาว</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>คู่</td>
                                    <td>4 แดง</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>4 ขาว</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>2 แดง 2 ขาว</td>
                                    {renderTwoRedTwoWhite()}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>ผู้เล่นสามารถเพิ่มจำนวนเงินเดิมพันโดยวางเดิมพันอื่นด้วยตัวเลือกเดียวกันก่อนหมดเวลาเดิมพัน</li>
                <li>เงินเดิมพันรวมสูงสุดต่อรอบคือ {maxBet}. หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้</li>
                <li>
                    ยอดเงินเดิมพันที่สมดุล: หากจำนวนเงินเดิมพันทั้งหมดในคี่และคู่ไม่เท่ากัน
                    จำนวนเงินส่วนต่างจะคืนให้กับผู้เล่นที่มีตั๋วเดิมพันล่าสุด<br></br>
                    <strong>ตัวอย่าง:</strong> ผู้เล่น A เดิมพัน 100 ในคี่ ผู้เล่น B เดิมพัน 30 ในคู่และ C เดิมพัน 90 ในคู่
                    ยอดรวมของจำนวนเงินเดิมพันทั้งหมดในคี่และคู่ ระบบจะคืนเงิน 20 ให้กับผู้เล่น C
                </li>
            </ul>
        </>
    );
};

const renderStatisticTable = () => {
    return (
        <li className="guide-item">
            <h2>ตารางสถิติ</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const SeDieGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        Special Se Die เป็นเกม Se Die เวอร์ชันมินิที่มีเพียงสองตัวเลือกการเดิมพันแบบคี่และคู่ เกมนี้เล่นด้วยปุ่มสี 4 ปุ่ม
                        แต่ละปุ่มมี 2 ด้านคือสีแดงและสีขาว วัตถุประสงค์ของเกมนี้คือการทำนายผลของปุ่ม 4 ปุ่ม
                        หากผลลัพธ์ตรงกับเดิมพันของผู้เล่น ผู้เล่นจะชนะ
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน</h2>
                    <ul className="desc">
                        <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย หมายเหตุ การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                        <li>
                            จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>ตัวเลือก</th>
                                            <th>อัตราต่อรอง</th>
                                            <th>
                                                วงเงินเดิมพัน <br /> (ต่ำสุด - สูงสุด)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>คี่</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>คู่</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatisticTable()}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default SeDieGuideTH;
