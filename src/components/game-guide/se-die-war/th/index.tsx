import React from "react";
import { useTheme } from "next-themes";

import { renderTermsAndConditionsTH } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/th";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../se-die-war.module.scss";
import { buildVersion, Themes } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>เลือกมูลค่าชิปที่คุณต้องการเล่น ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง</li>
                <li>หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้</li>
                <li>เมื่อหมดเวลาเดิมพัน ชามจะถูกเปิดออกเพื่อแสดงผล</li>
                <li>เงินเดิมพันรวมสูงสุดต่อรอบคือ {maxBet}</li>
                <li>
                    จำนวนเงินเดิมพันทั้งหมดของผู้เล่นทั้งหมดที่แสดงในแต่ละตัวเลือกการเดิมพันนั้นใช้สำหรับอ้างอิงเท่านั้น 
                    สำหรับตลาดและสกุลเงินต่างๆ ยอดรวมจะถูกแปลงตามอัตราภายในที่บริษัทกำหนด
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th colSpan={2}>ตัวเลือก</th>
                                    <th>เงื่อนไขการชนะ</th>
                                    <th>คำอธิบาย</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>ผู้เล่น</td>
                                    <td colSpan={2} className="text-start">
                                        จำนวนปุ่มสีแดงในผลลัพธ์ของผู้เล่นมากกว่าเจ้ามือ
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>เจ้ามือ</td>
                                    <td colSpan={2} className="text-start">
                                        จำนวนปุ่มสีแดงในผลลัพธ์ของเจ้ามือมีมากกว่าผู้เล่น
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>เสมอ</td>
                                    <td colSpan={2} className="text-start">
                                        ผู้เล่นและเจ้ามือเสมอเหมือนกัน
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>รวมคู่</td>
                                    <td colSpan={2} className="text-start">
                                        จำนวนปุ่มสีแดงทั้งหมดที่มีในผลลัพธ์ของทั้งผู้เล่นและเจ้ามือคือคู่
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>รวมคี่</td>
                                    <td colSpan={2} className="text-start">
                                        จำนวนปุ่มสีแดงทั้งหมดที่มีในผลลัพธ์ของทั้งผู้เล่นและเจ้ามือคือคี่
                                    </td>
                                </tr>
                                {renderGameRulePlayerOrBanker(false)}
                                {renderGameRulePlayerOrBanker(true)}
                            </tbody>
                        </table>
                    </div>
                    {renderGameRuleExample()}
                </li>
            </ul>
        </>
    );
};

const renderGameRulePlayerOrBanker = (isBanker = false) => {
    return (
        <>
            <tr>
                <td rowSpan={9}>{isBanker ? "Banker" : "Player"}</td>
                <td rowSpan={2}>คี่</td>
                <td>3 แดง 1 ขาว</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td>1 แดง 3 ขาว</td>
                {renderOneRedThreeWhite()}
            </tr>
            <tr>
                <td rowSpan={3}>คู่</td>
                <td>4 แดง</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 ขาว</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>2 แดง 2 ขาว</td>
                {renderTwoRedTwoWhite()}
            </tr>
            {RedWhiteDataOnTable()}
        </>
    );
};

const renderGameRuleExample = () => {
    const oneRedThreeWhite = "1 แดง 3 ขาว";
    const threeRedOneWhite = "3 แดง 1 ขาว";
    return (
        <>
            <p>
                <strong>ตัวอย่าง</strong>
            </p>
            <div>
                <strong>ตัวเลือกเจ้ามือ,ผู้เล่น </strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>เนื่องจากจำนวนปุ่มสีแดงในผลลัพธ์ของผู้เล่นมากกว่าเจ้ามือ เดิมพันตัวเลือกผู้เล่นจะชนะ</p>
            <div>
                <strong>รวมคู่</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>จำนวนปุ่มสีแดงทั้งหมดที่มีในผลของทั้งผู้เล่นและเจ้ามือคือ 4 เดิมพันว่ารวมคู่จะชนะ</p>
            <div>
                <strong>รวมคี่</strong>
                {renderGameRuleTable(["2 แดง 2 ขาว", oneRedThreeWhite])}
            </div>
            <p>จำนวนปุ่มสีแดงทั้งหมดที่มีในผลของทั้งผู้เล่นและเจ้ามือคือ 3 เดิมพันรวม ODD จะชนะ</p>
        </>
    );
};

const renderGameRuleTable = (data: string[]) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>ตัวเลือก</th>
                        <th>ผลลัพธ์ </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ผู้เล่น</td>
                        <td>{data[0]}</td>
                    </tr>
                    <tr>
                        <td>เจ้ามือ</td>
                        <td>{data[1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (
    odds: object | any,
    maxBetFollowChoice: undefined | MaxBetChoicesProps,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย <strong>หมายเหตุ</strong> การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                <li>
                จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>ตัวเลือก</th>
                                    <th>การจ่ายเงิน </th>
                                    <th>วงเงินเดิมพัน (ต่ำสุด - สูงสุด)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ผู้เล่น</td>
                                    <td rowSpan={2}>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={5}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ</td>
                                </tr>
                                <tr>
                                    <td>เสมอ</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>รวมคู่</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>รวมคี่</td>
                                </tr>
                                <tr>
                                    <td>ผู้เล่น - คู่</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ผู้เล่น - คี่</td>
                                </tr>
                                <tr>
                                    <td>ผู้เล่น - 3 สีแดง</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ผู้เล่น - 1 สีแดง</td>
                                </tr>
                                <tr>
                                    <td>ผู้เล่น - 4 สีแดง</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ผู้เล่น - 4 สีขาว</td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ - คู่</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ - คี่</td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ - 3 สีแดง</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ - 1 สีแดง</td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ - 4 สีแดง</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ - 4 สีขาว</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const pathImg = theme === Themes.light ? `dark/guide-stats-th.png?v=${buildVersion}` : `guide-stats-th.png?v=${buildVersion}`;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} เป็นเกมเวอร์ชั่นพิเศษของเกม Se Die เกมดังกล่าวประกอบด้วยปุ่ม 2 ชุด ชุดหนึ่งสำหรับเจ้ามือและอีกชุดสำหรับผู้เล่น 
                        แต่ละชุดประกอบด้วยปุ่มสี 4 ปุ่ม โดยแต่ละปุ่มจะมีสองด้านเป็นสีแดงและสีขาว 
                        ผู้เล่นวางเดิมพันบนตัวเลือกการเดิมพันอย่างน้อยหนึ่งตัวเลือกที่แสดงอยู่บนโต๊ะเกม 
                        เกมจะตัดสินการชนะหรือแพ้ตามจำนวนสีแดงหรือสีขาวที่แสดงในหน้าผลลัพธ์
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item">
                    <h2>กระดานคะแนน</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <strong className="title-text">คี่ - คู่</strong>
                            {StatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <strong className="title-text">ผลรอบสถิติ</strong>
                            <div className={Styles["wrapper-guide-stats"]}>
                                <img src={`/static/images/sedie-war/${pathImg}`} alt="guide-stats-en" loading="eager" />
                            </div>

                            <p>
                                <strong>หมายเหตุ</strong>: ตัวเลขที่แสดงในรอบสถิติคือปุ่มสีแดงทั้งหมดที่มีในผลลัพธ์ของทั้งผู้เล่นและเจ้ามือ
                            </p>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default SeDieGuideTH;
