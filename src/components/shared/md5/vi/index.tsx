import React from "react";
import Image from "next/image";

import Styles from "../md5.module.scss";

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
                            Người chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi đặt cược (Chuỗi{" "}
                            <strong>MD5</strong>) và kết quả cuối cùng sau khi được công bố (Chuỗi <strong>Key</strong>).
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>b) Các bước kiểm tra</strong>
                    <ul className="desc">
                        <li>
                            <strong>Bước 1</strong>: Copy chuỗi <strong>MD5</strong> trong game trước khi kết quả được công bố.
                        </li>
                        <li>
                            <strong>Bước 2</strong>: Copy chuỗi <strong>Key</strong> sau khi hệ thống công bố kết quả.
                        </li>
                        <li>
                            <strong>Bước 3</strong>: Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán <strong>Key</strong> vừa copy vào ô MD5.
                        </li>
                        <li>
                            <strong>Bước 4</strong>: Bấm nút <strong>“hash, darling hash!”</strong>. So sánh chuỗi{" "}
                            <strong>MD5 checksum</strong> vừa được tạo ra và chuỗi MD5 ở <strong>Bước 1.</strong>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Nếu 2 chuỗi trùng khớp, chứng minh kết quả được công bố không thay đổi so với kết quả được hệ thống tạo ra ngẫu nhiên trước
                khi đặt cược.
            </p>
            <div>
                <strong> Ví dụ:</strong> Kiểm tra tính minh bạch trong kết quả Hiêp 1
                <ul className="desc">
                    <li>
                        <strong>Bước 1</strong>: Copy chuỗi MD5 trước khi kết quả Hiệp 1 được công bố.
                        <div className={Styles["wrapper-img-md5"]}>
                            <Image
                                src={`/static/images/keno/md5-copy.png`}
                                alt="md5-copy"
                                width={552}
                                height={29}
                                layout="responsive"
                                loading="eager"
                            />
                        </div>
                    </li>
                    <li>
                        <strong>Bước 2</strong>: Copy chuỗi dữ liệu trong mục Key sau khi kết quả Hiệp 1 được công bố.
                        <div className={Styles["wrapper-img-md5"]}>
                            <Image
                                src={`/static/images/keno/md5-key.png`}
                                alt="md5-key"
                                width={551}
                                height={28}
                                layout="responsive"
                                loading="eager"
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                Trong đó <span className={Styles["blue"]}>406</span> là kết quả của Đội Xanh và <span className={Styles["red"]}>309</span>{" "}
                là kết quả Đội Đỏ trong Hiệp 1
                <ul className="desc">
                    <li>
                        <strong>Bước 3</strong>: Truy cập{" "}
                        <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                            https://md5.services/
                        </a>{" "}
                        và dán chuỗi Key vừa copy vào ô MD5.
                        <div className={Styles["wrapper-img"]}>
                            <Image
                                src={`/static/images/keno/md5.png`}
                                alt="md5-copy"
                                width={362}
                                height={75}
                                layout="responsive"
                                loading="eager"
                            />
                        </div>
                    </li>
                    <li>
                        <strong>Bước 4</strong>: Bấm nút <i>Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</i>. So
                        sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước 1.
                        <div className={Styles["wrapper-img"]}>
                            <Image
                                src={`/static/images/keno/md5-hash.png`}
                                alt="md5-copy"
                                width={387}
                                height={111}
                                layout="responsive"
                                loading="eager"
                            />
                        </div>
                    </li>
                </ul>
                Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.
            </div>
        </>
    );
};
