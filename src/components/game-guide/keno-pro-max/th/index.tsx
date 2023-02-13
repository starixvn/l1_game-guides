import React from "react";

import { numberWithCommas, formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsTH } from "../../../shared";
import { GameConfigProps, OddsProMaxProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { FiveElements } from "../../../shared/keno/th";

const payouts = (odds: OddsProMaxProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>การจ่ายเงิน</h2>
            <ul className="desc">
                <li>จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน</li>
                <li>การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น</li>
                <li>
                    จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มไปยังยอดเงินในบัญชีของคุณทันทีเมื่อเดิมพันเสร็จสิ้น
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>ตัวเลือก</th>
                                    <th>อัตราต่อรอง</th>
                                    <th>
                                        วงเงินเดิมพัน <br></br> (ต่ำสุด - สูงสุด)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ใหญ่</td>
                                    <td rowSpan={4}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>เล็ก</td>
                                </tr>
                                <tr>
                                    <td>คี่</td>
                                </tr>
                                <tr>
                                    <td>คู่</td>
                                </tr>
                                <tr>
                                    <td>ทอง</td>
                                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ไม้</td>
                                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                    </td>
                                </tr>
                                <tr>
                                    <td>น้ำ</td>
                                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ไฟ</td>
                                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ดิน</td>
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
            <h2>ตัวเลือกการเดิมพัน</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">ใหญ่/เล็ก</span>
                    <ul className="desc">
                        <li>
                            <strong>ใหญ่:</strong> ผลรวมของลูกบอล 20 หมายเลขที่สุ่มออกมาคือ {`>=`} 811
                        </li>
                        <li>
                            <strong>เล็ก:</strong> ผลรวมของลูกบอล 20 หมายเลขที่สุ่มออกมาคือ {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>ตัวอย่าง:</strong> ชุดลูกบอล 20 ลูกโดยสุ่มจาก 80 ลูก
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>ผลการจับฉลาก</th>
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
                                        <td colSpan={10}>ผลรวมทั้งหมด = 939 ผู้เล่นเดิมพันใน สูง จะชนะ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">คี่/คู่</span>
                    <ul className="desc">
                        <li>
                            <strong>คี่:</strong> ผลรวมของลูกบอล 20 ลูกที่สุ่มออกมาเป็นเลขคี่
                        </li>
                        <li>
                            <strong>คู่:</strong> ผลรวมของลูกบอล 20 หมายเลขที่สุ่มออกมาเป็นเลขคู่
                        </li>
                    </ul>
                    <div>
                        <strong>ตัวอย่าง:</strong> ชุดลูกบอล 20 ลูกโดยสุ่มจาก 80 ลูก
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>ผลการจับฉลาก</th>
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
                                        <td colSpan={10}>ผลรวม = 911 ผู้เล่นเดิมพัน คี่ จะชนะ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>ตัวอย่าง:</strong> ชุดลูกบอล 20 ลูกโดยสุ่มจาก 80 ลูก
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>ผลการจับฉลาก</th>
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
                                        <td colSpan={10}>ผลรวม = 922 ผู้เล่นเดิมพันไฟจะชนะ</td>
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

const KenoProMaxGuideTH: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds, maxBet } = gameConfigs;

    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>แนะนำ</h2>
                    <p className="content">
                        {gameName} เป็นเกมตัวเลขยอดนิยมที่มีคนเล่นทั่วโลก เกมนี้เล่นโดยสุ่มจับลูกบอล 20 ลูกจาก 80 ลูกตั้งแต่ 1 ถึง 80
                        ผู้เล่นวางเดิมพันบนตัวเลือกการเดิมพันอย่างน้อยหนึ่งตัวเลือกที่แสดงอยู่บนโต๊ะเกม ผลรวมของลูกบอล 20
                        ลูกที่สุ่มจับมาจะเป็นตัวกำหนดว่าผู้เล่นจะชนะหรือแพ้
                    </p>
                </li>
                <li className="guide-item">
                    <h2>กฎของเกม</h2>
                    <ul className="desc">
                        <li>เดิมพันทั้งหมดจะต้องวางก่อนหมดเวลาเดิมพัน หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้</li>
                        <li>เมื่อหมดเวลาเดิมพัน ระบบจะสุ่มจับลูกบอล 20 ลูก และแสดงผล</li>
                        <li>เงินเดิมพันรวมสูงสุดต่อรอบคือ {maxBetRound}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>

                {renderTermsAndConditionsTH()}
            </ul>
        </>
    );
};
export default KenoProMaxGuideTH;
