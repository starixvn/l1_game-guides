import React, { useEffect } from "react";

import { BaccaratId } from "..";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderTermsAndConditionsVI } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import { GameGuideProps } from "../../type";
import Styles from "../baccarat.module.scss";
import { renderTBodyPointCalculationRules } from "../en";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderGameRule = (gameId: number | undefined, maxBetMain: number | string, environment: string | undefined) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                {renderRuleContent(gameId, maxBetMain, environment)}
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>Lựa Chọn</th>
                                    <th>Thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nhà Cái</td>
                                    <td className="text-start">Nhà Cái có điểm số cao hơn Nhà Con.</td>
                                </tr>
                                <tr>
                                    <td>Nhà Con</td>
                                    <td className="text-start">Nhà Con có điểm số cao hơn Nhà Cái.</td>
                                </tr>
                                <tr>
                                    <td>Hòa</td>
                                    <td className="text-start">Nhà Cái và Nhà Con có điểm số bằng nhau.</td>
                                </tr>
                                <tr>
                                    <td>Con Đôi</td>
                                    <td className="text-start">Nếu 2 lá bài ban đầu của Nhà Con là đôi (không cần đồng màu).</td>
                                </tr>
                                <tr>
                                    <td>Cái Đôi</td>
                                    <td className="text-start">Nếu 2 lá bài ban đầu của Nhà Cái là đôi (không cần đồng màu).</td>
                                </tr>
                                <tr>
                                    <td>Tài</td>
                                    <td className="text-start">Phiên kết thúc với tổng số lá bài của Nhà Con và Nhà Cái từ 5 đến 6 lá.</td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                    <td className="text-start">Phiên kết thúc với tổng số lá bài của Nhà Con và Nhà Cái là 4 lá.</td>
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
                <span className="font-weight-medium title-text"> Cut Card</span>
                <ul>
                    <li>
                        Thẻ “Cut Card” sẽ được chèn ngẫu nhiên vào giữa 416 lá bài khi bắt đầu game. Vị trí thẻ “Cut Card” sẽ quyết định khi
                        nào bài sẽ được xào lại.
                    </li>
                </ul>
                <img className={Styles["cut-card"]} src={`/static/images/blockchain-baccarat/cutcard.png`} alt="cut-card" loading="eager" />
            </li>
            <li className="number-dot">
                <span className="font-weight-medium title-text">Burn Card</span>

                <ul className="desc">
                    <li>
                        “Burn Card” là hành động bỏ đi 1 số lá bài trước khi bắt đầu game. Số lá bài bị bỏ tùy thuộc vào giá trị “Burn Card”
                        của lá đầu tiên trong 416 lá.
                    </li>
                </ul>
                <div>
                    <strong>Lưu ý</strong>: lá đầu tiên cũng sẽ bị loại bỏ trong quá trình “Burn Card”
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>Lá đầu tiên</th>
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
                                        <strong>Giá trị “Burn Card”</strong>
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
                    <strong>Ví dụ</strong>:{" "}
                </div>
                <ul className="desc">
                    <li>Lá đầu tiên 5 {`=>`} Có 6 lá bài sẽ bị loại bỏ trước khi chơi gồm lá đầu tiên và 5 lá kế tiếp</li>
                    <li>Lá đầu tiên K {`=>`} Có 11 lá bài sẽ bị loại bỏ trước khi chơi gồm lá đầu tiên và 10 lá kế tiếp</li>
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
                    Khi bắt đầu phiên, mặc định 6 lá bài sẽ được rút, trong đó hai cửa Nhà Con và Nhà Cái, mỗi cửa sẽ được chia 2 lá bài.
                    Bài sẽ được chia theo thứ tự Nhà Con trước.
                </li>
                <li>Hai lá còn lại trong 6 lá được rút ban đầu sẽ được chia tùy thuộc vào tổng điểm 2 lá bài của Nhà Con, Nhà Cái. </li>
                <li>
                    Trong trường hợp phiên kết thúc với tổng số lá bài được chia ít hơn 6 lá, những lá còn lại sẽ được sử dụng cho phiên kế
                    tiếp.
                </li>
                <li>
                    Trò chơi sẽ phân định thắng thua bằng cách so sánh tổng điểm của các lá bài ở mỗi cửa. Trong đó 9 là số điểm cao nhất và
                    0 là điểm số thấp nhất.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {maxBetMain}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                </li>
                <li>Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi.</li>
            </>
        );
    }

    return (
        <>
            <li>Hai cửa Nhà Con và Nhà Cái, mỗi cửa sẽ được chia trước 2 lá bài. Bài sẽ được chia theo thứ tự Nhà Con trước.</li>
            {environment === ENVIRONMENT.sc && (
                <>
                    <li>Hai lá bài thứ ba cũng sẽ được rút sẵn sau khi kết thúc chia hai lá bài cho Nhà Con và Nhà Cái.</li>
                    <li>Các lá bài được chia được đánh số từ một đến sáu tương ứng với thứ tự được chia của mỗi lá bài.</li>
                </>
            )}
            <li>Người chơi đặt cược và dự đoán cửa nào sẽ thắng.</li>
            <li>
                Người chơi cũng có thể đặt cược vào lựa chọn Hòa nếu dự đoán 2 cửa Nhà Con và Nhà Cái có kết quả bằng nhau hoặc có thể đặt
                vào các cửa phụ như Tài, Xỉu, Con Đôi, Cái Đôi.
            </li>
            <li>
                Tùy thuộc vào tổng điểm của 2 lá bài được chia ban đầu, mỗi bên sẽ giữ nguyên các lá bài hoặc{" "}
                {environment === ENVIRONMENT.sc ? "mở" : "rút"} thêm lá bài thứ ba.
            </li>
            {environment === ENVIRONMENT.sm && <li>Lá bài thứ ba sẽ được rút sau khi hết thời gian đặt cược.</li>}
            <li>
                Trò chơi sẽ phân định thắng thua bằng cách so sánh tổng điểm của các lá bài ở mỗi cửa. Trong đó 9 là số điểm cao nhất và 0
                là điểm số thấp nhất.
            </li>
            <li>
                Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                phiên là {maxBetMain}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
            </li>
            <li>Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi.</li>
            <li>Bộ bài 52 lá (không bao gồm lá Joker) sẽ được sử dụng khi bắt đầu phiên mới.</li>
        </>
    );
};

const renderPointCalculationRules = (gameName: string, gameId: number | undefined) => {
    return (
        <>
            <h2>Quy tắc tính điểm</h2>
            <ul className="desc">
                <li>
                    Điểm số các lá bài {gameId === BaccaratId.BlockchainBaccarat ? "" : ` trong ${gameName}`} sẽ được tính như sau:
                    <ul className="detail">
                        <li>Các lá bài từ 2 đến 9 có giá trị tùy theo số trên mỗi lá bài; lá A được tính là 1 điểm.</li>
                        <li>Các lá 10, J, Q, K được tính là 0 điểm.</li>
                    </ul>
                </li>
                <li>Tổng điểm các lá bài sẽ được tính dựa trên con số ở hàng đơn vị. </li>
                <strong>Ví dụ:</strong>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Hai lá bài đầu</th>
                            <th className={Styles["point-three-cards"]}>Lá thứ ba</th>
                            <th className={Styles["point-total"]}>Điểm số</th>
                            <th>Tổng điểm tính theo {gameId === BaccaratId.BlockchainBaccarat ? "Cào Baccarat" : gameName} </th>
                        </tr>
                    </thead>
                    {renderTBodyPointCalculationRules()}
                </table>
            </ul>
        </>
    );
};

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả trò chơi {gameName}
            </div>
            <ul className="desc">
                <li>
                    <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step1_vi.png?v=1" alt="md5-string" />
                </li>
                <li>
                    <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết quả.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step2_vi.png?v=1" alt="md5-result" />
                    <div>
                        Từ trái sang phải, Q♠️ A♠️ 8♦️ 4♠️ 6♥️ J♥️ tương ứng với thứ tự được chia
                        của mỗi lá bài khi bắt đầu phiên.
                    </div>
                </li>
                <li>
                    <strong>Bước 3:</strong> Truy cập{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    và dán chuỗi <strong>Kết Quả</strong> vừa copy vào ô MD5.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step3_vi.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước
                    1.
                    <img className="format-img auto-center" src="/static/images/baccarat/md5_step4_vi.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
            <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
        </>
    );
};

const renderContentIntroduction = (gameId: number | undefined) => {
    let content = "";

    switch (gameId) {
        case BaccaratId.Baccarat:
        case BaccaratId.VipBaccarat:
            if (gameId === BaccaratId.Baccarat) {
                content = "hay còn gọi là bài Cào, là trò đánh bài nổi tiếng và rất được yêu thích tại các sòng bài trên thế giới.";
            } else {
                content = "là phiên bản đặc biệt của trò Cào Baccarat, với hạn mức cược được nâng cấp, mở rộng.";
            }
            content +=
                " Trò chơi sử dụng bộ bài tây 52 lá (không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn.";
            break;
        case BaccaratId.BlockchainBaccarat:
            content =
                "- một sản phẩm game bài mang nhiều đột phá với công nghệ blockchain tiên tiến. Trò chơi sử dụng 8 bộ bài (416 lá không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn. ";
            break;
    }

    return content;
};

const BaccaratGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId, isScrollMD5, environment } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} {renderContentIntroduction(gameId)}
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(gameId, maxBetFollowChoice?.maxBetMain ?? 0, environment)}</li>
                <li className="guide-item">{renderPointCalculationRules(gameName, gameId)}</li>
                <li className="guide-item">
                    <h2>Quy tắc rút bài</h2>
                    <ul className="desc">
                        <li>
                            Dựa trên tổng điểm của 2 lá bài được chia ban đầu, hệ thống sẽ quyết định việc rút lá bài thứ ba cho Nhà Con và
                            Nhà Cái.
                        </li>
                        <li>
                            Nhà Con sẽ luôn là bên sẽ rút bài đầu tiên. Quy tắc rút bài của Nhà Cái sẽ tùy thuộc vào lá bài thứ ba của nhà
                            Con.
                        </li>
                        <li>
                            Nếu một trong hai bên được 8 hay 9 điểm với 2 lá ban đầu. Khi đó 2 bên sẽ không rút lá bài thứ ba. Hệ thống sẽ
                            so điểm để phân định thắng thua.
                        </li>
                        <li>
                            Nếu Nhà Con hoặc Nhà Cái giành chiến thắng với tổng điểm 2 lá bài đầu là 8 hoặc 9 điểm, khi đó sẽ được gọi là
                            “Thắng tự nhiên”.
                        </li>
                        <ul className="style-number-dot">
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">Quy tắc rút bài Nhà Con</span>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["sum-two-cards"]}>Tổng điểm 2 lá bài đầu tiên</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Từ 0 đến 5</td>
                                                <td className="text-start">Nhà Con rút bài.</td>
                                            </tr>
                                            <tr>
                                                <td>6 hoặc 7</td>
                                                <td className="text-start">Không rút thêm bài.</td>
                                            </tr>
                                            <tr>
                                                <td>8 hoặc 9 </td>
                                                <td className="text-start">
                                                    Không rút thêm bài (cả 2 bên Nhà Con và Nhà Cái). So điểm, bên nào cao bên đấy thắng.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li className="number-dot">
                                <span className="font-weight-medium title-text"> Quy tắc rút bài Nhà Cái</span>

                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["sum-two-cards"]}>Tổng điểm 2 lá bài đầu tiên</th>
                                                <th>Nhà Cái được rút khi lá thứ ba của Nhà Con là:</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Từ 0 đến 2</td>
                                                <td className="text-start">Luôn được rút bài bất kể lá thứ ba của Nhà Con là gì.</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="text-start">Không phải lá 8</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="text-start">2, 3, 4, 5, 6 hoặc 7</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td className="text-start">4, 5, 6 hoặc 7</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td className="text-start">6 hoặc 7</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td className="text-start">Không rút thêm bài.</td>
                                            </tr>
                                            <tr>
                                                <td>8 hoặc 9</td>
                                                <td className="text-start">
                                                    Không rút thêm bài (cả 2 bên Nhà Con và Nhà Cái). So điểm, bên nào cao bên đấy thắng.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul className="desc">
                                    <li>
                                        Nếu tổng điểm 2 lá bài của Nhà Con trong khoảng 6 - 7 điểm thì Nhà Cái sẽ luôn rút thêm bài nếu Nhà
                                        Cái có tổng điểm từ 0 đến 5.
                                    </li>
                                    <li>
                                        Trường hợp Nhà Cái và Nhà Con đều có tổng điểm 2 lá bài trong khoảng 6 - 7 điểm, khi đó 2 bên sẽ
                                        không rút lá thứ ba. Hệ thống sẽ so điểm để phân định thắng thua.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </li>

                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
                            Giới hạn cược và tỷ lệ trả thưởng{gameId !== BaccaratId.BlockchainBaccarat ? ` trong ${gameName} như sau` : ""}:
                            <div className="table-container">
                                <table className="table text-center table-medium left">
                                    <thead>
                                        <tr>
                                            <th>Lựa Chọn</th>
                                            <th>Tỷ Lệ Trả Thưởng</th>
                                            <th>Giới Hạn Cược (Min - Max)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Nhà Con</td>
                                            <td>1: {odds?.player}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>1: {odds?.banker}</td>
                                        </tr>
                                        <tr>
                                            <td>Tài</td>
                                            <td>1: {odds?.big}</td>
                                        </tr>
                                        <tr>
                                            <td>Xỉu</td>
                                            <td>1: {odds?.small}</td>
                                        </tr>
                                        <tr>
                                            <td>Hòa</td>
                                            <td>1: {odds?.tie}</td>
                                            <td rowSpan={3}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Con Đôi</td>
                                            <td rowSpan={2}>1: {odds?.playerPair}</td>
                                        </tr>
                                        <tr>
                                            <td>Cái Đôi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>Trong trường hợp kết quả Hòa, người chơi sẽ được hoàn lại số tiền cược đặt vào 2 cửa Nhà Con, Nhà Cái.</li>
                        <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && gameId !== BaccaratId.BlockchainBaccarat && (
                    <li id="md5" className="guide-item">
                        {renderMD5VI()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default BaccaratGuideVI;
