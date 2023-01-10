import React from "react";
import { renderTermsAndConditionsID } from "../../../shared";
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
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>
                    Pemain memilih Paylines (Garis) dan menetapkan Level Taruhan yang ingin Anda pasang sebelum menekan. {`“Putar”`}.
                    <div className="text-center">
                        <strong>Total Taruhan</strong> = Paylines * Level Taruhan
                    </div>
                </li>

                <li>
                    25 Payline diberi nomor dari 1 hingga 25 dan Pemain harus memilih setidaknya satu Payline sebelum memulai permainan.
                </li>
                <li>
                    Menang-kalah pada setiap Payline akan dihitung berdasarkan jumlah simbol yang sama yang terletak di Payline tersebut.
                </li>
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
            <h2>Tabel Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung berdasarkan odds taruhan.</li>
                <li>
                    <strong>Catatan </strong>: Pembayaran termasuk taruhan awal.
                </li>
                <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
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
                <strong>Contoh</strong>
            </p>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Simbol</th>
                            <th> Keterangan</th>
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
                                Memiliki 5 simbol <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                yang terletak pada payline yang sama.
                                <br></br>
                                Pembayaran = Tingkat Taruhan * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Memiliki 4 simbol <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                yang terletak pada payline yang sama.
                                <br></br>
                                Pembayaran = Tingkat Taruhan * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 symbols <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" /> yang
                                terletak pada payline yang sama.
                                <br></br>
                                Pembayaran = Tingkat Taruhan * {odds[1][3]}
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
                {renderIconContentBlack(
                    "item7",
                    [
                        [5, odds[7][5]],
                        [4, odds[7][4]],
                        [3, odds[7][3]],
                    ],
                    " FREE SPINS"
                )}
                <ul className="desc">
                    <li>Pemain akan menerima Bonus Putaran Gratis sesuai dengan jumlah simbol Putaran Gratis yang ada di hasil.</li>
                    <li>Simbol Free Spin tidak harus berada di payline yang sama.</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> Catatan:</strong> Simbol “Putaran Gratis” harus muncul di gulungan yang berbeda. Misalnya, jika ada 3 simbol
                    “Putaran Gratis” pada gulungan yang sama, sistem akan dihitung sebagai satu simbol.
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

                        <span>
                            Ada 4 simbol “Putaran gratis” di hasil, tetapi 3 simbol terletak di gulungan yang sama. Pemain tidak memenuhi
                            syarat untuk bonus putaran Gratis.
                        </span>
                    </div>
                </li>
                <li className="clear-both">
                    Putaran Gratis dimainkan pada Level Taruhan yang sama dan jumlah garis pembayaran yang sama dengan putaran terakhir
                    (putaran di mana Pengguna mendapatkan Bonus Putaran Gratis).
                </li>
                <li>
                    Pemain harus menyelesaikan Bonus Putaran Gratis dalam waktu 24 jam setelah diterbitkan. Putaran Gratis yang tidak
                    digunakan akan hilang.
                </li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Bonus</h2>
            <div className={Styles["bonus-container"]}>
                {renderIconContentBlack(
                    "item8",
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    " BONUS"
                )}
                <ul className="desc">
                    <li>Memiliki 3, 4, atau 5 simbol Bonus yang muncul di mana saja pada hasil akan memicu Permainan Bonus.</li>
                    <li>Simbol Bonus tidak harus berada di garis pembayaran yang sama.</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> Catatan:</strong> Simbol Bonus harus muncul di gulungan yang berbeda. Misalnya, jika 2 atau 3 simbol Bonus
                    muncul di gulungan yang sama, sistem akan dihitung sebagai satu simbol.
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
                            Ada 4 simbol “Bonus” di hasil, tetapi 2 simbol terletak di gulungan yang sama. Pemain hanya memenuhi syarat
                            untuk 3 item.
                        </span>
                    </div>
                </li>
                <li>
                    {" "}
                    Pemain harus menyelesaikan Game Bonus dalam waktu 120 detik dari hitungan mundur. Setelah periode ini, sistem akan
                    membuka Peti secara acak dan menyelesaikan putaran permainan.
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
                        Simbol “Wild” dapat menggantikan semua simbol kecuali
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
                        dan
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src="./static/images/way-to-goal/item10.png"
                            alt="item10"
                        ></img>
                    </li>
                    <li>Hanya kemenangan tertinggi yang dicapai per baris yang dibayarkan.</li>
                </ul>
            </div>
            <div>
                <strong>Contoh</strong>
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
                            Jika simbol Liar adalah
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/way-to-goal/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} Pembayaran = Level Taruhan * {odds[2][3]}
                        </li>
                        <li>
                            Jika simbol Liar adalah
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/way-to-goal/item5.png"
                                alt="item5-mini"
                            ></img>
                            {`=>`} Pembayaran = Level Taruhan * {odds[5][3]}
                        </li>
                    </ul>
                    <p>
                        Pemain akan mendapatkan kemenangan tertinggi pada payline ini {`=>`} Pembayaran = Level Taruhan *{" "}
                        {Math.max(odds[2][3], odds[5][3])}
                    </p>
                </div>
            </div>
        </li>
    );
};

const WayToGoalGuideID: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
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
                {renderTermsAndConditionsID(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default WayToGoalGuideID;
