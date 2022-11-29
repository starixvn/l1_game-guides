import React, { useEffect } from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step1_th.png?v=4" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step2_th.png?v=4" alt="md5-result" />
                    <div>Note: From the left to right, &#123;6, 2, 5&#125; correspond to the the value of three dice.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

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
                        {gameName} สูง ต่ำ หรือที่รู้จักกันทั่วไปว่า ไฮโล หรือ ไทไซ เป็นเกมที่เล่นด้วยลูกเต๋าสามลูก ผู้เล่นวางเดิมพันและทำนายแต้มรวมของลูกเต๋าสามลูกใหญ่หรือเล็ก
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>The dice cup is shaken at the beginning of the game round.</li>
                        <li>During the betting time, the players can bet on either BIG or SMALL, but not on both.</li>
                        <ul className="detail">
                            <li>สูง: ผู้เล่นจะชนะถ้าแต้มรวมของลูกเต๋าสามลูก &gt;= 11</li>
                            <li>ต่ำ: ผู้เล่นจะชนะหากแต้มรวมของลูกเต๋าสามลูก &lt;= 10</li>
                        </ul>
                        <li>
                        ผู้เล่นสามารถเพิ่มจำนวนเงินเดิมพันโดยวางเดิมพันอื่นด้วยตัวเลือกเดียวกันก่อนหมดเวลาเดิมพัน หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้
                        </li>
                        <li>
                            เดิมพันขั้นต่ำและเดิมพันสูงสุดต้องอยู่ระหว่าง {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain} และยอดเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Once the betting time has expired, the result will be shown. หากผลลัพธ์ของลูกเต๋าสามลูกตรงกับเดิมพันของคุณ คุณจะชนะ
                        </li>
                        <li>
                        ยอดรวมเงินเดิมพัน: หากจำนวนเงินเดิมพันทั้งหมดในสูงและต่ำไม่เท่ากัน จำนวนเงินที่เหลือจะคืนให้กับผู้เล่นที่มีตั๋วเดิมพันล่าสุด
                            <p>
                                <strong>ตัวอย่าง:</strong> ผู้เล่น A เดิมพัน 100 ในสูง ผู้เล่น B เดิมพัน 40 ในต่ำ และ C เดิมพัน 80 ในต่ำ ยอดรวมของจำนวนเงินเดิมพันทั้งหมดในสูงและต่ำ ระบบจะคืนเงิน 20 ให้กับผู้เล่น C
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
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default BigSmallGuideTH;
