import React, { useEffect } from "react";

import { BaccaratId } from "..";
import { renderTermsAndConditionsTW } from "../../../shared";
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
            <h2>遊戲規則</h2>
            <ul className="desc">
                {renderRuleContent(gameId, maxBetMain, environment)}

                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>選項</th>
                                    <th>說明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>閒家</td>
                                    <td className="text-start">
                                    如果閒家的總點數高於莊家，閒家手將獲勝。
                                    </td>
                                </tr>
                                <tr>
                                    <td>莊家</td>
                                    <td className="text-start">
                                    如果莊家的總點數高於閒家，莊家手將獲勝。
                                    </td>
                                </tr>
                                <tr>
                                    <td>平局</td>
                                    <td className="text-start">
                                    如果兩隻手（閒家和莊家）的總點數相等，則投注者獲勝。
                                    </td>
                                </tr>
                                <tr>
                                    <td>閒家一對</td>
                                    <td className="text-start">
                                    如果閒家的前兩張牌是對子，則投注者獲勝，無論花色如何。
                                    </td>
                                </tr>
                                <tr>
                                    <td>莊家一對</td>
                                    <td className="text-start">
                                    如果莊家的前兩張牌是對子，則投注者獲勝，無論花色如何。
                                    </td>
                                </tr>
                                <tr>
                                    <td>大</td>
                                    <td className="text-start">
                                    如果一輪中發出的牌總數為 6 張中的 5 張，則投注者獲勝。
                                    </td>
                                </tr>
                                <tr>
                                    <td>小</td>
                                    <td className="text-start">
                                    如果一輪中發出的牌總數為 4，則投注者獲勝。
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
            <li>閒家和莊家，每手牌以 2 張牌面朝下開始。</li>
            {environment === ENVIRONMENT.sc && (
                <>
                    <li>The Punter predicts which one in two hands will win.</li>
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
                另一個投注選項是“平局”，如果投注者預測兩手牌的總數相等，或者他們也可以投注大、小、閒一對或莊一對選項。
            </li>
            <li>所有投注必須在投注時間到期之前進行。 請注意，投注無法取消。</li>
            <li>每輪最大總賭注為 {maxBetMain}</li>
            <li>下注時間結束後，發牌者將牌面朝上。</li>
            <li>根據前兩張牌的總點數，莊家將決定任一手是否獲得第三張牌。 </li>
            <li>
                遊戲通過比較每手牌上所有牌的總點數來確定輸贏，獲勝的手牌是最接近總共 9 點的牌。
            </li>
            <li>52 張牌（不包括小丑）的標準牌組在每輪後洗牌。</li>
        </>
    );
};

const renderPointCalculationRules = (gameName: string, gameId: number | undefined) => {
    return (
        <>
            <h2>積分計算規則</h2>
            <ul className="desc">
                <li>
                    卡點值：
                    <ul className="detail">
                        <li>牌（2 到 9）按面值計算。</li>
                        <li>10 或面牌（Jack, Queen, King）的值為 0，而 Aces 的值為 1</li>
                    </ul>
                </li>
                <li>
                當總點數超過九點時，總點數的第一個數字被丟棄，第二個數字是手的價值。
                </li>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>前兩張牌</th>
                            <th className={Styles["point-three-cards"]}>第三張牌</th>
                            <th className={Styles["point-total"]}>總計</th>
                            <th>基於{gameId === BaccaratId.BlockchainBaccarat ? "Baccarat " : gameName}規則的總分 </th>
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
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step1_en.png?v=1" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step2_en.png?v=1" alt="md5-result" />
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
                content = "是賭場中最常玩的紙牌遊戲之一。";
            } else {
                content = "是百家樂的增強版，具有更高的下注限額。";
            }
            content +=
                "遊戲使用一副標準的 52 張牌（不包括 Joker）。 共有 7 種投注選項，投注者可以投注遊戲桌上顯示的一個或多個投注選項。";
            break;
        case BaccaratId.BlockchainBaccarat:
            content =
                " - a card game with Fairness Guarantees, the new breakthrough with blockchain technology. The game uses 8 decks of cards (416 cards excluding the joker). There are 7 betting options and Punters can bet on one or more betting options shown on the game table.";
            break;
    }

    return content;
};

const BaccaratGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} {renderContentIntroduction(gameId)}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(gameId, maxBetFollowChoice?.maxBetMain ?? 0, environment)}</li>
                <li className="guide-item">{renderPointCalculationRules(gameName, gameId)}</li>
                <li className="guide-item">
                    <h2>第三張牌規則</h2>
                    <ul className="desc">
                        <li>第三張牌將根據嚴格的遊戲規則進行處理。</li>
                        <li>
                            如果任一手牌的前兩張牌的總點數為 8 或 9，則稱為“自然”，不再發牌，閒家和莊家均站立。
                        </li>

                        <ul className="style-number-dot">
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">閒家手牌規則</span>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["sum-two-cards"]}>閒家的前兩張牌總數</th>
                                                <th>行動</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0, 1, 2, 3, 4, 5</td>
                                                <td className="text-start">抽第三張牌。</td>
                                            </tr>
                                            <tr>
                                                <td>6 或 7</td>
                                                <td className="text-start">閒家始終站立。</td>
                                            </tr>
                                            <tr>
                                                <td>8 或 9 </td>
                                                <td className="text-start">
                                                    “自然”，不再發牌，閒家和莊家都站著。
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">莊家的規則</span>
                                <ul className="desc">
                                    <li>
                                        如果閒家拿到第三張牌，莊家根據以下規則抽第三張牌：
                                        <div className="table-container">
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th className={Styles["sum-two-cards"]}>莊家的前兩張牌總數</th>
                                                        <th>當閒家的第三張牌有點值時，莊家抽牌：</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0, 1, 2</td>
                                                        <td className="text-start">莊家總是抽第三張牌。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td className="text-start">
                                                        點值 1、2、3、4、5、6、7、9、0（不是 8）。
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td className="text-start">點值 2、3、4、5、6、7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td className="text-start">點值 4、5、6、7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td className="text-start">點值 6 或 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td className="text-start">莊家始終站立。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8 或 9</td>
                                                        <td className="text-start">
                                                            “自然”，不再發牌，閒家和莊家都站著。
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        如果閒家前兩張牌的總點數為 6 或 7，則莊家將站在總點數為 6 或 7 的點上，並抽出總點數為 5 或更少的點數。
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>

                    <ul className="desc">
                        <li>中獎金額根據派彩率計算。</li>
                        <li>支付包括初始投注。</li>
                        <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
                        <li className="contentBeforeEmpty">
                            <strong>注意：</strong> 如果結果為平局，所有對閒家和莊家的投注將被退還。
                            <div className="table-container">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th className={Styles["payouts-option-width"]}>選項</th>
                                            <th>支出</th>
                                            <th>
                                                投注限額 <br></br>（最小最大）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>閒家</td>
                                            <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>莊家一對</td>
                                            <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>大</td>
                                            <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>小</td>
                                            <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>平局</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td rowSpan={3}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>閒家一對</td>
                                            <td rowSpan={2}>{formatOdds(odds?.playerPair, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>莊家一對</td>
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
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default BaccaratGuideTW;
