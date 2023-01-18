import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsID } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../fortune-cat.module.scss";
import { GameConfigProps } from "../type";

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
                    Pemain memilih Paylines (Garis) dan menetapkan Level Taruhan yang ingin Anda pasang sebelum menekan “Putar”.
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
            <h2>Tabel Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung berdasarkan odds taruhan.</li>
                <li>
                    <strong>Catatan:</strong> Pembayaran termasuk taruhan awal.
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
                <strong>Contoh</strong>
            </p>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Simbol</th>
                            <th>Keterangan</th>
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
                                Memiliki 5 simbol <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> yang terletak pada
                                payline yang sama.
                                <br></br>Pembayaran = Tingkat Taruhan * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Memiliki 4 simbol <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> yang terletak pada
                                payline yang sama.
                                <br></br>Pembayaran = Tingkat Taruhan * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Memiliki 3 simbol <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> yang terletak pada
                                payline yang sama.
                                <br></br>Pembayaran = Tingkat Taruhan * {odds[1][3]}
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
                    " FREE SPINS"
                )}
                <ul className="desc">
                    <li>Pemain akan menerima Bonus Putaran Gratis sesuai dengan jumlah simbol Putaran Gratis yang ada di hasil.</li>
                    <li>Simbol Free Spin tidak harus berada di payline yang sama.</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> Catatan: </strong>
                    Simbol “Putaran Gratis” harus muncul di gulungan yang berbeda. Misalnya, jika ada 3 simbol “Putaran Gratis” pada
                    gulungan yang sama, sistem akan dihitung sebagai satu simbol.
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
                {renderIconContentLarge(
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
                            <img src="/static/images/fortune-cat/guide_example_bonus.png#v4" alt="guide_example_bonus" loading="eager" />
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
                    <img src="/static/images/fortune-cat/guide_example_wild.png#v3" alt="guide_example_wild" loading="eager" />
                </span>

                <ul className="desc">
                    <li>
                        Simbol “Wild” dapat menggantikan semua simbol kecuali
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item8_small.png" alt="item8"></img>,
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item7_small.png#v2" alt="item7"></img>
                        dan
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item10_small.png#v2" alt="item10"></img>
                    </li>
                    <li>Hanya kemenangan tertinggi yang dicapai per baris yang dibayarkan.</li>
                </ul>
            </div>
            <div>
                <strong>Contoh</strong>
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
                            Jika simbol Liar adalah
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item2_small.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} Pembayaran = Tingkat Taruhan * {odds[2][3]}
                        </li>
                        <li>
                            Jika simbol Liar adalah
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item5_small.png"
                                alt="item5-mini"
                            ></img>
                            {`=>`} Pembayaran = Tingkat Taruhan * {odds[5][3]}
                        </li>
                    </ul>
                    <p>
                        Pemain akan mendapatkan kemenangan tertinggi pada payline ini {`=>`} Pembayaran = Tingkat Taruhan *{" "}
                        {Math.max(odds[2][3], odds[5][3])}
                    </p>
                </div>
            </div>
        </li>
    );
};

const FortuneCatGuideID: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        Kucing Keberuntungan adalah permainan slot online dengan kucing keberuntungan yang melambai - simbol keberuntungan
                        dan kemakmuran. Game ini mencakup 5 gulungan dan 3 baris, dengan 11 simbol berbeda. Pemain akan menang jika simbol
                        yang sama terletak pada payline yang sama yang telah dipilih.
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
                {renderTermsAndConditionsID(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default FortuneCatGuideID;
