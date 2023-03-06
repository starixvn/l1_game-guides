import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { formatOdds } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../roulette.module.scss";
import { renderGameRuleImage } from "../shared";

const wrapperImg = "wrapper-img";
const tableSmall = "table-small";
const renderGameRule = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>Pilih nilai chip yang ingin Anda mainkan. Semua taruhan harus diselesaikan sebelum waktu taruhan berakhir.</li>
                <li>
                    Klik tombol “Konfirmasi” untuk menyelesaikan, atau X untuk mengatur ulang taruhan Anda. Catatan, taruhan yang
                    dikonfirmasi tidak dapat dibatalkan.{" "}
                </li>

                <li>
                    Setelah waktu taruhan habis, roda akan berputar dengan bola menggelinding ke arah yang berlawanan dengan putaran roda.
                </li>
                <li>Nomor pemenang ditentukan oleh slot tempat bola jatuh.</li>
                <li>Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.</li>
                <li>
                    Jumlah kemenangan dihitung berdasarkan odds taruhan. <strong>Perhatikan,</strong> Pembayaran termasuk taruhan awal.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Jenis Taruhan</th>
                                    <th>Pembayaran</th>
                                    <th>
                                        Batas Taruhan <br></br> (Min-Maks)
                                    </th>
                                    <th>Jumlah Taruhan Maksimum Per Putaran</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Straight Up</td>
                                    <td>{formatOdds(odds?.straightUp, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightUp}
                                    </td>
                                    <td rowSpan={12}>{maxBetFollowChoice?.maxBetMain}</td>
                                </tr>
                                <tr>
                                    <td>Split</td>
                                    <td>{formatOdds(odds?.split, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSplit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Street</td>
                                    <td rowSpan={2}>{formatOdds(odds?.street, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStreet}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Segi tiga</td>
                                </tr>
                                <tr>
                                    <td>Sudut</td>
                                    <td rowSpan={2}>{formatOdds(odds?.corner, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetCorner}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Empat Angka</td>
                                </tr>
                                <tr>
                                    <td>Garis</td>
                                    <td>{formatOdds(odds?.line, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetLine}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kolom</td>
                                    <td rowSpan={2}>{formatOdds(odds?.dozen, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDozen}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dozen</td>
                                </tr>
                                <tr>
                                    <td>Merah Hitam</td>
                                    <td rowSpan={3}>{formatOdds(odds?.redBlack, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRedBlack}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ganjil Genap</td>
                                </tr>
                                <tr>
                                    <td>Besar/Kecil</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
            </ul>
        </>
    );
};

const renderBetChipsNotice = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    return (
        <div className="table-container">
            <table className={`table text-center ${Styles["table-customize"]}`}>
                <thead>
                    <tr>
                        <th>TARUHAN DALAM</th>
                        <th>TARUHAN LUAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/A-X.png" alt="A-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Straight Up:</strong> taruhan pada nomor tertentu.<br></br>+ Tempatkan chip Anda langsung di
                                    nomor tunggal mana pun (termasuk Nol)
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/H-X.png" alt="H-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Kolom: </strong>taruhan pada semua dua belas angka (tidak termasuk Nol)<br></br>+ Tempatkan chip
                                    Anda di salah satu area bertanda &#34;{formatOdds(odds?.column, fractionalOddsFormat)}&#34; di akhir
                                    kolom.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/B-X.png" alt="B-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Split: </strong>bertaruh pada dua angka yang bersebelahan, baik horizontal maupun vertikal.
                                    <br></br>+ Tempatkan chip Anda pada garis di antara dua angka apa pun.
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/I-X.png" alt="I-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Dozen: </strong>taruhan pada dua belas nomor berurutan.<br></br>+ Tempatkan chip Anda di salah
                                    satu dari tiga area bertanda {`"1-12", "13-24" atau "25-36"`}.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/C-X.png" alt="C-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Street: </strong>taruhan pada tiga nomor berurutan yang terletak di baris yang sama.<br></br>+
                                    Tempatkan chip Anda di tepi luar ketiga angka.
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/J-X.png" alt="J-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Merah/Hitam: </strong>bertaruh pada hasil akhir warna Merah atau Hitam.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/D-X.png" alt="D-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Segi tiga: </strong>taruhan pada tiga angka yang berdampingan 0, 1, 2 atau 0, 2, 3<br></br>+
                                    Tempatkan chip Anda di sudut berpotongan (0, 1, dan 2) atau (0, 2, dan 3)
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/K-X.png" alt="K-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Ganjil/Genap: </strong>bertaruh apakah hasil akhirnya adalah Ganjil atau Genap (tidak termasuk
                                    Nol)
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/E-X.png" alt="E-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Corner :</strong>taruhan pada empat angka.
                                    <br></br>+ Tempatkan chip Anda di persimpangan di mana keempat angka bertemu.
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/L-X.png" alt="L-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Besar/Kecil: </strong>bertaruh apakah hasil akhirnya Besar (19-36) atau Kecil (1-18)
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/F-X.png" alt="F-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Empat angka: </strong>bertaruh pada empat angka 0, 1, 2, 3 <br></br>+ Tempatkan chip Anda di
                                    sudut berpotongan 0 dan baris 1, 2, 3
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/G-X.png" alt="G-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Line: </strong>taruhan pada dua baris yang berdampingan.<br></br>+ Tempatkan chip Anda di ujung
                                    dua baris di persimpangan di antara mereka.
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderCallBetTiers = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Tingkat</span>
            <ul className="desc">
                <li>Taruhan Tiers termasuk angka 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33 </li>
                <li>
                    Untuk memainkan taruhan Tiers, akan diambil enam chip yang ditempatkan pada enam Split: (5, 8), (10, 11), (13, 16), (23,
                    24), (27, 30), (33, 36)
                </li>
            </ul>
            <p>
                <strong>Contoh: </strong>Pemain memilih nilai chip 10, dan klik opsi Tiers, akan dikenakan biaya 6 chip untuk pilihan ini:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Jenis Taruhan</th>
                            <th>Pilihan </th>
                            <th>Taruhan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={6}>Split</td>
                            <td>5, 8</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>10, 11</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13, 16</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>23, 24</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27, 30</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>33, 36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>60</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetOrphelins = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Orphelins</span>
            <ul className="desc">
                <li>Taruhan Orphelins mencakup angka 1, 20, 14, 31, 9, 6, 34, 17</li>
                <li>
                    Untuk memainkan taruhan Orphelins, akan diambil lima chip yang ditempatkan pada:
                    <ul className="plus">
                        <li>Empat chip untuk empat Split (6, 9), (14, 17), (17, 20), (31, 34)</li>
                        <li>Satu chip untuk taruhan Lurus (1) </li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>Contoh: </strong>Pemain memilih nilai chip 10, dan klik opsi Orphelins, akan dikenakan biaya 5 chip untuk pilihan
                ini:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-orphelins_ex.png"
                        alt="game_guide-orphelins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-orphelins_ex.png" alt="game_guide-orphelins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Jenis Taruhan</th>
                            <th>Pilihan</th>
                            <th>Taruhan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={4}>Split</td>
                            <td>6, 9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>14, 17</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>17, 20</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>31, 34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Straight Up</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetVoisins = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Voisin</span>
            <ul className="desc">
                <li>Taruhan Voisins mencakup angka 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25</li>
                <li>
                    Untuk memainkan taruhan Voisins, sembilan chip akan diambil yang ditempatkan pada:
                    <ul className="plus">
                        <li>Lima chip untuk lima Split: (12, 15), (18, 21), (32, 35), (19, 22), (4, 7)</li>
                        <li>Dua chip untuk Segi tiga: (0, 2, 3) </li>
                        <li>Dua chip untuk Tendangan Sudut: (25, 26, 28, 29)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>Contoh: </strong>Pemain memilih nilai chip 10, dan mengklik opsi Voisins, akan dikenakan biaya 9 chip untuk pilihan
                ini:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-voisins_ex.png"
                        alt="game_guide-voisins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-voisins_ex.png" alt="game_guide-voisins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Jenis Taruhan</th>
                            <th>Pilihan</th>
                            <th>Mempertaruhkan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>Membelah</td>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>18, 21</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>19, 22</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4, 7</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Segi Tiga</td>
                            <td>0, 2, 3</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Sudut</td>
                            <td>25, 26, 28, 29</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetZero = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Nol</span>
            <ul className="desc">
                <li>Taruhan Nol mencakup angka 12, 35, 3, 26, 0, 32, 15</li>
                <li>
                    Untuk memainkan Zero bet akan diambil empat chip yang ditempatkan pada:
                    <ul className="plus">
                        <li>Satu chip untuk taruhan Lurus (26)</li>
                        <li>Tiga chip untuk tiga Split (0, 3), (12, 15), (32, 35)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>Contoh: </strong>Pemain memilih nilai chip 10, dan klik opsi Nol, akan dikenakan biaya 4 chip untuk pilihan ini:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Jenis Taruhan</th>
                            <th>Pilihan</th>
                            <th>Taruhan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>Split</td>
                            <td>0, 3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td>Straight Up</td>
                            <td>26</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetNeighbors = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Tetangga</span>
            <p>
                Tetangga dibuat dengan 5 angka, di antaranya satu angka dipilih oleh pemain, bersama dengan dua angka yang terletak di sisi
                kiri dan kanan angka itu di roda.
            </p>
            <ul className="desc">
                <li>Untuk memainkan taruhan Tetangga akan diambil lima chip yang ditempatkan pada 5 taruhan Lurus.</li>
            </ul>

            <div className={Styles["wrapper-img-circle"]}>
                <img src="/static/images/roulette/game_guide-neighbors_1.png" alt="game_guide-neighbors_1" loading="lazy" />
            </div>
            <p>
                <strong>Contoh: </strong>Pemain memilih nilai chip 10, dan klik angka 27 untuk taruhan Tetangga, maka akan dikenakan biaya 5
                chip untuk lima taruhan Lurus: (36), (13), (27), (6), (34)
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide_neighbors_ex.png"
                        alt="game_guide_neighbors_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide_neighbors_ex.png" alt="game_guide_neighbors_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Jenis Taruhan</th>
                            <th>Pilihan</th>
                            <th>Taruhan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>Straight Up</td>
                            <td>36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderBettingOptions = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>Opsi Taruhan</h2>
            <p>
                Jenis taruhan Roulette dibagi menjadi dua kategori: taruhan dalam dan taruhan luar. Taruhan yang dipasang pada angka itu
                sendiri disebut taruhan dalam (Lurus, Split, Jalan...), sedangkan taruhan yang dipasang di luar bidang angka disebut taruhan
                luar (Ganjil/Genap, Merah/Hitam, Besar/Kecil, Kolom dan Lusin)
            </p>
            {renderGameRuleImage(fractionalOddsFormat, "id")}
            {renderBetChipsNotice(odds, fractionalOddsFormat)}
        </li>
    );
};

const renderCallBet = (fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>Taruhan Panggilan</h2>
            <p>
                Taruhan Panggilan atau Taruhan Prancis adalah opsi taruhan khusus yang merupakan kumpulan taruhan yang telah ditentukan
                sebelumnya. Ada 5 pilihan: Tiers, Voisins du Zero, Orphelins, Zero, Neighbors.
            </p>
            <div className={Styles[wrapperImg]}>
                <div className={Styles["wrapper-img-circle"]}>
                    <img src="/static/images/roulette/game_guide-cuoc_nhanh.png" alt="game_guide-cuoc_nhanh" loading="lazy" />
                </div>
            </div>

            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Jenis Taruhan Panggilan</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">{renderCallBetTiers(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetOrphelins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetVoisins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetZero(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetNeighbors(fractionalOddsFormat)}</li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const RouletteGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah permainan judi yang sederhana namun menarik. Permainan ini dimainkan dengan bola dan roda roulette
                        yang terdiri dari tiga puluh tujuh slot, diberi nomor dari 0 hingga 36. Setiap slot berwarna merah atau hitam,
                        sedangkan slot “0” berwarna hijau. Para pemain memprediksi jumlah bola yang akhirnya akan berhenti setelah roda
                        berputar. Jika bola jatuh ke nomor yang Anda pilih, Anda akan menang; jika tidak, Anda kalah.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {renderBettingOptions(odds, fractionalOddsFormat)}
                {renderCallBet(fractionalOddsFormat)}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default RouletteGuideID;
