import React from "react";

import { renderTermsAndConditionsJA } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { StatisticalTable } from "../../../shared/se-die/ja";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>ゲームルール</h2>
            <ul className="desc">
                <li>
                    プレイヤーは奇数または偶数にベットできますが、両方に同時にベットすることはできません。
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>オプション</th>
                                    <th>勝利条件</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>奇数</td>
                                    <td>3赤、1白</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>1赤、3白</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>偶数</td>
                                    <td>4赤</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>4白</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>2赤、2白</td>
                                    {renderTwoRedTwoWhite()}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>プレイヤーは、ベット時間が終了する前に同じ選択肢で再度ベットすることで、賭け金を増やすことができます。</li>
                <li>ラウンドあたりの最大総賭け金は {maxBet} です。注意：配置されたベットはキャンセルできません。</li>
                <li>
                    バランスベットプール：奇数と偶数にベットされた総額が異なる場合、差額は最新のベットチケットを持つプレイヤーに返金されます。<br></br>
                    <strong>例</strong>：プレイヤーAが奇数に100ベット、プレイヤーBが偶数に30ベット、Cが偶数に90ベットした場合。奇数と偶数にベットされた総額をバランスするため、システムはプレイヤーCに20を返金します。
                </li>
            </ul>
        </>
    );
};

const renderStatisticTable = () => {
    return (
        <li className="guide-item">
            <h2>統計表</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const SeDieGuideJA: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>紹介</h2>
                    <p className="content">
                        {gameName} は色碟ゲームのミニバージョンで、奇数と偶数の2つのベットオプションのみを含みます。ゲームは4つのカラーボタンでプレイされ、各ボタンは赤と白の2色の側面を持っています。
                        このゲームの目標は4つのボタンの結果を予測することです。結果がプレイヤーのベットと一致する場合、プレイヤーが勝利します。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>配当</h2>
                    <ul className="desc">
                        <li>勝金額はベットオッズに従って計算されます。注意：配当には初期賭け金が含まれます。</li>
                        <li>
                            ベットが決済されると、すべての勝金額がすぐにアカウント残高に追加されます。
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>オプション</th>
                                            <th>オッズ</th>
                                            <th>
                                                ベット制限 <br /> （最小 - 最大）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>奇数</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>偶数</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatisticTable()}
                {renderTermsAndConditionsJA()}
            </ul>
        </>
    );
};
export default SeDieGuideJA; 