import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { formatOdds } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../roulette.module.scss";
import { renderGameRuleImage } from "../shared";

const wrapperImg = "wrapper-img";
const tableSmall = "table-small";
const renderGameRule = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>選擇您想玩的籌碼值。所有投注必須在投注時間結束前完成。</li>
                <li>點擊“確認”按鈕完成，或點擊{`"X"`}重置您的投注。請注意，已確認的投注不能取消。</li>
                <li>一旦下注時間結束，輪盤將隨著滾珠以與輪盤旋轉相反的方向旋轉。</li>
                <li>中獎號碼由球落入的槽位決定。</li>
                <li>玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。</li>
                <li>
                    中獎金額根據派彩率計算。 <strong>請注意，</strong> 支付包括初始投注。
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>投注類型</th>
                                    <th>支出</th>
                                    <th>
                                        投注限額<br></br>（最小-最大）
                                    </th>
                                    <th>每輪最大總賭注</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>直線上升</td>
                                    <td>{formatOdds(odds?.straightUp, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightUp}
                                    </td>
                                    <td rowSpan={12}>{maxBetFollowChoice?.maxBetMain}</td>
                                </tr>
                                <tr>
                                    <td>分</td>
                                    <td>{formatOdds(odds?.split, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSplit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>街道</td>
                                    <td rowSpan={2}>{formatOdds(odds?.street, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStreet}
                                    </td>
                                </tr>
                                <tr>
                                    <td>三角形</td>
                                </tr>
                                <tr>
                                    <td>角落</td>
                                    <td rowSpan={2}>{formatOdds(odds?.corner, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetCorner}
                                    </td>
                                </tr>
                                <tr>
                                    <td>四個數字</td>
                                </tr>
                                <tr>
                                    <td>線</td>
                                    <td>{formatOdds(odds?.line, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetLine}
                                    </td>
                                </tr>
                                <tr>
                                    <td>列</td>
                                    <td rowSpan={2}>{formatOdds(odds?.dozen, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDozen}
                                    </td>
                                </tr>
                                <tr>
                                    <td>一打</td>
                                </tr>
                                <tr>
                                    <td>紅/黑</td>
                                    <td rowSpan={3}>{formatOdds(odds?.redBlack, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRedBlack}
                                    </td>
                                </tr>
                                <tr>
                                    <td>單/雙</td>
                                </tr>
                                <tr>
                                    <td>大/小</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
            </ul>
        </>
    );
};

const renderBetChipsNotice = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <div className="table-container">
            <table className={`table text-center ${Styles["table-customize"]}`}>
                <thead>
                    <tr>
                        <th>內幕投注</th>
                        <th>外圍投注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/A-X.png" alt="A-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>直線上升：</strong>對特定數字的賭注。<br></br>+ 將籌碼直接放在任何單個數字（包括零）上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/H-X.png" alt="H-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>列：</strong>對所有十二個數字的投注（不包括零）<br></br>+ 將您的籌碼放在列末尾標有“
                                    {formatOdds(odds?.column, fractionalOddsFormat)}”的區域之一。
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/B-X.png" alt="B-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>分：</strong>投注兩個相鄰的數字，水平或垂直。<br></br>+ 將籌碼放在任意兩個數字之間的線上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/I-X.png" alt="I-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>一打：</strong>投註十二個連續數字。<br></br>+
                                    將籌碼放在標有“1-12”、“13-24”或“25-36”的三個區域之一。
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/C-X.png" alt="C-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>街：</strong>對位於同一行的三個連續數字下注。<br></br>+ 將籌碼放在三個數字的外邊界上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/J-X.png" alt="J-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>紅/黑：</strong>投注最終結果是紅色還是黑色。
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/D-X.png" alt="D-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>三角形：</strong>對三個相鄰數字 0、1、2 或 0、2、3 的投注。<br></br>+ 將籌碼放在（0、1 和
                                    2）或（0、2 和 3）的交叉角上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/K-X.png" alt="K-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>單/雙：</strong>投注最終結果是奇數還是偶數（不包括零）
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/E-X.png" alt="E-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>角落：</strong>投註四個數字。
                                    <br></br>+ 將您的籌碼放在所有四個數字相交的十字路口。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/L-X.png" alt="L-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>大/小：</strong>投注最終結果是大（19-36）還是小（1-18）
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/F-X.png" alt="F-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>四個數字：</strong>投註四個數字 0、1、2、3<br></br>+ 將籌碼放在 0 和 1、2、3 行的交叉角上
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/G-X.png" alt="G-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>線：</strong>對相鄰兩行的賭注。<br></br>+ 將您的籌碼放在兩排交叉點的末端。
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderCallBetTiers = (fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <span className="font-weight-medium title-text">Tiers</span>
            <ul className="desc">
                <li>Tiers投注包括數字 27、13、36、11、30、8、23、10、5、24、16、33</li>
                <li>要玩Tiers投注，將取六個籌碼，分別放在六個分賽中：(5, 8), (10, 11), (13, 16), (23, 24), (27, 30), (33) , (36)</li>
            </ul>
            <p>
                <strong>示例：</strong>玩家選擇籌碼值 10，然後點擊{`"Tiers"`}選項，此選項將花費 6 個籌碼：
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>投注類型</th>
                            <th>選項</th>
                            <th>賭注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={6}>分</td>
                            <td>5, 8</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>10, 11</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13, 16</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>23, 24</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27, 30</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>33, 36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>總</strong>
                            </td>
                            <td>60</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetOrphelins = (fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <span className="font-weight-medium title-text">Orphelins</span>
            <ul className="desc">
                <li>Orphelins 投注包括數字 1、20、14、31、9、6、34、17</li>
                <li>
                    要玩 Orphelins 賭注，將獲得五個籌碼，分別放置在：
                    <ul className="plus">
                        <li>四個分裂的四個籌碼 (6, 9), (14, 17), (17, 20), (31, 34)</li>
                        <li>一個籌碼用於直注 (1)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>示例：</strong>玩家選擇籌碼值 10，然後單擊 Orphelins 選項，該選項將花費 5 個籌碼：
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-orphelins_ex.png"
                        alt="game_guide-orphelins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-orphelins_ex.png" alt="game_guide-orphelins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>投注類型</th>
                            <th>選項</th>
                            <th>賭注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={4}>分</td>
                            <td>6, 9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>14, 17</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>17, 20</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>31, 34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>直線上升</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>總</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetVoisins = (fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <span className="font-weight-medium title-text">Voisins</span>
            <ul className="desc">
                <li>Voisins 投注包括數字 22、18、29、7、28、12、35、3、26、0、32、15、19、4、21、2、25 </li>
                <li>
                    要玩 Voisins 賭注，將獲得九個籌碼，分別放在：
                    <ul className="plus">
                        <li>五個籌碼用於五個拆分：(12, 15), (18, 21), (32, 35), (19, 22), (4, 7)</li>
                        <li>三角形的兩個籌碼：(0, 2, 3)</li>
                        <li>角落的兩個籌碼：(25, 26, 28, 29)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>示例：</strong>玩家選擇籌碼值 10，然後單擊 Voisins 選項，此選項將花費 9 籌碼：
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-voisins_ex.png"
                        alt="game_guide-voisins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-voisins_ex.png" alt="game_guide-voisins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>投注類型</th>
                            <th>選項</th>
                            <th>賭注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>分</td>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>18, 21</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>19, 22</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4, 7</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>三角形</td>
                            <td>0, 2, 3</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>角落</td>
                            <td>25, 26, 28, 29</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>總</strong>
                            </td>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetZero = (fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <span className="font-weight-medium title-text">Zero</span>
            <ul className="desc">
                <li>Zero賭注包括數字 12、35、3、26、0、32、15</li>
                <li>
                    要玩Zero賭注，將取四個籌碼，分別放在：
                    <ul className="plus">
                        <li>一個籌碼用於直注 (26)</li>
                        <li>三個分片的三個籌碼 (0, 3), (12, 15), (32, 35)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>示例：</strong>玩家選擇籌碼值 10，然後單擊“Zero”選項，此選項將花費 4 個籌碼：
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>投注類型</th>
                            <th>選項</th>
                            <th>賭注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>分</td>
                            <td>0, 3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td>直線上升</td>
                            <td>26</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <strong>總</strong>
                            </td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetNeighbors = (fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <span className="font-weight-medium title-text">Neighbors</span>
            <p>Neighbors由 5 個數字組成，其中一個數字由玩家選擇，以及位於輪盤上該數字左右兩側的兩個數字。</p>
            <ul className="desc">
                <li>要玩Neighbors賭注，將取 5 個籌碼，這些籌碼放在 5 連注中。</li>
            </ul>

            <div className={Styles["wrapper-img-circle"]}>
                <img src="/static/images/roulette/game_guide-neighbors_1.png" alt="game_guide-neighbors_1" loading="lazy" />
            </div>
            <p>
                <strong>示例：</strong>玩家選擇籌碼值 10，然後單擊數字 27 進行Neighbors下注，五個直注將花費 5
                個籌碼：(36)、(13)、(27)、(6)、(34)
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide_neighbors_ex.png"
                        alt="game_guide_neighbors_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide_neighbors_ex.png" alt="game_guide_neighbors_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>投注類型</th>
                            <th>選項</th>
                            <th>賭注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>直線上升</td>
                            <td>36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>總</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderBettingOptions = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <li className="guide-item">
            <h2>投注選項</h2>
            <p>
                輪盤賭的投注類型分為兩類：內註和外注。
                對數字本身進行的投注稱為內註（直、分、街...），而您在數字字段之外進行的投注稱為外注（單/雙、紅/黑、大 /小，列和一打）
            </p>
            {renderGameRuleImage(fractionalOddsFormat, "tw")}
            {renderBetChipsNotice(odds, fractionalOddsFormat)}
        </li>
    );
};

const renderCallBet = (fractionalOddsFormat: boolean | undefined) => {
    return (
        <li className="guide-item">
            <h2>跟注</h2>
            <p>
                跟注或法式投注是特殊的投注選項，它們是一組預定義的投注。 有 5 個選項：Tiers)、Voisins du Zero、Orphelins、Zero、Neighbors。
            </p>
            <div className={Styles[wrapperImg]}>
                <div className={Styles["wrapper-img-circle"]}>
                    <img src="/static/images/roulette/game_guide-cuoc_nhanh.png" alt="game_guide-cuoc_nhanh" loading="lazy" />
                </div>
            </div>

            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">跟注類型</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">{renderCallBetTiers(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetOrphelins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetVoisins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetZero(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetNeighbors(fractionalOddsFormat)}</li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const RouletteGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName}是一個簡單而迷人的賭博遊戲。 遊戲使用一個球和一個輪盤，輪盤由 37 個插槽組成，編號從 0 到 36。
                        每個插槽都是紅色或黑色，而插槽“0”是綠色。 玩家預測輪盤旋轉後球最終靜止的次數。 如果球落入您選擇的號碼，您將獲勝；
                        否則，你輸了。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {renderBettingOptions(odds, fractionalOddsFormat)}
                {renderCallBet(fractionalOddsFormat)}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default RouletteGuideTW;
