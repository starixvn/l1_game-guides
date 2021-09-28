export const renderMD5VI = () => {
    return (
        <>
            <h2> MD5 (Message-Digest algorithm 5) </h2>
            <ul className="game-guide-alpha">
                <li>
                    <strong>a) Công nghệ MD5</strong>
                    <ul className="desc">
                        <li>
                            <strong>MD5</strong> là công nghệ cho phép người chơi xác thực và kiểm tra tính minh bạch của kết quả trò chơi
                            thông qua bên thứ ba.
                        </li>
                        <li>Kết quả trò chơi sẽ được hệ thống tạo ngẫu nhiên trước khi người chơi đặt cược. </li>
                        <li>
                            Người chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi đặt cược và kết quả
                            cuối cùng sau khi được công bố.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>b) Các bước kiểm tra</strong>
                    <ul className="desc">
                        <li>
                            <strong>Bước 1</strong>: Copy chuỗi MD5 trong game trước khi kết quả được công bố.
                        </li>
                        <li>
                            <strong>Bước 2</strong>: Sau khi hệ thống công bố kết quả, copy chuỗi dữ liệu trong mục Key.
                        </li>
                        <li>
                            <strong>Bước 3</strong>: Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán Key vừa copy vào ô MD5.
                        </li>
                        <li>
                            <strong>Bước 4</strong>: Bấm nút <i>“hash, darling hash!”</i>. So sánh chuỗi MD5 checksum vừa được tạo ra và
                            chuỗi MD5 ở Bước 1.
                        </li>
                    </ul>
                </li>
            </ul>
            <div>
                Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch, kết quả được công bố không thay đổi so với kết quả
                được hệ thống tạo ra ngẫu nhiên trước khi đặt cược.
            </div>
        </>
    );
};
