import React, { useEffect } from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

const BigSmallGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} หรือที่รู้จักกันทั่วไปว่า ไฮโล หรือ ไทไซ เป็นเกมที่เล่นด้วยลูกเต๋าสามลูก
                        ผู้เล่นวางเดิมพันและทำนายแต้มรวมของลูกเต๋าสามลูกใหญ่หรือเล็ก
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>ถ้วยลูกเต๋าถูกเขย่าเมื่อเริ่มรอบเกมส์</li>
                        <li>ในช่วงเวลาเดิมพัน ผู้เล่นสามารถเดิมพันได้ทั้ง ใหญ่และเล็ก แต่ไม่สามารถเดิมพันทั้งสองอย่างได้</li>
                        <ul className="detail">
                            <li>สูง: ผู้เล่นจะชนะถ้าแต้มรวมของลูกเต๋าสามลูก &gt;= 11</li>
                            <li>ต่ำ: ผู้เล่นจะชนะหากแต้มรวมของลูกเต๋าสามลูก &lt;= 10</li>
                        </ul>
                        <li>
                            ผู้เล่นสามารถเพิ่มจำนวนเงินเดิมพันโดยวางเดิมพันอื่นด้วยตัวเลือกเดียวกันก่อนหมดเวลาเดิมพัน หมายเหตุ
                            การวางเดิมพันไม่สามารถยกเลิกได้
                        </li>
                        <li>
                            เดิมพันขั้นต่ำและเดิมพันสูงสุดต้องอยู่ระหว่าง {maxBetFollowChoice?.minBetMain} -{" "}
                            {maxBetFollowChoice?.maxBetMain} และยอดเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>เมื่อหมดเวลาเดิมพันจะแสดงผลเดิมพัน หากผลลัพธ์ของลูกเต๋าสามลูกตรงกับเดิมพันของคุณ คุณจะชนะ</li>
                        <li>
                            ยอดรวมเงินเดิมพัน: หากจำนวนเงินเดิมพันทั้งหมดในสูงและต่ำไม่เท่ากัน
                            จำนวนเงินที่เหลือจะคืนให้กับผู้เล่นที่มีตั๋วเดิมพันล่าสุด
                            <p>
                                <strong>ตัวอย่าง:</strong> ผู้เล่น A เดิมพัน 100 ในสูง ผู้เล่น B เดิมพัน 40 ในต่ำ และ C เดิมพัน 80 ในต่ำ
                                ยอดรวมของจำนวนเงินเดิมพันทั้งหมดในสูงและต่ำ ระบบจะคืนเงิน 20 ให้กับผู้เล่น C
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน</h2>
                    <ul className="desc">
                        <li>การจ่ายเงินสำหรับ สูง, ต่ำ คือ {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>
                            จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย <strong>หมายเหตุ</strong> การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น
                        </li>
                        <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/big-small/md5_step1_th.png?v=3"}
                        step2ImageUrl={"/static/images/big-small/md5_step2_th.png?v=3"}
                        step3ImageUrl={"/static/images/big-small/md5_step3.png?v=1"}
                        step4ImageUrl={"/static/images/big-small/md5_step4.png?v=1"}
                        note={<div>หมายเหตุ: จากซ้ายไปขวา &#123;6, 2, 5&#125; จะตรงกับแต้มของลูกเต๋าสามลูก</div>}
                    />
                )}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default BigSmallGuideTH;
