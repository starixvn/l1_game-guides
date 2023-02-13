import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../lottery.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const exampleTitle = "example-title";
const tableSmall = "table-small";
const textRedLight = "text-red-light";
const renderGameRule = (maxBet: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>เลือกมูลค่าชิปที่คุณต้องการเล่น การเดิมพันทั้งหมดจะต้องเสร็จสิ้นก่อนที่จะหมดเวลาเดิมพัน</li>
                <li>หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้</li>
                <li>ผู้เล่นสามารถเดิมพันได้มากกว่าหนึ่งตัวเลือกที่แสดงอยู่บนโต๊ะเกม</li>
                <li>ยอดเดิมพันสูงสุดต่อรอบคือ {maxBet} บาท</li>
            </ul>
        </li>
    );
};

const renderBettingOptions = () => {
    return (
        <li className="guide-item">
            <h2>ตัวเลือกการเดิมพัน</h2>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th colSpan={2}>ตัวเลือก</th>
                        <th>คำอธิบาย</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="text-center">
                            พิเศษ
                        </td>
                        <td>
                            <p>เลือกหมายเลขที่คุณต้องการเดิมพันตั้งแต่ 00 ถึง 99 หากหมายเลขที่เลือกตกเป็นของรางวัลที่เจ็ด ผู้เล่นจะชนะ</p>
                            <p>
                                <strong>หมายเหตุ</strong>: หากหมายเลขที่เลือกนั้นปรากฏ N ครั้งใน 4 ผลลัพธ์ ขอบ 7 รางวัล
                                การจ่ายเงินจะถูกคูณด้วย N
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            พิเศษ
                        </td>
                        <td>
                            เลือกหมายเลขที่คุณต้องการเดิมพันตั้งแต่ 00 ถึง 99; หากหมายเลขที่เลือกตรงกับตัวเลข 2 หลักสุดท้ายของรางวัลพิเศษ
                            ผู้เล่นจะเป็นผู้ชนะ
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            หัว
                        </td>
                        <td>
                            เลือกหมายเลขที่คุณต้องการเดิมพันตั้งแต่ 0 ถึง 9 หากหมายเลขที่เลือกตรงกับหลักสิบของรางวัลพิเศษ
                            ผู้เล่นจะเป็นผู้ชนะ
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            ท้าย
                        </td>
                        <td>
                            เลือกหมายเลขที่คุณต้องการเดิมพันตั้งแต่ 0 ถึง 9 หากหมายเลขที่เลือกตรงกับหลักหน่วยของรางวัลพิเศษ
                            ผู้เล่นจะเป็นผู้ชนะ
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            27 ชุด
                        </td>
                        <td>
                            <p>
                                เลือกหมายเลขที่คุณต้องการเดิมพันตั้งแต่ 00 ถึง 99 หากหมายเลขที่เลือกตรงกับตัวเลข 2 หลักสุดท้ายของ 27 ผล
                                ผู้เล่นจะเป็นผู้ชนะ
                            </p>
                            <p>
                                <strong>หมายเหตุ</strong>: หากหมายเลขที่เลือกปรากฏเหมือนกับตัวเลข 2 หลักสุดท้าย N ครั้งจากผลลัพธ์ 27 รายการ
                                การจ่ายเงินจะถูกคูณด้วย N
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="text-center">
                            อื่นๆ
                        </td>
                        <td className="text-center">ใหญ่</td>
                        <td>หากเลขท้าย 2 ตัวของรางวัลพิเศษ {`>=`} 50 ผู้เล่นจะเป็นผู้ชนะ</td>
                    </tr>
                    <tr>
                        <td className="text-center">เล็ก</td>
                        <td>หากเลขท้าย 2 ตัวของรางวัลพิเศษ {`<=`} 49 ผู้เล่นจะเป็นผู้ชนะ</td>
                    </tr>
                    <tr>
                        <td className="text-center">คี่</td>
                        <td>หากเลข 2 ตัวสุดท้ายของรางวัลพิเศษเป็นเลขคี่ ผู้เล่นจะเป็นผู้ชนะ</td>
                    </tr>
                    <tr>
                        <td className="text-center">คู่</td>
                        <td>หากเลข 2 ตัวสุดท้ายของรางวัลพิเศษเป็นเลขคู่ ผู้เล่นจะเป็นผู้ชนะ</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>ตัวอย่าง:</strong>
                <ul className={Styles["many-example"]}>
                    <li>{BettingOptions4Sets()}</li>
                    <li>{BettingOptionsSpecial()}</li>
                    <li>{BettingOptionsHead()}</li>
                    <li>{BettingOptionsTail()}</li>
                    <li>{BettingOptions27Sets()}</li>
                </ul>
            </div>
        </li>
    );
};

const BettingOptions4Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>a) พิเศษ</div>
            <ul className="desc">
                <li>วางเดิมพันสองหมายเลข: 07, 77</li>
                <li>ผลลัพธ์สุดท้าย:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG ลอตเตอรี่</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>ที่ 7</td>
                        <td>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>14</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>94</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>หมายเลข 07 ออกสองครั้งในผลการตัดสินรางวัลที่เจ็ด ผู้เล่นชนะในหมายเลข 07 ด้วยการจ่ายเงินสองเท่า</p>
        </>
    );
};
const BettingOptionsSpecial = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>b) พิเศษ </div>
            <ul className="desc">
                <li>วางเดิมพันสามหมายเลข: 00, 62, 79 </li>
                <li>ผลลัพธ์สุดท้าย:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG ลอตเตอรี่</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>พิเศษ</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>62</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>เลข 62 ตรงกับเลขท้ายสองตัวของรางวัลพิเศษ ผู้เล่นชนะในหมายเลข 62</p>
        </>
    );
};
const BettingOptionsHead = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>c) หัว</div>
            <ul className="desc">
                <li>วางเดิมพันสามหมายเลข: 0, 6, 9</li>
                <li>ผลลัพธ์สุดท้าย:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG ลอตเตอรี่</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>พิเศษ</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>6</span>
                                <span className={Styles[textRedLight]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>หมายเลข 6 เหมือนกับหลักสิบของรางวัลพิเศษ ผู้เล่นชนะในหมายเลข 6</p>
        </>
    );
};
const BettingOptionsTail = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>d) ท้าย</div>
            <ul className="desc">
                <li>เดิมพันสองหมายเลข: 0, 5</li>
                <li>ผลลัพธ์สุดท้าย:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG ลอตเตอรี่</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>พิเศษ</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>0906</span>
                                <span className={Styles["text-red"]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>หมายเลขที่เลือกทั้งหมดไม่ตรงกับหลักหน่วยของรางวัลพิเศษ ผู้เล่นเสียเงินเดิมพัน</p>
        </>
    );
};
const BettingOptions27Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>e) 27 ชุด</div>
            <ul className="desc">
                <li>วางเดิมพันสี่หมายเลข: 05, 12, 77, 85</li>
                <li>ผลลัพธ์สุดท้าย:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th>รางวัล</th>
                        <th colSpan={12}>RNG ลอตเตอรี่</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>พิเศษ</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles[textRedLight]}>763</span>
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                    </tr>
                    <tr>
                        <td>ที่ 1</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles["text-grey"]}>684</span>00
                        </td>
                    </tr>
                    <tr>
                        <td>ที่ 2</td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>164</span>75
                        </td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>507</span>06
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>ที่ 3</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>339</span>12
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>665</span>66
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>228</span>83
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>516</span>76
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>451</span>05
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>321</span>82
                        </td>
                    </tr>
                    <tr>
                        <td>ที่ 4</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>08</span>69
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>03</span>60
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>01</span>79
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>84</span>05
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>ที่ 5</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>28</span>50
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>62</span>72
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>40</span>43
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>53</span>86
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>64</span>23
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>42</span>31
                        </td>
                    </tr>
                    <tr>
                        <td>ที่ 6</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>87
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>8</span>65
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>92
                        </td>
                    </tr>
                    <tr>
                        <td>ที่ 7</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>97</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>26</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>33</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>หมายเลข 05 ออกสองครั้งใน 27 ผลลัพธ์ ผู้เล่นชนะในหมายเลข 05 และได้รับเงินสองเท่า</p>
            <p>หมายเลข 12 ออกครั้งเดียวใน 27 ผลลัพธ์ ผู้เล่นชนะในหมายเลข 12</p>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน หมายเหตุ การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
            </ul>
            <table className={`table text-center table-medium`}>
                <thead>
                    <tr>
                        <th colSpan={2}>ตัวเลือก</th>
                        <th>อัตราต่อรอง</th>
                        <th>
                            ขีด จำกัด การเดิมพัน <br></br>(ต่ำสุดสูงสุด)
                        </th>
                        <th className={Styles["payout-max-total-width"]}>เดิมพันรวมสูงสุดต่อรอบ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>พิเศษ</td>
                        <td>{formatOdds(odds?.["4Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets4}
                        </td>
                        <td rowSpan={9}>{maxBetFollowChoice?.maxBetMain}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>พิเศษ</td>
                        <td>{formatOdds(odds?.special, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecial}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>หัว</td>
                        <td>{formatOdds(odds?.head, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetHead}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>ท้าย</td>
                        <td>{formatOdds(odds?.tail, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTail}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>27 ชุด</td>
                        <td>{formatOdds(odds?.["27Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets27}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>อื่นๆ</td>
                        <td>ใหญ่</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>เล็ก</td>
                    </tr>
                    <tr>
                        <td>คี่</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>คู่</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderViewStatistic = () => {
    const statsList = "stats-list";
    const resultRow = "result-row";
    const statsResult = "stats-result";
    const subNumber = "sub-number";
    return (
        <li className="guide-item">
            <h2>สถิติ</h2>
            <ul className="desc">
                <li>สถิติข้อมูลอ้างอิงจาก 2 หลักสุดท้ายของ 27 ผล RNG ลอตเตอรี่ เพื่อช่วยผู้เล่นในการเลือกหมายเลขโปรด</li>
                <li>
                    สถิติข้อมูลการเดิมพันล่าสุดแต่ละประเภทใน 100 รอบ
                    <ul className={Styles[statsList]}>
                        <li>
                            <strong>4 ชุด</strong>: สถิติตามผลของรางวัลที่เจ็ด
                        </li>
                        <li>
                            <strong>พิเศษ</strong>: สถิติ อ้างอิงจาก 2 หลักสุดท้ายของรางวัลพิเศษ
                        </li>
                        <li>
                            <strong>27 ชุด</strong>: สถิติอ้างอิงเลขท้าย 2 ตัว 27 ผลจำนวน 8 รางวัล
                        </li>
                        <li>
                            <strong>หัว</strong>: สถิติตามหลักสิบของรางวัลพิเศษ
                        </li>
                        <li>
                            <strong>ท้าย</strong>: สถิติตามหลักหน่วยของรางวัลพิเศษ
                        </li>
                        <li>
                            <strong>อื่นๆ (ใหญ่/เล็ก, คี่/คู่)</strong>: สถิติอัตราการชนะในแต่ละตัวเลือกการเดิมพัน ใหญ่/เล็ก, คี่/คู่
                        </li>
                    </ul>
                    <ul className={Styles["many-example"]}>
                        <li>
                            <div className={Styles[exampleTitle]}>a) พิเศษ, พิเศษ, 27 ชุด </div>
                            <ul className={Styles[statsList]}>
                                <li>
                                    10 ตัวเลขที่เกิดขึ้นมากที่สุด (แสดงเป็นสี<span className={Styles["text-red"]}>แดง</span>)
                                </li>
                                <li>
                                    10 ตัวเลขที่เกิดน้อยสุด (แสดงเป็นสี<span className={Styles["text-blue"]}>น้ำเงิน</span>)
                                </li>
                            </ul>
                            <p className="bold">ตัวอย่าง:</p>
                            <p>สถิติข้อมูลในประเภทการเดิมพัน “4 ชุด”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>44</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>24</span>
                                </div>
                                <p>หมายเลข 44 มีปรากฏ 24 ครั้ง รางวัลที่ 7 ใน 100 รอบล่าสุด</p>
                            </div>
                            <p>สถิติข้อมูลในประเภทการเดิมพัน “27 ชุด”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>00</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>0</span>
                                </div>
                                <p>เลข 00 ไม่ปรากฏ 2 หลักสุดท้าย 27 ผลใน 100 รอบล่าสุด</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>b) หัว ท้าย</div>
                            <p>นับการเกิดขึ้นของแต่ละตัวเลขตั้งแต่ 0-9</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    หากปรากฏรวม {`>`} 10 จะแสดงเป็นสี <span className={Styles["text-red"]}>แดง</span>.
                                </li>
                                <li>
                                    หากปรากฏรวม {`<=`} 10 จะแสดงเป็นสี
                                    <span className={Styles["text-blue"]}>น้ำเงิน</span>.
                                </li>
                            </ul>
                            <p className="bold">ตัวอย่าง:</p>
                            <p>สถิติข้อมูลในประเภทการเดิมพัน “หัว”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>1</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>32</span>
                                </div>
                                <p>หมายเลข 1 มีปรากฏ 32 ครั้งในหลักสิบของรางวัลพิเศษภายใน 100 รอบล่าสุด</p>
                            </div>
                            <p>สถิติข้อมูลในประเภทการเดิมพัน “ท้าย”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>7</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>4</span>
                                </div>
                                <p>หมายเลข 7 มีปรากฏ 4 ครั้งในในหลักหน่วยของรางวัลพิเศษภายใน 100 รอบล่าสุด</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>c) อื่นๆ (ใหญ่/เล็ก, คี่/คู่)</div>
                            <p>แสดงอัตราการชนะ (%) ในแต่ละตัวเลือกการเดิมพัน ใหญ่/เล็ก, คี่/คู่</p>
                            <p className="bold">ตัวอย่าง:</p>
                            <div className={Styles["others"]}>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-red"]}`}>คี่</span>
                                    <span className={`${Styles[subNumber]}`}>48%</span>
                                </div>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-white"]}`}>คู่</span>
                                    <span className={`${Styles[subNumber]}`}>52%</span>
                                </div>
                            </div>
                            <p>อัตราการชนะสำหรับตัวเลือกการเดิมพันคี่คือ 48% และ 52% สำหรับคู่</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const LotteryGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} เป็นเกมลอตเตอรีออนไลน์ที่ได้รับความนิยมอย่างมากในเวียดนาม ผู้เล่นวางเดิมพันในตัวเลขที่ชื่นชอบ
                        เกมจะตัดสินการแพ้ชนะโดยจับคู่ตัวเลขจากผลลัพธ์ 27 รายการจาก 8 รางวัล
                    </p>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <table className={`table text-center ${Styles["table-medium"]}`}>
                                <thead>
                                    <tr>
                                        <th>รางวัล</th>
                                        <th colSpan={12}>RNG ลอตเตอรี่</th>
                                        <th>จำนวนผลลัพธ์</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>พิเศษ</td>
                                        <td colSpan={12} className="bold">
                                            <span className={Styles["text-red"]}>76349</span>
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>อันดับแรก</td>
                                        <td colSpan={12} className="bold">
                                            68400
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>ที่สอง</td>
                                        <td colSpan={6} className="bold">
                                            16475
                                        </td>
                                        <td colSpan={6} className="bold">
                                            50706
                                        </td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>ที่สาม</td>
                                        <td colSpan={4} className="bold">
                                            33912
                                        </td>
                                        <td colSpan={4} className="bold">
                                            66566
                                        </td>
                                        <td colSpan={4} className="bold">
                                            22883
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            51676
                                        </td>
                                        <td colSpan={4} className="bold">
                                            45105
                                        </td>
                                        <td colSpan={4} className="bold">
                                            32182
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ที่สี่</td>
                                        <td colSpan={3} className="bold">
                                            0869
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0360
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0179
                                        </td>
                                        <td colSpan={3} className="bold">
                                            8405
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>ที่ห้า</td>
                                        <td colSpan={4} className="bold">
                                            2850
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6272
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4043
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            5386
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6423
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4231
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ที่หก</td>
                                        <td colSpan={4} className="bold">
                                            287
                                        </td>
                                        <td colSpan={4} className="bold">
                                            865
                                        </td>
                                        <td colSpan={4} className="bold">
                                            292
                                        </td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>ที่เจ็ด</td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>97</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>26</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>42</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>33</span>
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={13}></td>
                                        <td className="bold">ทั้งหมด = 27</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {renderBettingOptions()}
                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderViewStatistic()}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default LotteryGuideTH;
