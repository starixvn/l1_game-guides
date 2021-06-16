import React from "react";
import { GameGuide } from "../../type";
import { SeDieVip } from "..";
import { renderTermsAndConditionsVI } from "../../../shared";

const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi chọn mệnh giá và nhấp vào lựa chọn bạn muốn đặt cược trước khi bát được mở. Nếu kết quả mở ra trùng với lựa
                    chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.{" "}
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {maxBetRound}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Lựa Chọn</th>
                                    <th>Điều Kiện Thắng</th>
                                    <th>Mô Tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Lẻ</td>
                                    <td>3 đỏ, 1 trắng </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1 đỏ, 3 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>Chẵn</td>
                                    <td>4 đỏ</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2 đỏ, 2 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4 đỏ</td>
                                    <td>4 đỏ</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4 trắng</td>
                                    <td>4 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3 đỏ, 1 trắng</td>
                                    <td>3 đỏ, 1 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1 đỏ, 3 trắng</td>
                                    <td>1 đỏ, 3 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2 đỏ, 2 trắng</td>
                                    <td>2 đỏ, 2 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>
                    Xu sẽ được xóc và kết quả cửa thắng sẽ được hiển thị khi hết thời gian đặt cược. Thời gian đặt cược cho mỗi phiên sẽ
                    được hiển thị đếm ngược trên bàn chơi.
                </li>
            </ul>
        </>
    );
};

const SeDieGuideVI: React.FC<GameGuide> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId } = props;
    const { odds, minbet } = gameConfigs;
    const { maxBetMain, maxBetRed4, maxBetRed3, maxBetRed2, maxBetRound } = maxBetFollowChoice;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName}{" "}
                        {SeDieVip.includes(gameId ? gameId : SeDieVip[0])
                            ? "là phiên bản đặc biệt của trò Xóc Đĩa, với hạn mức cược được nâng cấp, mở rộng. "
                            : "là trò chơi có nguồn gốc dân gian từ lâu đời. "}
                        Trò chơi có luật và cách chơi rất đơn giản, chỉ gồm 1 bát úp, 1 đĩa và 4 đồng xu. Trong đó, 4 đồng xu được thiết kế
                        2 mặt đỏ và trắng. Người chơi sẽ đặt cược vào các lựa chọn (cửa) có sẵn. Kết quả thắng thua sẽ phụ thuộc vào số mặt
                        đỏ hoặc trắng được lật của đồng xu sau khi xóc.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetRound)}</li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
                            Tỷ lệ trả thưởng đã bao gồm tiền cược.
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Lựa Chọn</th>
                                            <th>Trả Thưởng</th>
                                            <th>
                                                Giới Hạn Cược <br /> (Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lẻ</td>
                                            <td rowSpan={2}>1:{odds.even}</td>
                                            <td rowSpan={2}>
                                                {minbet} - {maxBetMain}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Chẵn</td>
                                        </tr>
                                        <tr>
                                            <td>4 đỏ</td>
                                            <td rowSpan={2}>1:{odds.red4}</td>

                                            <td rowSpan={2}>
                                                {minbet} - {maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4 trắng</td>
                                        </tr>
                                        <tr>
                                            <td>3 đỏ, 1 trắng</td>
                                            <td rowSpan={2}>1:{odds.red3}</td>
                                            <td rowSpan={2}>
                                                {minbet} - {maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 đỏ, 3 trắng</td>
                                        </tr>
                                        <tr>
                                            <td>2 đỏ, 2 trắng</td>
                                            <td>1:{odds.red2}</td>
                                            <td>
                                                {minbet} - {maxBetRed2}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Bảng thống kê kết quả</h2>
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Kết Quả</th>
                                    <th>Mô Tả</th>
                                    <th>Ký Hiệu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4 đỏ</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even">4</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even">0</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2 đỏ, 2 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-even">2</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3 đỏ, 1 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd">3</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1 đỏ, 3 trắng</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                            <span className="dot-even"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <span className="dot-odd">1</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default SeDieGuideVI;
