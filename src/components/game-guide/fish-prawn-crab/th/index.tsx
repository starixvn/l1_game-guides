import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

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
                        {gameName} หรือที่เรียกว่า Hoo Hey How เป็นเกมที่ได้รับความนิยมในเอเชียโดยใช้ลูกเต๋าสามลูก ลูกเต๋าแต่ละลูกมีสัญลักษณ์ที่ไม่ซ้ำกัน 6 แบบ (ปลา กุ้ง ปู ไก่ น้ำเต้า และกวาง) 
                        มีตัวเลือกการเดิมพัน 6 แบบให้เลือกสำหรับแต่ละสัญลักษณ์ ผู้เล่นวางเดิมพันที่สัญลักษณ์จะปรากฏขึ้น
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
                        <li>The dice cup will be shaken at the beginning of the game round.</li>
                        <li>
                            When the betting time has expired, the dice results will be displayed. หากสัญลักษณ์ที่คุณเดิมพันปรากฏขึ้น แสดงว่าคุณชนะ
                        </li>
                        <li>
                            Symbols will be numbered from 1 to 6 according to their position on the game table. And the assigned number will
                            be shown during the setting time only.
                        </li>
                        <li>
                            เดิมพันขั้นต่ำและเดิมพันสูงสุดต้องอยู่ระหว่าง {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice} และเงินเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            การจ่ายเงิน:
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} ถ้าสัญลักษณ์ที่เลือกปรากฏครั้งเดียว.</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} ถ้าสัญลักษณ์ที่เลือกปรากฏสองครั้ง</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} ถ้าสัญลักษณ์ที่เลือกปรากฏสามครั้ง</li>
                            </ul>
                        </li>
                        <li>
                            ผู้เล่นสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้
                        </li>
                        <li>
                            จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น
                        </li>
                        <li>
                            จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                            <div>
                                <strong>ตัวอย่าง:</strong>
                                <ul className="detail">
                                    <li>
                                        เดิมพัน 10 กับ “ปลา” และมีสัญลักษณ์ปลาหนึ่งตัวปรากฏขึ้น จากนั้นคุณจะได้รับเงิน {" "}
                                        <strong>{10 * (odds?.single ?? 0)}</strong>
                                    </li>
                                    <li>
                                        เดิมพัน 10 บน “ปู” และมีสัญลักษณ์ปูสองตัวปรากฏขึ้น จากนั้นคุณจะได้รับเงิน {" "}
                                        <strong>{10 * (odds?.double ?? 0)}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li className="guide-item">
                        {renderMD5EN()}
                        <div className="content">
                            <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
                        </div>
                        <ul className="desc">
                            <li>
                                <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step1_en.png?v=3"
                                    alt="md5-string"
                                />
                            </li>
                            <li>
                                <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step2_en.png?v=3"
                                    alt="md5-result"
                                />
                                <div>
                                    Note: From the left to right, &#123;5, 1, 1&#125; correspond to the assigned number of each symbol that
                                    appears on three dice
                                </div>
                            </li>
                            <li>
                                <strong>Step 3:</strong> Go to{" "}
                                <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                    https://md5.services/
                                </a>{" "}
                                and paste the Result into the MD5 box.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step3_en.png?v=1"
                                    alt="hash-darling"
                                />
                            </li>
                            <li>
                                <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5
                                string with the MD5 string in Step 1.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step4_en.png?v=1"
                                    alt="md5-checksum"
                                />
                            </li>
                        </ul>
                    </li>
                )}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideTH;
