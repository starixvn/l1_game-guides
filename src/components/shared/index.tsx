import React from "react";

const games = { bitcoinMaster: 43, casinoHoldem: 39, texasHoldem: 42, blackjack: 23 };

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
                        The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the
                        “Deal” button. The unfinished game will be automatically settled after 24 hours. The player&apos;s hand is
                        considered as “FOLD”.
                    </li>
                )}
                {gameId === games.texasHoldem && (
                    <li className="number-dot">
                        The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the
                        “Deal” button. The unfinished game will be automatically settled after 24 hours, and the Win-loss result will be
                        determined by the following rules:
                        <ul className="detail">
                            <li>
                                If the game round is disrupted before the Player selects either “CALL” or “FOLD” {`=>`} The Player’s hand is
                                considered as “FOLD”.
                            </li>
                            <li>
                                If the game round is disrupted after the Player selects the “CALL” option, the Player’s hand is considered
                                as “CHECK” for Turn and River bet {`=>`} The game round will be settled as normal.
                            </li>
                        </ul>
                    </li>
                )}

                {gameId === games.blackjack && (
                    <>
                        <li className="number-dot">
                            The unfinished game round can be recovered and must be finished within 24 hours from the time the Player press
                            the {`"Deal"`} button.
                            <br></br>
                            The unfinished game will be automatically settled after 24 hours. The player’s hands are considered as STAND and
                            the system will calculate win-loss based on the cards that were on the table at the point of interruption.
                        </li>
                    </>
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
                    or a system failure resulting in the wrong betting odds.
                </li>
                <li className="number-dot">
                    All accepted bets will still be effective even if the member subsequently logs out or is disconnected from the site for
                    any reason.
                </li>
            </ul>
        </li>
    );
};

export const renderTermsAndConditionsID = (style = "", gameId?: number) => {
    return (
        <li className={`guide-item ${style}`}>
            <h2>Syarat dan Ketentuan</h2>
            <ul className="style-number-rule">
                {gameId === games.bitcoinMaster && (
                    <li className="number-dot">
                        The Company reserves the right to cancel or void any bets if the official Bitcoin result is unobtainable over an
                        extended period of time or is canceled.
                    </li>
                )}
                {gameId === games.casinoHoldem && (
                    <li className="number-dot">
                        The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the
                        “Deal” button. The unfinished game will be automatically settled after 24 hours. The player&apos;s hand is
                        considered as “FOLD”.
                    </li>
                )}
                {gameId === games.texasHoldem && (
                    <li className="number-dot">
                        The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the
                        “Deal” button. The unfinished game will be automatically settled after 24 hours, and the Win-loss result will be
                        determined by the following rules:
                        <ul className="detail">
                            <li>
                                If the game round is disrupted before the Player selects either “CALL” or “FOLD” {`=>`} The Player’s hand is
                                considered as “FOLD”.
                            </li>
                            <li>
                                If the game round is disrupted after the Player selects the “CALL” option, the Player’s hand is considered
                                as “CHECK” for Turn and River bet {`=>`} The game round will be settled as normal.
                            </li>
                        </ul>
                    </li>
                )}
                {gameId === games.blackjack && (
                    <>
                        <li className="number-dot">
                            Putaran permainan yang belum selesai dapat dipulihkan dan harus diselesaikan dalam waktu 24 jam sejak Pemain
                            menekan tombol {`"Deal"`}.<br></br>
                            Permainan yang belum selesai akan diselesaikan secara otomatis setelah 24 jam. Tangan pemain dianggap STAND dan
                            sistem akan menghitung menang-kalah berdasarkan kartu yang ada di meja pada titik interupsi.
                        </li>
                    </>
                )}
                <li className="number-dot">
                    Perusahaan berhak untuk membatalkan atau membatalkan taruhan apa pun karena peristiwa force majeure termasuk tetapi
                    tidak terbatas pada kesalahan teknis, kegagalan layanan jaringan, kegagalan daya.
                </li>
                <li className="number-dot">
                    Perusahaan berhak untuk membatalkan atau membatalkan taruhan pemain yang kami yakini terlibat dalam penipuan, pencucian
                    uang, atau segala bentuk aktivitas ilegal atau mencurigakan lainnya.
                </li>
                <li className="number-dot">
                    Perusahaan berhak membatalkan atau membatalkan taruhan apa pun jika ada kesalahan (disebabkan oleh manusia atau faktor
                    lainnya), atau kegagalan sistem yang mengakibatkan peluang taruhan yang salah.
                </li>
                <li className="number-dot">
                    Semua taruhan yang diterima akan tetap berlaku meskipun member kemudian keluar atau terputus dari situs karena alasan
                    apa pun.
                </li>
            </ul>
        </li>
    );
};

export const renderTermsAndConditionsTH = (style = "", gameId?: number) => {
    return (
        <li className={`guide-item ${style}`}>
            <h2>ข้อกำหนดและเงื่อนไข</h2>
            <ul className="style-number-rule">
                {gameId === games.bitcoinMaster && (
                    <li className="number-dot">
                        The Company reserves the right to cancel or void any bets if the official Bitcoin result is unobtainable over an
                        extended period of time or is canceled.
                    </li>
                )}
                {gameId === games.casinoHoldem && (
                    <li className="number-dot">
                        The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the
                        “Deal” button. The unfinished game will be automatically settled after 24 hours. The player&apos;s hand is
                        considered as “FOLD”.
                    </li>
                )}
                {gameId === games.texasHoldem && (
                    <li className="number-dot">
                        The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the
                        “Deal” button. The unfinished game will be automatically settled after 24 hours, and the Win-loss result will be
                        determined by the following rules:
                        <ul className="detail">
                            <li>
                                If the game round is disrupted before the Player selects either “CALL” or “FOLD” {`=>`} The Player’s hand is
                                considered as “FOLD”.
                            </li>
                            <li>
                                If the game round is disrupted after the Player selects the “CALL” option, the Player’s hand is considered
                                as “CHECK” for Turn and River bet {`=>`} The game round will be settled as normal.
                            </li>
                        </ul>
                    </li>
                )}
                {gameId === games.blackjack && (
                    <>
                        <li className="number-dot">
                            รอบเกมที่ยังไม่จบสามารถกู้คืนได้และต้องเสร็จสิ้นภายใน 24 ชั่วโมงนับจากเวลาที่ผู้เล่นกดปุ่ม {`"ดีล"`}
                            <br></br>
                            เกมที่ยังไม่เสร็จจะถูกตัดสินโดยอัตโนมัติหลังจาก 24 ชั่วโมง มือของผู้เล่นถือเป็นยึดหลักและระบบจะคำนวณ ชนะ-แพ้
                            ตามไพ่ที่อยู่บนโต๊ะเมื่อหยุดชะงัก
                        </li>
                    </>
                )}
                <li className="number-dot">
                    บริษัทขอสงวนสิทธิ์ในการยกเลิกหรือทำให้การเดิมพันใด ๆ เป็นโมฆะเนื่องจากเหตุสุดวิสัย
                    ซึ่งรวมถึงแต่ไม่จำกัดเฉพาะข้อผิดพลาดทางเทคนิค ความล้มเหลวของบริการเครือข่ายหรือไฟฟ้าขัดข้อง
                </li>
                <li className="number-dot">
                    บริษัทขอสงวนสิทธิ์ในการยกเลิกหรือทำให้การเดิมพันของผู้เล่นที่เราเชื่อว่ามีส่วนเกี่ยวข้องกับการฉ้อโกง การฟอกเงิน
                    หรือกิจกรรมที่ผิดกฎหมายหรือน่าสงสัยในรูปแบบอื่นใดเป็นโมฆะ
                </li>
                <li className="number-dot">
                    บริษัทขอสงวนสิทธิ์ในการยกเลิกหรือโมฆะการเดิมพันใดๆ เมื่อมีข้อผิดพลาด (เกิดจากผู้เล่นหรือปัจจัยอื่นๆ)
                    หรือระบบล้มเหลวส่งผลให้อัตราเดิมพันผิดพลาด
                </li>
                <li className="number-dot">
                    การเดิมพันที่ยอมรับทั้งหมดจะยังคงมีผลแม้ว่าสมาชิกจะออกจากระบบในภายหลังหรือถูกตัดการเชื่อมต่อจากไซต์ด้วยเหตุผลใดก็ตาม
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
                        Nếu phiên đang chơi bị gián đoạn, hệ thống sẽ bảo lưu kết quả trong vòng 24 tiếng tính từ thời điểm người chơi bấm
                        nút &quot;Chia Bài&quot;. Trong trường hợp người chơi không thể hoàn tất phiên bị gián đoạn trong thời gian 24
                        tiếng, đồng nghĩa với người chơi đã chấp nhận &quot;Bỏ Bài&quot;.
                    </li>
                )}
                {gameId === games.texasHoldem && (
                    <li className="number-dot">
                        Nếu phiên đang chơi bị gián đoạn, hệ thống sẽ bảo lưu kết quả trong vòng 24 tiếng tính từ thời điểm Người Chơi bấm
                        nút “Chia Bài”. Trong trường hợp Người Chơi không thể hoàn tất phiên bị gián đoạn trong thời gian 24 tiếng, hệ thống
                        xử lý theo các quy định sau:
                        <ul className="detail">
                            <li>
                                Nếu phiên bị gián đoạn trước khi Người Chơi bấm nút “Theo Bài” đồng nghĩa với Người Chơi chấp nhận “Bỏ Bài”.{" "}
                            </li>
                            <li>
                                Nếu phiên bị gián đoạn sau khi Người Chơi bấm nút “Theo Bài”, hệ thống sẽ mặc định chọn “Xem” cho các vòng
                                Turn và River. Thắng thua sẽ được phân định dựa trên kết quả 5 lá bài tốt nhất có thể kết hợp trong tổng số
                                7 lá bài (2 lá được chia cho mỗi bên và 5 lá bài chung) của Người Chơi và Nhà Cái.
                            </li>
                        </ul>
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

export const renderTermsAndConditionsCN = (style = "", gameId?: number) => {
    return (
        <li className={`guide-item ${style}`}>
            <h2>条款和条件</h2>
            <ul className="style-number-rule">
                {gameId === games.bitcoinMaster && (
                    <li className="number-dot">
                        The Company reserves the right to cancel or void any bets if the official Bitcoin result is unobtainable over an
                        extended period of time or is canceled.
                    </li>
                )}
                {gameId === games.blackjack && (
                    <>
                        <li className="number-dot">
                            未完成的游戏回合可以恢复，并且必须在玩家按下“发牌”按钮后的 24 小时内完成。
                            <br></br>
                            未完成的游戏将在 24 小时后自动结算。 玩家的手牌被视为&#34;停牌&#34;，系统将根据中断时桌上的牌计算输赢。
                        </li>
                    </>
                )}
                <li className="number-dot">
                    本公司保留因不可抗力事件（包括但不限于任何技术错误、网络服务故障、电源故障）而取消或取消任何投注的权利。
                </li>
                <li className="number-dot">
                    本公司保留取消或取消我们认为涉及欺诈、洗钱或任何其他形式的非法或可疑活动的玩家的任何投注的权利。
                </li>
                <li className="number-dot">
                    当出现错误（由人为或任何其他因素引起）或系统故障导致错误的投注赔率时，本公司保留取消或作废任何投注的权利。
                </li>
                <li className="number-dot">即使会员随后退出或因任何原因与网站断开连接，所有已接受的投注仍将有效。</li>
            </ul>
        </li>
    );
};

export const renderTermsAndConditionsTW = (style = "", gameId?: number) => {
    return (
        <li className={`guide-item ${style}`}>
            <h2>條款和條件</h2>
            <ul className="style-number-rule">
                {gameId === games.bitcoinMaster && (
                    <li className="number-dot">
                        The Company reserves the right to cancel or void any bets if the official Bitcoin result is unobtainable over an
                        extended period of time or is canceled.
                    </li>
                )}
                {gameId === games.blackjack && (
                    <>
                        <li className="number-dot">
                            未完成的遊戲回合可以恢復，並且必須在玩家按下“發牌”按鈕後的 24 小時內完成。
                            <br></br>
                            未完成的遊戲將在 24 小時後自動結算。 玩家的手牌被視為&#34;停牌&#34;，系統將根據中斷時桌上的牌計算輸贏。
                        </li>
                    </>
                )}
                <li className="number-dot">
                    本公司保留因不可抗力事件（包括但不限於任何技術錯誤、網絡服務故障、電源故障）而取消或取消任何投注的權利。
                </li>
                <li className="number-dot">
                    本公司保留取消或取消我們認為涉及欺詐、洗錢或任何其他形式的非法或可疑活動的玩家的任何投注的權利。
                </li>
                <li className="number-dot">
                    當出現錯誤（由人為或任何其他因素引起）或系統故障導致錯誤的投注賠率時，本公司保留取消或作廢任何投注的權利。
                </li>
                <li className="number-dot">即使會員隨後退出或因任何原因與網站斷開連接，所有已接受的投注仍將有效。</li>
            </ul>
        </li>
    );
};
