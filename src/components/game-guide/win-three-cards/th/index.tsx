import React from "react";
import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../win-three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderMD5TH } from "../../../shared/md5-count-down-timer/th";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>กฎของเกมส์</h2>
            <ul className="desc">
                <li>ในตอนเริ่มต้น ไพ่คว่ำหน้าสามใบจะถูกแจกให้กับมือ Dragon และ Phoenix.</li>
                <li>
                    ผู้เล่นเลือกมูลค่าชิปและวางลงในตัวเลือกการเดิมพันที่ต้องการ. ต้องวางเดิมพันทั้งหมดก่อนหมดเวลาเดิมพัน.
                    โปรดทราบว่าการวางเดิมพันไม่สามารถยกเลิกได้.
                </li>
                <li>
                    ผู้เล่นสามารถวางเดิมพันในตัวเลือกใดก็ได้ยกเว้น Dragon และ Phoenix ผู้เล่นสามารถเดิมพันได้เฉพาะ Dragon หรือ Phoenix
                    เท่านั้น.
                </li>
                <li>หลังจากหมดเวลาการเดิมพัน ระบบจะแสดงผลของเกมส์.</li>
                <li>เกมส์ตัดสินการชนะหรือแพ้โดยการเปรียบเทียบระดับมือระหว่าง Dragon และ Phoenix.</li>
                <li>หากไพ่ Dragon และ Phoenix มีแต้มเท่ากัน (ชุดไพ่และมูลค่าไพ่) ผลของเกมคือเสมอและจะคืนเงินเดิมพันทั้งหมด.</li>
                <li>สำรับไพ่มาตรฐาน 52 ใบ (ไม่รวมโจ๊กเกอร์) จะถูกสับหลังจากทุกรอบ.</li>
                <li>เดิมพันรวมสูงสุดต่อรอบคือ {maxBet}</li>
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className={Styles["payout-option"]}>ตัวเลือกการเดิมพัน</th>
                                <th>เงื่อนไขการชนะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>มังกร</td>
                                <td className="text-start">มือ Dragon มีอันดับสูงกว่า.</td>
                            </tr>
                            <tr>
                                <td>ฟีนิกซ์</td>
                                <td className="text-start">มือ Phoenix มีอันดับสูงกว่า.</td>
                            </tr>
                            <tr>
                                <td>ไพ่คู่ 8 ขึ้นไป</td>
                                <td className="text-start">มือที่ชนะประกอบด้วยคู่ 9 ถึงคู่ A, ฟลัช, สเตรท, ตอง, สเตรทฟลัช.</td>
                            </tr>
                            <tr>
                                <td>ตอง</td>
                                <td className="text-start">ผลลัพธ์ของมือที่ชนะคือ “ตอง”. </td>
                            </tr>
                            <tr>
                                <td>สเตรทฟลัช</td>
                                <td className="text-start">ผลลัพธ์ของมือที่ชนะคือ “สเตรทฟรัช”.</td>
                            </tr>
                            <tr>
                                <td>ฟลัช</td>
                                <td className="text-start">ผลลัพธ์ของมือที่ชนะคือ “ฟรัช”. </td>
                            </tr>
                            <tr>
                                <td>สเตรท </td>
                                <td className="text-start">ผลลัพธ์ของมือที่ชนะคือ “สเตรท”. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>
                    จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน. <br></br>
                    <strong>หมายเหตุ:</strong> การจ่ายเงินรวมกับเงินเดิมพันเริ่มต้น.
                </li>
                <li>
                    จำนวนเงินที่ชนะทั้งหมดจะเพิ่มเข้าในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>ตัวเลือกการเดิมพัน</th>
                                    <th>อัตราต่อรอง</th>
                                    <th>
                                        วงเงินเดิมพัน <br></br> (ต่ำสุด - สูงสุด)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>มังกร</td>
                                    <td>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ฟีนิกซ์</td>
                                    <td>{formatOdds(odds?.phoenix, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ไพ่คู่ 8 ขึ้นไป</td>
                                    <td>{formatOdds(odds?.pair8Plus, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ตอง</td>
                                    <td>{formatOdds(odds?.threeOfAKind, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                                <tr>
                                    <td>สเตรทฟลัช</td>
                                    <td>{formatOdds(odds?.straightFlush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ฟลัช</td>
                                    <td>{formatOdds(odds?.flush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                                <tr>
                                    <td>สเตรท</td>
                                    <td>{formatOdds(odds?.straight, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderCardType = () => {
    return (
        <>
            <li className="guide-item">
                <h2>ประเภทไพ่</h2>
                <div className="table-container text-center">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>ประเภทไพ่</th>
                                <th>คำอธิบาย</th>
                                <th>ตัวอย่าง</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>
                                    <strong>235</strong>
                                </td>
                                <td className="text-start">
                                    ไพ่ 3 ใบ 2, 3, 5 ที่มีดอกต่างกัน.
                                </td>
                                <td width={250}>
                                    <span className={Styles["wrapper-card"]}>
                                        <img
                                            src="/static/images/win-three-cards/235-1.png"
                                            alt="235"
                                            height={65}
                                            loading="eager"
                                            style={{ marginBottom: 5 }}
                                        />
                                    </span>{" "}
                                    <br></br>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/235-2.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>ตอง</strong>
                                </td>
                                <td className="text-start">ไพ่สามใบที่มีแต้มเท่ากัน.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/threeKind.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>สเตรทฟลัช</strong>
                                </td>
                                <td className="text-start">ไพ่ดอกเดียวกันสามใบเรียงตามลำดับ.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straightFlush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>ฟลัช</strong>
                                </td>
                                <td className="text-start">ไพ่สามใบที่มีดอกเดียวกันแต่มีแต้มต่างกัน.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/flush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>สเตรท</strong>
                                </td>
                                <td className="text-start">ไพ่สามใบในลำดับที่มีดอกต่างกัน.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straight.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>คู่</strong>
                                </td>
                                <td className="text-start">ไพ่สองใบที่มีแต้มเท่ากัน.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/pair.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>ไพ่่สุง</strong>
                                </td>
                                <td className="text-start">ไพ่ที่สูงสุดเมื่อไม่มีมือที่สูงกว่า.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/highCard.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </>
    );
};

export const renderRankingLevel = () => {
    return (
        <>
            <li className="guide-item">
                <h2>ระดับการจัดอันดับ</h2>
                <ul className="desc">
                    <li>
                        <strong>อันดับไพ่</strong>
                        <ul className="detail">
                            <li>
                                A {">"} K {">"} Q {">"} J {">"} 10 {">"} 9 {">"} 8 {">"} 7 {">"} 6 {">"} 5 {">"} 4 {">"} 3 {">"} 2
                            </li>
                            <li>ชุดไพ่ไม่มีผลต่ออันดับของไพ่.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>อันดับมือ</strong>
                        <ul className="detail">
                            <li>
                                ตอง {">"} เตรทฟลัช {">"} ฟลัช {">"} สเตรท {">"} คู่ {">"} ไพ่สูง.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>235 {">"} ตอง</strong>
                        <ul className="detail">
                            <li>หากผลลัพธ์มีเพียง 235 และไพ่ตอง ชุดไพ่ที่มีแต้ม 235 จะสูงกว่าไพ่ตอง.</li>
                            <li>เมื่อไม่มีไพ่ “ตอง” ในผลลัพธ์ 235 จะเป็นไพ่สูงที่เล็กที่สุด.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>คู่</strong>
                        <ul className="detail">
                            <li>
                                หากทั้ง Dragon และ Phoenix มีไพ่คู่เดียว ค่าไพ่ของไพ่คู่จะถูกเปรียบเทียบ. หากค่าของไพ่เหมือนกัน
                                ค่าของไพ่ที่เหลือจะถูกเปรียบเทียบ.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>ฟรัช, ไพ่สูง</strong>
                        <ul className="detail">
                            <li>
                                ค่าไพ่ทั้งสองด้านจะถูกเปรียบเทียบโดยเริ่มจากไพ่ที่มีค่าสูงสุด. หากไพ่ที่สูงที่สุดในแต่ละมือเท่ากัน
                                ไพ่ที่สูงที่สุดรองลงมาจะถูกเปรียบเทียบไปเรื่อยๆ.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>สเตรทฟรัช, สเตรท</strong>
                        <ul className="detail">
                            <li>
                                ในสเตรทฟลัชและสเตรท ไพ่เอซ (A) สามารถใช้เป็นไพ่ที่มีค่าสูงสุดหรือต่ำสุดได้. <br></br>
                                ตัวอย่าง: QKA {">"} JQK {">"} …… {">"} 234 {">"} A23
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </>
    );
};

const WinThreeCardsGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>บทนำ</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName}, หรือที่เรียกว่า Golden Flower เป็นเกมส์ไพ่ที่ได้รับความนิยมอย่างมากในคาสิโน. เกมส์นี้ใช้สำรับไพ่มาตรฐาน
                        52 ใบ (ไม่รวมโจ๊กเกอร์). จุดประสงค์ของเกมส์นี้คือเพื่อเปรียบเทียบระดับมือระหว่าง Dragon และ Phoenix
                        เพื่อกำหนดผลลัพธ์ของเกมส์. มือที่มีอันดับสูงกว่าจะเป็นผู้ชนะ.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderCardType()}
                {renderRankingLevel()}
                <li className="guide-item">
                    {renderMD5TH()}
                    <div className="content">
                        <strong> ตัวอย่าง:</strong> ตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์ {gameName}
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>ขั้นตอนที่ 1:</strong> Copy the MD5 Key before the result is announced.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step1_en.png?v=3"
                                alt="md5-string"
                            />
                        </li>
                        <li>
                            <strong>ขั้นตอนที่ 2:</strong> คัดลอกผลลัพธ์หลังจากที่ระบบเผยแพร่ผลลัพธ์.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step2_en.png?v=3"
                                alt="md5-result"
                            />
                            <div>หมายเหตุ: จากซ้ายไปขวา, 8♠️ Q♥️ 5♥️ 9♠️ 9♣ 10♠️ ตามลำดับการแจกไพ่เมื่อเริ่มรอบเกมส์.</div>
                        </li>
                        <li>
                            <strong>ขั้นตอนที่ 3:</strong> ไปที่{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            และวางในช่อง MD5.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step3_vi.png?v=1"
                                alt="hash-darling"
                            />
                        </li>
                        <li>
                            <strong>ขั้นตอนที่ 4:</strong> กดปุ่ม “แฮชที่รัก แฮช!” ปุ่มและเปรียบเทียบสตริง MD5
                            ของการตรวจสอบความถูกต้องของข้อมูลที่สร้างขึ้นใหม่กับสตริง MD5 ในขั้นตอนที่ 1.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step4_vi.png?v=1"
                                alt="md5-checksum"
                            />
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default WinThreeCardsGuideTH;
