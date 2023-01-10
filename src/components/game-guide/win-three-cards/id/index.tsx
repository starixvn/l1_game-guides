import React from "react";
import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../win-three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderMD5ID } from "../../../shared/md5-count-down-timer/id";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>Aturan permainan</h2>
            <ul className="desc">
                <li>Pada awalnya, tiga kartu tertutup akan dibagikan ke tangan Dragon dan Phoenix.</li>
                <li>
                    Pemain memilih nilai chip dan menempatkannya pada opsi taruhan yang diinginkan. Semua taruhan harus ditempatkan sebelum
                    waktu taruhan berakhir. Perhatikan bahwa, taruhan yang dipasang tidak dapat dibatalkan.
                </li>
                <li>
                    Pemain dapat memasang taruhan pada opsi apa pun yang tersedia kecuali Naga dan Phoenix, pemain hanya dapat bertaruh pada
                    Dragon atau Phoenix.
                </li>
                <li>Setelah waktu taruhan berakhir, sistem akan mengungkapkan hasil permainan.</li>
                <li>Permainan menentukan menang atau kalah dengan membandingkan peringkat tangan antara Dragon dan Phoenix.</li>
                <li>
                    Jika kedua kartu Dragon dan Phoenix memiliki peringkat yang sama (jenis kartu dan nilai kartu), hasil permainan adalah
                    Seri dan semua taruhan dikembalikan.
                </li>
                <li>Dek standar dengan 52 kartu (tidak termasuk Joker) dikocok setelah setiap putaran.</li>
                <li>Total taruhan maksimum per putaran adalah {maxBet}</li>
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className={Styles["payout-option"]}>Opsi Taruhan</th>
                                <th>Kondisi Menang</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>Naga</td>
                                <td className="text-start">Tangan Naga memiliki peringkat yang lebih tinggi.</td>
                            </tr>
                            <tr>
                                <td>Phoenix</td>
                                <td className="text-start">Tangan Phoenix memiliki peringkat yang lebih tinggi.</td>
                            </tr>
                            <tr>
                                <td>Pair 8 Plus</td>
                                <td className="text-start">
                                    Tangan yang menang terdiri dari Pair 9 hingga Pair A, Straight, Flush, Straight Flush, Three of a Kind.
                                </td>
                            </tr>
                            <tr>
                                <td>Three of a Kind</td>
                                <td className="text-start">Hasil tangan yang menang adalah “Three of a Kind”. </td>
                            </tr>
                            <tr>
                                <td>Seri Flush</td>
                                <td className="text-start">Hasil tangan yang menang adalah “Straight Flush”.</td>
                            </tr>
                            <tr>
                                <td>Menyiram</td>
                                <td className="text-start">Hasil tangan yang menang adalah “Flush”. </td>
                            </tr>
                            <tr>
                                <td>Seri</td>
                                <td className="text-start">Hasil tangan yang menang adalah “Straight”. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Pembayaran</h2>
            <ul className="desc">
                <li>
                    Jumlah kemenangan dihitung berdasarkan odds taruhan. <br></br>
                    <strong>Catatan:</strong> pembayaran termasuk taruhan awal.
                </li>
                <li>
                    Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Opsi Taruhan</th>
                                    <th>Odds</th>
                                    <th>
                                        Batas Taruhan <br></br> (Min - Maks)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Naga</td>
                                    <td>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phoenix</td>
                                    <td>{formatOdds(odds?.phoenix, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPhoenix}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pair 8 Plus </td>
                                    <td>{formatOdds(odds?.pair8Plus, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPair8Plus}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Three of a Kind</td>
                                    <td>{formatOdds(odds?.threeOfAKind, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetThreeOfAKind}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Straight Flush</td>
                                    <td>{formatOdds(odds?.straightFlush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flush</td>
                                    <td>{formatOdds(odds?.flush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Straight</td>
                                    <td>{formatOdds(odds?.straight, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraight}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderCardType = () => {
    return (
        <>
            <li className="guide-item">
                <h2>Jenis Kartu</h2>
                <div className="table-container text-center">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>Tipe kartu</th>
                                <th>Keterangan</th>
                                <th>Contoh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>
                                    <strong>235</strong>
                                </td>
                                <td className="text-start">Tiga kartu 2, 3, 5 dengan jenis yang berbeda.</td>
                                <td width={250}>
                                    <span className={Styles["wrapper-card"]}>
                                        <img
                                            src="/static/images/win-three-cards/235-1.png"
                                            alt="235"
                                            height={65}
                                            loading="eager"
                                            style={{ marginBottom: 5 }}
                                        />
                                    </span>{" "}
                                    <br></br>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/235-2.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Three of a Kind</strong>
                                </td>
                                <td className="text-start">Tiga kartu dengan nilai yang sama.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/threeKind.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Straight Flush</strong>
                                </td>
                                <td className="text-start">Tiga kartu dengan jenis yang sama dalam urutan peringkat.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straightFlush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Flush</strong>
                                </td>
                                <td className="text-start">Tiga kartu dengan jenis yang sama dengan peringkat yang berbeda.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/flush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Straight</strong>
                                </td>
                                <td className="text-start">Tiga kartu berurutan dengan jenis yang berbeda.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straight.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Pasangan</strong>
                                </td>
                                <td className="text-start">Dua kartu dengan peringkat yang sama.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/pair.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Kartu Tinggi</strong>
                                </td>
                                <td className="text-start">Kartu tertinggi ketika tidak ada tangan yang lebih tinggi tersedia.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/highCard.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </>
    );
};

export const renderRankingLevel = () => {
    return (
        <>
            <li className="guide-item">
                <h2>Tingkat Peringkat</h2>
                <ul className="desc">
                    <li>
                        <strong>Peringkat Kartu</strong>
                        <ul className="detail">
                            <li>
                                A {">"} K {">"} Q {">"} J {">"} 10 {">"} 9 {">"} 8 {">"} 7 {">"} 6 {">"} 5 {">"} 4 {">"} 3 {">"} 2
                            </li>
                            <li>Jenis kartu tidak mempengaruhi peringkat kartu.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Peringkat Tangan</strong>
                        <ul className="detail">
                            <li>
                                Three of a Kind {">"} Straight Flush {">"} Flush {">"} Straight {">"} Pair {">"} Kartu Tinggi.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>235 {">"} Three of a Kind</strong>
                        <ul className="detail">
                            <li>Jika hasilnya hanya 235 dan Three of a Kind, jenis kartu 235 lebih tinggi dari Three of a Kind.</li>
                            <li>Ketika tidak ada jenis kartu “Three of a Kind” di hasil, 235 adalah kartu tinggi terkecil.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Pasangan</strong>
                        <ul className="detail">
                            <li>
                                Jika Dragon dan Phoenix sama-sama memiliki satu Pair, nilai kartu Pair akan dibandingkan. Jika nilai kartu
                                identik maka nilai kartu dari kartu yang tersisa dibandingkan.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Flush, Kartu Tinggi</strong>
                        <ul className="detail">
                            <li>
                                Nilai kartu di kedua sisi dibandingkan dimulai dengan kartu yang memiliki nilai tertinggi. Jika kartu
                                tertinggi di masing-masing tangan sama, kartu tertinggi kedua akan dibandingkan, dan seterusnya.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Straight Flush, Straight</strong>
                        <ul className="detail">
                            <li>
                                Pada Straight Flush dan Straight, kartu As (A) dapat digunakan sebagai kartu dengan nilai tertinggi atau
                                terendah. <br></br>
                                Contoh: QKA {">"} JQK {">"} …… {">"} 234 {">"} A23
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </>
    );
};

const WinThreeCardsGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName}, dikenal sebagai Golden Flower, adalah permainan kartu yang sangat populer di Kasino. Game ini
                        menggunakan setumpuk 52 kartu standar (tidak termasuk Joker). Tujuan permainan ini adalah untuk membandingkan
                        peringkat tangan antara Dragon dan Phoenix untuk menentukan hasil permainan. Tangan dengan peringkat lebih tinggi
                        akan menang.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderCardType()}
                {renderRankingLevel()}
                <li className="guide-item">
                    {renderMD5ID()}
                    <div className="content">
                        <strong> Contoh:</strong> periksa keaslian dan transparansi hasil permainan {gameName}
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>Langkah 1:</strong> Salin Kunci MD5 sebelum hasilnya diumumkan.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step1_en.png?v=3"
                                alt="md5-string"
                            />
                        </li>
                        <li>
                            <strong>Langkah 2:</strong> Salin hasil setelah sistem menerbitkan hasilnya.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step2_en.png?v=3"
                                alt="md5-result"
                            />
                            <div>
                                Catatan: Dari kiri ke kanan, 8♠️ Q♥️ 5♥️ 9♠️ 9♣ 10♠️ sesuai dengan urutan kartu yang dibagikan di awal
                                putaran permainan.
                            </div>
                        </li>
                        <li>
                            <strong>Langkah 3:</strong> Buka{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            dan rekatkan Hasil ke kotak MD5.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step3_vi.png?v=1"
                                alt="hash-darling"
                            />
                        </li>
                        <li>
                            <strong>Langkah 4:</strong> Tekan tombol “hash darling, hash!” dan bandingkan rangkaian daftar periksa MD5 yang
                            baru dibuat dengan Kunci MD5 di Langkah 1.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step4_vi.png?v=1"
                                alt="md5-checksum"
                            />
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default WinThreeCardsGuideID;
