import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { formatOdds } from "../../../../helpers/number-helper";

const OddEvenTurboGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah permainan dadu sederhana yang mirip dengan Big Small. Permainan ini dimainkan dengan tiga dadu dan
                        pemain memprediksi total poin dari tiga dadu adalah GANJIL atau GENAP.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>Cangkir dadu dikocok di awal putaran permainan.</li>
                        <li>Para pemain dapat bertaruh pada BESAR atau KECIL, tetapi tidak pada keduanya.</li>
                        <ul className="detail">
                            <li>GANJIL: pemain akan menang jika total poin dari tiga dadu adalah angka ganjil. </li>
                            <li>GENAP: pemain akan menang jika total poin dari tiga dadu adalah angka genap. </li>
                        </ul>
                        <li>
                            Pastikan Anda bertaruh jumlah yang Anda rasa nyaman. Klik tombol Konfirmasi untuk menyelesaikan atau Batal jika
                            Anda ingin mengatur ulang semua taruhan Anda.
                        </li>
                        <li>
                            Pemain dapat meningkatkan jumlah taruhan mereka dengan memasang taruhan lain dengan pilihan yang sama sebelum
                            waktu taruhan berakhir.
                        </li>
                        <li>
                            Taruhan minimum dan taruhan Maks harus antara {maxBetFollowChoice?.minBetMain} -{" "}
                            {maxBetFollowChoice?.maxBetMain} dan total taruhan maksimum per putaran adalah {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Setelah waktu taruhan berakhir, hasilnya akan ditampilkan. Jika hasil dari tiga dadu cocok dengan taruhan Anda,
                            Anda menang.
                        </li>
                        <li>
                            Balance Betting Pool: jika jumlah total taruhan pada GANJIL dan GENAP berbeda maka jumlah selisih akan
                            dikembalikan ke pemain yang memiliki tiket taruhan terbaru.<br></br>
                            <strong>Contoh:</strong> Pemain A bertaruh 60 pada ODD, pemain B bertaruh 70 pada GENAP, dan C bertaruh 20 pada
                            GENAP. Untuk menyeimbangkan jumlah total taruhan pada ODD dan GENAP, sistem akan mengembalikan 20 ke pemain C
                            dan 10 ke pemain B.
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>
                    <ul className="desc">
                        <li>Pembayaran pada GANJIL, GENAP adalah {formatOdds(odds?.even, fractionalOddsFormat)}</li>
                        <li>
                            Jumlah kemenangan dihitung berdasarkan odds taruhan. <strong>Catatan,</strong> pembayaran termasuk taruhan awal.
                        </li>
                        <li>Semua jumlah pemenang langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
                    </ul>
                </li>
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default OddEvenTurboGuideID;
