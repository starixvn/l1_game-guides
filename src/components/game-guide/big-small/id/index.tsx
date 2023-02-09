import React, { useEffect } from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

const BigSmallGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
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
                        {gameName} atau yang biasa dikenal dengan Sicbo atau Ta Siaw, adalah permainan yang dimainkan dengan menggunakan
                        tiga buah dadu. Para pemain memasang taruhan dan memprediksi total poin dari ketiga dadu tersebut BESAR atau KECIL.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>Cangkir dadu dikocok di awal putaran permainan.</li>
                        <li>Selama waktu taruhan, para pemain dapat bertaruh pada BESAR atau KECIL, tetapi tidak pada keduanya.</li>
                        <ul className="detail">
                            <li>BESAR: pemain akan menang jika total poin dari tiga dadu &gt;= 11</li>
                            <li>KECIL: pemain akan menang jika total poin dari tiga dadu &lt;= 10</li>
                        </ul>
                        <li>
                            Pemain dapat meningkatkan jumlah taruhan mereka dengan memasang taruhan lain dengan pilihan yang sama sebelum
                            waktu taruhan berakhir. Catatan, taruhan yang dipasang tidak dapat dibatalkan.
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
                            Balanced Betting Pool: jika jumlah total taruhan pada BIG dan KECIL berbeda maka jumlah selisih akan
                            dikembalikan ke pemain yang memiliki tiket taruhan terbaru.
                            <p>
                                <strong>Contoh:</strong> Pemain A bertaruh 100 pada BESAR, pemain B bertaruh 40 pada KECIL, dan C bertaruh
                                80 pada KECIL. Untuk menyeimbangkan jumlah total taruhan pada BESAR dan KECIL, sistem akan mengembalikan 20
                                ke pemain C.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>
                    <ul className="desc">
                        <li>Pembayaran di Big, Small adalah {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>
                            Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. <strong>Catatan</strong>, pembayaran termasuk taruhan
                            awal.
                        </li>
                        <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/big-small/md5_step1_id.png?v=3"}
                        step2ImageUrl={"/static/images/big-small/md5_step2_id.png?v=3"}
                        step3ImageUrl={"/static/images/big-small/md5_step3.png?v=1"}
                        step4ImageUrl={"/static/images/big-small/md5_step4.png?v=1"}
                        note={<div>Catatan: Dari kiri ke kanan, &#123;6, 2, 5&#125; sesuai dengan nilai tiga dadu.</div>}
                    />
                )}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default BigSmallGuideID;
