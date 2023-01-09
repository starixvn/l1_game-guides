import { IBigSmallMiniTranslationResource } from "./types";

export const vi: IBigSmallMiniTranslationResource = {
    introduction:
        "Tài Xỉu là trò chơi đổ xúc xắc đơn giản, sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt và người chơi sẽ dự đoán xem kết quả là Tài hay Xỉu.",
    winningCondition: {
        title: "Điều kiện thắng",
        description: {
            thePlayerCan: "Trong một phiên cược, người chơi chỉ được chọn 1 cửa duy nhất Tài hoặc Xỉu ",
            big: "Tài: tổng điểm 3 viên xúc xắc >= 11",
            small: "Xỉu: tổng điểm 3 viên xúc xắc <= 10",
            balanced:
                "Nhà cái cân cửa: khi lượng tiền đặt cược giữa 2 cửa chênh lệch nhau, số tiền chênh lệch sẽ được hoàn trả vào tài khoản người chơi đặt cược sau.",
        },
        example:
            "Ví dụ: Người chơi A đặt 100 vào Tài, người chơi B đặt 40 vào Xỉu và C đặt 80 vào Xỉu. Sau khi nhà cái cân cửa, số tiền cược chênh lệch sẽ được hoàn trả cho C (người chơi đặt cược sau) 20",
    },
    betLimit: {
        title: "Hạn mức cược",
        description: "Hạn mức cược từ {0} đến {1} cho một lần đặt cược và tổng tiền cược tối đa cho 1 phiên là {2}",
    },
};
