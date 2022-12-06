import React, { useEffect } from "react";

import { BaccaratId } from "..";
import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../baccarat.module.scss";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (gameId: number | undefined, maxBetMain: number | string, environment: string | undefined) => {
    return (
        <>
            <h2>Aturan Permainan</h2>
            <ul className="desc">
                {renderRuleContent(gameId, maxBetMain, environment)}

                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>Pilihan</th>
                                    <th>Deskripsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pemain</td>
                                    <td className="text-start">
                                        Tangan Player akan menang jika total poin Player lebih tinggi dari Banker.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bankir</td>
                                    <td className="text-start">
                                        Tangan Banker akan menang jika total poin Banker lebih tinggi dari Player.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mengikat</td>
                                    <td className="text-start">
                                        Punter menang jika dua tangan (Pemain dan Bankir) telah selesai dengan total yang sama.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pasangan pemain</td>
                                    <td className="text-start">
                                        Punter menang jika dua kartu pertama Pemain adalah sepasang, terlepas dari jenisnya.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pasangan bankir</td>
                                    <td className="text-start">
                                        Punter menang jika dua kartu pertama Banker adalah sepasang, terlepas dari jenisnya.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Besar</td>
                                    <td className="text-start">
                                        Punter menang jika jumlah total kartu yang telah dibagikan dalam satu putaran adalah 5 dari 6.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kecil</td>
                                    <td className="text-start">
                                        Punter menang jika jumlah total kartu yang telah dibagikan dalam satu putaran adalah 4.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                {gameId === BaccaratId.BlockchainBaccarat && renderCutCard()}
            </ul>
        </>
    );
};

const renderCutCard = () => {
    return (
        <ul className="style-number-dot">
            <li className="number-dot">
                <span className="font-weight-medium title-text">Cut Card</span>
                <ul>
                    <li>
                        Cut Card: a special card is used to indicate where the shoe will end and all cards will be reshuffled. Cut Card will
                        be inserted in the middle of the card pack (416 cards) at the beginning of the new shoe.
                    </li>
                </ul>
                <img className={Styles["cut-card"]} src={`/static/images/blockchain-baccarat/cutcard.png`} alt="cut-card" loading="eager" />
            </li>
            <li className="number-dot">
                <span className="font-weight-medium title-text">Burn Card</span>

                <ul className="desc">
                    <li>
                        After the Cut Card has been inserted, there is a burn card process. The number of card that will be burned (discard
                        without using), is dependent on the value of the first card taken out of the new Shoe.
                    </li>
                </ul>
                <div>
                    <strong>Note</strong>: The first card on top of the card pack (416 cards) is also discarded.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>First Card</th>
                                    <th>A</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>J</th>
                                    <th>Q</th>
                                    <th>K</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Burn Value</strong>
                                    </td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <strong>Example</strong>:{" "}
                </div>
                <ul className="desc">
                    <li>If the first card is 5 {`=>`} 6 cards will be removed (5 burned cards + the first card)</li>
                    <li>If the first card is K {`=>`} 11 cards will be removed (10 burned cards + K card)</li>
                </ul>
            </li>
        </ul>
    );
};

const renderRuleContent = (gameId: number | undefined, maxBetMain: number | string, environment: string | undefined) => {
    if (gameId === BaccaratId.BlockchainBaccarat) {
        return (
            <>
                <li>
                    By default, 6 cards will be drawn at the beginning of each round. Player and Banker, each hand will start with 2 cards
                    face down.
                </li>
                <li>The third card will be dealt according to the total points of the first 2 cards on each hand.</li>
                <li>If the round ends with a total of less than 6 cards dealt, the remaining cards will be used for the next round.</li>
                <li>
                    The game determines the win or loss by comparing the total points of all cards on each hand and the winning hand is the
                    one closest to a total of 9 points.
                </li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>The maximum total stake per round is {maxBetMain} </li>
            </>
        );
    }

    return (
        <>
            <li>Player dan Banker, masing-masing tangan akan mulai dengan 2 kartu tertutup.</li>
            {environment === ENVIRONMENT.sc && (
                <>
                    <li>Penumpang memasang taruhan di salah satu dari dua tangan yang mana yang akan menang.</li>
                    <li>
                        The third card also will be drawn after finishing dealing 2 initial face-down cards for Player and Dealer’s hands.
                    </li>
                    <li>
                        The cards are numbered from one to six that correspond to the sequence of dealt cards at the beginning of the game
                        round.
                    </li>
                </>
            )}
            {environment === ENVIRONMENT.sm && <li>The Punter predicts which one in two hands will win.</li>}
            <li>
                Opsi taruhan lainnya adalah “Tie” jika Penumpang memprediksi dua tangan akan berakhir dengan total yang sama atau mereka juga dapat bertaruh pada opsi Besar, Kecil, Pasangan Pemain, atau Pasangan Bankir.
            </li>
            <li>Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir.  Catatan, taruhan yang dipasang tidak dapat dibatalkan.</li>
            <li>Total taruhan maksimum per putaran adalah {maxBetMain}</li>
            <li>Setelah waktu taruhan berakhir, dealer membalik kartu menghadap ke atas.</li>
            <li>Berdasarkan total poin dari dua kartu pertama, dealer akan menentukan apakah kedua tangan mendapat kartu ketiga. </li>
            <li>
                Permainan menentukan menang atau kalah dengan membandingkan total poin semua kartu di masing-masing tangan dan tangan yang menang adalah yang paling dekat dengan total 9 poin.
            </li>
            <li>Dek standar dengan 52 kartu (tidak termasuk Joker) dikocok setelah setiap putaran.</li>
        </>
    );
};

const renderPointCalculationRules = (gameName: string, gameId: number | undefined) => {
    return (
        <>
            <h2>3. Aturan Perhitungan Poin</h2>
            <ul className="desc">
                <li>
                    Nilai poin kartu:
                    <ul className="detail">
                        <li>Kartu (2 hingga 9) dihitung berdasarkan nilai nominal.</li>
                        <li>10 atau kartu wajah (Jack, Queen, King) memiliki nilai 0, dan Aces memiliki nilai 1</li>
                    </ul>
                </li>
                <li>
                    Ketika total poin melebihi sembilan, digit pertama dari total dijatuhkan, dan digit kedua adalah nilai tangan.
                </li>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Dua Kartu Pertama</th>
                            <th className={Styles["point-three-cards"]}>Kartu Ketiga</th>
                            <th className={Styles["point-total"]}>Total</th>
                            <th>Total Poin Berdasarkan Aturan {gameId === BaccaratId.BlockchainBaccarat ? "Baccarat " : gameName}</th>
                        </tr>
                    </thead>
                    {renderTBodyPointCalculationRules()}
                </table>
            </ul>
        </>
    );
};

export const renderTBodyPointCalculationRules = () => {
    return (
        <>
            <tbody>
                <tr>
                    <td>4, 5</td>
                    <td></td>
                    <td>4 + 5 = 9</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>8, 8</td>
                    <td></td>
                    <td>8 + 8 = 16</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>7, 3</td>
                    <td></td>
                    <td>7 + 3 = 10</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>9, 4</td>
                    <td>8</td>
                    <td>9 + 4 + 8 = 21</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>A, K</td>
                    <td>10</td>
                    <td>1 + 0 + 0 = 1</td>
                    <td>1</td>
                </tr>
            </tbody>
        </>
    );
};

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step1_id.png?v=2" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step2_id.png?v=2" alt="md5-result" />
                    <div>
                        Note: From the left to right, <span className={Styles["black"]}>7♠️</span>{" "}
                        <span className={Styles["black"]}>3♠️</span> <span className={Styles["red"]}>7♦️</span>{" "}
                        <span className={Styles["black"]}>K♣️</span> <span className={Styles["black"]}>2♠️</span>{" "}
                        <span className={Styles["red"]}>Q♦️</span> corresponds to the order of dealt cards at the beginning of the game
                        round.
                    </div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const renderContentIntroduction = (gameId: number | undefined) => {
    let content = "";
    switch (gameId) {
        case BaccaratId.Baccarat:
        case BaccaratId.VipBaccarat:
            if (gameId === BaccaratId.Baccarat) {
                content = "adalah salah satu permainan kartu yang paling sering dimainkan di kasino. ";
            } else {
                content = "adalah versi Baccarat yang disempurnakan dengan batas taruhan yang lebih tinggi..";
            }
            content +=
                "Permainan ini dimainkan dengan satu dek 52 kartu standar (tidak termasuk Joker). Ada 7 opsi taruhan dan Penumpang dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.";
            break;
        case BaccaratId.BlockchainBaccarat:
            content =
                " - a card game with Fairness Guarantees, the new breakthrough with blockchain technology. The game uses 8 decks of cards (416 cards excluding the joker). There are 7 betting options and Punters can bet on one or more betting options shown on the game table.";
            break;
    }

    return content;
};

const BaccaratGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, fractionalOddsFormat } = props;
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
                        {gameName} {renderContentIntroduction(gameId)}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(gameId, maxBetFollowChoice?.maxBetMain ?? 0, environment)}</li>
                <li className="guide-item">{renderPointCalculationRules(gameName, gameId)}</li>
                <li className="guide-item">
                    <h2>Aturan Kartu Ketiga</h2>
                    <ul className="desc">
                        <li>Kartu ketiga akan dibagikan sesuai dengan aturan ketat permainan.</li>
                        <li>
                            Jika total poin dari dua kartu pertama dari kedua tangan adalah 8 atau 9, ini disebut “Alami” dan tidak ada lagi kartu yang dibagikan, baik pemain maupun bankir berdiri.
                        </li>

                        <ul className="style-number-dot">
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">Aturan untuk tangan Pemain</span>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["sum-two-cards"]}>Total dua kartu pertama pemain</th>
                                                <th>Tindakan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0, 1, 2, 3, 4, 5</td>
                                                <td className="text-start">Menarik kartu ketiga.</td>
                                            </tr>
                                            <tr>
                                                <td>6 atau 7</td>
                                                <td className="text-start">Pemain selalu berdiri.</td>
                                            </tr>
                                            <tr>
                                                <td>8 atau 9 </td>
                                                <td className="text-start">
                                                    “Alami” dan tidak ada lagi kartu yang dibagikan, baik pemain maupun bankir berdiri.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">Aturan untuk kartu Banker</span>
                                <ul className="desc">
                                    <li>
                                        Jika tangan Player mendapatkan kartu ketiga maka Banker menarik kartu ketiga sesuai dengan aturan berikut:
                                        <div className="table-container">
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th className={Styles["sum-two-cards"]}>Total dua kartu pertama Banker</th>
                                                        <th>Banker menarik ketika kartu ketiga Player memiliki nilai poin:</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0, 1, 2</td>
                                                        <td className="text-start">Bankir selalu menarik kartu ketiga.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td className="text-start">
                                                            Nilai poin 1, 2, 3, 4, 5, 6, 7, 9, 0 (bukan 8).
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td className="text-start">Nilai poin dari 2, 3, 4, 5, 6, 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td className="text-start">Nilai poin 4, 5, 6, 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td className="text-start">Nilai poin 6 atau 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td className="text-start">Bankir selalu berdiri.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8 atau 9</td>
                                                        <td className="text-start">“Alami” dan tidak ada lagi kartu yang dibagikan, baik pemain maupun bankir berdiri.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        Jika total poin dari dua kartu pertama Player adalah 6 atau 7 maka Banker akan berdiri dengan total 6 atau 7, dan menarik total 5 atau kurang.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Pembayaran</h2>

                    <ul className="desc">
                        <li>Jumlah kemenangan dihitung sesuai dengan rasio pembayaran.</li>
                        <li>Pembayaran termasuk taruhan awal.</li>
                        <li>Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.</li>
                        <li className="contentBeforeEmpty">
                            <strong>Catatan:</strong> Semua taruhan Player dan Banker akan dikembalikan jika hasilnya seri.
                            <div className="table-container">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th className={Styles["payouts-option-width"]}>Pilihan</th>
                                            <th>Odds</th>
                                            <th>
                                                Batas Taruhan  <br></br>(Min Maks)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Player</td>
                                            <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Banker</td>
                                            <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Besar</td>
                                            <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Kecil</td>
                                            <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Mengikat</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td rowSpan={3}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pasangan Player</td>
                                            <td rowSpan={2}>{formatOdds(odds?.playerPair, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Pasangan Banker</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && gameId !== BaccaratId.BlockchainBaccarat && (
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
export default BaccaratGuideID;
