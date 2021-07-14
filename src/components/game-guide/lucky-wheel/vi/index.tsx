import React from "react";

const LuckyWheelGuideVI: React.FC = () => {
    return (
        <div>
            <ul className="game-guide">
                <h1>Thể lệ chương trình</h1>
                <li className="guide-item">
                    <h2>Thể lệ vòng quay</h2>
                    <ul className="desc">
                        <li>
                            Người chơi sử dụng lượt quay để tham gia Vòng Quay May Mắn. Với mỗi lượt quay, người chơi sẽ có cơ hội nhận được
                            các giải thưởng bằng tiền Scoin{" "}
                            <img src="/static/images/lucky-wheel/coin.png" alt="coin" width={26} height={26} />
                        </li>
                        <li>Kết quả giải thưởng sẽ được công bố ngay khi lượt quay kết thúc.</li>
                        <li>Các lượt quay may mắn đều có thời hạn hiệu lực, khi hết hạn, toàn bộ lượt quay còn lại sẽ bị mất.</li>
                        <li>
                            <strong>Lưu ý: </strong>Không giới hạn số lượt quay mỗi ngày.
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Cách thức nhận thưởng</h2>
                    <ul className="desc">
                        <li>Tiền thưởng Scoin sẽ tự động được cộng vào ví Scoin của bạn.</li>
                        <li>
                            Người chơi dùng Scoin trúng thưởng để tham gia chơi Xóc Đĩa trong Vgaming. Số tiền thắng có được sau khi chơi sẽ
                            được cộng vào tài khoản chính của người chơi.
                        </li>
                        <li>
                            <strong>Lưu ý:</strong>
                            <ul className="plus">
                                <li>Scoin không được quy đổi thành tiền mặt.</li>
                                <li>
                                    Scoin chỉ áp dụng cho Xóc Đĩa, với những game khác, tiền cược sẽ được trừ trực tiếp vào tài khoản chính.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="guide-item">
                    <h2>Quy định</h2>
                    <ul className="style-number-rule">
                        <li className="number-dot">
                            Công ty có quyền hủy hoặc làm mất hiệu lực các lượt quay may mắn trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ
                            thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
                        </li>
                        <li className="number-dot">
                            Công ty có quyền hủy bỏ kết quả Vòng Quay May Mắn hoặc không công nhận các lượt chơi miễn phí nếu phát hiện
                            người chơi có dấu hiệu gian lận.
                        </li>
                        <li className="number-dot">
                            Công ty có quyền thay đổi nội dung chương trình, cơ cấu giải thưởng tại bất kỳ thời điểm nào mà không cần thông
                            báo trước.
                        </li>
                        <li className="number-dot">
                            Trong mọi trường hợp xảy ra tranh chấp, quyết định của Công ty sẽ là quyết định cuối cùng.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default LuckyWheelGuideVI;
