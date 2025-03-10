import React, { useEffect } from "react";

import { formatOdds } from "../../../../helpers/number-helper";
import { isShowedMD5, renderTermsAndConditionsID } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import MD5 from "../../base/md5";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderMd5Id = (locale?: string) => {
    return (
        <MD5
            locale={locale}
            step1ImageUrl={"/static/images/mega-bigsmall/md5_step1_id.png?v=3"}
            step2ImageUrl={"/static/images/mega-bigsmall/md5_step2_id.png?v=3"}
            step3ImageUrl={"/static/images/mega-bigsmall/md5_step3_en.png?v=1"}
            step4ImageUrl={"/static/images/mega-bigsmall/md5_step4_en.png?v=1"}
            note={<div>Catatan: Dari kiri ke kanan, &#123;6, 2, 5&#125; sesuai dengan nilai tiga dadu.</div>}
        />
    );
};

const MultiplayBigSmallGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat, orientation } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    {isShowedMD5(environment, orientation) ?
                    (<p className="content">
                        "{gameName}" adalah permainan dadu sederhana yang terdiri dari 4 meja: Las Vegas, Marina Bay, Macau, dan Monte Carlo, di mana Marina Bay dan Monte Carlo adalah versi turbo dengan waktu taruhan yang dipersingkat.
                    </p>) : (<p className="content">
                        Monte Carlo Besar Kecil atau yang biasa dikenal dengan Sicbo atau Ta Siaw, adalah permainan yang dimainkan dengan menggunakan tiga buah dadu. Para pemain memasang taruhan dan memprediksi total poin dari ketiga dadu tersebut BESAR atau KECIL.
                    </p>)}
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
                        <li>Pembayaran di Besar, Kecil adalah {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>Jumlah kemenangan dihitung berdasarkan odds taruhan.</li>
                        <li>Pembayaran termasuk taruhan awal.</li>
                        <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
                    </ul>
                </li>
                {isShowedMD5(environment, orientation) && renderMd5Id(props.locale)}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideID;
