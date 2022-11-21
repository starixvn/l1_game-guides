import React, { useEffect } from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step1_en.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step2_en.png?v=3" alt="md5-result" />
                    <div>Note: From the left to right, &#123;6, 2, 5&#125; correspond to the the value of three dice.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

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
                        {gameName} Besar Kecil atau yang biasa dikenal dengan Sicbo atau Ta Siaw, adalah permainan yang dimainkan dengan menggunakan tiga buah dadu. 
                        Para pemain memasang taruhan dan memprediksi total poin dari ketiga dadu tersebut BESAR atau KECIL.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>The dice cup is shaken at the beginning of the game round.</li>
                        <li>During the betting time, the players can bet on either BIG or SMALL, but not on both.</li>
                        <ul className="detail">
                            <li>BESAR: pemain akan menang jika total poin dari tiga dadu &gt;= 11</li>
                            <li>KECIL: pemain akan menang jika total poin dari tiga dadu &lt;= 10</li>
                        </ul>
                        <li>
                            Pemain dapat meningkatkan jumlah taruhan mereka dengan memasang taruhan lain dengan pilihan yang sama sebelum waktu taruhan berakhir. 
                            Catatan, taruhan yang dipasang tidak dapat dibatalkan.
                        </li>
                        <li>                            
                            Taruhan minimum dan taruhan Maks harus antara {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain} dan total taruhan maksimum per putaran adalah {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Once the betting time has expired, the result will be shown. Jika hasil dari tiga dadu cocok dengan taruhan Anda, Anda menang.
                        </li>
                        <li>
                            Balanced Betting Pool: jika jumlah total taruhan pada BIG dan KECIL berbeda maka jumlah selisih akan dikembalikan ke pemain yang memiliki tiket taruhan terbaru.
                            <p>
                                <strong>Contoh:</strong> Pemain A bertaruh 100 pada BESAR, pemain B bertaruh 40 pada KECIL, dan C bertaruh 80 pada KECIL. 
                                Untuk menyeimbangkan jumlah total taruhan pada BESAR dan KECIL, sistem akan mengembalikan 20 ke pemain C.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>
                    <ul className="desc">
                        <li>Pembayaran di Big, Small adalah {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>
                            Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. <strong>Catatan</strong>, pembayaran termasuk taruhan awal.
                        </li>
                        <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default BigSmallGuideID;
