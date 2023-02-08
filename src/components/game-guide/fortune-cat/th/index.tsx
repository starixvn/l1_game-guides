import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsTH } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../fortune-cat.module.scss";
import { GameConfigProps } from "../type";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = () => {
    return (
        <>
            <h2>กฎของเกม</h2>
            <ul className="desc">
                <li>
                    ผู้เล่นเลือกเพย์ไลน์ (Lines) และกำหนดระดับการเดิมพันที่คุณต้องการวางเดิมพันก่อนกด “หมุน”
                    <div className="text-center">
                        <strong>ยอดเดิมพัน</strong> = เพย์ไลน์ * ระดับการเดิมพัน
                    </div>
                </li>

                <li>25 เพย์ไลน์มีหมายเลขตั้งแต่ 1 ถึง 25 และผู้เล่นต้องเลือกอย่างน้อยหนึ่งเพย์ไลน์ก่อนเริ่มเกม</li>
                <li>Win-loss ในแต่ละเพย์ไลน์จะคำนวณตามจำนวนของสัญลักษณ์เดียวกันที่อยู่ในเพย์ไลน์นั้น</li>
                <div className={Styles["payline-wrapper"]}>
                    <img src={`/static/images/fortune-cat/guide_payline.png`} alt="guide_payline" loading="eager" />
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
                    <strong>หมายเหตุ: </strong>การจ่ายเงินจะรวมเงินเดิมพันเริ่มต้นด้วย
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
    const pathSrc = "./static/images/fortune-cat/";
    return (
        <div className={Styles["symbol-wrapper"]}>
            <div className="d-center">
                <img src={`${pathSrc}${itemName}.png?v3`} alt={itemName}></img>
            </div>

            <div>
                {dataContent.map((data, index) => {
                    return (
                        <div key={index} className={Styles["symbol-content"]}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{data[1]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const renderPayoutsIconFirstLine = (odds: number[][], locale = "en") => {
    return (
        <>
            <div className={Styles["payout-row"]}>
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
            <div className={Styles["payout-row"]}>
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

export const renderIconContentLarge = (itemName: string, dataContent: number[][], textAfterNumber: string) => {
    return (
        <span className={`${Styles["symbol-wrapper"]} ${Styles["large"]}`}>
            <div className="d-center">
                <img src={`./static/images/fortune-cat/${itemName}.png`} alt={itemName}></img>
            </div>
            <div>
                {dataContent.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`${Styles["symbol-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
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
                                <div className="d-center">
                                    {renderIconContent(true, "item1", true, true, [
                                        [5, odds[1][5]],
                                        [4, odds[1][4]],
                                        [3, odds[1][3]],
                                    ])}
                                </div>
                            </td>
                            <td>
                                มี 5 สัญลักษณ์ <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                มี 4 สัญลักษณ์ <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> อยู่ในเพย์ไลน์เดียวกัน
                                <br></br>การจ่ายเงิน = ระดับการเดิมพัน * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                มี 3 สัญลักษณ์ <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> อยู่ในเพย์ไลน์เดียวกัน
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
            <h2>Free Spin</h2>
            <div className={Styles["free-spin-container"]}>
                {renderIconContentLarge(
                    "item7",
                    [
                        [5, odds[7][5]],
                        [4, odds[7][4]],
                        [3, odds[7][3]],
                    ],
                    " Free Spin"
                )}
                <ul className="desc">
                    <li>ผู้เล่นจะได้รับโบนัส “Free Spin” ตามจำนวนสัญลักษณ์ฟรีสปินที่มีในผลลัพธ์</li>
                    <li>สัญลักษณ์ “Free Spin” ไม่จำเป็นต้องอยู่ในเพย์ไลน์เดียวกัน</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> หมายเหตุ:</strong>
                    สัญลักษณ์ “Free Spin” ต้องปรากฏในวงล้อที่แตกต่างกัน ตัวอย่างเช่น หากมีสัญลักษณ์ “Free Spin” 3 อันบนรีลเดียวกัน
                    ระบบจะนับเป็นหนึ่งสัญลักษณ์
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/fortune-cat/guide_example_freespin.png#v4"
                                alt="guide_item_symbol_bg"
                                width={265}
                                height={125}
                                loading="eager"
                            />
                        </div>

                        <span>
                            มี 4 สัญลักษณ์ “Free Spin” ในผลลัพธ์ แต่มี 3 สัญลักษณ์อยู่ในวงล้อเดียวกัน ผู้เล่นไม่มีสิทธิ์ได้รับโบนัส “Free
                            Spin”
                        </span>
                    </div>
                </li>
                <li className="clear-both">
                    “Free Spin” จะเล่นที่ระดับเดิมพันเดียวกันและจำนวนเพย์ไลน์เท่ากันกับการหมุนครั้งล่าสุด (การหมุนที่ผู้ใช้ได้รับโบนัส “Free
                    Spin”)
                </li>
                <li>ผู้เล่นต้องทำโบนัส “Free Spin” ให้เสร็จสิ้นภายใน 24 ชั่วโมงหลังจากออก “Free Spin” ที่ไม่ได้ใช้จะหายไป</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Bonus</h2>
            <div className={Styles["bonus-container"]}>
                {renderIconContentLarge(
                    "item8",
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    " Bonus"
                )}
                <ul className="desc">
                    <li>การมีสัญลักษณ์ “Bonus” 3, 4 หรือ 5 ปรากฏขึ้นที่ใดก็ได้ในผลลัพธ์จะทำให้เกม “โบนัส” ปรากฏขึ้น</li>
                    <li>สัญลักษณ์ “Bonus”ไม่จำเป็นต้องอยู่ในเพย์ไลน์เดียวกัน</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> หมายเหตุ:</strong> สัญลักษณ์ “Bonus” จะต้องปรากฏในวงล้อต่างๆ ตัวอย่างเช่น หากสัญลักษณ์ “Bonus” 2 หรือ 3
                    ตัวอยู่บนรีลเดียวกัน ระบบจะนับเป็นหนึ่งสัญลักษณ์
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img src="/static/images/fortune-cat/guide_example_bonus.png#v4" alt="guide_example_bonus" loading="eager" />
                        </div>

                        <span>
                            ผลลัพธ์มีสัญลักษณ์ “Bonus” 4 สัญลักษณ์ แต่ 2 สัญลักษณ์อยู่บนรีลเดียวกัน ผู้เล่นจะได้รับสิทธิ์เพียง 3
                            รายการเท่านั้น
                        </span>
                    </div>
                </li>
                <li>
                    ผู้เล่นต้องทำเกม “Bonus” ให้เสร็จภายใน 120 วินาทีหลังจากนับถอยหลัง หลังจากช่วงเวลานี้ ระบบจะสุ่มเปิดหีบและตัดสินรอบเกม
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
                    <img src="/static/images/fortune-cat/guide_example_wild.png#v3" alt="guide_example_wild" loading="eager" />
                </span>

                <ul className="desc">
                    <li>
                        สัญลักษณ์ “Wild” สามารถใช้แทนสัญลักษณ์ทั้งหมดได้ ยกเว้น
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item8_small.png" alt="item8"></img>,
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item7_small.png#v2" alt="item7"></img>
                        และ
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item10_small.png#v2" alt="item10"></img>
                    </li>
                    <li>จะจ่ายเฉพาะการชนะที่ทำได้สูงสุดต่อ Line เท่านั้น</li>
                </ul>
            </div>
            <div>
                <strong>ตัวอย่าง</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item9.png?v1" alt="item9" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            หากสัญลักษณ์ Wild คือ
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item2_small.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} การจ่ายเงิน = ระดับการเดิมพัน * {odds[2][3]}
                        </li>
                        <li>
                            หากสัญลักษณ์ Wild คือ
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item5_small.png"
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

const FortuneCatGuideTH: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        “แมวนำโชค” เป็นเกมส์สล็อตออนไลน์ที่มีแมวกวักนำโชคซึ่งเป็นสัญลักษณ์ของความโชคดีและความเจริญรุ่งเรือง เกมส์ประกอบด้วย
                        5 วงล้อและ 3 แถว พร้อมสัญลักษณ์ 11 แบบ
                    </p>
                    <div className={Styles["list-symbol-wrapper"]}>
                        <img src={`/static/images/fortune-cat/list_icon.png#v6`} alt="guide_item_symbol_bg" />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>

                {renderPayouts(odds)}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default FortuneCatGuideTH;
