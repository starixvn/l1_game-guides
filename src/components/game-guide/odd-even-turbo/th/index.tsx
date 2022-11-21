import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { formatOdds } from "../../../../helpers/number-helper";

const OddEvenTurboGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} เป็นเกมลูกเต๋าง่ายๆ ที่คล้ายกับเกม สูงต่ำ. เกมนี้เล่นด้วยลูกเต๋าสามลูกและผู้เล่นทำนายแต้มรวมของลูกเต๋าสามลูกเป็นคี่หรือคู่
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>The dice cup is shaken at the beginning of the game round.</li>
                        <li>ผู้เล่นสามารถเดิมพันได้ทั้งคู่หรือคี่ แต่ไม่ใช่ทั้งสองอย่างพร้อมกัน</li>
                        <ul className="detail">
                            <li>คี่: ผู้เล่นจะชนะหากแต้มรวมของลูกเต๋าสามลูกเป็นเลขคี่ </li>
                            <li>คู่: ผู้เล่นจะชนะถ้าแต้มรวมของลูกเต๋าสามลูกเป็นเลขคู่ </li>
                        </ul>
                        <li>
                            ตรวจสอบให้แน่ใจว่าคุณเดิมพันตามจำนวนที่คุณพอใจ คลิกยืนยันเพื่อเสร็จสิ้นหรือปุ่มยกเลิกหากคุณต้องการรีเซ็ตการเดิมพันทั้งหมดของคุณ
                        </li>
                        <li>
                            ผู้เล่นสามารถเพิ่มจำนวนเงินเดิมพันโดยวางเดิมพันอื่นด้วยตัวเลือกเดียวกันก่อนหมดเวลาเดิมพัน
                        </li>
                        <li>
                            เดิมพันขั้นต่ำและเดิมพันสูงสุดต้องอยู่ระหว่าง {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain} และยอดเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Once the betting time has expired, the result will be shown. หากผลลัพธ์ของลูกเต๋าสามลูกตรงกับเดิมพันของคุณ คุณจะชนะ
                        </li>
                        <li>
                            ยอดเงินเดิมพันที่สมดุล: หากจำนวนเงินเดิมพันทั้งหมดในคี่และคู่ไม่เท่ากัน จำนวนเงินส่วนต่างจะคืนให้กับผู้เล่นที่มีตั๋วเดิมพันล่าสุด<br></br>
                            <strong>ตัวอย่าง:</strong> ผู้เล่น A เดิมพัน 60 ในคี่ ผู้เล่น B เดิมพัน 70 ในคู่และ C เดิมพัน 20 ในคู่ 
                            ยอดรวมของจำนวนเงินเดิมพันทั้งหมดในคี่และคู่ ระบบจะคืนเงิน 20 ให้กับผู้เล่น C และ 10 ให้แก่ผู้เล่น B
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน</h2>
                    <ul className="desc">
                        <li>การจ่ายเงินสำหรับ คี่,คู่ คือ {formatOdds(odds?.even, fractionalOddsFormat)}</li>
                        <li>
                            จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น
                        </li>
                        <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
                    </ul>
                </li>
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default OddEvenTurboGuideTH;
