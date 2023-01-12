import React, { useEffect } from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { SeDieMini } from "../index";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/id";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { formatOdds } from "../../../../helpers/number-helper";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { renderMD5ID } from "../../../shared/md5-count-down-timer/id";

const renderGameRule = (maxBetMain: number | string, gameId = 0) => {
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>
                    Kancing diletakkan di atas piring dan ditutup dengan mangkuk. Dealer akan mengambil piring dan mengocoknya ketika piring
                    masih tertutup mangkuk. Para pemain memasang taruhan mereka dan pilihan taruhannya adalah:
                </li>

                <li className="contentBeforeEmpty">{renderGameRuleTable(gameId)}</li>
                <li>Setelah waktu taruhan berakhir, dealer mengeluarkan mangkuk dari piring dan hasilnya akan ditampilkan.</li>
                <li>
                    Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan. Semua taruhan harus
                    ditempatkan sebelum waktu taruhan berakhir.
                </li>
                <li>Total taruhan maksimum per putaran adalah {maxBetMain}</li>
            </ul>
        </>
    );
};

const renderGameRuleTable = (gameId: number) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
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
                        <td>1 merah, 3 putih</td>
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
                    {RedWhiteDataOnTable()}
                    {!SeDieMini.includes(gameId) && (
                        <tr>
                            <td>2 merah, 2 putih</td>
                            <td>2 merah, 2 putih</td>
                            {renderTwoRedTwoWhite()}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const renderStatistical = () => {
    return (
        <li className="guide-item">
            <h2>Tabel Statistik</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const renderMD5Example = (gameName: string, gameId: any) => {
    const currentGameType = SeDieMini.includes(gameId) ? "mini-sedie" : "sedie";

    return (
        <>
            <div className="content">
                <strong> Contoh:</strong> periksa keaslian dan transparansi hasil permainan.
            </div>
            <ul className="desc">
                <li>
                    <strong>Langkah 1:</strong> Salin kunci MD5 sebelum hasilnya diumumkan.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step1_id.png?v=5`}
                        alt="md5-string"
                    />
                </li>
                <li>
                    <strong>Langkah 2:</strong> Salin Hasil setelah dipublikasikan.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step2_id.png?v=5`}
                        alt="md5-result"
                    />
                    <div>Catatan: Merah dan putih sesuai dengan dua sisi tombol.</div>
                </li>
                <li>
                    <strong>Langkah 3:</strong> Buka{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    dan tempel Hasil ke kotak MD5.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step3_en.png?v=2`}
                        alt="hash-darling"
                    />
                </li>
                <li>
                    <strong>Langkah 4:</strong> Tekan tombol "hash darling, hash!" dan bandingkan rangkaian daftar periksa MD5 yang baru
                    dibuat dengan Kunci MD5 di Langkah 1.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step4_en.png?v=2`}
                        alt="md5-checksum"
                    />
                </li>
            </ul>
        </>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    const gameDescription = (environment: string = ENVIRONMENT.sc) => {
        const miniSeDieDescription =
            environment === ENVIRONMENT.sm
                ? "is a compact version of Se Die game with fewer betting options. "
                : " - versi baru dengan fitur “Multiplay” yang memungkinkan Anda memainkan 4 meja (Mini Se Die, Mini Se Die 2, Mini Se Die 3, dan Mini Se Die 4) sekaligus dengan banyak pengalaman baru yang menarik. ";
        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return miniSeDieDescription;
            case 22:
                return "is another version of the Se Die game with higher betting limits. ";
            default:
                return "adalah permainan populer di negara-negara Asia. ";
        }
    };
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} {gameDescription()}
                        Permainan ini dimainkan dengan 4 tombol berwarna, masing-masing tombol memiliki dua sisi berwarna merah dan putih.
                        Tujuan dari permainan ini adalah untuk memprediksi hasil dari 4 tombol. Jika hasilnya cocok dengan taruhan pemain,
                        pemain menang.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>
                    <ul className="desc">
                        <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran.</li>
                        <li>Pembayaran termasuk taruhan awal.</li>
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
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>GENAP</td>
                                        </tr>
                                        <tr>
                                            <td>4 merah</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>

                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4 putih</td>
                                        </tr>
                                        <tr>
                                            <td>3 merah, 1 putih</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 merah, 3 putih</td>
                                        </tr>
                                        {!SeDieMini.includes(gameId ? gameId : SeDieMini[0]) && (
                                            <tr>
                                                <td>2 merah, 2 putih</td>
                                                <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>
                                                <td>
                                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {renderStatistical()}
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5ID()}
                        {renderMD5Example(gameName, gameId)}
                    </li>
                )}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
