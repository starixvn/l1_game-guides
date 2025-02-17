import React from "react";
import { isShowedMD5, renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { useTheme } from "next-themes";
import Styles from "../fish-prawn-crab-vip.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderListIcon } from "../en";

const FishPrawnCrabGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, environment, orientation } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isPortraitGame = !isShowedMD5(environment, orientation);

    const cssClassColumnTable = isPortraitGame ? `${Styles["table-portrait-mode"]}` : "";
    const cssClassIconWrapper = isPortraitGame ? `${Styles["icon-wrapper-portrait-mode"]}` : "";
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} เป็นเวอร์ชั่นปรับปรุงของเกมดั้งเดิม ปลา กุ้ง ปู พร้อมอินเทอร์เฟซกราฟิกใหม่และตัวเลือกการเดิมพันที่มากขึ้น
                        เกมนี้เล่นโดยใช้ลูกเต๋ามาตรฐานสามลูก และลูกเต๋าแต่ละลูกมีสัญลักษณ์เฉพาะหกตัว (ปลา กุ้ง ปู ไก่ น้ำเต้า และกวาง)
                        วัตถุประสงค์ของเกมคือการทำนายผลของการทอยลูกเต๋า ผู้เล่นวางเดิมพันว่าสัญลักษณ์ใดจะปรากฏขึ้น
                    </p>
                    <div className={`${Styles["wrapper-icon"]} icon-wrapper ${cssClassIconWrapper}`}>
                        {renderListIcon(theme, isPortraitGame)}
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
                        <li>เลือกมูลค่าชิปที่คุณต้องการเล่น ผู้เล่นสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม</li>
                        <li>ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้</li>
                        <li>เมื่อหมดเวลาการเดิมพัน ถ้วยลูกเต๋าจะถูกลบออกและแสดงผล</li>
                        <li>เงินเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน</h2>
                    <ul className="desc">
                        <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน โปรดทราบว่าการจ่ายเงินจะรวมเงินเดิมพันเริ่มต้น</li>
                        <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>ตัวเลือก</th>
                                            <th>เงื่อนไขการชนะ</th>
                                            <th style={{ width: 200 }}>อัตราต่อรอง</th>
                                            <th className={`${Styles["min-max-width"]} ${cssClassColumnTable}`}>
                                                วงเงินเดิมพัน <br></br>(ต่ำสุด - สูงสุด)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>สัญลักษณ์เฉพาะ (ปลา กุ้ง ปู ไก่ น้ำเต้า กวาง)</td>
                                            <td className="text-start">หากสัญลักษณ์ที่เลือกปรากฏขึ้นครั้งเดียว </td>
                                            <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                            <td rowSpan={5}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFish}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">หากสัญลักษณ์ที่เลือกปรากฏขึ้นสองครั้ง</td>
                                            <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">หากสัญลักษณ์ที่เลือกปรากฏขึ้นสามครั้ง </td>
                                            <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                        </tr>
                                        {!isPortraitGame && (
                                            <>
                                                <tr>
                                                    <td>ภูเขา (ไก่, น้ำเต้า, กวาง)</td>
                                                    <td className="text-start">
                                                        วางเดิมพันบนกลุ่มภูเขา 3 สัญลักษณ์
                                                        ผู้เล่นจะชนะหากมีสัญลักษณ์อย่างน้อยสองสัญลักษณ์จากกลุ่ม Mountain ปรากฏในผลลัพธ์
                                                    </td>
                                                    <td>{formatOdds(odds?.mountain, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>มหาสมุทร (ปลา กุ้ง ปู)</td>
                                                    <td className="text-start">
                                                        วางเดิมพันในกลุ่มมหาสมุทร 3 สัญลักษณ์
                                                        ผู้เล่นจะชนะหากมีสัญลักษณ์อย่างน้อยสองสัญลักษณ์จากกลุ่มมหาสมุทรปรากฏในผลลัพธ์
                                                    </td>
                                                    <td>{formatOdds(odds?.ocean, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>ตองใดก็ได้</td>
                                                    <td className="text-start">
                                                        ในการชนะเดิมพันนี้ ลูกเต๋าทั้งสามจะต้องแสดงสัญลักษณ์เดียวกัน
                                                    </td>
                                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                                    <td>
                                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <strong>ตัวอย่าง</strong>
                    </p>
                    <ul className="desc">
                        <li>
                            <strong>สัญลักษณ์เฉพาะ</strong>
                            <ul className="detail">
                                <li>วางเดิมพัน “ปลา” แล้วผลเป็นปลา น้ำเต้า ปู แล้วผู้เล่นชนะ</li>
                                <li>วางเดิมพัน “ปลา” แล้วผลคือ น้ำเต้า ปู ปู แล้วผู้เล่นแพ้</li>
                            </ul>
                        </li>

                        {!isPortraitGame && (
                            <>
                                <li>
                                    <strong>มหาสมุทร/ ภูเขา</strong>
                                    <ul className="detail">
                                        <li>วางเดิมพันในกลุ่มโอเชี่ยนแล้วผลเป็นปลา กุ้ง กวาง แล้วผู้เล่นชนะ</li>
                                        <li>วางเดิมพันในกลุ่ม Mountain แล้วผลเป็น ปลา, กวาง, กวาง จากนั้นผู้เล่นจะเป็นผู้ชนะ</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>ตองใดก็ได้</strong>
                                    <ul className="detail">
                                        <li>วางเดิมพันบนตัวเลือก ตอง ใดก็ได้ และผลที่ได้คือ ปู, ปู, ปู จากนั้นผู้เล่นจะเป็นผู้ชนะ</li>
                                    </ul>
                                </li>
                            </>
                        )}
                    </ul>
                </li>
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideTH;
