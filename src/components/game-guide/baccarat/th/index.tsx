import React, { useEffect } from "react";

import { BaccaratId } from "..";
import { renderTermsAndConditionsTH } from "../../../shared";
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
            <h2>กฎของเกม</h2>
            <ul className="desc">
                {renderRuleContent(gameId, maxBetMain, environment)}

                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>ตัวเลือก</th>
                                    <th>คำอธิบาย</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ผู้เล่น</td>
                                    <td className="text-start">
                                        ไพ่ในมือของผู้เล่นจะชนะหากคะแนนรวมของผู้เล่นสูงกว่าเจ้ามือ
                                    </td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือ</td>
                                    <td className="text-start">
                                    ไพ่ในมือเจ้ามือจะชนะหากแต้มรวมของเจ้ามือสูงกว่าผู้เล่น
                                    </td>
                                </tr>
                                <tr>
                                    <td>เสมอ</td>
                                    <td className="text-start">
                                        ผู้เล่นจะชนะหากสองมือ (ผู้เล่นและเจ้ามือ) จบด้วยผลรวมเท่ากัน
                                    </td>
                                </tr>
                                <tr>
                                    <td>ผู้เล่นคู่</td>
                                    <td className="text-start">
                                        ผู้เล่นจะชนะหากไพ่สองใบแรกของผู้เล่นเป็นคู่ โดยไม่ต้องคำนึงถึงหน้าไพ่อื่น
                                    </td>
                                </tr>
                                <tr>
                                    <td>เจ้ามือคู่</td>
                                    <td className="text-start">
                                        ผู้เล่นจะชนะหากไพ่สองใบแรกของเจ้ามือเป็นคู่ โดยไม่ต้องคำนึงถึงหน้าไพ่อื่น
                                    </td>
                                </tr>
                                <tr>
                                    <td>ใหญ่</td>
                                    <td className="text-start">
                                        ผู้เล่นจะชนะหากจำนวนไพ่ทั้งหมดที่แจกในรอบเดียวคือ 5 จาก 6
                                    </td>
                                </tr>
                                <tr>
                                    <td>เล็ก</td>
                                    <td className="text-start">
                                        ผู้เล่นจะชนะหากจำนวนไพ่ทั้งหมดที่แจกในรอบเดียวคือ 4
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
            <li>ผู้เล่นและเจ้ามือแต่ละมือจะเริ่มต้นด้วยไพ่ 2 ใบคว่ำหน้า</li>
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
                ตัวเลือกการเดิมพันอื่นคือ “เสมอ” หากนักพนันทายว่าสองมือจะจบลงด้วยผลรวมที่เท่ากันหรือพวกเขาสามารถเดิมพันตัวเลือกคู่ใหญ่ เล็ก คู่ผู้เล่น หรือคู่เจ้ามือได้
            </li>
            <li>ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้.</li>
            <li>ยอดเดิมพันสูงสุดต่อรอบคือ {maxBetMain}</li>
            <li>เมื่อหมดเวลาเดิมพัน เจ้ามือหงายไพ่ขึ้น</li>
            <li>จากคะแนนรวมของไพ่สองใบแรก เจ้ามือจะตัดสินว่ามือทั้งสองข้างได้ไพ่ใบที่สามหรือไม่ </li>
            <li>
            เกมตัดสินการชนะหรือแพ้โดยการเปรียบเทียบคะแนนรวมของไพ่ทั้งหมดในแต่ละมือและมือที่ชนะจะใกล้เคียงที่สุดกับคะแนนรวม 9 แต้ม
            </li>
            <li>สำรับมาตรฐานที่มีไพ่ 52 ใบ (ไม่รวม Joker) จะถูกสับเปลี่ยนทุกรอบ</li>
        </>
    );
};

const renderPointCalculationRules = (gameName: string, gameId: number | undefined) => {
    return (
        <>
            <h2>กฎการคำนวณคะแนน</h2>
            <ul className="desc">
                <li>
                    ค่าคะแนนของไพ่:
                    <ul className="detail">
                        <li>ไพ่ (2 ถึง 9) ถูกนับตามมูลค่าหน้าไพ่</li>
                        <li>ไพ่ 10 ใบหรือหน้า (Jack, Queen, King) มีค่าเป็น 0 และ Aces มีค่า 1</li>
                    </ul>
                </li>
                <li>
                    เมื่อแต้มรวมเกินเก้า หลักแรกของยอดรวมจะลดลง และหลักที่สองคือมูลค่าของมือ
                </li>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>ไพ่สองใบแรก</th>
                            <th className={Styles["point-three-cards"]}>ไพ่ใบที่สาม</th>
                            <th className={Styles["point-total"]}>ยอดรวม</th>
                            <th>คะแนนรวมตามกฎ{gameId === BaccaratId.BlockchainBaccarat ? "Baccarat " : gameName}</th>
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
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step1_th.png?v=2" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the dice result.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step2_th.png?v=2" alt="md5-result" />
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
                content = "เป็นหนึ่งในเกมไพ่ที่มีผู้เล่นบ่อยที่สุดในคาสิโน ";
            } else {
                content = " เป็นรุ่นปรับปรุงของบาคาร่าพร้อมวงเงินเดิมพันที่สูงขึ้น";
            }
            content +=
                "เกมนี้เล่นด้วยสำรับไพ่มาตรฐาน 52 ใบ (ไม่รวม Joker) มีตัวเลือกการเดิมพัน 7 แบบ และผู้พนันสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม";
            break;
        case BaccaratId.BlockchainBaccarat:
            content =
                " - a card game with Fairness Guarantees, the new breakthrough with blockchain technology. The game uses 8 decks of cards (416 cards excluding the joker). There are 7 betting options and Punters can bet on one or more betting options shown on the game table.";
            break;
    }

    return content;
};

const BaccaratGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} {renderContentIntroduction(gameId)}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(gameId, maxBetFollowChoice?.maxBetMain ?? 0, environment)}</li>
                <li className="guide-item">{renderPointCalculationRules(gameName, gameId)}</li>
                <li className="guide-item">
                    <h2>กฎของไพ่ใบที่สาม</h2>
                    <ul className="desc">
                        <li>ไพ่ใบที่สามจะถูกแจกตามกฎที่เข้มงวดของเกม</li>
                        <li>
                            หากแต้มรวมของไพ่สองใบแรกของมือทั้งสองข้างเป็น 8 หรือ 9 นี่เรียกว่า “ไพ่ป๊อก” และไม่มีการแจกไพ่อีก ทั้งผู้เล่นและเจ้ามือจะยุติ
                        </li>

                        <ul className="style-number-dot">
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">กฎสำหรับมือผู้เล่น</span>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["sum-two-cards"]}>ไพ่สองใบแรกของผู้เล่นทั้งหมด</th>
                                                <th>การดำเนินการ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0, 1, 2, 3, 4, 5</td>
                                                <td className="text-start">ไพ่ใบที่สามเสมอ</td>
                                            </tr>
                                            <tr>
                                                <td>6 หรือ 7</td>
                                                <td className="text-start">ผู้เล่นยุติเสมอ</td>
                                            </tr>
                                            <tr>
                                                <td>8 หรือ 9 </td>
                                                <td className="text-start">
                                                    “ไพ่ป๊อก” และไม่มีการแจกไพ่อีกต่อไปทั้งผู้เล่นและเจ้ามือยุติ
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">กฎสำหรับมือของเจ้ามือ</span>
                                <ul className="desc">
                                    <li>
                                        หากมือของผู้เล่นได้ไพ่ใบที่สาม เจ้ามือจะจั่วไพ่ใบที่สามตามกฎต่อไปนี้:
                                        <div className="table-container">
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th className={Styles["sum-two-cards"]}>ไพ่สองใบแรกของเจ้ามือทั้งหมด</th>
                                                        <th>เจ้ามือจะเสมอ เมื่อไพ่ใบที่สามของผู้เล่นมีคะแนน</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0, 1, 2</td>
                                                        <td className="text-start">เจ้ามือจั่วไพ่ใบที่สามเสมอ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td className="text-start">
                                                            ค่าคะแนน 1, 2, 3, 4, 5, 6, 7, 9, 0 (ไม่ใช่ 8)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td className="text-start">ค่าคะแนนของ 2, 3, 4, 5, 6, 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td className="text-start">ค่าคะแนนของ 4, 5, 6, 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td className="text-start">ค่าคะแนนของ 6 หรือ 7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td className="text-start">เจ้ามือยุติเสมอ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8 หรือ 9</td>
                                                        <td className="text-start">
                                                            &#34;ไพ่ป๊อก&#34; และจะไม่มีการแจกไพ่อีกต่อไป ผู้เล่นและเจ้ามือจะยุติ
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                    <li>
                                        หากแต้มรวมของไพ่สองใบแรกของผู้เล่นเป็น 6 หรือ 7 เจ้ามือจะยุติบนผลรวมของ 6 หรือ 7 และจั่วรวมเป็น 5 หรือน้อยกว่า
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>การจ่ายเงิน</h2>

                    <ul className="desc">
                        <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราการจ่าย</li>
                        <li>การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                        <li>จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น</li>
                        <li className="contentBeforeEmpty">
                            <strong>หมายเหตุ:</strong> การเดิมพันทั้งหมดของผู้เล่นและเจ้ามือจะได้รับเงินคืนหากผลเสมอกัน
                            <div className="table-container">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th className={Styles["payouts-option-width"]}>ตัวเลือก</th>
                                            <th>ราคาต่อรอง</th>
                                            <th>
                                                ขีด จำกัด การเดิมพัน  <br></br>(ต่ำสุด สูงสุด)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ผู้เล่น</td>
                                            <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>เจ้ามือ</td>
                                            <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>ใหญ่</td>
                                            <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>เล็ก</td>
                                            <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>เสมอ</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td rowSpan={3}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ผู้เล่นคู่</td>
                                            <td rowSpan={2}>{formatOdds(odds?.playerPair, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>เจ้ามือคู่</td>
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
                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default BaccaratGuideTH;
