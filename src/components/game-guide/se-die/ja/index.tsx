import React, { useEffect } from "react";

import { renderTermsAndConditionsJA } from "../../../shared";
import { SeDieMini } from "../index";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/ja";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { formatOdds } from "../../../../helpers/number-helper";
import { ENVIRONMENT } from "../../../../common/constants";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import MD5 from "../../base/md5";
import { renderPromotionNoteJA } from "../../../shared/promotion-note/ja";

const renderGameRule = (maxBetMain: number | string, gameId = 0) => {
    return (
        <>
            <h2>ゲームルール</h2>
            <ul className="desc">
                <li>ボタンが皿の上に置かれ、ボウルで覆われます。皿がまだボウルで覆われている間、ディーラーは皿を持ち上げて振ります。プレイヤーはベットし、ベットオプションは以下の通りです：</li>

                <li className="contentBeforeEmpty">{renderGameRuleTable(gameId)}</li>
                <li>ベット時間が終了すると、ディーラーはボウルを皿から取り除き、結果が表示されます。</li>
                <li>プレイヤーは、ゲームテーブルに表示されている1つまたは複数のベットオプションにベットできます。すべてのベットは、ベット時間が終了する前に配置する必要があります。注意：配置されたベットはキャンセルできません。</li>
                <li>ラウンドあたりの最大総賭け金は {maxBetMain} です</li>
            </ul>
        </>
    );
};

const renderGameRuleTable = (gameId: number) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
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
                    {RedWhiteDataOnTable()}
                    {!SeDieMini.includes(gameId) && (
                        <tr>
                            <td>2赤、2白</td>
                            <td>2赤、2白</td>
                            {renderTwoRedTwoWhite()}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const renderStatistical = () => {
    return (
        <li className="guide-item">
            <h2>統計表</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const renderMd5 = (gameId: any, locale?: string) => {
    const currentGameType = SeDieMini.includes(gameId) ? "mini-sedie" : "sedie";

    return (
        <MD5
            locale={locale}
            step1ImageUrl={`/static/images/${currentGameType}/md5_step1_ja.png?v=5`}
            step2ImageUrl={`/static/images/${currentGameType}/md5_step2_ja.png?v=5`}
            step3ImageUrl={`/static/images/${currentGameType}/md5_step3.png?v=2`}
            step4ImageUrl={`/static/images/${currentGameType}/md5_step4.png?v=2`}
            note={<div>注：赤と白はボタンの両側に対応します。</div>}
        />
    );
};

const SeDieGuideJA: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    const gameDescription = (environment: string = ENVIRONMENT.sc) => {
        const miniSeDieDescription =
            environment === ENVIRONMENT.sm
                ? "is a compact version of Se Die game with fewer betting options. "
                : " - 「マルチプレイ」機能を備えた新バージョンで、4つのテーブル（ミニ色碟、ミニ色碟2、ミニ色碟3、ミニ色碟4）を同時にプレイでき、多くのエキサイティングな新しい体験を楽しめます。";
        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return miniSeDieDescription;
            case 22:
                return "は、より高いベット制限を持つ色碟ゲームの別バージョンです。";
            default:
                return "はアジア諸国で人気のあるゲームです。";
        }
    };
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>紹介</h2>
                    <p className="content">
                        {gameName} {gameDescription()}
                        ゲームには4つのカラーボタンがあり、各ボタンは赤と白の2色です。このゲームの目標は4つのボタンの結果を予測することです。結果がプレイヤーのベットと一致する場合、プレイヤーが勝利します。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>配当</h2>
                    <ul className="desc">
                        <li>勝金額はベットオッズに従って計算されます。</li>
                        <li>配当には初期賭け金が含まれます。</li>
                        <li>
                            ベットが決済されると、すべての勝金額がすぐにアカウント残高に追加されます。
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>オプション</th>
                                            <th>オッズ</th>
                                            <th>
                                                ベット制限 <br />
                                                （最小 - 最大）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>奇数</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>偶数</td>
                                        </tr>
                                        <tr>
                                            <td>4赤</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>

                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4白</td>
                                        </tr>
                                        <tr>
                                            <td>3赤、1白</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1赤、3白</td>
                                        </tr>
                                        {!SeDieMini.includes(gameId ? gameId : SeDieMini[0]) && (
                                            <tr>
                                                <td>2赤、2白</td>
                                                <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>
                                                <td>
                                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        {renderPromotionNoteJA(isInPromotionTime)}
                    </ul>
                </li>
                {renderStatistical()}
                {environment === ENVIRONMENT.sc && renderMd5(gameId, props.locale)}
                {renderTermsAndConditionsJA()}
            </ul>
        </>
    );
};
export default SeDieGuideJA; 