import React from "react";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../sic-bo.module.scss";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>Pilih nilai chip yang ingin Anda mainkan. Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.</li>
                <li>Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.</li>
                <li>Setelah waktu taruhan telah berakhir, cangkir dadu akan dihapus dan hasilnya akan ditampilkan.</li>
                <li>Total taruhan maksimum per putaran adalah {maxBet}</li>
                <li>
                    Jumlah total taruhan dari semua pemain yang ditampilkan pada setiap opsi taruhan hanya untuk referensi. 
                    Untuk pasar dan mata uang yang berbeda, totalnya dikonversi berdasarkan tarif internal yang ditetapkan oleh perusahaan.
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    t: TFunction,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Payouts</h2>
            <ul className="desc">
                <li>
                    The winning amount is calculated according to the betting odds. <strong>Note,</strong> the Payout includes the initial
                    stake.
                </li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["bet-option-width"]}>Options</th>
                                    <th className={Styles["bet-choice-width"]}>Choices</th>
                                    <th>Odds</th>
                                    <th className={Styles["bet-limit-width"]}>
                                        Bet Limit <br></br>(Min-Max)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Big Small</td>
                                    <td>Big</td>
                                    <td rowSpan={2}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                </tr>
                                <tr>
                                    <td>Any Triple</td>
                                    <td>Any Triple</td>
                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>Specific Number</td>
                                    <td rowSpan={3}>Bet on any number from 1 to 6</td>
                                    <td className="text-start">
                                        {formatOdds(odds?.single, fractionalOddsFormat)} if the chosen number appears once.
                                    </td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecific1}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.double, fractionalOddsFormat)} if the chosen number appears twice.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.triple, fractionalOddsFormat)} if the chosen number appears on all three dice.
                                    </td>
                                </tr>
                                {renderPayoutsTableOnBody(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderPayoutsTableOnBody = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    t: TFunction,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <tr>
                <td rowSpan={14}>{t("sicbo:totalPoints")}</td>
                <td>4</td>
                <td rowSpan={2}>{formatOdds(odds?.total4, fractionalOddsFormat)}</td>
                <td rowSpan={8}>
                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal4}
                </td>
            </tr>
            <tr>
                <td>17</td>
            </tr>
            <tr>
                <td>5</td>
                <td rowSpan={2}>{formatOdds(odds?.total5, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>16</td>
            </tr>
            <tr>
                <td>6</td>
                <td rowSpan={2}>{formatOdds(odds?.total6, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>15</td>
            </tr>
            <tr>
                <td>7</td>
                <td rowSpan={2}>{formatOdds(odds?.total7, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>14</td>
            </tr>
            <tr>
                <td>8</td>
                <td rowSpan={2}>{formatOdds(odds?.total8, fractionalOddsFormat)}</td>
                <td rowSpan={6}>
                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal8}
                </td>
            </tr>
            <tr>
                <td>13</td>
            </tr>
            <tr>
                <td>9</td>
                <td rowSpan={4}>{formatOdds(odds?.total9, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>10</td>
            </tr>
            <tr>
                <td>11</td>
            </tr>
            <tr>
                <td>12</td>
            </tr>
        </>
    );
};

const SicBoGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "sicbo"]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} adalah permainan dadu kasino yang sangat populer di Asia. Permainan ini dimainkan dengan tiga dadu standar.
                        Tujuan dari permainan ini adalah untuk memprediksi hasil lemparan dadu. Pemain dapat bertaruh pada hasil dadu tertentu dan nilai total dadu.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>Opsi Taruhan</h2>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th className={Styles["bet-option-width"]}>Pilihan</th>
                                            <th className={Styles["bet-choice-width"]}>Pilihan</th>
                                            <th>Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Besar Kecil</td>
                                            <td>Besar</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>Taruhan pada skor total tiga dadu adalah antara 11 dan 17 poin. </li>
                                                    <li>Jika tiga dadu memiliki nilai yang sama, Anda kehilangan taruhan ini.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Kecil</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>Taruhan pada skor total tiga dadu adalah antara 4 dan 10 poin.</li>
                                                    <li>Jika tiga dadu memiliki nilai yang sama, Anda kehilangan taruhan ini.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Triple Apa Saja</td>
                                            <td>Triple Apa Saja</td>
                                            <td className="text-start">Untuk memenangkan taruhan ini, ketiga dadu harus menunjukkan angka yang sama.</td>
                                        </tr>
                                        <tr>
                                            <td>Nomor Spesifik</td>
                                            <td>Bertaruh pada nomor apa pun dari 1 hingga 6</td>
                                            <td className="text-start">
                                                Bertaruh pada nomor tertentu dari 1 hingga 6. Jika nomor yang dipilih telah muncul di antara tiga dadu, Anda menang.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jumlah Poin</td>
                                            <td>Bertaruh pada nomor apa saja dari 4 hingga 17</td>
                                            <td className="text-start">
                                                Bertaruh pada skor total tiga dadu. Pemain memprediksi apakah skor total tiga dadu sama dengan angka yang dipilih.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderPayouts(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                <li className="guide-item">
                    {renderMD5EN()}
                    <div className="content">
                        <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step1_id.png?v=4" alt="md5-string" />
                        </li>
                        <li>
                            <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step2_id.png?v=4" alt="md5-result" />
                            <div>Note: From the left to right, &#123;3, 2, 1&#125; correspond to the the value of three dice.</div>
                        </li>
                        <li>
                            <strong>Step 3:</strong> Go to{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            and paste the Result into the MD5 box.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step3_en.png?v=1" alt="hash-darling" />
                        </li>
                        <li>
                            <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5
                            string with the MD5 string in Step 1.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step4_en.png?v=1" alt="md5-checksum" />
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default SicBoGuideID;
