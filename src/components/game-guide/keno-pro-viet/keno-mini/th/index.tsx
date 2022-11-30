import React from "react";

import { ENVIRONMENT } from "../../../../../common/constants";
import { renderTermsAndConditionsTH } from "../../../../shared";
import { renderMD5EN } from "../../../../shared/md5-count-down-timer/en";
import { OddsProMaxProps } from "../../../keno-pro-max/type";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import Styles from "../keno-mini.module.scss";
import { formatOdds } from "../../../../../helpers/number-helper";

const payouts = (
    odds: OddsProMaxProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย </li>
                <li>การจ่ายเงินรวมนั้นจะรวมเงินเดิมพันด้วย</li>
                <li>
                    จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>ตัวเลือก</th>
                                    <th>การจ่ายเงิน</th>
                                    <th>
                                        วงเงินเดิมพัน <br></br>(ต่ำสุด - สูงสุด)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Big</td>
                                    <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                    <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Odd</td>
                                    <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Even</td>
                                </tr>
                                <tr>
                                    <td>ทอง</td>
                                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ไม้</td>
                                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                    </td>
                                </tr>
                                <tr>
                                    <td>น้ำ</td>
                                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ไฟ</td>
                                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ดิน</td>
                                    <td>{formatOdds(odds?.earth, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const bettingOptions = () => {
    return (
        <>
            <h2>ตัวเลือกการเดิมพัน</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text"> Big/Small</span>
                    <ul className="desc">
                        <li>
                            <strong>Big:</strong> ผลรวมของหมายเลข 10 ลูกที่สุ่มออกมาคือ {`>=`} 206
                        </li>
                        <li>
                            <strong>Small:</strong> ผลรวมของหมายเลข 10 ลูกที่สุ่มออกมาคือ {`<=`} 205
                        </li>
                    </ul>
                    <div>
                        <strong>ตัวอย่าง: </strong> ชุดลูกบอล 10 ลูกที่สุ่มจับจากลูกบอลหมายเลข 40 ลูก
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>ผลการจับฉลาก</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>15</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>28</td>
                                        <td>33</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>รวมทั้งหมด</strong> = 181 ผู้เล่นเดิมพันในขนาด Small จะชนะ
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Odd/Even</span>
                    <ul className="desc">
                        <li>
                            <strong>Odd:</strong> ผลรวมของลูกบอล 10 ลูกที่สุ่มออกมาเป็นเลขคี่
                        </li>
                        <li>
                            <strong>Even:</strong> ผลรวมของลูกบอล 10 ลูกที่สุ่มออกมาเป็นเลขคู่
                        </li>
                    </ul>
                    <div>
                        <strong>ตัวอย่าง: </strong> ชุดลูกบอล 10 ลูกที่สุ่มจับจากลูกบอลหมายเลข 40 ลูก
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>ผลการจับฉลาก</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>24</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>34</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>รวมทั้งหมด</strong> = 197 ผู้เล่นเดิมพัน อัตราต่อรองจะชนะ
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">ธาตุทั้งห้า (ทอง ไม้ น้ำ ไฟ ดิน)</span>
                    <ul className="desc">
                        <li>
                            <strong>ทอง:</strong> ผลรวมของลูกบอลหมายเลข 10 ที่สุ่มจับ อยู่ในช่วง 55 ถึง 163
                        </li>
                        <li>
                            <strong>ไม้:</strong> ผลรวมของลูกบอลหมายเลข 10 ที่สุ่มออกมา มีตั้งแต่ 164 ถึง 187
                        </li>
                        <li>
                            <strong>น้ำ:</strong> ผลรวมของลูกบอลหมายเลข 10 ที่สุ่มออกมา อยู่ในช่วง 188 ถึง 222
                        </li>
                        <li>
                            <strong>ไฟ:</strong> ผลรวมของลูกบอลหมายเลข 10 ที่สุ่มออกมา อยู่ในช่วง 223 ถึง 246
                        </li>
                        <li>
                            <strong>ดิน:</strong> ผลรวมของลูกบอลหมายเลข 10 ที่สุ่มออกมา อยู่ในช่วง 247 ถึง 355
                        </li>
                    </ul>
                    <div>
                        <strong>ตัวอย่าง: </strong> ชุดลูกบอล 10 ลูกที่สุ่มจับจากลูกบอลหมายเลข 40 ลูก
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>ผลการจับฉลาก</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>7</td>
                                        <td>13</td>
                                        <td>17</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>33</td>
                                        <td>37</td>
                                        <td>38</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>รวมทั้งหมด</strong> = 237 ผู้เล่นเดิมพันไฟจะชนะ
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderMD5Example = (environment: string | undefined) => {
    return (
        <div className="content">
            <strong> ตัวอย่าง:</strong> check the authenticity and transparency of the result.
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step1_en.png?v=2" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>MD5 Key:</strong> f2bbd32524fe6e2e41eaaaa0eacd6d86
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <strong>Step 2:</strong> Copy Result after the system publishes the result.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step2_en.png?v=4" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>Result:</strong> {"{237}_{#26907421fad9b51da1169691982}"}
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                    <div>Note: 237 is the total point of the game result.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <div className={Styles["wrapper-img-hash"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step3.png?v=1" alt="hash-darling" />
                    </div>
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 Key in Step 1.
                    <div className={Styles["wrapper-img"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step4.png?v=1" alt="md5-checksum" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

const KenoMiniGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        Keno Mini / Keno Mini 2 are the RNG Keno with 40 balls. There are 10 balls drawn randomly from 40 numbered balls
                        ranging from 1 to 40. ผู้เล่นวางเดิมพันบนตัวเลือกการเดิมพันอย่างน้อยหนึ่งตัวเลือกที่แสดงอยู่บนโต๊ะเกม ผลรวมของลูกบอล
                        10 ลูกที่สุ่มจับมาจะเป็นตัวกำหนดว่าผู้เล่นจะชนะหรือแพ้
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้ </li>
                        <li>Once the betting time has expired, the result will be shown.</li>
                        <li>เงินเดิมพันรวมสูงสุดต่อรอบคือ {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {environment === ENVIRONMENT.sm && (
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
export default KenoMiniGuideTH;
