import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { CardPointValuesTable } from "..";
import { locales } from "../../../../common/constants";
import Styles from "../blackjack.module.scss";

const renderGameRule = (maxbet: number, minbet: number) => {
    const wrapperImg = "wrapper-img";
    const optionsWidthImg = "options-width";
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người Chơi chọn mệnh giá chip và nhấp vào ô bạn muốn đặt cược.</li>
                <li>
                    Bấm “X“ để hủy cược, hoặc bấm “Chia Bài” để xác nhận cược. Bài sẽ được chia ngay sau khi Người Chơi bấm nút “Chia Bài”.
                </li>
                <li>
                    <strong>Lưu ý,</strong> không thể hủy cược sau khi bấm “Chia Bài”.
                </li>
                <li>Bạn có thể chơi nhiều tay bài trong 1 phiên, bằng cách đặt chip vào nhiều ô khác nhau, mỗi ô ứng với 1 tay bài.</li>
                <li>
                    Số tiền cược cho mỗi tay bài phải nằm trong khoảng từ {numberWithCommas(minbet)} đến {numberWithCommas(maxbet)}.
                </li>
                <li>Khi bắt đầu ván chơi, tay bài của Người Chơi và Nhà Cái, mỗi bên sẽ được chia 2 lá bài. </li>
                <li>Các lá bài tiếp theo sẽ được rút tùy vào điểm số của 2 lá bài đầu tiên.</li>
                <li>Khi bắt đầu phiên mới, 6 bộ bài tây 52 lá (không bao gồm lá Joker) sẽ được xào lại.</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium">Quy tắc rút bài cho Người Chơi</span>
                        <ul className="desc">
                            <li>
                                Nếu tổng điểm 2 lá bài đầu tiên đạt 21 điểm, được gọi là Blackjack, Người Chơi sẽ thắng ngay mà không cần so
                                điểm hoặc rút bài, trừ trường hợp Nhà Cái cũng được Blackjack.
                            </li>
                            <li>
                                Nếu tổng điểm 2 lá bài đầu tiên dưới 21 điểm, Người Chơi sẽ có những tùy chọn sau:
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>Lựa Chọn</th>
                                                <th> Mô Tả</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className={Styles[optionsWidthImg]}>
                                                    Rút
                                                    <img className={Styles[wrapperImg]} src="./static/images/blackjack/guide_hit.png"></img>
                                                </td>
                                                <td className="text-start">
                                                    Rút thêm 1 lá bài và không giới hạn số lần rút, miễn là tổng điểm các lá bài không quá
                                                    21.<br></br>
                                                    <strong>Lưu ý: </strong>
                                                    <ul className="desc">
                                                        <li>
                                                            Nếu tổng điểm vượt quá 21 (hay còn gọi là Quắc), khi đó Người Chơi sẽ bị thua
                                                            bất kể điểm số Nhà Cái thế nào.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={Styles[optionsWidthImg]}>
                                                    Dừng
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_stop.png"
                                                    ></img>
                                                </td>
                                                <td className="text-start">Người Chơi quyết định dừng không rút bài.</td>
                                            </tr>
                                            <tr>
                                                <td className={Styles[optionsWidthImg]}>
                                                    Tách
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_split.png"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    Nếu 2 lá bài đầu tiên có cùng điểm số, Người Chơi có thể lựa chọn tách thành 2 tụ riêng
                                                    biệt, với tiền cược mỗi tụ bằng với số tiền cược ban đầu.<br></br>
                                                    <strong>Lưu ý: </strong>
                                                    <ul className="desc">
                                                        <li>Với mỗi tay bài, Người Chơi chỉ được phép tách bài 1 lần duy nhất.</li>
                                                        <li>
                                                            Trong trường hợp tụ sau khi tách có tổng điểm 2 lá bài là 21, khi đó sẽ không
                                                            được tính là Blackjack, mà coi như đạt 21 điểm bình thường.
                                                        </li>
                                                        <li>
                                                            Đôi Xì (A) sau khi tách chỉ được nhận thêm 1 lá bài thứ hai cho mỗi tụ và không
                                                            được rút lá thứ ba.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={Styles[optionsWidthImg]}>
                                                    Gấp Đôi
                                                    <img
                                                        className={Styles[wrapperImg]}
                                                        src="./static/images/blackjack/guide_double.png"
                                                    ></img>
                                                </td>
                                                <td className="text-start">
                                                    Nếu tổng điểm 2 lá bài đầu tiên là 9, 10 hoặc 11 điểm, Người Chơi có thể tăng gấp đôi
                                                    lượng tiền cược, hệ thống sẽ tự động rút thêm 1 lá bài duy nhất cho tay bài được “Gấp
                                                    Đôi”.
                                                    <br></br>
                                                    <strong>Lưu ý: </strong>
                                                    <ul className="desc">
                                                        <li>
                                                            Người Chơi chỉ được phép “Gấp Đôi” tiền cược cho 2 lá bài đầu tiên của tay bài,
                                                            không áp dụng cho những tụ được tách ra từ tay bài chính.
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium">Quy tắc rút bài cho Nhà Cái</span>
                        <ul className="desc">
                            <li>
                                Nhà Cái chỉ rút bài sau khi Người Chơi hoàn tất việc rút bài. Khác với Người Chơi, Nhà Cái chỉ rút thêm bài
                                khi tổng điểm 2 lá bài đầu từ 16 điểm trở xuống và dừng rút bài khi có từ 17 điểm trở lên.
                            </li>
                            <li>Nếu điểm số của Người Chơi và Nhà Cái bằng nhau, kết quả Hòa, tiền cược sẽ được hoàn trả.</li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng </h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>
                    Tỷ lệ trả thưởng đã bao gồm tiền cược.
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tỷ Lệ Trả Thưởng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Thắng với Blackjack</td>
                                    <td>1:{odds.blackjack}</td>
                                </tr>
                                <tr>
                                    <td>Thắng điểm thông thường</td>
                                    <td>1:{odds.regular}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const BlackjackGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là một trong 10 trò đánh bạc được yêu thích nhất tại các Casino. Trò chơi có luật chơi và cách chơi rất
                        đơn giản, sử dụng 6 bộ bài tây 52 lá (không bao gồm lá Joker) và Người Chơi sẽ so điểm trực tiếp với Nhà Cái. Trong
                        Blackjack, 21 là điểm số cao nhất, Người Chơi cố gắng rút bài sao cho tổng điểm của các bài càng gần hoặc bằng 21
                        điểm nhưng không được vượt quá 21. Bên nào gần 21 điểm hơn thì bên đó giành chiến thắng.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxbet, minbet)}</li>
                <li className="guide-item">
                    <h2>Quy tắc tính điểm</h2>
                    <ul className="desc">
                        <li>
                            Điểm số các lá bài trong Blackjack sẽ được tính như sau:
                            {CardPointValuesTable(locales.vi)}
                        </li>
                        <li>
                            Nếu tổng các lá bài (không bao gồm lá A) lớn hơn hoặc bằng 11 thì A sẽ tính 1 điểm.
                            <ul className="detail">
                                <li>Ví dụ: tay bài gồm A, 9, 8 sẽ tính là 18 điểm.</li>
                            </ul>
                        </li>
                        <li>
                            Nếu tổng các lá bài (không bao gồm lá A) nhỏ hơn 11 thì A sẽ tính là 11 điểm.
                            <ul className="detail">
                                <li>Ví dụ: tay bài gồm A, 7 sẽ tính là 18 điểm.</li>
                            </ul>
                        </li>
                        <li>Blackjack (21 điểm với 2 lá bài đầu tiên) sẽ thắng 21 điểm tạo thành bởi 3 lá bài trở lên.</li>
                    </ul>
                </li>
                {renderPayouts(odds)}

                <li className="guide-item">
                    <h2>Các quy định trong game</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            Nếu phiên đang chơi bị gián đoạn, hệ thống sẽ bảo lưu kết quả trong vòng 24 tiếng tính từ thời điểm Người Chơi
                            bấm nút “Chia Bài”. Trong trường hợp Người Chơi không thể hoàn tất phiên bị gián đoạn trong thời gian 24 tiếng,
                            đồng nghĩa với Người Chơi đã chấp nhận “Dừng, không rút thêm bài”. Hệ thống sẽ tự động tính toán kết quả thắng
                            thua dựa trên các lá bài đang có của Người Chơi.
                        </li>
                        <li className="number-dot">
                            Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ
                            thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
                        </li>
                        <li className="number-dot">
                            Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian
                            lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
                        </li>
                        <li className="number-dot">
                            Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự
                            cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
                        </li>
                        <li className="number-dot">
                            Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng
                            xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default BlackjackGuideVI;
