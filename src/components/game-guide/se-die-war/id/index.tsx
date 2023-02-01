import React from "react";
import { useTheme } from "next-themes";

import { renderTermsAndConditionsID } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/id";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../se-die-war.module.scss";
import { buildVersion, Themes } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>Pilih nilai chip yang ingin Anda mainkan. Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir.</li>
                <li>Catatan, taruhan yang dipasang tidak dapat dibatalkan.</li>
                <li>Setelah waktu taruhan telah berakhir, Bowl akan dihapus dan hasilnya akan ditampilkan.</li>
                <li>Total taruhan maksimum per putaran adalah {maxBet}</li>
                <li>
                    Jumlah total taruhan dari semua pemain yang ditampilkan pada setiap opsi taruhan hanya untuk referensi.
                    Untuk pasar dan mata uang yang berbeda, totalnya dikonversi berdasarkan tarif internal yang ditetapkan oleh perusahaan.
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Pilihan</th>
                                    <th>Kondisi Kemenangan</th>
                                    <th>Deskripsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>Player</td>
                                    <td colSpan={2} className="text-start">
                                        Jumlah tombol merah pada hasil Player lebih banyak dari pada Banker.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Banker</td>
                                    <td colSpan={2} className="text-start">
                                        Jumlah tombol merah pada hasil Banker lebih banyak daripada Player.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Seri</td>
                                    <td colSpan={2} className="text-start">
                                        Player dan Banker memiliki hasil yang sama.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Jumlah Genap</td>
                                    <td colSpan={2} className="text-start">
                                        Jumlah total tombol merah yang ada pada hasil Player dan Banker adalah GENAP.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Jumlah Ganjil</td>
                                    <td colSpan={2} className="text-start">
                                        Jumlah total tombol merah yang ada pada hasil Player dan Banker adalah GANJIL.
                                    </td>
                                </tr>
                                {renderGameRulePlayerOrBanker(false)}
                                {renderGameRulePlayerOrBanker(true)}
                            </tbody>
                        </table>
                    </div>
                    {renderGameRuleExample()}
                </li>
            </ul>
        </>
    );
};

const renderGameRulePlayerOrBanker = (isBanker = false) => {
    return (
        <>
            <tr>
                <td rowSpan={9}>{isBanker ? "Banker" : "Player"}</td>
                <td rowSpan={2}>Ganjil</td>
                <td>3 merah, 1 putih</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td>1 merah, 3 putih</td>
                {renderOneRedThreeWhite()}
            </tr>
            <tr>
                <td rowSpan={3}>Genap</td>
                <td>4 merah</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 putih</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>2 merah, 2 putih</td>
                {renderTwoRedTwoWhite()}
            </tr>
            {RedWhiteDataOnTable()}
        </>
    );
};

const renderGameRuleExample = () => {
    const oneRedThreeWhite = "1 merah, 3 putih";
    const threeRedOneWhite = "3 merah, 1 putih";
    return (
        <>
            <p>
                <strong>Contoh</strong>
            </p>
            <div>
                <strong>Banker, opsi Player. </strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>Karena jumlah tombol merah di hasil Player lebih banyak daripada Banker. Taruhan pada opsi Player akan menang.</p>
            <div>
                <strong>Jumlah GENAP</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>Jumlah total tombol merah yang ada pada hasil Player dan Banker adalah 4. Taruhan pada Total GENAP akan menang.</p>
            <div>
                <strong>Jumlah ODD</strong>
                {renderGameRuleTable(["2 merah, 2 putih", oneRedThreeWhite])}
            </div>
            <p>Jumlah total tombol merah yang ada pada hasil Player dan Banker adalah 3. Taruhan pada Total ODD akan menang.</p>
        </>
    );
};

const renderGameRuleTable = (data: string[]) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>Pilihan</th>
                        <th>Hasil </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Player</td>
                        <td>{data[0]}</td>
                    </tr>
                    <tr>
                        <td>Banker</td>
                        <td>{data[1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (
    odds: object | any,
    maxBetFollowChoice: undefined | MaxBetChoicesProps,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. Catatan, pembayaran termasuk taruhan awal.</li>
                <li>
                    Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>Pilihan</th>
                                    <th>Pembayaran </th>
                                    <th>Batas Taruhan (Min - Maks)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Player</td>
                                    <td rowSpan={2}>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={5}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker</td>
                                </tr>
                                <tr>
                                    <td>Seri</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Jumlah Genap</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Jumlah Ganjil</td>
                                </tr>
                                <tr>
                                    <td>Player - Genap</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Player - Ganjil</td>
                                </tr>
                                <tr>
                                    <td>Player - 3 Merah</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Player - 1 Merah</td>
                                </tr>
                                <tr>
                                    <td>Player - 4 Merah</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Player - 4 Putih</td>
                                </tr>
                                <tr>
                                    <td>Banker - Genap</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker - Ganjil</td>
                                </tr>
                                <tr>
                                    <td>Banker - 3 Merah</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker  - 1 Merah</td>
                                </tr>
                                <tr>
                                    <td>Banker - 4 Merah</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker - 4 Putih</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const pathImg = theme === Themes.light ? `dark/guide-stats-id.png?v=${buildVersion}` : `guide-stats-id.png?v=${buildVersion}`;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah versi khusus dari game Se Die. Permainan ini terdiri dari 2 set tombol, satu untuk Banker dan satu lagi untuk Player.
                        Setiap set termasuk 4 tombol berwarna, di mana setiap tombol memiliki dua sisi berwarna merah dan putih.
                        Player memasang taruhan pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.
                        Permainan menentukan menang atau kalah berdasarkan jumlah situs merah atau putih yang dihadapi dalam hasil.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item">
                    <h2>Papan skor</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <strong className="title-text">Ganjil genap</strong>
                            {StatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <strong className="title-text">Hasil Putaran Statistik</strong>
                            <div className={Styles["wrapper-guide-stats"]}>
                                <img src={`/static/images/sedie-war/${pathImg}`} alt="guide-stats-en" loading="eager" />
                            </div>

                            <p>
                                <strong>Catatan</strong>: angka yang ditampilkan dalam putaran statistik adalah total tombol merah yang ada pada hasil Player dan Banker.
                            </p>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default SeDieGuideID;
