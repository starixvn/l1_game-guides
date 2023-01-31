import React from "react";
import { useTheme } from "next-themes";
import { useTranslation, TFunction } from "next-i18next";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { locales, Themes } from "../../../../common/constants";
import Styles from "../three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { baseTermAndConditionId } from "../../base/terms-and-conditions/languages/id";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";

const renderGameRule = (odds: OddsProps | undefined, maxBet: string | undefined) => {
    const bet = 10;
    const winRed = bet * (odds?.red ?? 0);
    const winDiamonds = bet * (odds?.diamonds ?? 0);
    const imgRed = "img-red";
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                <li>Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.</li>
                <li>
                    Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir.Catatan, taruhan yang dipasang tidak dapat dibatalkan.
                </li>
                <li>Setelah waktu taruhan berakhir, kartu akan dibuka.</li>
                <li>Total taruhan maksimum per putaran adalah {maxBet}</li>
                <li>
                    Dek standar dengan 52 kartu (tidak termasuk Joker) dikocok setelah setiap putaran.{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Pilihan</th>
                                    <th>Kondisi Kemenangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Merah</td>
                                    <td className="text-start">Memiliki minimal 2 kartu adalah Diamonds atau Hearts dalam hasilnya.</td>
                                </tr>
                                <tr>
                                    <td>Hitam</td>
                                    <td className="text-start">Memiliki minimal 2 kartu adalah Spades atau Klub dalam hasil.</td>
                                </tr>
                                <tr>
                                    <td>Berlian</td>
                                    <td className="text-start">Memiliki setidaknya 1 kartu adalah Diamonds di hasil.</td>
                                </tr>
                                <tr>
                                    <td>Hati</td>
                                    <td className="text-start">Memiliki setidaknya 1 kartu adalah Hati dalam hasilnya. </td>
                                </tr>
                                <tr>
                                    <td>Sekop</td>
                                    <td className="text-start">Memiliki setidaknya 1 kartu adalah Spades dalam hasilnya.</td>
                                </tr>
                                <tr>
                                    <td>Klub</td>
                                    <td className="text-start">Memiliki setidaknya 1 kartu adalah Klub dalam hasil. </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>Catatan:</strong> Untuk opsi Diamonds, Hearts, Spades, dan Clubs, pembayaran tidak akan berubah jika hasilnya
                memiliki lebih dari 1 kartu dengan jenis yang sama.
            </p>
            <p>
                <strong>Contoh:</strong>
            </p>
            <ul className="desc">
                <li>
                    Bet on Diamonds option. Payout will be the same if there are 1, 2, or 3 diamonds (
                    <span className={Styles[imgRed]}>♦</span>) in the results.
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran.</li>
                <li>Pembayaran termasuk taruhan awal.</li>
                <li>
                    Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Pilihan</th>
                                    <th>Pembayaran </th>
                                    <th>Batas Taruhan (Min Maks)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Merah</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hitam</td>
                                </tr>
                                <tr>
                                    <td>Berlian</td>
                                    <td rowSpan={4}>{formatOdds(odds?.diamonds, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hati</td>
                                </tr>
                                <tr>
                                    <td>Sekop</td>
                                </tr>
                                <tr>
                                    <td>Klub</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderChoiceImage = (locale = "en", isSM: boolean, t: TFunction) => {
    const imgCustomize = "img-customize";
    const wrapperImg = "wrapper-img";
    const classMobile = isSM ? "sm" : "";

    return (
        <>
            <div className={`${Styles[wrapperImg]} ${Styles["red"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["red-en"] : Styles["red"]} ${Styles[classMobile]}`}
                    src={`./static/images/three-cards/table_text_red_id.png`}
                    alt="red"
                ></img>
                <p>{t("threecards:red")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["black"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["black-en"] : Styles["black"]} ${Styles[classMobile]
                        }`}
                    src={`./static/images/three-cards/table_txt_black_id.png`}
                    alt="black"
                ></img>
                <p>{t("threecards:black")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["diamond"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["diamond"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_diamond.png"
                    alt="diamond"
                ></img>
                <p>{t("threecards:diamonds")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["heart"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["heart"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_heart.png"
                    alt="heart"
                ></img>

                <p>{t("threecards:hearts")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["spade"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["spade"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_spade.png"
                    alt="spade"
                ></img>
                <p>{t("threecards:spades")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["club"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["club"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_club.png"
                    alt="club"
                ></img>
                <p>{t("threecards:clubs")}</p>
            </div>
        </>
    );
};

const ThreeCardsGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isSM = theme === Themes.blue ? false : true;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "threecards"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName} adalah permainan kartu menarik lainnya yang dimainkan dengan satu dek standar 52 kartu (tidak termasuk
                        Joker). Ada 6 pilihan taruhan termasuk Merah, Hitam, Berlian (<span className={Styles["img-red"]}>♦</span>), Hati (
                        <span className={Styles["img-red"]}>♥</span>), Sekop (<span className={Styles["img-black"]}>♠</span>), dan Klub (
                        <span className={Styles["img-black"]}>♣</span>). Tujuan dari permainan ini adalah untuk memprediksi suit dari 3
                        kartu yang ditarik untuk setiap putaran. Jika hasilnya cocok dengan taruhan pemain, pemain menang.
                    </p>
                    <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>{renderChoiceImage(locales.en, isSM, t)}</div>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionId} /></li>
            </ul>
        </>
    );
};
export default ThreeCardsGuideID;
