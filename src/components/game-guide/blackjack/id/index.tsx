import React from "react";
import { useTranslation } from "next-i18next";

import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { CardPointValuesTable } from "..";
import Styles from "../blackjack.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsID } from "../../../shared";

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined) => {
    const wrapperImg = "wrapper-img";
    const optionsWidth = "options-width";
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>Pilih nilai chip dan klik pada lingkaran (tempat taruhan) dari masing-masing tangan yang ingin Anda pertaruhkan.</li>
                <li>Para Pemain dapat bermain dengan lebih dari satu tangan secara bersamaan (hingga 3).</li>
                <li>
                    Klik tombol “Deal” untuk mengonfirmasi taruhan, atau “X” untuk mengatur ulang taruhan Anda. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan setelah kartu dibagikan.
                </li>
                <li>
                    Taruhan minimum dan taruhan Maks harus antara {minBet} - {maxBet} dan total taruhan maksimum per tangan adalah {maxBet}
                </li>
                <li>                   
                    Setelah Pemain mengklik tombol “Deal”, dua kartu dibagikan untuk masing-masing tangan Pemain dan Dealer.
                    Kartu pemain dibagikan menghadap ke atas sementara Dealer - kartu pertama menghadap ke atas, yang lain menghadap ke bawah.
                </li>
                <li>Kartu dikocok setelah setiap putaran.</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">Aturan untuk tangan Pemain</span>
                        <ul className="desc">
                            <li>
                                Jika Player mendapatkan 21 poin pada dua kartu pertama (Blackjack), Player akan menang secara otomatis, kecuali DeaIer juga memiliki Blackjack.
                            </li>
                            <li>
                                Ketika Player dan Dealer memiliki Blackjack, hasilnya adalah Push (Tie) dan taruhan dikembalikan ke Player.
                            </li>
                            <li>Jika total Player melebihi 21 (Bust). Player kalah, meskipun Dealer juga melebihi 21</li>
                            <li>
                                Bergantung pada total poin dari dua kartu pertama, Pemain akan memiliki hingga empat opsi: {`"Hit"`},{" "}
                                {`"Stand"`}, {`"Double"`}, or {`"Split"`}, sesuai permainan aturan.
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles[optionsWidth]}>Pilihan</th>
                                                <th> Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Hit
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_hit.png"
                                                        alt="guide_hit"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>Dapatkan kartu tambahan untuk meningkatkan total tangan Anda.</li>
                                                        <li>
                                                            Tidak ada batasan jumlah kartu yang dapat Anda tarik hingga nilai total kartu adalah 21 atau Bust.
                                                        </li>
                                                        <li>
                                                            Jika tangan Pemain melebihi 21, pemain kalah untuk tangan itu, tidak peduli apa yang dimiliki Dealer
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Stand
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_stop.png"
                                                        alt="guide_stop"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            Klik tombol “Berdiri” Jika Pemain ingin berhenti menggambar kartu dan mengakhiri giliran.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Split
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_split.png"
                                                        alt="guide_split"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                            Jika dua kartu pertama dari sebuah tangan memiliki nilai yang sama (misalnya, 6-6 atau J-Q), Pemain dapat membagi kartu menjadi dua tangan yang terpisah.
                                                        </li>
                                                        <li>
                                                            Setelah “Split” dipilih, taruhan tambahan yang sama dengan taruhan awal Anda akan ditempatkan.
                                                        </li>
                                                        <li>Pemain hanya dapat membagi satu kali per tangan.</li>
                                                    </ul>
                                                    <strong>Catatan:</strong>
                                                    <ul className="desc">
                                                        <li>
                                                            Ada pengecualian dengan pemisahan A-A karena hanya satu kartu tambahan yang dibagikan untuk setiap kartu baru.
                                                        </li>
                                                        <li>
                                                            Tangan memiliki total 21 poin dengan 2 kartu setelah pemisahan dianggap 21, bukan Blackjack.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Double
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_double.png"
                                                        alt="guide_double"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    <ul className="desc">
                                                        <li>
                                                        Jika total poin dari dua kartu pertama adalah 9, 10, atau 11 poin, Pemain dapat menggandakan taruhan awal dan hanya menerima kartu tambahan.
                                                        Tangan akan berdiri setelah kartu dibagikan.
                                                        </li>
                                                    </ul>
                                                    <strong>Catatan:</strong> “Double” tidak diterapkan untuk tangan setelah membelah.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> Aturan untuk tangan Dealer</span>
                        <ul className="desc">
                            <li>
                                Dealer memulai tangannya setelah pemain selesai. 
                                Dealer harus menarik {`"16 atau kurang"`} dan berdiri di {`"17 dan lebih"`}.
                            </li>
                            <li>Jika Player dan Dealer memiliki total yang sama, hasilnya PUSH (Tie) dan taruhan dikembalikan.</li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <li className="guide-item">
            <h2>Pembayaran</h2>
            <ul className="desc">
                <li>
                    Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. <strong>Perhatikan,</strong> Pembayaran termasuk taruhan awal.
                </li>
                <li>
                Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Pembayaran</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Menang Blackjack</td>
                                    <td>{formatOdds(odds?.blackjack, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Menang Normal</td>
                                    <td>{formatOdds(odds?.regular, fractionalOddsFormat)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const BlackjackGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "blackjack"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} (juga disebut {`"21"`}) adalah permainan kartu kasino yang menyenangkan dan menyenangkan. Permainan ini dimainkan dengan enam dek standar dari 52 kartu (tidak termasuk Joker) yang dikocok bersama.
                        In Blackjack, the Player plays against the Dealer, and the object of the game is to have the total points of your cards as close to 21 as possible, without going over 21. 
                        Pemain akan menang jika total poin kartu Anda lebih dekat ke 21 dari kartu {`Dealer's`}.                        
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain)}</li>
                <li className="guide-item">
                    <h2>Aturan Perhitungan Poin</h2>
                    <ul className="desc">
                        <li>
                        Semua kartu dari 2 hingga 10 dihitung berdasarkan nilai nominal, terlepas dari jenisnya, dan kartu wajah (Jack, Queen, King) dihitung sebagai sepuluh.
                        </li>
                        <li>As dihitung sebagai 1 atau 11, mana yang terbaik untuk tangan Anda. </li>
                        <li>
                            Tangan dengan Blackjack (21 poin pada dua kartu pertama) akan menang atas 21 yang dicapai dengan 3 kartu atau lebih.
                        </li>
                        <li>Nilai poin kartu:{CardPointValuesTable(t)}</li>
                    </ul>
                    <strong>Contoh: </strong>
                    <ul className="detail">
                        <li>Sebuah tangan berisi Sembilan (9), Delapan (8), dan As (A) {`=>`} nilai tangan adalah 18</li>
                        <li>Sebuah tangan berisi Tujuh (7) dan As (A) {`=>`} nilai tangan adalah 18</li>
                    </ul>
                </li>
                {renderPayouts(odds, fractionalOddsFormat)}
                {renderTermsAndConditionsID("", 23)} 
            </ul>
        </>
    );
};
export default BlackjackGuideID;
