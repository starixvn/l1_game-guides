import React, { useEffect } from "react";

import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsTH } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderMD5TH } from "../../../shared/md5-count-down-timer/th";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> ตัวอย่าง:</strong> ตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์
            </div>
            <ul className="desc">
                <li>
                    <strong>ขั้นตอนที่ 1:</strong> คัดลอกคีย์ MD5 ก่อนประกาศผล
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step1_en.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>ขั้นตอนที่ 2:</strong> คัดลอกผลลัพธ์หลังจากเผยแพร่แล้ว
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step2_en.png?v=3" alt="md5-result" />
                    <div>หมายเหตุ: จากซ้ายไปขวา &#123;6, 2, 5&#125; จะตรงกับแต้มของลูกเต๋าสามลูก</div>
                </li>
                <li>
                    <strong>ขั้นตอนที่ 3:</strong> ไปที่{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    และวางในช่อง MD5
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>ขั้นตอนที่ 4:</strong> กดปุ่ม “hash darling, hash!” ปุ่มและเปรียบเทียบสตริง MD5
                    ของการตรวจสอบความถูกต้องของข้อมูลที่สร้างขึ้นใหม่กับสตริง MD5 ในขั้นตอนที่ 1
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const MultiplayBigSmallGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat } = props;
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
                        {gameName} - เวอร์ชัน "การเดิมพันพูลที่ไม่สมดุล" ของ Big Small ที่ประกอบด้วย 4 โต๊ะ: ลาสเวกัส, มาริน่าเบย์, มาเก๊า
                        และมอนติคาร์โล ซึ่งมารีน่าเบย์และมอนติคาร์โลเป็นเวอร์ชันเทอร์โบที่มีเวลาในการเดิมพันสั้นลง {gameName} ให้คุณเล่น 4
                        โต๊ะพร้อมกันพร้อมประสบการณ์ใหม่ที่น่าตื่นเต้นมากมาย
                        เกมส์นี้เล่นโดยใช้ลูกเต๋าสามลูกและผู้เล่นวางเดิมพันว่าแต้มรวมของลูกเต๋าสามลูกนั้นใหญ่หรือเล็ก
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>สำหรับแต่ละโต๊ะ ถ้วยลูกเต๋าจะถูกเขย่าเมื่อเริ่มรอบเกมส์</li>
                        <li>ผู้เล่นสามารถเดิมพันได้ทั้งสูงหรือต่ำ แต่ไม่ใช่ทั้งสองอย่าง</li>
                        <ul className="detail">
                            <li>สูง: ผู้เล่นจะชนะถ้าแต้มรวมของลูกเต๋าสามลูก &gt;= 11</li>
                            <li>ต่ำ: ผู้เล่นจะชนะหากแต้มรวมของลูกเต๋าสามลูก &lt;= 10</li>
                        </ul>
                        <li>
                            ผู้เล่นสามารถเพิ่มเงินเดิมพันได้โดยการวางเดิมพันอีกครั้งด้วยตัวเลือกเดียวกันก่อนที่เวลาเดิมพันจะสิ้นสุดลง
                            หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้
                        </li>
                        <li>
                            เดิมพันขั้นต่ำและเดิมพันสูงสุดต้องอยู่ระหว่าง {maxBetFollowChoice?.minBetMain} -{" "}
                            {maxBetFollowChoice?.maxBetMain} และยอดเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>เมื่อหมดเวลาเดิมพันจะแสดงผลเดิมพัน หากผลลัพธ์ของลูกเต๋าสามลูกตรงกับเดิมพันของคุณ คุณจะชนะ</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน</h2>
                    <ul className="desc">
                        <li>การจ่ายเงินสำหรับ สูง, ต่ำ คือ {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย</li>
                        <li>การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                        <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5TH()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideTH;
