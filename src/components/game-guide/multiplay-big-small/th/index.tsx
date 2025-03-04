import React, { useEffect } from "react";
import { formatOdds } from "../../../../helpers/number-helper";
import { isShowedMD5, renderTermsAndConditionsTH } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import MD5 from "../../base/md5";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderMd5Th = (locale?: string) => {
    return (
        <MD5
            locale={locale}
            step1ImageUrl={"/static/images/mega-bigsmall/md5_step1_th.png?v=3"}
            step2ImageUrl={"/static/images/mega-bigsmall/md5_step2_th.png?v=3"}
            step3ImageUrl={"/static/images/mega-bigsmall/md5_step3_en.png?v=1"}
            step4ImageUrl={"/static/images/mega-bigsmall/md5_step4_en.png?v=1"}
            note={<div>หมายเหตุ: จากซ้ายไปขวา &#123;6, 2, 5&#125; จะตรงกับแต้มของลูกเต๋าสามลูก</div>}
        />
    );
};

const MultiplayBigSmallGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat, orientation } = props;
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
                        "{gameName}" เป็นเกมส์ลูกเต๋าง่ายๆ ที่ประกอบด้วย 4 โต๊ะ ได้แก่ ลาสเวกัส, มาริน่าเบย์, มาเก๊า และ มอนติคาร์โล ซึ่ง มาริน่าเบย์ และ มอนติคาร์โล เป็นเวอร์ชั่นเทอร์โบที่ใช้เวลาในการเดิมพันสั้นลง
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>สำหรับแต่ละโต๊ะ ถ้วยลูกเต๋าจะถูกเขย่าเมื่อเริ่มรอบเกมส์</li>
                        <li>ผู้เล่นสามารถเดิมพันได้ทั้งใหญ่หรือเล็ก แต่ไม่ใช่ทั้งสองอย่าง</li>
                        <ul className="detail">
                            <li>ใหญ่: ผู้เล่นจะชนะถ้าแต้มรวมของลูกเต๋าสามลูก &gt;= 11</li>
                            <li>เล็ก: ผู้เล่นจะชนะหากแต้มรวมของลูกเต๋าสามลูก &lt;= 10</li>
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
                        <li>การจ่ายเงินสำหรับ ใหญ่ เล็ก คือ {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน</li>
                        <li>การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                        <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
                    </ul>
                </li>
                {isShowedMD5(environment, orientation) && renderMd5Th(props.locale)}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideTH;
