import React, { useEffect } from "react";

import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsID } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderMD5ID } from "../../../shared/md5-count-down-timer/id";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Contoh:</strong> periksa keaslian dan transparansi hasil permainan.
            </div>
            <ul className="desc">
                <li>
                    <strong>Langkah 1:</strong> Salin kunci MD5 sebelum hasilnya diumumkan.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step1_en.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>Langkah 2:</strong> Salin <strong>Hasil</strong> setelah sistem menerbitkan hasilnya.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step2_en.png?v=3" alt="md5-result" />
                    <div>Catatan: Dari kiri ke kanan, &#123;6, 2, 5&#125; sesuai dengan nilai tiga dadu.</div>
                </li>
                <li>
                    <strong>Langkah 3:</strong> Buka{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    dan tempel Hasil ke kotak MD5.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Langkah 4:</strong> Tekan tombol “hash darling, hash!” dan bandingkan rangkaian daftar periksa MD5 yang baru
                    dibuat dengan Kunci MD5 di Langkah 1.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const MultiplayBigSmallGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} - versi “kumpulan taruhan tidak seimbang” dari Big Small yang terdiri dari 4 tabel: Las Vegas, Marina
                        Bay, Makau, dan Monte Carlo, di mana Marina Bay dan Monte Carlo adalah versi turbo dengan waktu taruhan yang
                        dipersingkat. {gameName} mengizinkan anda memainkan 4 meja sekaligus dengan banyak pengalaman baru yang
                        mengasyikkan. Permainan ini dimainkan dengan tiga dadu dan para pemain memasang taruhan apakah total poin dari
                        ketiga dadu tersebut BESAR atau KECIL.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>Untuk setiap meja, cangkir dadu akan dikocok di awal putaran permainan.</li>
                        <li>Para pemain dapat bertaruh pada BESAR atau KECIL, tetapi tidak pada keduanya.</li>
                        <ul className="detail">
                            <li>BESAR: pemain akan menang jika total poin dari tiga dadu &gt;= 11</li>
                            <li>KECIL: pemain akan menang jika total poin dari tiga dadu &lt;= 10</li>
                        </ul>
                        <li>
                            Pemain dapat meningkatkan taruhannya dengan memasang taruhan lain dengan pilihan yang sama sebelum waktu taruhan
                            berakhir. Catatan, taruhan yang dipasang tidak dapat dibatalkan.
                        </li>
                        <li>
                            Taruhan minimum dan taruhan Maks harus antara {maxBetFollowChoice?.minBetMain} -{" "}
                            {maxBetFollowChoice?.maxBetMain} dan total taruhan maksimum per putaran adalah {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Setelah waktu taruhan berakhir, hasilnya akan ditampilkan. Jika hasil dari tiga dadu cocok dengan taruhan Anda,
                            Anda menang.
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>
                    <ul className="desc">
                        <li>Pembayaran di Big, Small adalah {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran.</li>
                        <li>Pembayaran termasuk taruhan awal.</li>
                        <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5ID()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideID;
