import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

export const renderIconChoice = () => {
    return (
        <>
            <div className="symbol-size icon-nai"></div>
            <div className="symbol-size icon-bau"></div>
            <div className="symbol-size icon-ga"></div>
            <div className="symbol-size icon-ca"></div>
            <div className="symbol-size icon-cua"></div>
            <div className="symbol-size icon-tom"></div>
        </>
    );
};

const FishPrawnCrabGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName}, juga dikenal sebagai Hoo Hey How, adalah permainan populer di Asia dengan menggunakan tiga dadu. Setiap
                        dadu berisi enam simbol unik (ikan, udang, kepiting, ayam jago, labu, dan rusa jantan). Ada 6 pilihan taruhan yang
                        tersedia, satu untuk setiap simbol. Pemain memasang taruhan pada simbol mana yang akan muncul.
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">Rusa Jantan</div>
                        <div className="text">Kundur</div>
                        <div className="text">Ayam Jantan</div>
                        <div className="text">Ikan</div>
                        <div className="text">Kepiting</div>
                        <div className="text">Udang</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>Cangkir dadu akan dikocok pada awal putaran permainan.</li>
                        <li>Ketika waktu taruhan telah habis, hasil dadu akan ditampilkan.</li>
                        <li>
                            Simbol akan diberi nomor dari 1 hingga 6 sesuai dengan posisinya di meja permainan. Dan nomor yang ditetapkan
                            hanya akan ditampilkan selama waktu pengaturan.
                        </li>
                        <li>
                            Taruhan minimum dan taruhan Maks harus antara {maxBetFollowChoice?.minBetMain} -{" "}
                            {maxBetFollowChoice?.maxBetChoice} dan total taruhan maksimum per putaran adalah{" "}
                            {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Odds taruhan:
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} jika simbol yang dipilih muncul sekali.</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} jika simbol yang dipilih muncul dua kali.</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} jika simbol yang dipilih muncul tiga kali.</li>
                            </ul>
                        </li>
                        <li>
                            Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan. Catatan, taruhan
                            yang dipasang tidak dapat dibatalkan.
                        </li>
                        <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. Pembayaran termasuk taruhan awal.</li>
                        <li>
                            Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                            <div>
                                <strong>Contoh:</strong>
                                <ul className="detail">
                                    <li>
                                        Bertaruh 10 pada “Ikan” dan memiliki satu simbol Ikan muncul, maka Anda akan dibayar{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong>
                                    </li>
                                    <li>
                                        Taruhan 10 pada “Kepiting” dan muncul dua simbol Kepiting, maka Anda akan dibayar{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && <MD5
                    locale={props.locale}
                    step1ImageUrl={"/static/images/fish-prawn-crab/md5_step1_id.png?v=4"}
                    step2ImageUrl={"/static/images/fish-prawn-crab/md5_step2_id.png?v=4"}
                    step3ImageUrl={"/static/images/fish-prawn-crab/md5_step3_en.png?v=4"}
                    step4ImageUrl={"/static/images/fish-prawn-crab/md5_step4_en.png?v=4"}
                    note={<div>
                        Catatan: Dari kiri ke kanan, {"{(5, 1, 1)}"} sesuai dengan nomor yang ditetapkan untuk setiap simbol
                        yang muncul pada tiga dadu
                    </div>}
                />}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideID;
