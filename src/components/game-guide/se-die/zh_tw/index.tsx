import React, { useEffect } from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { SeDieMini } from "../index";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/tw";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { formatOdds } from "../../../../helpers/number-helper";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { ENVIRONMENT } from "../../../../common/constants";
import MD5 from "../../base/md5";

const renderGameRule = (maxBetMain: number | string, gameId = 0) => {
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>鈕扣放在盤子上並蓋上碗。 當盤子仍然被碗蓋住時，莊家將拿起盤子並搖晃它。玩家下注，下注選項是：</li>

                <li className="contentBeforeEmpty">{renderGameRuleTable(gameId)}</li>
                <li>下注時間結束後，莊家將碗從盤子上移開，結果將顯示。</li>
                <li>玩家可以在遊戲桌上顯示的一個或多個投注選項上下注。所有投注必須在投注時間結束前進行。 請注意，下注不能取消。</li>
                <li>每輪最大總賭注為 {maxBetMain}</li>
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
                        <th>選項</th>
                        <th>獲勝條件</th>
                        <th>說明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}>單</td>
                        <td>3 紅，1 白</td>
                        {renderThreeRedOneWhite()}
                    </tr>
                    <tr>
                        <td>1 紅，3 白</td>
                        {renderOneRedThreeWhite()}
                    </tr>
                    <tr>
                        <td rowSpan={3}>雙</td>
                        <td>4 紅</td>
                        {renderFourRed()}
                    </tr>
                    <tr>
                        <td>4 白</td>
                        {renderFourWhite()}
                    </tr>
                    <tr>
                        <td>2 紅，2 白</td>
                        {renderTwoRedTwoWhite()}
                    </tr>
                    {RedWhiteDataOnTable()}
                    {!SeDieMini.includes(gameId) && (
                        <tr>
                            <td>2 紅，2 白</td>
                            <td>2 紅，2 白</td>
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
        <li className="guide-item" id="md5">
            <MD5
                locale={locale}
                step1ImageUrl={`/static/images/${currentGameType}/md5_step1_tw.png?v=5`}
                step2ImageUrl={`/static/images/${currentGameType}/md5_step2_tw.png?v=5`}
                step3ImageUrl={`/static/images/${currentGameType}/md5_step3_en.png?v=2`}
                step4ImageUrl={`/static/images/${currentGameType}/md5_step4_en.png?v=2`}
                note={<div>注：紅色和白色對應按鈕的兩側。</div>}
            />
        </li>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    const gameDescription = (environment: string = ENVIRONMENT.sc) => {
        const miniSeDieDescription =
            environment === ENVIRONMENT.sm
                ? "is a compact version of Se Die game with fewer betting options. "
                : " - 具有“多人遊戲”功能的新版本可讓您同時玩 4 桌（迷你色碟、迷你色碟 2、迷你色碟 3 和 迷你色碟 4），享受許多激動人心的新體驗。";
        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return miniSeDieDescription;
            case 22:
                return "VIP 色碟是色碟遊戲的另一個版本，具有更高的投注限制。";
            default:
                return "是亞洲國家的流行遊戲。";
        }
    };
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} {gameDescription()}
                        遊戲有 4 個彩色按鈕，每個按鈕有紅白兩色。這個遊戲的目標是預測 4 個按鈕的結果。如果結果與玩家的賭注相符，則玩家獲勝。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>支付</h2>
                    <ul className="desc">
                        <li>中獎金額根據派彩率計算。 支付包括初始本金。</li>
                        <li>
                            投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>選項</th>
                                            <th>賠率</th>
                                            <th>
                                                投注限額 <br />
                                                （最小 - 最大）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>單</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>雙</td>
                                        </tr>
                                        <tr>
                                            <td>4 紅</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>

                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4 白</td>
                                        </tr>
                                        <tr>
                                            <td>3 紅，1 白</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 紅，3 白</td>
                                        </tr>
                                        {!SeDieMini.includes(gameId ? gameId : SeDieMini[0]) && (
                                            <tr>
                                                <td>2 紅，2 白</td>
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
                        {renderPromotionNoteEN(isInPromotionTime)}
                    </ul>
                </li>
                {renderStatistical()}
                {environment === ENVIRONMENT.sc && renderMd5(gameId, props.locale)}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
