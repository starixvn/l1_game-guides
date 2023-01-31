import React, { useEffect } from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { SeDieMini } from "../index";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/th";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { formatOdds } from "../../../../helpers/number-helper";
import { ENVIRONMENT } from "../../../../common/constants";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { renderMD5TH } from "../../../shared/md5-count-down-timer/th";

const renderGameRule = (maxBetMain: number | string, gameId = 0) => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>
                    ปุ่มวางอยู่บนจานและปิดด้วยชาม เจ้ามือจะหยิบจานขึ้นมาเขย่าขณะที่จานยังถูกปิดชามอยู่
                    ผู้เล่นวางเดิมพันและตัวเลือกการเดิมพันคือ:
                </li>
                <li className="contentBeforeEmpty">{renderGameRuleTable(gameId)}</li>
                <li>เมื่อหมดเวลาเดิมพัน เจ้ามือจะเปิดชามออกจากจานและแสดงผล</li>
                <li>
                    ผู้เล่นสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง
                    หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้
                </li>
                <li>ยอดเดิมพันสูงสุดต่อรอบคือ {maxBetMain}</li>
            </ul>
        </>
    );
};

const renderGameRuleTable = (gameId: number) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>ตัวเลือก</th>
                        <th>เงื่อนไขการชนะ</th>
                        <th>คำอธิบาย</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    {!SeDieMini.includes(gameId) && (
                        <tr>
                            <td>2 แดง 2 ขาว</td>
                            <td>2 แดง 2 ขาว</td>
                            {renderTwoRedTwoWhite()}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const renderStatistical = () => {
    return (
        <li className="guide-item">
            <h2>ตารางสถิติ</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const renderMD5Example = (gameName: string, gameId: any) => {
    const currentGameType = SeDieMini.includes(gameId) ? "mini-sedie" : "sedie";

    return (
        <>
            <div className="content">
                <strong> ตัวอย่าง:</strong> ตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์
            </div>
            <ul className="desc">
                <li>
                    <strong>ขั้นตอนที่ 1:</strong> คัดลอกคีย์ MD5 ก่อนประกาศผล
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step1_th.png?v=5`}
                        alt="md5-string"
                    />
                </li>
                <li>
                    <strong>ขั้นตอนที่ 2:</strong> คัดลอกผลลัพธ์หลังจากเผยแพร่แล้ว
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step2_th.png?v=5`}
                        alt="md5-result"
                    />
                    <div>หมายเหตุ: สีแดงและสีขาวตรงกับสองด้านของปุ่ม</div>
                </li>
                <li>
                    <strong>ขั้นตอนที่ 3: </strong>
                    ไปที่{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    และวางผลลัพธ์ลงในกล่อง MD5
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step3_en.png?v=2`}
                        alt="hash-darling"
                    />
                </li>
                <li>
                    <strong>ขั้นตอนที่ 4:</strong> กดปุ่ม “hash darling, hash!” ปุ่มและเปรียบเทียบสตริง MD5 checksum ที่สร้างขึ้นใหม่กับคีย์
                    MD5 ในขั้นตอนที่ 1
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step4_en.png?v=2`}
                        alt="md5-checksum"
                    />
                </li>
            </ul>
        </>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    const gameDescription = (environment: string = ENVIRONMENT.sc) => {
        const miniSeDieDescription =
            environment === ENVIRONMENT.sm
                ? "is a compact version of Se Die game with fewer betting options. "
                : " -  เวอร์ชันใหม่พร้อมคุณสมบัติ “มัลติเพลย์” ที่ให้คุณเล่น 4 โต๊ะ (มินิ Se Die, มินิ Se Die 2, มินิ Se Die 3 และ มินิ Se Die 4) พร้อมประสบการณ์ใหม่ที่น่าตื่นเต้นมากมาย ";
        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return miniSeDieDescription;
            case 22:
                return "เป็นอีกเวอร์ชั่นของเกม Se Die ที่มีขีดจำกัดการเดิมพันที่สูงกว่า";
            default:
                return "เป็นเกมส์ที่ได้รับความนิยมที่สุดในเอเชีย ";
        }
    };
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} {gameDescription()}
                        เกมส์นี้เล่นด้วยปุ่มสี 4 ปุ่ม แต่ละปุ่มมี 2 ด้านคือสีแดงและสีขาว วัตถุประสงค์ของเกมส์นี้คือการทำนายผลของปุ่ม 4 ปุ่ม
                        หากผลลัพธ์ตรงกับเดิมพันของผู้เล่น ผู้เล่นจะชนะ
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน</h2>
                    <ul className="desc">
                        <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย</li>
                        <li>การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                        <li>
                            จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>ตัวเลือก</th>
                                            <th>อัตราต่อรอง</th>
                                            <th>
                                                วงเงินเดิมพัน <br /> (ต่ำสุด - สูงสุด)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>คี่</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>คู่</td>
                                        </tr>
                                        <tr>
                                            <td>4 แดง</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>

                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4 ขาว</td>
                                        </tr>
                                        <tr>
                                            <td>3 แดง 1 ขาว</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 แดง 3 ขาว</td>
                                        </tr>
                                        {!SeDieMini.includes(gameId ? gameId : SeDieMini[0]) && (
                                            <tr>
                                                <td>2 แดง 2 ขาว</td>
                                                <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>
                                                <td>
                                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {renderStatistical()}
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5TH()}
                        {renderMD5Example(gameName, gameId)}
                    </li>
                )}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
