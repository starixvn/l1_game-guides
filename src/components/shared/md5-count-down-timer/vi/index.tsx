import React from "react";

export const renderMD5VI = () => {
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
                        <li>Kết quả trò chơi sẽ được hệ thống tạo ngẫu nhiên trước khi người chơi đặt cược. </li>
                        <li>
                            Người chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi đặt cược (Chuỗi{" "}
                            <strong>MD5</strong>) và kết quả cuối cùng sau khi được công bố (<strong>Kết Quả</strong>).
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">Tra Cứu MD5</span>
                    <ul className="desc">
                        <li>
                            <strong>Bước 1</strong>: Copy chuỗi <strong>MD5</strong> trong game trước khi kết quả được công bố.
                        </li>
                        <li>
                            <strong>Bước 2</strong>: Copy <strong>Kết Quả</strong> sau khi kết quả được công bố.
                        </li>
                        <li>
                            <strong>Bước 3</strong>: Truy cập{" "}
                            <b>https://md5.services/</b>{" "}
                            và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
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
                khi đặt cược.
            </div>
        </>
    );
};
