import { ISeDieMiniTranslationResource } from "./types";

export const vi: ISeDieMiniTranslationResource = {
    introduction:
        "Xóc Đĩa Mini có luật chơi đơn giản, gồm 4 xu với 2 mặt đỏ và trắng. Thắng thua sẽ phụ thuộc vào số mặt đỏ hoặc trắng có trong kết quả sau khi xóc. ",
    winningCondition: {
        title: "Điều kiện thắng",
        description: {
            odd: "Chẵn: tổng xu đỏ hoặc trắng có trong kết quả là số chẵn.",
            even: "Lẻ: tổng xu đỏ hoặc trắng có trong kết quả là số lẻ.",
            otherBet: "Cửa cược",
            ifThe: "thắng nếu kết quả trùng với lựa chọn.",
        },
    },
    betLimit: {
        title: "Hạn mức cược",
        description: "Tổng tiền cược tối đa cho 1 phiên là {0} ",
        table: {
            header: {
                options: "Lựa Chọn",
                betLimit: "Hạn Mức Cược",
            },
            rows: {
                oddEven: "Chẵn/Lẻ",
                or: "hoặc",
            },
        },
    },
};
