import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";
import { PROJECTS } from "../../../../common/constants";
import { renderGameRuleContent } from "../../../shared/slot-games/id";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = (project: string | undefined) => {
    return (
        <>
            <h2>Aturan Permainan</h2>
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
            <h2>Tabel Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung berdasarkan odds taruhan.</li>
                <li>
                    <strong>Catatan:</strong> Pembayaran termasuk taruhan awal.
                </li>
                <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
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
                                Memiliki 5 simbol {iconItem1} yang terletak pada payline yang sama.
                                <br></br>Pembayaran = Tingkat Taruhan * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Memiliki 4 simbol {iconItem1} yang terletak pada payline yang sama.
                                <br></br>Pembayaran = Tingkat Taruhan * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Memiliki 3 simbol {iconItem1} yang terletak pada payline yang sama.
                                <br></br>Pembayaran = Tingkat Taruhan * {odds[1][3]}
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
            <h2>Jackpot</h2>
            <ul className="desc">
                <li>
                    Jackpot adalah hadiah utama bagi Pemain yang memiliki 5 simbol {iconJackpot} yang terletak pada payline yang sama. Ada 3
                    hadiah Jackpot sesuai dengan 3 Tingkat Taruhan dan semua Jackpot bersifat progresif, di mana setiap kali permainan
                    dimainkan, sebagian dari jumlah taruhan dikontribusikan ke Jackpot hingga satu Pemain yang beruntung memenangkan
                    Jackpot.
                </li>
            </ul>

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
                            <td>
                                <img
                                    className={`${Styles["item10"]} ${Styles["en"]}`}
                                    src="./static/images/four-guardians/L2/en/item10.png"
                                    alt="item10"
                                ></img>
                            </td>
                            <td>
                                Pemain akan memenangkan hadiah Jackpot jika terdapat 5 simbol yang terletak pada payline yang sama dengan
                                yang telah dipilih.<br></br>
                                <strong>Catatan: </strong>
                                Pemain akan menerima 98% dari hadiah Jackpot.
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
            <h2>Free Spin</h2>
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
                                " FREE SPINS"
                            )}
                        </td>
                        <td>
                            <ul className="desc">
                                <li>
                                    Pemain akan menerima Bonus Putaran Gratis sesuai dengan jumlah simbol Putaran Gratis yang ada di hasil.
                                </li>
                                <li>Simbol Free Spin tidak harus berada di payline yang sama.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className="desc">
                <li>
                    <strong>Catatan:</strong> Simbol &#34;Putaran Gratis&#34; harus muncul di gulungan yang berbeda. Misalnya, jika ada 3
                    simbol &#34;Putaran Gratis&#34; pada gulungan yang sama, sistem akan dihitung sebagai satu simbol.
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
                            Ada 4 simbol &#34;Putaran gratis&#34; di hasil, tetapi 3 simbol terletak di gulungan yang sama. Pemain tidak
                            memenuhi syarat untuk bonus putaran Gratis.
                        </span>
                    </div>
                </li>
                <li className="clear-both">
                    Putaran Gratis dimainkan pada Tingkat Taruhan yang sama dan jumlah garis pembayaran yang sama dengan putaran terakhir
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

const renderBonus = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>Bonus</h2>
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
                                " BONUS"
                            )}
                        </td>
                        <td>
                            <ul className="desc">
                                <li>Memiliki 3, 4, atau 5 simbol Bonus yang muncul di mana saja pada hasil akan memicu Permainan Bonus.</li>
                                <li>Simbol Bonus tidak harus berada di garis pembayaran yang sama.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul className="desc">
                <li>
                    <strong> Catatan:</strong> Simbol Bonus harus muncul di gulungan yang berbeda. Misalnya, jika 2 atau 3 simbol Bonus
                    muncul di gulungan yang sama, sistem akan dihitung sebagai satu simbol.
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
                            Ada 4 “Bonus” simbol “Bonus” di hasil, tetapi 2 simbol terletak di gulungan yang sama. Pemain hanya memenuhi
                            syarat untuk 3 item.
                        </span>
                    </div>
                </li>
                <li>
                    Pemain harus menyelesaikan Game Bonus dalam waktu 120 detik dari hitungan mundur. Setelah periode ini, sistem akan
                    membuka Peti secara acak dan menyelesaikan putaran permainan.
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
                        Simbol “Wild” dapat menggantikan semua simbol kecuali
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
                        dan{" "}
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src={`./static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/en` : project}/item10.png`}
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
                            Jika simbol Liar adalah
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} Pembayaran = Tingkat Taruhan * {odds[2][3]}
                        </li>
                        <li>
                            Jika simbol Liar adalah
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
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

const FourGuardiansGuideID: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs, project } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah permainan slot online, dibangun di atas legenda Empat Binatang Suci sebagai Naga, Qilin, Penyu,
                        dan Phoenix. Permainan ini mencakup 5 gulungan dan 3 baris, dengan 11 simbol berbeda. Pemain akan menang jika ada
                        simbol yang sama yang terletak di garis pembayaran yang sama dengan yang Anda pilih.
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
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default FourGuardiansGuideID;
