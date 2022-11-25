import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../dragon-tiger.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const DragonTigerGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah permainan kartu sederhana yang mirip dengan Baccarat.Permainan ini dimainkan dengan satu dek standar 52 kartu (tidak termasuk Joker).
                        Ada 3 pilihan taruhan: Naga, Harimau, dan Tie.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>Dua kartu diambil, satu untuk Naga dan satu untuk Harimau.</li>
                        <li>
                            Para pemain bertaruh pada Dragon atau Tiger mana yang akan menang dengan kartu bernilai lebih tinggi.
                            Para pemain juga dapat bertaruh pada opsi &#34;Tie&#34; jika mereka memprediksi Dragon dan Tiger akan memiliki kartu nilai yang sama, terlepas dari jenisnya.
                        </li>
                        <li>
                            Permainan menentukan menang atau kalah dengan membandingkan poin kartu dan bukan suitnya. 
                            K adalah maksimum, sedangkan Ace adalah minimum.
                        </li>
                        <li>
                            Nilai poin kartu:
                            <ul className="detail">
                                <li>
                                Urutan kartu dari yang terendah hingga tertinggi adalah sebagai berikut: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, dan King.
                                </li>
                                <li>Ace stands for 1 point; Jack is 11 points; Queen stands for 12 points and King is 13 points.</li>
                                <li>All cards from 2 to 10 are counted at face value.</li>
                            </ul>
                        </li>
                        <li>
                            Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. 
                            Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.
                        </li>
                        <li>Dek standar dengan 52 kartu (tidak termasuk Joker) dikocok setelah setiap putaran.</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>
                    <ul className="desc">
                        <li>
                            Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. Pembayaran termasuk taruhan awal.
                        </li>
                        <li>
                            Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Pilihan</th>
                                            <th>Pembayaran</th>
                                            <th className={Styles["bet-limit-width"]}>
                                                Batas Taruhan  <br /> (Min Maks)
                                            </th>
                                            <th>Jumlah Taruhan Maksimum Per Putaran</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Naga</td>
                                            <td rowSpan={2}>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                            </td>
                                            <td rowSpan={3}>{maxBetFollowChoice?.maxBetMain}</td>
                                        </tr>
                                        <tr>
                                            <td>Harimau</td>
                                        </tr>
                                        <tr>
                                            <td>Mengikat</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTie}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <strong>Catatan: </strong> Pemain yang bertaruh pada Dragon atau Tiger akan kehilangan 50% dari taruhannya jika hasilnya seri.
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default DragonTigerGuideID;
