import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../lottery.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const exampleTitle = "example-title";
const tableSmall = "table-small";
const textRedLight = "text-red-light";
const renderGameRule = (maxBet: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>Pilih nilai chip yang ingin Anda mainkan. Semua taruhan harus diselesaikan sebelum waktu taruhan berakhir.</li>
                <li>Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.</li>
                <li>Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.</li>
                <li>Total taruhan maksimum per putaran adala {maxBet}</li>
            </ul>
        </li>
    );
};

const renderBettingOptions = () => {
    return (
        <li className="guide-item">
            <h2>Opsi Taruhan</h2>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th colSpan={2}>Pilihan</th>
                        <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="text-center">
                            4 set
                        </td>
                        <td>
                            <p>
                                Pilih nomor yang ingin Anda pertaruhkan dari 00 hingga 99; jika nomor yang dipilih termasuk dalam Hadiah
                                Ketujuh maka pemain menang.
                            </p>
                            <p>
                                <strong>Catatan</strong>: Jika nomor yang dipilih muncul N kali di antara 4 hasil Hadiah Ketujuh maka
                                pembayaran akan dikalikan N.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            Spesial
                        </td>
                        <td>
                            Pilih nomor yang ingin Anda pertaruhkan dari 00 hingga 99; jika nomor yang dipilih sama dengan 2 digit terakhir
                            Hadiah Spesial maka pemain menang.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            Kepala
                        </td>
                        <td>
                            Pilih nomor yang ingin Anda pertaruhkan dari 0 hingga 9; jika nomor yang dipilih sama dengan puluhan digit
                            Hadiah Khusus maka pemain menang.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            Ekor
                        </td>
                        <td>
                            Pilih nomor yang ingin Anda pertaruhkan dari 0 hingga 9; jika nomor yang dipilih sama dengan digit unit Hadiah
                            Khusus maka pemain menang.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            27 set
                        </td>
                        <td>
                            <p>
                                Pilih nomor yang ingin Anda pertaruhkan dari 00 hingga 99; jika nomor yang dipilih sama dengan 2 digit
                                terakhir dari 27 hasil maka pemain menang.
                            </p>
                            <p>
                                <strong>Catatan</strong>: Jika nomor yang dipilih muncul sama dengan 2 digit terakhir N kali di antara 27
                                hasil maka pembayaran akan dikalikan N.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="text-center">
                            Yang lain
                        </td>
                        <td className="text-center">Besar</td>
                        <td>Jika 2 digit terakhir Hadiah Spesial {`>=`} 50, maka pemain menang.</td>
                    </tr>
                    <tr>
                        <td className="text-center">Kecil</td>
                        <td>Jika 2 digit terakhir dari Hadiah Spesial {`<=`} 49, maka pemain menang.</td>
                    </tr>
                    <tr>
                        <td className="text-center">Ganjil</td>
                        <td>Jika 2 digit terakhir dari Hadiah Spesial adalah angka Ganjil, maka pemain menang.</td>
                    </tr>
                    <tr>
                        <td className="text-center">Genap</td>
                        <td>Jika 2 digit terakhir dari Hadiah Spesial adalah angka Genap, maka pemain menang.</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>Contoh:</strong>
                <ul className={Styles["many-example"]}>
                    <li>{BettingOptions4Sets()}</li>
                    <li>{BettingOptionsSpesial()}</li>
                    <li>{BettingOptionsHead()}</li>
                    <li>{BettingOptionsTail()}</li>
                    <li>{BettingOptions27Sets()}</li>
                </ul>
            </div>
        </li>
    );
};

const BettingOptions4Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>a) 4 Set</div>
            <ul className="desc">
                <li>Pasang taruhan pada dua nomor: 07, 77</li>
                <li>Hasil akhir:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lotere RNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>Ketujuh</td>
                        <td>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>14</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>94</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Nomor 07 telah muncul dua kali dalam hasil Hadiah Ketujuh. Pemain menang di nomor 07 dengan pembayaran ganda.</p>
        </>
    );
};
const BettingOptionsSpesial = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>b) Spesial </div>
            <ul className="desc">
                <li>Pasang taruhan pada tiga angka: 00, 62, 79 </li>
                <li>Hasil akhir:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lotere RNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>Spesial</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>62</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Angka 62 sama dengan dua angka terakhir dari Hadiah Spesial. Pemain menang di nomor 62</p>
        </>
    );
};
const BettingOptionsHead = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>c) Kepala</div>
            <ul className="desc">
                <li>Pasang taruhan pada tiga angka: 0, 6, 9</li>
                <li>Hasil akhir:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lotere RNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>Spesial</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>6</span>
                                <span className={Styles[textRedLight]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Angka 6 sama dengan angka puluhan Hadiah Spesial. Pemain menang di nomor 6</p>
        </>
    );
};
const BettingOptionsTail = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>d) Ekor</div>
            <ul className="desc">
                <li>Pasang taruhan pada dua angka: 0, 5</li>
                <li>Hasil akhir:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lotere RNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>Spesial</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>0906</span>
                                <span className={Styles["text-red"]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Semua nomor yang dipilih tidak sama dengan digit satuan Hadiah Spesial. Pemain kalah taruhan.</p>
        </>
    );
};
const BettingOptions27Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>e) 27 set</div>
            <ul className="desc">
                <li>Pasang taruhan pada empat angka: 05, 12, 77, 85</li>
                <li>Hasil akhir:</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th>Hadiah</th>
                        <th colSpan={12}>Lotere RNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Spesial</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles[textRedLight]}>763</span>
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Pertama</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles["text-grey"]}>684</span>00
                        </td>
                    </tr>
                    <tr>
                        <td>Kedua</td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>164</span>75
                        </td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>507</span>06
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>Ketiga</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>339</span>12
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>665</span>66
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>228</span>83
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>516</span>76
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>451</span>05
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>321</span>82
                        </td>
                    </tr>
                    <tr>
                        <td>Keempat</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>08</span>69
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>03</span>60
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>01</span>79
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>84</span>05
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>Kelima</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>28</span>50
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>62</span>72
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>40</span>43
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>53</span>86
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>64</span>23
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>42</span>31
                        </td>
                    </tr>
                    <tr>
                        <td>keenam</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>87
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>8</span>65
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>92
                        </td>
                    </tr>
                    <tr>
                        <td>Ketujuh</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>97</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>26</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>33</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Nomor 05 muncul dua kali dalam 27 hasil. Pemain menang di nomor 05 dengan pembayaran ganda.</p>
            <p>Nomor 12 muncul satu kali dalam 27 hasil. Pemain menang di nomor 12</p>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran.</li>
                <li>Catatan, Pembayaran termasuk taruhan awal.</li>
            </ul>
            <table className={`table text-center table-medium`}>
                <thead>
                    <tr>
                        <th colSpan={2}>Pilihan</th>
                        <th>Pembayaran</th>
                        <th>
                            Batas Taruhan <br></br>(Min Maks)
                        </th>
                        <th className={Styles["payout-max-total-width"]}>Jumlah Taruhan Maksimum Per Putaran</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>4 Set</td>
                        <td>{formatOdds(odds?.["4Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets4}
                        </td>
                        <td rowSpan={9}>{maxBetFollowChoice?.maxBetMain}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Spesial</td>
                        <td>{formatOdds(odds?.special, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecial}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Kepala</td>
                        <td>{formatOdds(odds?.head, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetHead}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Ekor</td>
                        <td>{formatOdds(odds?.tail, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTail}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>27 set</td>
                        <td>{formatOdds(odds?.["27Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets27}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>Yang lain</td>
                        <td>Besar</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>Kecil</td>
                    </tr>
                    <tr>
                        <td>Ganjil</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>Genap</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderViewStatistic = () => {
    const statsList = "stats-list";
    const resultRow = "result-row";
    const statsResult = "stats-result";
    const subNumber = "sub-number";
    return (
        <li className="guide-item">
            <h2>Statistik</h2>
            <ul className="desc">
                <li>
                    Statistik data didasarkan pada dua digit terakhir dari 27 hasil Lotere RNG, untuk membantu pemain dalam memilih nomor
                    favorit mereka.
                </li>
                <li>
                    Statistik data untuk setiap jenis taruhan pada 100 putaran terakhir
                    <ul className={Styles[statsList]}>
                        <li>
                            <strong>4 Set</strong>: statistik berdasarkan hasil Hadiah Ketujuh.
                        </li>
                        <li>
                            <strong>Spesial</strong>: statistik berdasarkan 2 digit terakhir dari Hadiah Khusus.
                        </li>
                        <li>
                            <strong>27 Set</strong>: statistik berdasarkan 2 digit terakhir dari 27 hasil dari 8 hadiah.
                        </li>
                        <li>
                            <strong>Kepala</strong>: statistik berdasarkan puluhan digit Hadiah Khusus.
                        </li>
                        <li>
                            <strong>Ekor</strong>: statistik berdasarkan angka satuan dari Hadiah Khusus.
                        </li>
                        <li>
                            <strong>Lainnya (Besar/Kecil, Ganjil/Genap)</strong>: statistik tingkat kemenangan pada setiap opsi taruhan
                            Besar/Kecil, Ganjil/Genap.
                        </li>
                    </ul>
                    <ul className={Styles["many-example"]}>
                        <li>
                            <div className={Styles[exampleTitle]}>a) 4 Set, Spesial, 27 Set </div>
                            <ul className={Styles[statsList]}>
                                <li>
                                    10 angka dengan kemunculan terbanyak (ditunjukkan dengan warna{" "}
                                    <span className={Styles["text-red"]}>merah</span>)
                                </li>
                                <li>
                                    10 angka dengan kemunculan paling sedikit (ditunjukkan dengan warna{" "}
                                    <span className={Styles["text-blue"]}>biru</span>)
                                </li>
                            </ul>
                            <p className="bold">Contoh:</p>
                            <p>
                                Statistik data dalam jenis taruhan {'"'}4 Set{'"'}
                            </p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>44</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>24</span>
                                </div>
                                <p>nomor 44 memiliki total 24 penampilan di hadiah ke-7 dalam 100 putaran terakhir</p>
                            </div>
                            <p>
                                Statistik data dalam jenis taruhan {'"'}27 Set{'"'}
                            </p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>00</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>0</span>
                                </div>
                                <p>angka 00 tidak muncul dalam 2 digit terakhir dari 27 hasil dalam 100 putaran terakhir.</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>b) Kepala, Ekor</div>
                            <p>Hitung kemunculan setiap angka dari 0-9</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    Jika total penampilan &#62; 10, akan ditampilkan warna <span className={Styles["text-red"]}>merah</span>
                                    .
                                </li>
                                <li>
                                    Jika total tampilan &#60;= 10, akan ditampilkan warna <span className={Styles["text-blue"]}>biru</span>.
                                </li>
                            </ul>
                            <p className="bold">Contoh:</p>
                            <p>
                                Statistik data dalam jenis taruhan {'"'}Kepala{'"'}
                            </p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>1</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>32</span>
                                </div>
                                <p>nomor 1 memiliki total 32 penampilan dalam puluhan digit Hadiah Khusus dalam 100 putaran terakhir</p>
                            </div>
                            <p>
                                Statistik data dalam jenis taruhan {'"'}Ekor{'"'}
                            </p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>7</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>4</span>
                                </div>
                                <p>Nomor 7 memiliki total 4 penampilan dalam digit unit Hadiah Khusus dalam 100 putaran terakhir.</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>c) Lainnya (Besar/Kecil, Ganjil/Genap)</div>
                            <p>Tunjukkan tingkat kemenangan (%) pada setiap opsi taruhan Besar/Kecil, Ganjil/Genap.</p>
                            <p className="bold">Contoh:</p>
                            <div className={Styles["others"]}>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-red"]}`}>GANJIL</span>
                                    <span className={`${Styles[subNumber]}`}>48%</span>
                                </div>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-white"]}`}>GENAP</span>
                                    <span className={`${Styles[subNumber]}`}>52%</span>
                                </div>
                            </div>
                            <p>Tingkat kemenangan untuk opsi taruhan Ganjil adalah 48% dan 52% untuk Genap</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const LotteryGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah permainan togel online yang sangat populer di Vietnam. Pemain memasang taruhan pada angka yang
                        disukai, permainan menentukan menang atau kalah dengan mencocokkan angka berdasarkan 27 hasil dari 8 hadiah.
                    </p>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <table className={`table text-center ${Styles["table-medium"]}`}>
                                <thead>
                                    <tr>
                                        <th>Hadiah</th>
                                        <th colSpan={12}>Lotere RNG</th>
                                        <th>Jumlah Hasil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Spesial</td>
                                        <td colSpan={12} className="bold">
                                            <span className={Styles["text-red"]}>76349</span>
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Pertama</td>
                                        <td colSpan={12} className="bold">
                                            68400
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Kedua</td>
                                        <td colSpan={6} className="bold">
                                            16475
                                        </td>
                                        <td colSpan={6} className="bold">
                                            50706
                                        </td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>Ketiga</td>
                                        <td colSpan={4} className="bold">
                                            33912
                                        </td>
                                        <td colSpan={4} className="bold">
                                            66566
                                        </td>
                                        <td colSpan={4} className="bold">
                                            22883
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            51676
                                        </td>
                                        <td colSpan={4} className="bold">
                                            45105
                                        </td>
                                        <td colSpan={4} className="bold">
                                            32182
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Keempat</td>
                                        <td colSpan={3} className="bold">
                                            0869
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0360
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0179
                                        </td>
                                        <td colSpan={3} className="bold">
                                            8405
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>Kelima</td>
                                        <td colSpan={4} className="bold">
                                            2850
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6272
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4043
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            5386
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6423
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4231
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Keenam</td>
                                        <td colSpan={4} className="bold">
                                            287
                                        </td>
                                        <td colSpan={4} className="bold">
                                            865
                                        </td>
                                        <td colSpan={4} className="bold">
                                            292
                                        </td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Ketujuh</td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>97</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>26</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>42</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>33</span>
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={13}></td>
                                        <td className="bold">Total = 27</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {renderBettingOptions()}
                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderViewStatistic()}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default LotteryGuideID;
