import React from "react";

const games = { bitcoinMaster: 43, casinoHoldem: 39 };

export const renderTermsAndConditionsEN = (style = "", gameId?: number) => {
    return (
        <li className={`guide-item ${style}`}>
            <h2>Terms and Conditions</h2>
            <ul className="style-number-rule">
                {gameId === games.bitcoinMaster && (
                    <li className="number-dot">
                        The Company reserves the right to cancel or void any bets if the official Bitcoin result is unobtainable over an
                        extended period of time or is canceled.
                    </li>
                )}
                {gameId === games.casinoHoldem && (
                    <li className="number-dot">
                        The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the "Deal" button.
                        The unfinished game will be automatically settled after 24 hours. The player’s hand is considered as “FOLD”.
                    </li>
                )}
                <li className="number-dot">
                    The Company reserves the right to cancel or void any bets because of a force majeure event including but not limited to
                    any technical errors, network service failures, power failures.
                </li>
                <li className="number-dot">
                    The Company reserves the right to cancel or void any bets of players we believe to be involved in fraud, money
                    laundering, or any other form of illegal or suspicious activities.
                </li>
                <li className="number-dot">
                    The Company reserves the right to cancel or void any bets when there is an error (caused by human or any other factors),
                    or a system failure resulting in an incorrect payout ratio.
                </li>
                <li className="number-dot">
                    All accepted bets will still be effective even if the member subsequently logs out or is disconnected from the site for
                    any reason.
                </li>
            </ul>
        </li>
    );
};

export const renderTermsAndConditionsVI = (style = "", gameId?: number) => {
    return (
        <li className={`guide-item ${style}`}>
            <h2>Các quy định trong game</h2>
            <ul className="style-number-rule">
                {gameId === games.bitcoinMaster && (
                    <li className="number-dot">
                        Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp giá trị Bitcoin không thể có trong
                        thời gian dài.
                    </li>
                )}
                {gameId === games.casinoHoldem && (
                    <li className="number-dot">
                        Nếu phiên đang chơi bị gián đoạn, hệ thống sẽ bảo lưu kết quả trong vòng 24 tiếng tính từ thời điểm người chơi bấm nút “Chia Bài”.
                        Trong trường hợp người chơi không thể hoàn tất phiên bị gián đoạn trong thời gian 24 tiếng, đồng nghĩa với người chơi đã chấp nhận “Bỏ Bài”.
                    </li>
                )}
                <li className="number-dot">
                    Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật
                    nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
                </li>
                <li className="number-dot">
                    Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận,
                    tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
                </li>
                <li className="number-dot">
                    Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ
                    thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
                </li>
                <li className="number-dot">
                    Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất
                    hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.
                </li>
            </ul>
        </li>
    );
};
