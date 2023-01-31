import React, { useEffect } from "react";

import { SeDieMini } from "..";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderTermsAndConditionsEN } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { RedWhiteDataOnTable, StatisticalTable } from "../../../shared/se-die/en";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { renderPromotionNoteEN } from "../../../shared/promotion-note/en";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

const renderGameRule = (maxBetMain: number | string, gameId = 0) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    Buttons are placed on the plate and covered with a bowl. The dealer will pick up the plate and shake it when the plate
                    is still covered with the bowl. The players place their bets and the betting options are:
                </li>

                <li className="contentBeforeEmpty">{renderGameRuleTable(gameId)}</li>
                <li>Once the betting time has expired, the dealer removes the bowl from the plate and the result will be shown.</li>
                <li>
                    Players can bet on one or more betting options shown on the game table. All bets must be placed before the betting time
                    expires. Note, placed bets cannot be canceled.
                </li>
                <li>The maximum total stake per round is {maxBetMain}</li>
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
                        <th>Options</th>
                        <th>Winning Conditions</th>
                        <th>Descriptions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}>ODD</td>
                        <td>3 red, 1 white</td>
                        {renderThreeRedOneWhite()}
                    </tr>
                    <tr>
                        <td>1 red, 3 white</td>
                        {renderOneRedThreeWhite()}
                    </tr>
                    <tr>
                        <td rowSpan={3}>EVEN</td>
                        <td>4 red</td>
                        {renderFourRed()}
                    </tr>
                    <tr>
                        <td>4 white</td>
                        {renderFourWhite()}
                    </tr>
                    <tr>
                        <td>2 red, 2 white</td>
                        {renderTwoRedTwoWhite()}
                    </tr>
                    {RedWhiteDataOnTable()}
                    {!SeDieMini.includes(gameId) && (
                        <tr>
                            <td>2 red, 2 white</td>
                            <td>2 red, 2 white</td>
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
            <h2>Statistical Table</h2>
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
                step1ImageUrl={`/static/images/${currentGameType}/md5_step1_en.png?v=5`}
                step2ImageUrl={`/static/images/${currentGameType}/md5_step2_en.png?v=5`}
                step3ImageUrl={`/static/images/${currentGameType}/md5_step3_en.png?v=2`}
                step4ImageUrl={`/static/images/${currentGameType}/md5_step4_en.png?v=2`}
                note={<div>Note: Red and white correspond to two sides of the button.</div>}
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
                : " -  a new version with “Multiplay” feature that allows you to play 4 tables (Mini Se Die, Mini Se Die 2, Mini Se Die 3, and Mini Se Die 4) at the same time with many exciting new experiences. ";

        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return miniSeDieDescription;
            case 22:
                return "is another version of the Se Die game with higher betting limits. ";
            default:
                return "is a popular game in Asian countries. ";
        }
    };
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} {gameDescription(environment)}
                        The game is played with 4 colored buttons, each button has two sides colored in red and white. The objective of this
                        game is to predict the outcome of 4 buttons. If the outcome matches the player’s bet, the player wins.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>The winning amount is calculated according to the betting odds.</li>
                        <li>The Payout includes the initial stake.</li>
                        <li>
                            All winning amounts are instantly added to your account balance when bets are settled.
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>Options</th>
                                            <th>Odds</th>
                                            <th>
                                                Bet Limit <br /> (Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ODD</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>EVEN</td>
                                        </tr>
                                        <tr>
                                            <td>4 red</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>

                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4 white</td>
                                        </tr>
                                        <tr>
                                            <td>3 red, 1 white</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 red, 3 white</td>
                                        </tr>
                                        {!SeDieMini.includes(gameId ? gameId : SeDieMini[0]) && (
                                            <tr>
                                                <td>2 red, 2 white</td>
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
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
