import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { StatisticalTable } from "../../../shared/se-die/id";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>
                    Para pemain dapat bertaruh pada GANJIL atau GENAP, tetapi tidak pada keduanya.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Pilihan</th>
                                    <th>Kondisi Kemenangan</th>
                                    <th>Deskripsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>GANJIL</td>
                                    <td>3 merah, 1 putih</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>1 merah, 3 putihe</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>GENAP</td>
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
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>
                    Pemain dapat meningkatkan jumlah taruhan mereka dengan memasang taruhan lain dengan pilihan yang sama sebelum waktu
                    taruhan berakhir.
                </li>
                <li>Total taruhan maksimum per putaran adalah {maxBet}. Catatan, taruhan yang dipasang tidak dapat dibatalkan.</li>
                <li>
                    Balanced Betting Pool: jika jumlah total taruhan pada GANJIL dan GENAP berbeda maka jumlah selisih akan dikembalikan ke
                    pemain yang memiliki tiket taruhan terbaru.<br></br>
                    <strong>Contoh:</strong> Pemain A bertaruh 100 pada GANJIL, pemain B bertaruh 30 pada GENAP, dan C bertaruh 90 pada
                    GENAP. Untuk menyeimbangkan jumlah total taruhan pada GANJIL dan GENAP, sistem akan mengembalikan 20 ke pemain C.
                </li>
            </ul>
        </>
    );
};

const renderStatisticTable = () => {
    return (
        <li className="guide-item">
            <h2>Tabel Statistik</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const SeDieGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        Spesial Se Die adalah versi mini dari game Se Die yang hanya menyertakan dua pilihan taruhan GANJIL dan GENAP.
                        Permainan ini dimainkan dengan 4 tombol berwarna, masing-masing tombol memiliki dua sisi berwarna merah dan putih.
                        Tujuan dari permainan ini adalah untuk memprediksi hasil dari 4 tombol. Jika hasilnya cocok dengan taruhan pemain,
                        pemain menang.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
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
                                            <th>Pembayaran</th>
                                            <th>
                                                Batas Taruhan <br /> (Min - Maks)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>GANJIL</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>GENAP</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatisticTable()}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default SeDieGuideID;
