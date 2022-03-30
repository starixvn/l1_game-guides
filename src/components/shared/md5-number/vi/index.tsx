import React from "react";

const games = { casinoHoldem: 39 };
export const renderMD5VI = (gameId?: number) => {
    return (
        <>
            <h2> MD5 (Message-Digest algorithm 5) </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">Công nghệ MD5</span>
                    <ul className="desc">
                        <li>
                            <strong>MD5</strong> là công nghệ cho phép người chơi xác thực và kiểm tra tính minh bạch của kết quả trò chơi
                            thông qua bên thứ ba.
                        </li>
                        <li>Kết quả trò chơi sẽ được hệ thống tạo ngẫu nhiên trước khi người chơi mở bài. </li>
                        <li>
                            Người chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi mở bài (Chuỗi{" "}
                            <strong>MD5</strong>) và kết quả cuối cùng sau khi được công bố (Chuỗi <strong>Kết Quả</strong>).
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text"> Các bước kiểm tra</span>
                    <ul className="desc">
                        <li>
                            <span>
                                <strong>Bước 1</strong>: Copy chuỗi <strong>MD5</strong> trong game sau khi bấm nút &quot;Chia Bài&quot;.
                            </span>
                        </li>
                        <li>
                            <span>
                                <strong>Bước 2</strong>: Copy chuỗi <strong>Kết Quả</strong> sau khi bấm nút &quot;Theo Bài&quot;.
                            </span>
                        </li>
                        <li>
                            <strong>Bước 3</strong>: Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán chuỗi <strong>Kết Quả</strong> vừa copy vào ô MD5.
                        </li>
                        <li>
                            <strong>Bước 4</strong>: Bấm nút <strong>“hash darling, hash!”</strong>. So sánh chuỗi{" "}
                            <strong>MD5 checksum</strong> vừa được tạo ra và chuỗi MD5 ở <strong>Bước 1.</strong>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="content">
                Nếu 2 chuỗi trùng khớp, chứng minh kết quả được công bố không thay đổi so với kết quả được hệ thống tạo ra ngẫu nhiên trước
                khi các lá bài được mở.
            </div>
            <div className="content">
                <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả
            </div>

            {gameId === games.casinoHoldem && (
                <>
                    <ul className="desc">
                        <li>
                            <strong>Bước 1:</strong> Copy chuỗi MD5 sau khi bấm nút &quot;Chia Bài&quot;.
                            <img className="format-img auto-center" src="/static/images/casino-holdem/md5-vi.png?v=1" />
                        </li>
                        <li>
                            <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục Kết Quả sau khi bấm nút &quot;Theo Bài&quot;
                            <img className="format-img auto-center" src="/static/images/casino-holdem/result-vi.png?v=1" />
                            <div>
                                Trong đó <span className="red">4</span>, A là hai lá của Người Chơi và <span className="red">J</span>,{" "}
                                <span className="red">2</span> là hai lá của Nhà Cái. Năm lá bài chung 4, <span className="red">3</span>, 9,{" "}
                                5, 10
                            </div>
                        </li>
                        <li>
                            <strong>Bước 3:</strong> Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán chuỗi Kết Quả vừa copy vào ô MD5.
                            <img className="format-img auto-center" src="/static/images/casino-holdem/hash-darling.png?v=1" />
                        </li>
                        <li>
                            <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5
                            ở Bước 1.
                            <img className="format-img auto-center" src="/static/images/casino-holdem/md5-checksum.png?v=1" />
                        </li>
                    </ul>
                    <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
                </>
            )}
        </>
    );
};
