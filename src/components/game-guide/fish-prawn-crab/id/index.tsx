import React from "react";

import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";

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
                        <li>The dice cup will be shaken at the beginning of the game round.</li>
                        <li>
                            When the betting time has expired, the dice results will be displayed. If the symbol you have bet on shows up,
                            you win.
                        </li>
                        <li>
                            Symbols will be numbered from 1 to 6 according to their position on the game table. And the assigned number will
                            be shown during the setting time only.
                        </li>
                        <li>
                            Taruhan minimum dan taruhan Maks harus antara {maxBetFollowChoice?.minBetMain} -{" "}
                            {maxBetFollowChoice?.maxBetChoice} dan total taruhan maksimum per putaran adalah{" "}
                            {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Pembayaran:
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
                {environment === ENVIRONMENT.sc && (
                    <li className="guide-item">
                        {renderMD5EN()}
                        <div className="content">
                            <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
                        </div>
                        <ul className="desc">
                            <li>
                                <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step1_en.png?v=3"
                                    alt="md5-string"
                                />
                            </li>
                            <li>
                                <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step2_en.png?v=3"
                                    alt="md5-result"
                                />
                                <div>
                                    Note: From the left to right, &#123;5, 1, 1&#125; correspond to the assigned number of each symbol that
                                    appears on three dice
                                </div>
                            </li>
                            <li>
                                <strong>Step 3:</strong> Go to{" "}
                                <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                    https://md5.services/
                                </a>{" "}
                                and paste the Result into the MD5 box.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step3_en.png?v=1"
                                    alt="hash-darling"
                                />
                            </li>
                            <li>
                                <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5
                                string with the MD5 string in Step 1.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step4_en.png?v=1"
                                    alt="md5-checksum"
                                />
                            </li>
                        </ul>
                    </li>
                )}
                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideID;
