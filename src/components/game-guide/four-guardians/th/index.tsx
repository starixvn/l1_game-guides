import React from "react";

import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";
import { PROJECTS } from "../../../../common/constants";
import { renderGameRuleContent } from "../../../shared/slot-games/th";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = (project: string | undefined) => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                {renderGameRuleContent(project)}
                <div className={Styles["wrapper-img-rectangle"]}>
                    <img
                        src={`/static/images/four-guardians/guide_payline.png`}
                        alt="guide_payline"
                        width={844}
                        height={165}
                        loading="eager"
                    />
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>ตารางการจ่าย</h2>
            <ul className="desc">
                <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย</li>
                <li>
                    <strong>หมายเหตุ: </strong> การจ่ายเงินจะรวมเงินเดิมพันเริ่มต้นด้วย
                </li>
                <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
            </ul>
            {renderPayoutsIconFirstLine(odds, project, "en")}
            {renderPayoutsIconSecondLine(odds, project)}
            {renderExamplePayout(odds, project)}
        </li>
    );
};

export const renderIconContent = (
    isBgBlack = false,
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: number[][],
    project: string | undefined,
    locale?: string
) => {
    const pathSrc =
        itemName === "item10"
            ? `./static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/${locale}` : project}/`
            : "./static/images/four-guardians/";
    return (
        <span className={Styles["wrapper-icon"]}>
            <img
                src={`/static/images/four-guardians/${isBgBlack ? "guide_item_symbol_bg-dark" : "guide_item_symbol_bg"}.png?v1`}
                width={200}
                height={132}
                alt={isBgBlack ? "guide_item_symbol_bg-dark" : "guide_item_symbol_bg"}
                loading="eager"
            />

            <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png`} alt={itemName}></img>
            <div
                className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${
                    isGem && Styles["gem-position"]
                }`}
            >
                {dataContent.map((data, index) => {
                    return (
                        <div key={index} className={Styles["icon-content"]}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{data[1]}</span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

export const renderPayoutsIconFirstLine = (odds: number[][], project: string | undefined, locale?: string) => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item10",
                    false,
                    false,
                    project === PROJECTS.L1
                        ? [
                              [5, odds[10][5]],
                              [4, odds[10][4]],
                              [3, odds[10][3]],
                              [2, odds[10][2]],
                          ]
                        : [
                              [4, odds[10][4]],
                              [3, odds[10][3]],
                              [2, odds[10][2]],
                          ],
                    project,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item6",
                    true,
                    false,
                    [
                        [5, odds[6][5]],
                        [4, odds[6][4]],
                        [3, odds[6][3]],
                    ],
                    project
                )}
                {renderIconContent(
                    false,
                    "item5",
                    true,
                    false,
                    [
                        [5, odds[5][5]],
                        [4, odds[5][4]],
                        [3, odds[5][3]],
                    ],
                    project
                )}
                {renderIconContent(
                    false,
                    "item4",
                    true,
                    false,
                    [
                        [5, odds[4][5]],
                        [4, odds[4][4]],
                        [3, odds[4][3]],
                    ],
                    project
                )}
            </div>
        </>
    );
};

export const renderPayoutsIconSecondLine = (odds: number[][], project: string | undefined) => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item3",
                    true,
                    false,
                    [
                        [5, odds[3][5]],
                        [4, odds[3][4]],
                        [3, odds[3][3]],
                    ],
                    project
                )}
                {renderIconContent(
                    false,
                    "item2",
                    true,
                    true,
                    [
                        [5, odds[2][5]],
                        [4, odds[2][4]],
                        [3, odds[2][3]],
                    ],
                    project
                )}
                {renderIconContent(
                    false,
                    "item1",
                    true,
                    true,
                    [
                        [5, odds[1][5]],
                        [4, odds[1][4]],
                        [3, odds[1][3]],
                    ],
                    project
                )}
                {renderIconContent(
                    false,
                    "item0",
                    true,
                    true,
                    [
                        [5, odds[0][5]],
                        [4, odds[0][4]],
                        [3, odds[0][3]],
                    ],
                    project
                )}
                {renderIconContent(
                    false,
                    "item9",
                    false,
                    false,
                    [
                        [5, odds[9][5]],
                        [4, odds[9][4]],
                        [3, odds[9][3]],
                        [2, odds[9][2]],
                    ],
                    project
                )}
            </div>
        </>
    );
};

export const renderIconContentBlack = (itemName: string, dataContent: number[][], textAfterNumber: string) => {
    return (
        <span className={Styles["wrapper-icon-dark"]}>
            <img
                className={`${Styles[iconBox]}`}
                src="/static/images/four-guardians/guide_item_symbol_bg-dark.png?v1"
                width={269}
                height={132}
                alt="guide_item_symbol_bg"
                loading="eager"
            />

            <img
                className={`${Styles[itemName]} ${Styles["dark"]}`}
                src={`./static/images/four-guardians/${itemName}.png`}
                alt={itemName}
            ></img>
            <div
                className={`${Styles["icon-content-wrapper"]} ${itemName === "item8" ? Styles["bonus-position"] : Styles["spin-position"]}`}
            >
                {dataContent.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`${Styles["icon-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                        >
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>
                                {data[1]} {textAfterNumber && <span className="text-white">{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

const renderExamplePayout = (odds: number[][], project: string | undefined) => {
    const iconItem1 = <img src={`./static/images/four-guardians/item1.png`} width={35} height={35} alt="item1"></img>;
    return (
        <>
            <p>
                <strong>ตัวอย่าง</strong>
            </p>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>สัญลักษณ์</th>
                            <th>คำอธิบาย</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                {renderIconContent(
                                    true,
                                    "item1",
                                    true,
                                    true,
                                    [
                                        [5, odds[1][5]],
                                        [4, odds[1][4]],
                                        [3, odds[1][3]],
                                    ],
                                    project
                                )}
                            </td>
                            <td>
                                มี 5 สัญลักษณ์ {iconItem1} อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                มี 4 สัญลักษณ์ {iconItem1} อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                มี 3 สัญลักษณ์ {iconItem1} อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][3]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderJackpot = () => {
    const iconJackpot = (
        <img className={`${Styles["item10"]} ${Styles["mini"]}`} src="./static/images/four-guardians/L2/en/item10.png" alt="item10"></img>
    );
    return (
        <li className="guide-item">
            <h2>รางวัลใหญ่</h2>
            <ul className="desc">
                <li>
                    แจ็คพอตเป็นรางวัลใหญ่สำหรับผู้เล่นที่มี 5 สัญลักษณ์ {iconJackpot} อยู่ในแถวเดียวกัน มีรางวัลแจ็คพอต 3
                    รางวัลที่ตรงกับการเดิมพัน 3 ระดับ และแจ็คพอตทั้งหมดเป็นเพิ่มจำนวนเงิน ซึ่งทุกครั้งที่เล่นเกมส์
                    ส่วนหนึ่งของจำนวนเงินเดิมพันจะเก็บไว้กับแจ็คพอตจนกว่าผู้เล่นที่โชคดีคนจะชนะแจ็คพอต
                </li>
            </ul>

            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>สัญลักษณ์</th>
                            <th>คำอธิบาย</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    className={`${Styles["item10"]} ${Styles["en"]}`}
                                    src="./static/images/four-guardians/L2/en/item10.png"
                                    alt="item10"
                                ></img>
                            </td>
                            <td>
                                ผู้เล่นจะได้รับรางวัลแจ็คพอตหากมีสัญลักษณ์ 5 ตัวอยู่ในแถวเดียวกันกับที่เลือก<br></br>
                                <strong>หมายเหตุ: </strong>
                                ผู้เล่นจะได้รับรางวัล 98% ของรางวัลแจ็คพอต
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderFreeSpin = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>ฟรีสปิน</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {renderIconContentBlack(
                                "item7",
                                [
                                    [5, odds[7][5]],
                                    [4, odds[7][4]],
                                    [3, odds[7][3]],
                                ],
                                " ฟรีสปิน"
                            )}
                        </td>
                        <td>
                            <ul className="desc">
                                <li>ผู้เล่นจะได้รับโบนัสฟรีสปินตามจำนวนสัญลักษณ์ฟรีสปินในผลลัพธ์</li>
                                <li>สัญลักษณ์ฟรีสปินไม่จำเป็นต้องอยู่บนเพย์ไลน์เดียวกัน</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className="desc">
                <li>
                    <strong>หมายเหตุ:</strong> สัญลักษณ์ “ฟรีสปิน” ต้องปรากฏในวงล้อที่แตกต่างกัน ตัวอย่างเช่น หากมีสัญลักษณ์ “หมุนฟรี” 3
                    อันบนรีลเดียวกัน ระบบจะนับเป็นหนึ่งสัญลักษณ์
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src={`/static/images/four-guardians/${
                                    project === PROJECTS.L2 ? `${project}/en` : project
                                }/guide_example_free_spin.png?v1`}
                                alt="guide_item_symbol_bg"
                                width={333}
                                height={126}
                                loading="eager"
                            />
                        </div>

                        <span>
                            มี 4 สัญลักษณ์ “หมุนฟรี” ในผลลัพธ์ แต่มี 3 สัญลักษณ์อยู่ในวงล้อเดียวกัน ผู้เล่นไม่มีสิทธิ์รับโบนัสหมุนฟรี
                        </span>
                    </div>
                </li>
                <li className="clear-both">
                    ฟรีสปิน ผู้เล่นที่ระดับการเดิมพันเดียวกันและจำนวนเพย์ไลน์เดียวกันกับการหมุนรอบสุดท้าย (เพียงยูสเซอร์ได้รับโบนัสสปินฟรี)
                </li>
                <li>ผู้เล่นต้องเสร็จสิ้นในการโบนัสฟรีสปินให้เสร็จสิ้นภายใน 24 ชั่วโมงหลังจากที่ออกให้ ฟรีสปินที่ไม่ได้ใช้จะเป็นโมฆะ</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>โบนัส</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {renderIconContentBlack(
                                "item8",
                                [
                                    [5, odds[8][5]],
                                    [4, odds[8][4]],
                                    [3, odds[8][3]],
                                ],
                                " โบนัส"
                            )}
                        </td>
                        <td>
                            <ul className="desc">
                                <li>การมีสัญลักษณ์โบนัส 3, 4 หรือ 5 ปรากฏขึ้นที่ใดก็ได้ในผลลัพธ์จะทำให้เกมโบนัสทำงาน</li>
                                <li>สัญลักษณ์โบนัสไม่จำเป็นต้องอยู่บนเพย์ไลน์เดียวกัน</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className="desc">
                <li>
                    <strong>หมายเหตุ:</strong> สัญลักษณ์โบนัสต้องปรากฏในวงล้อที่แตกต่างกัน. ตัวอย่างเช่น หากสัญลักษณ์โบนัส 2 หรือ 3
                    ปรากฏบนวงล้อเดียวกัน ระบบจะนับเป็นหนึ่งสัญลักษณ์
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src={`/static/images/four-guardians/${
                                    project === PROJECTS.L2 ? `${project}/en` : project
                                }/guide_example_bonus.png?v1`}
                                alt="guide_example_bonus"
                                width={333}
                                height={126}
                                loading="eager"
                            />
                        </div>

                        <span>
                            มี 4 “Bonus” สัญลักษณ์ “โบนัส” ในเกม แต่มี 2 สัญลักษณ์อยู่ในวงล้อเดียวกัน. ผู้เล่นมีสิทธิ์ได้รับเพียง 3
                            รายการเท่านั้น
                        </span>
                    </div>
                </li>
                <li>
                    ผู้เล่นต้องทำโบนัสของเกมให้เสร็จสิ้นภายใน 120 วินาที นับจากนับถอยหลัง หลังจากช่วงเวลานี้
                    ระบบจะสุ่มเปิดหีบและตัดสินรอบเกม
                </li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][], project: string | undefined) => {
    const wrapperWildImg = "wrapper-wild-img";
    return (
        <li className="guide-item">
            <h2>Wild</h2>
            <div className={Styles["wild-content-ex"]}>
                <span className={Styles["wrapper-wild"]}>
                    <img
                        src="/static/images/four-guardians/guide_example_wild.png"
                        alt="guide_example_wild"
                        width={245}
                        height={160}
                        loading="eager"
                    />
                </span>

                <ul className="desc">
                    <li>
                        สัญลักษณ์ “Wild” สามารถใช้แทนสัญลักษณ์ทั้งหมดได้ ยกเว้น
                        <img
                            className={`${Styles["item8"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item8.png"
                            alt="item8"
                        ></img>
                        ,
                        <img
                            className={`${Styles["item7"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item7.png"
                            alt="item7"
                        ></img>
                        และ{" "}
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src={`./static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/en` : project}/item10.png`}
                            alt="item10"
                        ></img>
                    </li>
                    <li>จะจ่ายเฉพาะการชนะที่ทำได้สูงสุดต่อ Line เท่านั้น</li>
                </ul>
            </div>
            <div>
                <strong>Contoh</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item2.png" alt="item2" width={77} height={67} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item2.png" alt="item2" width={77} height={67} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item9.png?v1" alt="item9" width={74} height={50} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item5.png" alt="item5" width={85} height={86} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item5.png" alt="item5" width={85} height={86} loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            หากสัญลักษณ์ Wild คือ
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} การจ่ายเงิน = ระดับการเดิมพัน * {odds[2][3]}
                        </li>
                        <li>
                            หากสัญลักษณ์ Wild คือ
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
                                alt="item5-mini"
                            ></img>
                            {`=>`} การจ่ายเงิน = ระดับการเดิมพัน * {odds[5][3]}
                        </li>
                    </ul>
                    <p>
                        ผู้เล่นจะได้รับชัยชนะสูงสุดในเพย์ไลน์นี้ {`=>`} การจ่ายเงิน = ระดับการเดิมพัน * {Math.max(odds[2][3], odds[5][3])}
                    </p>
                </div>
            </div>
        </li>
    );
};

const FourGuardiansGuideTH: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs, project } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} เป็นเกมสล็อตออนไลน์ที่สร้างขึ้นจากตำนานของ Four Holy Beasts เช่น Dragon, Qilin, Turtle และ Phoenix
                        เกมดังกล่าวประกอบด้วย 5 วงล้อและ 3 แถว พร้อมสัญลักษณ์ 11 แบบ
                        ผู้เล่นจะชนะหากมีสัญลักษณ์เดียวกันอยู่บนเพย์ไลน์เดียวกันกับที่คุณเลือก
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img
                            src={`/static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/en` : project}/list_icon.png?v1`}
                            alt="guide_item_symbol_bg"
                        />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(project)}</li>

                {renderPayouts(odds, project)}
                {project === PROJECTS.L2 && renderJackpot()}
                {renderFreeSpin(odds, project)}
                {renderBonus(odds, project)}
                {renderWild(odds, project)}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default FourGuardiansGuideTH;
