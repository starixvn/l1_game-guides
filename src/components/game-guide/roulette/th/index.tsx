import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { formatOdds } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../roulette.module.scss";
import { renderGameRuleImage } from "../shared";

const wrapperImg = "wrapper-img";
const tableSmall = "table-small";
const renderGameRule = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>เลือกมูลค่าชิปที่คุณต้องการเล่น การเดิมพันทั้งหมดจะต้องเสร็จสิ้นก่อนที่เวลาการเดิมพันจะสิ้นสุดลง </li>
                <li>
                    คลิกปุ่ม &#34;ยืนยัน&#34; เพื่อเสร็จสิ้น หรือ X เพื่อรีเซ็ตการเดิมพันของคุณ หมายเหตุ
                    การเดิมพันที่ยืนยันแล้วไม่สามารถยกเลิกได้
                </li>

                <li>เมื่อหมดเวลาเดิมพัน วงล้อจะหมุนโดยให้ลูกบอลหมุนไปในทิศทางตรงกันข้ามกับการหมุนของวงล้อ</li>
                <li>หมายเลขที่ชนะจะอยู่ในช่องที่ลูกบอลตกลงไป</li>
                <li>ผู้เล่นสามารถเดิมพันมากกว่าหนึ่งตัวเลือกที่แสดงอยู่บนโต๊ะเกม</li>
                <li>
                    จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย <strong>หมายเหตุ</strong> การจ่ายเงินจะรวมเงินการเดิมพันเริ่มต้น
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>ประเภทการเดิมพัน</th>
                                    <th>อัตราต่อรอง</th>
                                    <th>
                                        วงเงินเดิมพัน <br></br> (ต่ำสุด - สูงสุด)
                                    </th>
                                    <th>เดิมพันรวมสูงสุดต่อรอบ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ตรง</td>
                                    <td>{formatOdds(odds?.straightUp, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightUp}
                                    </td>
                                    <td rowSpan={12}>{maxBetFollowChoice?.maxBetMain}</td>
                                </tr>
                                <tr>
                                    <td>แยก</td>
                                    <td>{formatOdds(odds?.split, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSplit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ทาง</td>
                                    <td rowSpan={2}>{formatOdds(odds?.street, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStreet}
                                    </td>
                                </tr>
                                <tr>
                                    <td>สามเหลี่ยม</td>
                                </tr>
                                <tr>
                                    <td>มุม</td>
                                    <td rowSpan={2}>{formatOdds(odds?.corner, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetCorner}
                                    </td>
                                </tr>
                                <tr>
                                    <td>สี่ตัวเลข</td>
                                </tr>
                                <tr>
                                    <td>แถว</td>
                                    <td>{formatOdds(odds?.line, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetLine}
                                    </td>
                                </tr>
                                <tr>
                                    <td>คอลัมน์</td>
                                    <td rowSpan={2}>{formatOdds(odds?.dozen, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDozen}
                                    </td>
                                </tr>
                                <tr>
                                    <td>โหล</td>
                                </tr>
                                <tr>
                                    <td>แดง/ดำ</td>
                                    <td rowSpan={3}>{formatOdds(odds?.redBlack, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRedBlack}
                                    </td>
                                </tr>
                                <tr>
                                    <td>คี่/คู่</td>
                                </tr>
                                <tr>
                                    <td>ใหญ่/เล็ก</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
            </ul>
        </>
    );
};

const renderBetChipsNotice = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    return (
        <div className="table-container">
            <table className={`table text-center ${Styles["table-customize"]}`}>
                <thead>
                    <tr>
                        <th>เดิมพันภายใน</th>
                        <th>เดิมพันภายนอก</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/A-X.png" alt="A-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>ตรง : </strong> เดิมพันหมายเลขเฉพาะ<br></br>+ วางชิปของคุณโดยตรงบนหมายเลขเดียว (รวมถึง 0 ด้วย)
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/H-X.png" alt="H-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>คอลัมน์: </strong>เดิมพันตัวเลขทั้งสิบสองหมายเลข (ไม่รวมศูนย์)<br></br>+
                                    วางชิปของคุณในพื้นที่ที่มีเครื่องหมาย &#34;{formatOdds(odds?.column, fractionalOddsFormat)}&#34;
                                    ที่ท้ายคอลัมน์
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/B-X.png" alt="B-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>แยก: </strong>เดิมพันสองตัวเลขที่อยู่ติดกัน แนวนอนหรือแนวตั้ง<br></br>+
                                    วางชิปของคุณบนเส้นแบ่งระหว่างตัวเลขสอง
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/I-X.png" alt="I-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>โหล :</strong> เดิมพันเลขสิบสองเลขเรียงกัน<br></br>+
                                    วางชิปของคุณในพื้นที่ใดจุดหนึ่งจากสามส่วนที่มีเครื่องหมาย {`"1-12", "13-24" หรือ "25-36"`}.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/C-X.png" alt="C-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>ตรง: </strong>เดิมพันตัวเลขสามตัวติดต่อกันที่อยู่บนบรรทัดเดียวกัน<br></br>+
                                    วางชิปของคุณไว้ที่ขอบด้านนอกของสามหมายเลข
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/J-X.png" alt="J-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>แดง/ดำ: </strong>เดิมพันว่าผลลัพธ์สุดท้ายแล้วจะเป็นสีแดงหรือสีดำ
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/D-X.png" alt="D-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>สามเหลี่ยม: </strong>เดิมพันสามตัวเลขที่อยู่ติดกัน 0, 1, 2 หรือ 0, 2, 3<br></br>+
                                    วางชิปของคุณที่มุมที่ตัดกันของ (0, 1 และ 2) หรือ (0, 2 และ 3)
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/K-X.png" alt="K-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>คี่/คู่: </strong>เดิมพันว่าผลสุดท้ายเป็นเลขคี่หรือคู่ (ไม่รวม 0)
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/E-X.png" alt="E-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>มุม: </strong>เดิมพันสี่ตัวเลข
                                    <br></br>+ วางชิปของคุณบนสี่แยกที่ตัวเลขทั้งสี่มาบรรจบกัน
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/L-X.png" alt="L-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>ใหญ่/เล็ก: </strong>เดิมพันว่าผลสุดท้ายคือ ใหญ่ (19-36) หรือ เล็ก (1-18)
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/F-X.png" alt="F-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>สี่ตัวเลข: </strong>เดิมพันสี่ตัวเลข 0, 1, 2, 3<br></br>+ วางชิปของคุณที่มุมตัดกันของ 0
                                    และแถวของ 1, 2, 3
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/G-X.png" alt="G-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>แถว : </strong>แทงสองแถวติดกัน<br></br>+ วางชิปของคุณที่ส่วนท้ายของสองแถวบนทางแยกระหว่างกัน
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderCallBetTiers = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Tiers</span>
            <ul className="desc">
                <li>การเดิมพัน The Tiers นั้นประกอบด้วยหมายเลข 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33 </li>
                <li>ในการเล่นการเดิมพัน Tiers จะมีการนำชิปถูกวางแยกไว้ 6 ที่: (5, 8), (10, 11), (13, 16), (23, 24), (27, 30), (33, 36)</li>
            </ul>
            <p>
                <strong>ตัวอย่าง: </strong>ผู้เล่นเลือกมูลค่าชิป 10 และคลิกที่ตัวเลือก Tiger , จะมีค่าราคา 6 ชิป สำหรับตัวเลือกนี้:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>ประเภทการเดิมพัน</th>
                            <th>ตัวเลือก</th>
                            <th>เดิมพัน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={6}>แยก</td>
                            <td>5, 8</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>10, 11</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13, 16</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>23, 24</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27, 30</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>33, 36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>ทั้งหมด</strong>
                            </td>
                            <td>60</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetOrphelins = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Orphelins</span>
            <ul className="desc">
                <li>การเดิมพัน Orphelins ประกอบด้วยหมายเลข 1, 20, 14, 31, 9, 6, 34, 17</li>
                <li>
                    ในการเล่นเดิมพัน Orphelins จะมีการนำชิปห้าชิปมาวางบน:
                    <ul className="plus">
                        <li>สี่ชิปสำหรับแยกสี่(6, 9), (14, 17), (17, 20), (31, 34)</li>
                        <li>หนึ่งชิปสำหรับการเดิมพันแบบตรง (1)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>ตัวอย่าง: </strong>ผู้เล่นเลือกมูลค่าชิป 10 และคลิกที่ตัวเลือก Orphelins จะมีค่าราคา 5 ชิปสำหรับตัวเลือกนี้:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-orphelins_ex.png"
                        alt="game_guide-orphelins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-orphelins_ex.png" alt="game_guide-orphelins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>ประเภทการเดิมพัน</th>
                            <th>ตัวเลือก</th>
                            <th>เดิมพัน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={4}>แยก</td>
                            <td>6, 9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>14, 17</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>17, 20</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>31, 34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>ตรงขึ้น</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>ทั้งหมด</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetVoisins = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Voisins</span>
            <ul className="desc">
                <li>การเดิมพัน Voisins ประกอบด้วยหมายเลข 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25</li>
                <li>
                    ในการเล่นเดิมพัน Voisins จะใช้เก้าชิปซึ่งวางบน:
                    <ul className="plus">
                        <li>ห้าชิปสำหรับแยกห้า: (12, 15), (18, 21), (32, 35), (19, 22), (4, 7)</li>
                        <li>สองชิปสำหรับ สามเหลี่ยม: (0, 2, 3)</li>
                        <li>สองชิปสำหรับมุม: (25, 26, 28, 29)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>ตัวอย่าง: </strong>ผู้เล่นเลือกมูลค่าชิป 10 และคลิกที่ตัวเลือก Voisins จะมีค่าราคา 9 ชิปสำหรับตัวเลือกนี้:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-voisins_ex.png"
                        alt="game_guide-voisins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-voisins_ex.png" alt="game_guide-voisins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>ประเภทการเดิมพัน</th>
                            <th>ตัวเลือก</th>
                            <th>เดิมพัน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>แยก</td>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>18, 21</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>19, 22</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4, 7</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>สามเหลี่ยม</td>
                            <td>0, 2, 3</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>มุม</td>
                            <td>25, 26, 28, 29</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>ทั้งหมด</strong>
                            </td>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetZero = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Zero</span>
            <ul className="desc">
                <li>การเดิมพัน Zero ประกอบด้วยตัวเลข 12, 35, 3, 26, 0, 32, 15</li>
                <li>
                    ในการเล่นการเดิมพัน Zero จะมีการนำชิปสี่ชิปมาวางบน:
                    <ul className="plus">
                        <li>หนึ่งชิปสำหรับการเดิมพันแบบสเตรท (26)</li>
                        <li>สามชิปสำหรับแยกสาม (0, 3), (12, 15), (32, 35)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>ตัวอย่าง: </strong>ผู้เล่นเลือกมูลค่าชิป 10 และคลิกที่ตัวเลือกศูนย์ จะมีค่าราคา4 ชิปสำหรับตัวเลือกนี้:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>ประเภทการเดิมพัน</th>
                            <th>ตัวเลือก</th>
                            <th>เดิมพัน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>แยก</td>
                            <td>0, 3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td>ตรงขึ้น</td>
                            <td>26</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <strong>ทั้งหมด</strong>
                            </td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetNeighbors = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Neighbors</span>
            <p>
                Neighbors นั้นสร้างด้วยตัวเลข 5 ตัว โดยในจำนวนนี้ผู้เล่นเลือกหมายเลขหนึ่ง
                ร่วมกับตัวเลขสองตัวที่อยู่ทางด้านซ้ายและด้านขวาของหมายเลขนั้นบนวงล้อ
            </p>
            <ul className="desc">
                <li>ในการเล่นการเดิมพัน Neighbors จะมีการนำชิปห้าชิปมาวางในการเดิมพันแบบตรง 5 ครั้ง</li>
            </ul>

            <div className={Styles["wrapper-img-circle"]}>
                <img src="/static/images/roulette/game_guide-neighbors_1.png" alt="game_guide-neighbors_1" loading="lazy" />
            </div>
            <p>
                <strong>ตัวอย่าง: </strong>ผู้เล่นเลือกมูลค่าชิป 10 และคลิกที่หมายเลข 27 สำหรับการเดิมพันเพื่อนบ้าน จะมีราคา 5
                ชิปสำหรับการเดิมพันแบบตรง 5 ครั้ง: (36), (13), (27), (6), (34)
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide_neighbors_ex.png"
                        alt="game_guide_neighbors_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide_neighbors_ex.png" alt="game_guide_neighbors_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>ประเภทการเดิมพัน</th>
                            <th>ตัวเลือก</th>
                            <th>เดิมพัน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>ตรงขึ้น</td>
                            <td>36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>ทั้งหมด</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderBettingOptions = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>ตัวเลือกการเดิมพัน</h2>
            <p>
                ประเภทการเดิมพันรูเล็ตแบ่งออกเป็นสองประเภท: การเดิมพันภายในและการเดิมพันภายนอก
                การเดิมพันที่วางบนตัวเลขนั้นเรียกว่าการเดิมพัน (ตรง, แยก,ทาง)
                และในขณะที่การเดิมพันที่คุณวางนอกช่องหมายเลขจะเรียกว่าการเดิมพันภายนอก (คี่/คู่, แดง/ดำ, ใหญ่/เล็ก, คอลัมน์ และ โหล)
            </p>
            {renderGameRuleImage(fractionalOddsFormat, "th")}
            {renderBetChipsNotice(odds, fractionalOddsFormat)}
        </li>
    );
};

const renderCallBet = (fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>การเดิมพันโทร</h2>
            <p>
                การเดิมพันโทรหรือการเดิมพันฝรั่งเศสเป็นตัวเลือกการเดิมพันพิเศษซึ่งเป็นชุดเดิมพันที่กำหนดไว้ล่วงหน้า มี 5 ตัวเลือก: Tiers,
                Voisins du Zero, Orphelins, Zero, Neighbors
            </p>
            <div className={Styles[wrapperImg]}>
                <div className={Styles["wrapper-img-circle"]}>
                    <img src="/static/images/roulette/game_guide-cuoc_nhanh.png" alt="game_guide-cuoc_nhanh" loading="lazy" />
                </div>
            </div>

            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">ประเภทของการเดิมพันโทร</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">{renderCallBetTiers(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetOrphelins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetVoisins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetZero(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetNeighbors(fractionalOddsFormat)}</li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const RouletteGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        รูเล็ตเป็นเกมการพนันเรียบง่ายแต่เป็นที่น่าสนใจ เกมนี้เล่นด้วยลูกบอลและวงล้อรูเล็ตซึ่งประกอบด้วยสล็อต 37 ช่อง
                        ตัวเลขตั้งแต่ 0 ถึง 36 แต่ละช่องจะมีสีแดงหรือสีดำ ในขณะที่ช่อง “0” เป็นสีเขียว
                        ผู้เล่นทายตัวเลขว่าในที่สุดลูกบอลจะลงในหมุนวงล้อใด หากลูกบอลตกอยู่ในหมายเลขที่คุณเลือก คุณจะชนะ ;มิฉะนั้น ,คุณแพ้
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {renderBettingOptions(odds, fractionalOddsFormat)}
                {renderCallBet(fractionalOddsFormat)}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default RouletteGuideTH;
