import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

export const renderIconChoice = () => {
    return (
        <>
            <div className="symbol-size icon-nai"></div>
            <div className="symbol-size icon-bau"></div>
            <div className="symbol-size icon-ga"></div>
            <div className="symbol-size icon-ca"></div>
            <div className="symbol-size icon-cua"></div>
            <div className="symbol-size icon-tom"></div>
        </>
    );
};

const FishPrawnCrabGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        ปลา กุ้ง ปูหรือที่เรียกว่า Hoo Hey How เป็นเกมที่ได้รับความนิยมในเอเชียโดยใช้ลูกเต๋าสามลูก
                        ลูกเต๋าแต่ละลูกมีสัญลักษณ์ที่ไม่ซ้ำกัน 6 แบบ (ปลา กุ้ง ปู ไก่ น้ำเต้า และกวาง) มีตัวเลือกการเดิมพัน 6
                        แบบให้เลือกสำหรับแต่ละสัญลักษณ์ ผู้เล่นวางเดิมพันที่สัญลักษณ์จะปรากฏขึ้น
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">กวาง</div>
                        <div className="text">น้ำเต้า</div>
                        <div className="text">ไก่ชน</div>
                        <div className="text">ปลา</div>
                        <div className="text">ปู</div>
                        <div className="text">กุ้ง</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>ถ้วยลูกเต๋าจะถูกเขย่าเมื่อเริ่มรอบเกมส์</li>
                        <li>เมื่อหมดเวลาเดิมพันจะแสดงผลลูกเต๋า</li>
                        <li>
                            สัญลักษณ์จะมีหมายเลขตั้งแต่ 1 ถึง 6 ตามตำแหน่งบนโต๊ะเกมส์ และหมายเลขที่กำหนดจะแสดงในช่วงเวลาที่ตั้งไว้เท่านั้น
                        </li>
                        <li>
                            เดิมพันขั้นต่ำและเดิมพันสูงสุดต้องอยู่ระหว่าง {maxBetFollowChoice?.minBetMain} -{" "}
                            {maxBetFollowChoice?.maxBetChoice} และเงินเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            อัตราเดิมพัน
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} ถ้าสัญลักษณ์ที่เลือกปรากฏครั้งเดียว.</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} ถ้าสัญลักษณ์ที่เลือกปรากฏสองครั้ง</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} ถ้าสัญลักษณ์ที่เลือกปรากฏสามครั้ง</li>
                            </ul>
                        </li>
                        <li>
                            ผู้เล่นสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้
                        </li>
                        <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                        <li>
                            จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                            <div>
                                <strong>ตัวอย่าง:</strong>
                                <ul className="detail">
                                    <li>
                                        เดิมพัน 10 กับ “ปลา” และมีสัญลักษณ์ปลาหนึ่งตัวปรากฏขึ้น จากนั้นคุณจะได้รับเงิน{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong>
                                    </li>
                                    <li>
                                        เดิมพัน 10 บน “ปู” และมีสัญลักษณ์ปูสองตัวปรากฏขึ้น จากนั้นคุณจะได้รับเงิน{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/fish-prawn-crab/md5_step1_th.png?v=4"}
                        step2ImageUrl={"/static/images/fish-prawn-crab/md5_step2_th.png?v=4"}
                        step3ImageUrl={"/static/images/fish-prawn-crab/md5_step3_en.png?v=4"}
                        step4ImageUrl={"/static/images/fish-prawn-crab/md5_step4_en.png?v=4"}
                        note={
                            <div>หมายเหตุ: จากซ้ายไปขวา {"{3, 1, 2}"} จะตรงกับหมายเลขที่กำหนดของแต่ละสัญลักษณ์ที่ปรากฏบนลูกเต๋าสามลูก</div>
                        }
                    />
                )}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideTH;
