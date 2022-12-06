import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
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
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>选择您想玩的筹码值。 所有投注必须在投注时间结束前完成。</li>
                <li>点击“确认”按钮完成，或点击“X”重置您的投注。 请注意，已确认的投注不能取消。</li>
                <li>一旦下注时间结束，轮盘将随着滚珠以与轮盘旋转相反的方向旋转。</li>
                <li>中奖号码由球落入的槽位决定。</li>
                <li>玩家可以对游戏桌上显示的一个或多个投注选项进行投注。</li>
                <li>
                    中奖金额根据派彩率计算。 <strong>请注意，</strong> 支付包括初始投注。
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>投注类型</th>
                                    <th>赔率</th>
                                    <th>
                                        投注限额<br></br>（最小-最大）
                                    </th>
                                    <th>每轮最大总赌注</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>直线上升</td>
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
                                    <td>四个数字</td>
                                </tr>
                                <tr>
                                    <td>线</td>
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
                                    <td>红/黑</td>
                                    <td rowSpan={3}>{formatOdds(odds?.redBlack, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRedBlack}
                                    </td>
                                </tr>
                                <tr>
                                    <td>单/双</td>
                                </tr>
                                <tr>
                                    <td>大/小</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
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
                        <th>内幕投注</th>
                        <th>外围投注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/A-X.png" alt="A-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>直线上升：</strong>对特定数字的赌注。<br></br>+ 将筹码直接放在任何单个数字（包括零）上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/H-X.png" alt="H-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>列：</strong>对所有十二个数字的投注（不包括零）<br></br>+ 将您的筹码放在列末尾标有&#34;
                                    {formatOdds(odds?.column, fractionalOddsFormat)}&#34;的区域之一。
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/B-X.png" alt="B-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>分：</strong>投注两个相邻的数字，水平或垂直。<br></br>+ 将筹码放在任意两个数字之间的线上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/I-X.png" alt="I-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>一打：</strong>投注十二个连续数字。<br></br>+
                                    将筹码放在标有“1-12”、“13-24”或“25-36”的三个区域之一。
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/C-X.png" alt="C-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>街：</strong>对位于同一行的三个连续数字下注。<br></br>+ 将筹码放在三个数字的外边界上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/J-X.png" alt="J-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>红/黑：</strong>投注最终结果是红色还是黑色。
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/D-X.png" alt="D-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>三角形：</strong>对三个相邻数字 0、1、2 或 0、2、3 的投注。<br></br>+ 将筹码放在（0、1 和
                                    2）或（0、2 和 3）的交叉角上。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/K-X.png" alt="K-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>单/双：</strong>投注最终结果是奇数还是偶数（不包括零）
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/E-X.png" alt="E-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>角落：</strong>投注四个数字。
                                    <br></br>+ 将您的筹码放在所有四个数字相交的十字路口。
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/L-X.png" alt="L-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>大/小：</strong>投注最终结果是大（19-36）还是小（1-18）
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/F-X.png" alt="F-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>四个数字：</strong>投注四个数字 0、1、2、3<br></br>+ 将筹码放在 0 和 1、2、3 行的交叉角上
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
                                    <strong>线：</strong>对相邻两行的赌注。<br></br>+ 将您的筹码放在两排交叉点的末端。
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
                <li>Tiers投注包括数字 27、13、36、11、30、8、23、10、5、24、16、33</li>
                <li>要玩Tiers投注，将取六个筹码，分别放在六个分赛中：(5, 8), (10, 11), (13, 16), (23, 24), (27, 30), (33) , 36)</li>
            </ul>
            <p>
                <strong>示例：</strong>玩家选择筹码值 10，然后点击{`"Tiers"`}选项，此选项将花费 6 个筹码：
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
                            <th>投注类型</th>
                            <th>选项</th>
                            <th>赌注</th>
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
                                <strong>总</strong>
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
                <li>Orphelins 投注包括数字 1、20、14、31、9、6、34、17。</li>
                <li>
                    要玩 Orphelins 赌注，将获得五个筹码，分别放置在：
                    <ul className="plus">
                        <li>四个分裂的四个筹码 (6, 9), (14, 17), (17, 20), (31, 34)</li>
                        <li>一个筹码用于直注 (1)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>示例：</strong>玩家选择筹码值 10，然后单击 Orphelins 选项，该选项将花费 5 个筹码：
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
                            <th>投注类型</th>
                            <th>选项</th>
                            <th>赌注</th>
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
                            <td>直线上升</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>总</strong>
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
                <li>Voisins 投注包括数字 22、18、29、7、28、12、35、3、26、0、32、15、19、4、21、2、25</li>
                <li>
                    要玩 Voisins 赌注，将获得九个筹码，分别放在：
                    <ul className="plus">
                        <li>五个筹码用于五个拆分：(12, 15), (18, 21), (32, 35), (19, 22), (4, 7)</li>
                        <li>三角形的两个筹码：(0, 2, 3)</li>
                        <li>角落的两个筹码：(25, 26, 28, 29)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>示例：</strong>玩家选择筹码值 10，然后单击 Voisins 选项，此选项将花费 9 筹码：
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
                            <th>投注类型</th>
                            <th>选项</th>
                            <th>赌注</th>
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
                                <strong>总</strong>
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
                <li>Zero赌注包括数字 12、35、3、26、0、32、15</li>
                <li>
                    要玩Zero赌注，将取四个筹码，分别放在：
                    <ul className="plus">
                        <li>一个筹码用于直注 (26)</li>
                        <li>三个分片的三个筹码 (0, 3), (12, 15), (32, 35)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>示例：</strong>玩家选择筹码值 10，然后单击“Zero”选项，此选项将花费 4 个筹码：
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
                            <th>投注类型</th>
                            <th>选项</th>
                            <th>赌注</th>
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
                            <td>直线上升</td>
                            <td>26</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <strong>总</strong>
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
            <p>Neighbors由 5 个数字组成，其中一个数字由玩家选择，以及位于轮盘上该数字左右两侧的两个数字。</p>
            <ul className="desc">
                <li>要玩Neighbors赌注，将取 5 个筹码，这些筹码放在 5 连注中。</li>
            </ul>

            <div className={Styles["wrapper-img-circle"]}>
                <img src="/static/images/roulette/game_guide-neighbors_1.png" alt="game_guide-neighbors_1" loading="lazy" />
            </div>
            <p>
                <strong>示例：</strong>玩家选择筹码值 10，然后单击数字 27 进行Neighbors下注，五个直注将花费 5
                个筹码：(36)、(13)、(27)、(6)、(34)
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
                            <th>投注类型</th>
                            <th>选项</th>
                            <th>赌注</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>直线上升</td>
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
                                <strong>总</strong>
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
            <h2>投注选项</h2>
            <p>
                轮盘赌的投注类型分为两类：内注和外注。
                对数字本身进行的投注称为内注（直、分、街...），而您在数字字段之外进行的投注称为外注（单/双、红/黑、大 /小，列和一打）
            </p>
            {renderGameRuleImage(fractionalOddsFormat, "cn")}
            {renderBetChipsNotice(odds, fractionalOddsFormat)}
        </li>
    );
};

const renderCallBet = (fractionalOddsFormat: boolean | undefined) => {
    return (
        <li className="guide-item">
            <h2>跟注</h2>
            <p>
                跟注或法式投注是特殊的投注选项，它们是一组预定义的投注。 有 5 个选项：Tiers)、Voisins du Zero、Orphelins、Zero、Neighbors。
            </p>
            <div className={Styles[wrapperImg]}>
                <div className={Styles["wrapper-img-circle"]}>
                    <img src="/static/images/roulette/game_guide-cuoc_nhanh.png" alt="game_guide-cuoc_nhanh" loading="lazy" />
                </div>
            </div>

            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">跟注类型</span>
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

const RouletteGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName}是一个简单而迷人的赌博游戏。游戏使用一个球和一个轮盘，轮盘由 37 个插槽组成，编号从 0 到 36
                        每个插槽都是红色或黑色，而插槽“0”是绿色。 玩家预测轮盘旋转后球最终静止的次数。 如果球落入您选择的号码，您将获胜；
                        否则，你输了。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {renderBettingOptions(odds, fractionalOddsFormat)}
                {renderCallBet(fractionalOddsFormat)}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default RouletteGuideCN;
