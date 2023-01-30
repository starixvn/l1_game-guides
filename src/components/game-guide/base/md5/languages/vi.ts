import { IMd5Resources } from "./types";

const steps = {
    one: "<strong>Bước 1</strong>: Copy chuỗi <strong>MD5</strong> trong game trước khi kết quả được công bố.",
    two: "<strong>Bước 2</strong>: Copy <strong>Kết Quả</strong> sau khi kết quả được công bố.",
    three: "<strong>Bước 3</strong>: Truy cập {0} và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.",
    four: "<strong>Bước 4</strong>: Bấm nút <strong>“hash darling, hash!”</strong>. So sánh chuỗi <strong>MD5 checksum</strong> vừa được tạo ra và chuỗi MD5 ở <strong>Bước 1.</strong>",
};

export const md5ResourcesVi: IMd5Resources = {
    content: {
        header: "MD5 (Message-Digest algorithm 5)",
        technology: {
            header: "Công nghệ MD5",
            details: [
                "<strong>MD5</strong> là công nghệ cho phép người chơi xác thực và kiểm tra tính minh bạch của kết quả trò chơi thông qua bên thứ ba.",
                "Kết quả trò chơi sẽ được hệ thống tạo ngẫu nhiên trước khi người chơi đặt cược.",
                "Người chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi đặt cược (Chuỗi <strong>MD5</strong>) và kết quả cuối cùng sau khi được công bố (<strong>Kết Quả</strong>).",
            ],
        },
        validation: {
            header: "Tra Cứu MD5",
            details: Object.values(steps),
        },
        noted: "Nếu 2 chuỗi trùng khớp, chứng minh kết quả được công bố không thay đổi so với kết quả được hệ thống tạo ra ngẫu nhiên trước khi đặt cược.",
    },
    example: {
        header: "<strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả trò chơi",
        step1Text: steps.one,
        step2Text: steps.two,
        step3Text: steps.three,
        step4Text: steps.four,
        step1ImageUrl: "",
        step2ImageUrl: "",
        step3ImageUrl: "",
        step4ImageUrl: "",
        step2Noted1Text: "",
        step2Noted2Text: "",
    },
};
