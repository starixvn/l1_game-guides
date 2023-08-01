import { ISicBoTranslationResource } from "./types";

export const vi: ISicBoTranslationResource = {
    introduction:
        "Sic Bo là trò chơi đổ xúc xắc. Trò chơi sử dụng ba viên xúc xắc (xí ngầu) 6 mặt, các mặt lần lượt từ 1 đến 6 chấm, tương ứng từ 1 đến 6 điểm. ",
    winningCondition: {
        title: "Điều kiện thắng",
        description: {
            number: "Cược số: Thắng nếu số người chơi đã chọn xuất hiện trong kết quả.",
            big: "Tài: Thắng nếu tổng điểm của ba xúc xắc từ 11 đến 17.",
            small: "Xỉu: Thắng nếu tổng điểm của ba xúc xắc từ 4 đến 10.",
            note: "<strong>Lưu ý:</strong> Tài hoặc Xỉu thua nếu kết quả có bộ ba bất kỳ. ",
        },
    },
    betLimit: {
        title: "Mức cược",
        description: "Hạn mức cược từ {0} đến {1} cho một lần đặt cược và tổng tiền cược tối đa cho 1 phiên là {1}.",
    },
};
