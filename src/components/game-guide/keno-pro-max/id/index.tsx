import React from "react";

import { numberWithCommas, formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsID } from "../../../shared";
import { GameConfigProps, OddsProMaxProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { FiveElements } from "../../../shared/keno/id";

const payouts = (odds: OddsProMaxProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>Pembayaran</h2>
            <ul className="desc">
                <li>Jumlah kemenangan dihitung berdasarkan odds taruhan.</li>
                <li>Pembayaran termasuk taruhan awal.</li>
                <li>
                    Semua jumlah pemenang langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>Pilihan</th>
                                    <th>Odds</th>
                                    <th>
                                        Batas Taruhan <br></br> (Min Maks)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Besar </td>
                                    <td rowSpan={4}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kecil</td>
                                </tr>
                                <tr>
                                    <td>Ganjil</td>
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
                            <strong>Besar:</strong> Jumlah 20 bola bernomor yang diambil adalah {`>=`} 811
                        </li>
                        <li>
                            <strong>Kecil:</strong> Jumlah 20 bola bernomor yang diambil adalah {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>Contoh:</strong> Set 20 bola bernomor yang diambil secara acak dari 80 bola bernomor:
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Hasil Undian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>4</td>
                                        <td>14</td>
                                        <td>16</td>
                                        <td>29</td>
                                        <td>34</td>
                                        <td>40</td>
                                        <td>51</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>67</td>
                                        <td>70</td>
                                        <td>72</td>
                                        <td>75</td>
                                        <td>77</td>
                                        <td>78</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>Jumlah Total = 939. Pemain yang bertaruh pada BIG akan menang.</td>
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
                            <strong>Ganjil:</strong> jumlah 20 bola bernomor yang diambil adalah bilangan ganjil.
                        </li>
                        <li>
                            <strong>Genap :</strong> jumlah 20 bola bernomor yang diambil adalah bilangan genap.
                        </li>
                    </ul>
                    <div>
                        <strong>Contoh:</strong> Set 20 bola bernomor yang diambil secara acak dari 80 bola bernomor:
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Hasil Undian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>15</td>
                                        <td>20</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>35</td>
                                        <td>36</td>
                                        <td>45</td>
                                    </tr>
                                    <tr>
                                        <td>49</td>
                                        <td>54</td>
                                        <td>56</td>
                                        <td>58</td>
                                        <td>61</td>
                                        <td>62</td>
                                        <td>74</td>
                                        <td>76</td>
                                        <td>78</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>Jumlah Total = 911. Pemain yang bertaruh pada ODD akan menang.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>Contoh:</strong> Set 20 bola bernomor yang diambil secara acak dari 80 bola bernomor:
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Hasil Undian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>17</td>
                                        <td>27</td>
                                        <td>36</td>
                                        <td>44</td>
                                        <td>46</td>
                                        <td>47</td>
                                        <td>49</td>
                                    </tr>
                                    <tr>
                                        <td>52</td>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>62</td>
                                        <td>63</td>
                                        <td>65</td>
                                        <td>72</td>
                                        <td>74</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>Jumlah Total = 922. Pemain yang bertaruh pada API akan menang.</td>
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

const KenoProMaxGuideID: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds, maxBet } = gameConfigs;

    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Perkenalan</h2>
                    <p className="content">
                        {gameName} Max adalah permainan angka yang sangat populer yang dimainkan di seluruh dunia. Permainan ini dimainkan
                        dengan 20 bola bernomor yang diambil secara acak dari 80 bola bernomor mulai dari 1 hingga 80. Pemain memasang
                        taruhan pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan. Jumlah total dari 20 bola bernomor
                        yang ditarik akan menentukan menang atau kalah pemain.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Aturan Permainan</h2>
                    <ul className="desc">
                        <li>
                            Semua taruhan harus dipasang sebelum waktu taruhan berakhir. Catatan, taruhan yang dipasang tidak dapat
                            dibatalkan.
                        </li>
                        <li>
                            Setelah waktu taruhan berakhir, sistem akan secara acak menarik 20 bola bernomor dan hasilnya akan ditampilkan.
                        </li>
                        <li>Total taruhan maksimum per putaran adalah {maxBetRound}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>

                {renderTermsAndConditionsID()}
            </ul>
        </>
    );
};
export default KenoProMaxGuideID;
