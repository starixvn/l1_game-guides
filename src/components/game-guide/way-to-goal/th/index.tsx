import React from "react";
import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../way-to-goal.module.scss";
import { locales } from "../../../../common/constants";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = () => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>
                    ผู้เล่นเลือกเพย์ไลน์ (Lines) และกำหนดระดับการเดิมพันที่คุณต้องการวางเดิมพันก่อนกด {`หมุน`}.
                    <div className="text-center">
                        <strong>ยอดเดิมพัน</strong> = เพย์ไลน์ * ระดับการเดิมพัน
                    </div>
                </li>

                <li>25 เพย์ไลน์มีหมายเลขตั้งแต่ 1 ถึง 25 และผู้เล่นต้องเลือกอย่างน้อยหนึ่งเพย์ไลน์ก่อนเริ่มเกม</li>
                <li>Win-loss ในแต่ละเพย์ไลน์จะคำนวณตามจำนวนของสัญลักษณ์เดียวกันที่อยู่ในเพย์ไลน์นั้น</li>
                <div className={Styles["wrapper-img-rectangle"]}>
                    <img
                        src={`/static/images/way-to-goal/guide_payline.png`}
                        alt="guide_payline"
                        width={834}
                        height={159}
                        loading="eager"
                    />
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>ตารางการจ่าย</h2>
            <ul className="desc">
                <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน</li>
                <li>
                    <strong>หมายเหตุ:</strong> การจ่ายเงินจะรวมเงินเดิมพันเริ่มต้นด้วย
                </li>
                <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
            </ul>
            {renderPayoutsIconFirstLine(odds, locales.en)}
            {renderPayoutsIconSecondLine(odds, locales.en)}
            {renderExamplePayout(odds)}
        </li>
    );
};

export const renderIconContent = (
    isBgBlack = false,
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: number[][],
    locale = "en"
) => {
    const pathSrc = itemName === "item10" ? "./static/images/way-to-goal/" : "./static/images/way-to-goal/";
    return (
        <span className={Styles["wrapper-icon"]}>
            <img
                src={`/static/images/way-to-goal/guide_item_symbol_bg.png?v1`}
                width={200}
                height={132}
                alt={"guide_item_symbol_bg"}
                loading="eager"
            />

            <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png?v1`} alt={itemName}></img>
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

export const renderPayoutsIconFirstLine = (odds: number[][], locale = "en") => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item10",
                    false,
                    false,
                    [
                        [5, odds[10][5]],
                        [4, odds[10][4]],
                        [3, odds[10][3]],
                        [2, odds[10][2]],
                    ],
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
                    locale
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
                    locale
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
                    locale
                )}
            </div>
        </>
    );
};

export const renderPayoutsIconSecondLine = (odds: number[][], locale = "en") => {
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
                    locale
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
                    locale
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
                    locale
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
                    locale
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
                    locale
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
                src="/static/images/way-to-goal/guide_item_symbol_bg.png#v2"
                width={269}
                height={132}
                alt="guide_item_symbol_bg"
                loading="eager"
            />

            <img
                className={`${Styles[itemName]} ${Styles["dark"]}`}
                src={`./static/images/way-to-goal/${itemName}.png`}
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
                                {data[1]} {textAfterNumber && <span className={Styles["text"]}>{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

const renderExamplePayout = (odds: number[][]) => {
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
                                {renderIconContent(true, "item1", true, true, [
                                    [5, odds[1][5]],
                                    [4, odds[1][4]],
                                    [3, odds[1][3]],
                                ])}
                            </td>
                            <td>
                                มี 5 สัญลักษณ์ <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                มี 4 สัญลักษณ์ <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                มี 3 สัญลักษณ์ <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][3]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderFreeSpin = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>ฟรีสปิน</h2>
            <div className={Styles["free-spin-container"]}>
                {renderIconContentBlack(
                    "item7",
                    [
                        [5, odds[7][5]],
                        [4, odds[7][4]],
                        [3, odds[7][3]],
                    ],
                    " ฟรีสปิน"
                )}
                <ul className="desc">
                    <li>ผู้เล่นจะได้รับโบนัสฟรีสปินตามจำนวนสัญลักษณ์ฟรีสปินในผลลัพธ์</li>
                    <li>สัญลักษณ์ฟรีสปินไม่จำเป็นต้องอยู่บนเพย์ไลน์เดียวกัน</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong>หมายเหตุ:</strong>
                    สัญลักษณ์ “ฟรีสปิน” ต้องปรากฏในวงล้อที่แตกต่างกัน ตัวอย่างเช่น หากมีสัญลักษณ์ “หมุนฟรี” 3 อันบนรีลเดียวกัน
                    ระบบจะนับเป็นหนึ่งสัญลักษณ์
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/way-to-goal/guide_example_freespin.png#v2"
                                alt="guide_item_symbol_bg"
                                width={265}
                                height={125}
                                loading="eager"
                            />
                        </div>

                        <span>มี 4 สัญลักษณ์ “หมุนฟรี” ในผลลัพธ์ แต่มี 3 สัญลักษณ์อยู่ในวงล้อเดียวกัน</span>
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

const renderBonus = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>โบนัส</h2>
            <div className={Styles["bonus-container"]}>
                {renderIconContentBlack(
                    "item8",
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    " โบนัส"
                )}
                <ul className="desc">
                    <li>การมีสัญลักษณ์โบนัส 3, 4 หรือ 5 ปรากฏขึ้นที่ใดก็ได้ในผลลัพธ์จะทำให้เกมโบนัสทำงาน</li>
                    <li>สัญลักษณ์โบนัสไม่จำเป็นต้องอยู่บนเพย์ไลน์เดียวกัน</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> หมายเหตุ:</strong> สัญลักษณ์โบนัสต้องปรากฏในวงล้อที่แตกต่างกัน ตัวอย่างเช่น หากสัญลักษณ์โบนัส 2 หรือ 3
                    ปรากฏบนวงล้อเดียวกัน ระบบจะนับเป็นหนึ่งสัญลักษณ์
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/way-to-goal/guide_example_bonus.png#v4"
                                alt="guide_example_bonus"
                                width={265}
                                height={125}
                                loading="eager"
                            />
                        </div>

                        <span>
                            มี 4 สัญลักษณ์ “โบนัส” ในเกม แต่มี 2 สัญลักษณ์อยู่ในวงล้อเดียวกัน ผู้เล่นมีสิทธิ์ได้รับเพียง 3 รายการเท่านั้น
                        </span>
                    </div>
                </li>
                <li>
                    {" "}
                    ผู้เล่นต้องทำโบนัสของเกมให้เสร็จสิ้นภายใน 120 วินาที นับจากนับถอยหลัง หลังจากช่วงเวลานี้
                    ระบบจะสุ่มเปิดหีบและตัดสินรอบเกม
                </li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][]) => {
    const wrapperWildImg = "wrapper-wild-img";
    return (
        <li className="guide-item">
            <h2>Wild</h2>
            <div className={Styles["wild-content-ex"]}>
                <span className={Styles["wrapper-wild"]}>
                    <img
                        src="/static/images/way-to-goal/guide_example_wild.png#v3"
                        alt="guide_example_wild"
                        width={110}
                        height={99}
                        loading="eager"
                    />
                </span>

                <ul className="desc">
                    <li>
                        สัญลักษณ์ “Wild” สามารถใช้แทนสัญลักษณ์ทั้งหมดได้ ยกเว้น
                        <img
                            className={`${Styles["item8"]} ${Styles["mini"]}`}
                            src="./static/images/way-to-goal/item8.png"
                            alt="item8"
                        ></img>
                        ,
                        <img
                            className={`${Styles["item7"]} ${Styles["mini"]}`}
                            src="./static/images/way-to-goal/item7.png#v2"
                            alt="item7"
                        ></img>
                        และ
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src="./static/images/way-to-goal/item10.png"
                            alt="item10"
                        ></img>
                    </li>
                    <li>จะจ่ายเฉพาะการชนะที่ทำได้สูงสุดต่อ Line เท่านั้น</li>
                </ul>
            </div>
            <div>
                <strong>ตัวอย่าง</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item2.png" alt="item2" width={88} height={80} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item2.png" alt="item2" width={88} height={80} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item9.png?v1" alt="item9" width={70} height={64} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item5.png" alt="item5" width={88} height={80} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item5.png" alt="item5" width={88} height={80} loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            หากสัญลักษณ์ Wild คือ
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/way-to-goal/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} การจ่ายเงิน = ระดับการเดิมพัน * {odds[2][3]}
                        </li>
                        <li>
                            หากสัญลักษณ์ Wild คือ
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/way-to-goal/item5.png"
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

const WayToGoalGuideTH: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        “{gameName}” is a football-themed slot game, with attractive gameplay, and gripping graphics. The game includes 5
                        reels and 3 rows, with 11 different symbols. Players will win if the same symbols are located on the same payline
                        that you have chosen.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img src={`/static/images/way-to-goal/list_icon.png#v3`} alt="guide_item_symbol_bg" width={551} height={280} />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>

                {renderPayouts(odds)}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                {renderTermsAndConditionsTH(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default WayToGoalGuideTH;
