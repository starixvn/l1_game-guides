import React from "react";

import { ENVIRONMENT } from "../../../../../common/constants";
import { renderTermsAndConditionsID } from "../../../../shared";
import { renderMD5EN } from "../../../../shared/md5-count-down-timer/en";
import { OddsProMaxProps } from "../../../keno-pro-max/type";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import Styles from "../keno-mini.module.scss";
import { formatOdds } from "../../../../../helpers/number-helper";

const payouts = (
    odds: OddsProMaxProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <h2>Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. </li>
                <li>Pembayaran termasuk taruhan awal.</li>
                <li>
                    Semua jumlah pemenang langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>Pilihan</th>
                                    <th>Pembayaran</th>
                                    <th>
                                        Batas Taruhan <br></br>(Min Maks)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Besar </td>
                                    <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kecil</td>
                                    <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Ganjil</td>
                                    <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Genap </td>
                                </tr>
                                <tr>
                                    <td>Emas</td>
                                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kayu</td>
                                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air</td>
                                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Api</td>
                                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bumi</td>
                                    <td>{formatOdds(odds?.earth, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const bettingOptions = () => {
    return (
        <>
            <h2>Opsi Taruhan</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Besar/Kecil</span>
                    <ul className="desc">
                        <li>
                            <strong>Besar :</strong> Jumlah 10 bola bernomor yang diambil adalah {`>=`} 206
                        </li>
                        <li>
                            <strong>Kecil:</strong> Jumlah 10 bola bernomor yang diambil adalah {`<=`} 205
                        </li>
                    </ul>
                    <div>
                        <strong>Contoh: </strong>Set 10 bola bernomor yang diambil secara acak dari 40 bola bernomor
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Hasil Undian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>15</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>28</td>
                                        <td>33</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Jumlah Total</strong> = 181. Pemain yang bertaruh pada KECIL akan menang.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Ganjil/Genap</span>
                    <ul className="desc">
                        <li>
                            <strong>Ganjil:</strong> the sum of the 10 numbered balls drawn is an odd number.
                        </li>
                        <li>
                            <strong>Genap :</strong> the sum of the 10 numbered balls drawn is an even number.
                        </li>
                    </ul>
                    <div>
                        <strong>Contoh: </strong>Set 10 bola bernomor yang diambil secara acak dari 40 bola bernomor
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Hasil Undian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>24</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>34</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Jumlah Total</strong> = 197. Pemain yang bertaruh pada ODD akan menang.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text"> Lima Elemen (Emas, Kayu, Air, Api, Tanah)</span>
                    <ul className="desc">
                        <li>
                            <strong>Emas:</strong> Jumlah 10 bola bernomor yang ditarik, berkisar antara 55 hingga 163
                        </li>
                        <li>
                            <strong>Kayu:</strong> Jumlah 10 bola bernomor yang diambil, berkisar antara 164 hingga 187
                        </li>
                        <li>
                            <strong>Air:</strong> Jumlah 10 bola bernomor yang diambil, berkisar antara 188 hingga 222
                        </li>
                        <li>
                            <strong>Api:</strong> Jumlah 10 bola bernomor yang diambil, berkisar antara 223 hingga 246
                        </li>
                        <li>
                            <strong>Bumi:</strong> Jumlah 10 bola bernomor yang diambil, berkisar antara 247 hingga 355
                        </li>
                    </ul>
                    <div>
                        <strong>Contoh: </strong>Set 10 bola bernomor yang diambil secara acak dari 40 bola bernomor
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Hasil Undian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>7</td>
                                        <td>13</td>
                                        <td>17</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>33</td>
                                        <td>37</td>
                                        <td>38</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Jumlah Total</strong> = 237. Pemain yang bertaruh pada FIRE akan menang.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderMD5Example = (environment: string | undefined) => {
    return (
        <div className="content">
            <strong> Contoh:</strong> check the authenticity and transparency of the result.
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step1_en.png?v=2" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>MD5 Key:</strong> f2bbd32524fe6e2e41eaaaa0eacd6d86
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <strong>Step 2:</strong> Copy Result after the system publishes the result.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step2_en.png?v=4" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>Result:</strong> {"{237}_{#26907421fad9b51da1169691982}"}
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                    <div>Note: 237 is the total point of the game result.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <div className={Styles["wrapper-img-hash"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step3.png?v=1" alt="hash-darling" />
                    </div>
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 Key in Step 1.
                    <div className={Styles["wrapper-img"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step4.png?v=1" alt="md5-checksum" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

const KenoMiniGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        Keno Mini / Keno Mini 2 are the RNG Keno with 40 balls. There are 10 balls drawn randomly from 40 numbered balls
                        ranging from 1 to 40. Pemain memasang taruhan pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.
                        Jumlah total 10 bola bernomor yang ditarik akan menentukan menang atau kalah pemain.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>
                            Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat
                            dibatalkan.
                        </li>
                        <li>Once the betting time has expired, the result will be shown.</li>
                        <li>Total taruhan maksimum per putaran adalah {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {environment === ENVIRONMENT.sm && (
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
export default KenoMiniGuideID;
