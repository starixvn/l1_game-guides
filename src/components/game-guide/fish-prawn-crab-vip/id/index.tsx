import React from "react";
import { isShowedMD5, renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { useTheme } from "next-themes";
import Styles from "../fish-prawn-crab-vip.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderListIcon } from "../en";

const FishPrawnCrabGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, environment, orientation } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isPortraitGame = !isShowedMD5(environment, orientation);

    const cssClassColumnTable = isPortraitGame ? `${Styles["table-portrait-mode"]}` : "";
    const cssClassIconWrapper = isPortraitGame ? `${Styles["icon-wrapper-portrait-mode"]}` : "";
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah versi yang disempurnakan dari permainan tradisional Kepiting Udang Ikan dengan antarmuka grafis
                        baru dan lebih banyak opsi taruhan. Permainan ini dimainkan dengan tiga dadu standar, dan setiap dadu berisi enam
                        simbol unik (ikan, udang, kepiting, ayam jago, labu, dan rusa jantan). Tujuan permainan ini adalah untuk memprediksi
                        hasil lemparan dadu, pemain memasang taruhan pada simbol mana yang akan muncul.
                    </p>
                    <div className={`${Styles["wrapper-icon"]} icon-wrapper ${cssClassIconWrapper}`}>
                        {renderListIcon(theme, isPortraitGame)}
                        <div className={`${Styles["icon-text"]} text`}>Rusa Jantan</div>
                        <div className={`${Styles["icon-text"]} text`}>Kundur</div>
                        <div className={`${Styles["icon-text"]} text`}>Ayam Jantan</div>
                        <div className={`${Styles["icon-text"]} text`}>Ikan</div>
                        <div className={`${Styles["icon-text"]} text`}>Kepiting</div>
                        <div className={`${Styles["icon-text"]} text`}>Udang</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>
                            Pilih nilai chip yang ingin Anda mainkan. Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang
                            ditampilkan di meja permainan.
                        </li>
                        <li>
                            Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat
                            dibatalkan.
                        </li>
                        <li>Setelah waktu taruhan berakhir, cangkir dadu akan dihapus dan hasilnya ditampilkan.</li>
                        <li>Total taruhan maksimum per putaran adalah {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>
                    <ul className="desc">
                        <li>
                            Jumlah kemenangan dihitung berdasarkan odds taruhan. <b>Catatan,</b> pembayaran termasuk taruhan awal
                        </li>
                        <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Pilihan</th>
                                            <th>Kondisi Kemenangan</th>
                                            <th style={{ width: 150 }}>Odds</th>
                                            <th className={`${Styles["min-max-width"]} ${cssClassColumnTable}`}>
                                                Batas Taruhan <br></br>(Min - Maks)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>Simbol Tertentu (Ikan, Udang, Kepiting, Ayam, Labu, Rusa)</td>
                                            <td className="text-start">Jika simbol yang dipilih muncul sekali. </td>
                                            <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                            <td rowSpan={5}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFish}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Jika simbol yang dipilih muncul dua kali.</td>
                                            <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Jika simbol yang dipilih muncul tiga kali. </td>
                                            <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                        </tr>
                                        {!isPortraitGame && (
                                            <>
                                                <tr>
                                                    <td>Gunung (Ayam, Labu, Rusa)</td>
                                                    <td className="text-start">
                                                        Pasang taruhan pada grup 3 simbol Gunung. Pemain akan menang jika memiliki
                                                        setidaknya dua simbol dari grup Gunung muncul di hasil.
                                                    </td>
                                                    <td>{formatOdds(odds?.mountain, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Laut (Ikan, Udang, Kepiting)</td>
                                                    <td className="text-start">
                                                        Pasang taruhan pada kelompok Ocean dari 3 simbol. Pemain akan menang jika memiliki
                                                        setidaknya dua simbol dari grup Samudra muncul di hasil.
                                                    </td>
                                                    <td>{formatOdds(odds?.ocean, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Triple Apa Saja</td>
                                                    <td className="text-start">
                                                        Untuk memenangkan taruhan ini, ketiga dadu harus menunjukkan simbol yang sama.
                                                    </td>
                                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                                    <td>
                                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <strong>Contoh:</strong>
                    </p>
                    <ul className="desc">
                        <li>
                            <strong>Simbol Tertentu</strong>
                            <ul className="detail">
                                <li>Pasang taruhan pada “Ikan” dan hasilnya Ikan, Labu, Kepiting maka pemain menang.</li>
                                <li>Pasang taruhan pada “Ikan” dan hasilnya Labu, Kepiting, Kepiting maka pemain kalah.</li>
                            </ul>
                        </li>

                        {!isPortraitGame && (
                            <>
                                <li>
                                    <strong>Laut/Gunung</strong>
                                    <ul className="detail">
                                        <li>Pasang taruhan pada grup Samudera dan hasilnya Ikan, Udang, Rusa maka pemain menang.</li>
                                        <li>Pasang taruhan pada grup Gunung dan hasilnya Ikan, Rusa, Rusa maka pemain menang.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Triple Apa Saja</strong>
                                    <ul className="detail">
                                        <li>
                                            Pasang taruhan pada pilihan Any Triple dan hasilnya Kepiting, Kepiting, Kepiting maka pemain
                                            menang.
                                        </li>
                                    </ul>
                                </li>
                            </>
                        )}
                    </ul>
                </li>
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideID;
