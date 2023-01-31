import { baseTermAndConditionVi } from "../../../base/terms-and-conditions/languages/vi";
import { IKenoTranslationResource } from "../../keno-max/languages/types";

export const vi: IKenoTranslationResource = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Keno Mini / Keno Mini 2 là phiên bản RNG Keno rút gọn với 40 bóng. Hệ thống sẽ lấy ngẫu nhiên 10 quả bóng trong số 40 quả bóng được đánh số từ 1 đến 40. Người chơi sẽ đặt cược và dự đoán tổng điểm của 10 quả bóng này.",
    },
    gameRules: {
        title: "Cách chơi",
        description: {
            lines: [
                "Người chơi nhấp vào lựa chọn mong muốn và hoàn tất việc đặt cược trước khi hết thời gian quy định.",
                "Hệ thống sẽ chọn ngẫu nhiên 10 quả bóng. Nếu tổng điểm của 10 quả bóng được chọn có kết quả trùng với lựa chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.",
            ],
            maximum:
                "Người chơi có thể đặt cược vào nhiều lựa chọn và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1 phiên là {0}. <b>Lưu ý</b>, không thể hủy cược sau khi đặt.",
            otherLine:
                "Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, kết quả sẽ được hiển thị.",
        },
    },
    bettingOptions: {
        title: "Luật chơi",
        bigSmall: {
            title: "Cược Tài/Xỉu",
            descriptions: [
                "<b>Tài:</b> tổng điểm của 10 quả bóng được rút >= 206",
                "<b>Xỉu:</b> tổng điểm của 10 quả bóng được rút <= 205",
            ],
            winningText: "Cược vào XỈU thắng.",
        },
        oddEven: {
            title: "Cược Chẵn/Lẻ",
            descriptions: [
                "<b>Lẻ:</b> tổng điểm của 10 trái bóng được rút là một số lẻ.",
                "<b>Chẵn:</b> tổng điểm của 10 trái bóng được rút là một số chẵn.",
            ],
            winningText: "Cược vào LẺ thắng.",
        },
        fiveElement: {
            title: "Cược Ngũ hành (Kim/Mộc/Thủy/Hỏa/Thổ)",
            descriptions: [
                "<b>Kim:</b> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 55 đến 163",
                "<b>Mộc:</b> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 164 đến 187",
                "<b>Thủy:</b> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 188 đến 222",
                "<b>Hỏa:</b> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 223 đến 246",
                "<b>Thổ:</b> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 247 đến 355",
            ],
            winningText: "Cược vào HỎA thắng.",
        },
        example: {
            description: "<b>Ví dụ:</b> 10 quả bóng được lấy ngẫu nhiên gồm các số: ",
            drawResult: "Kết Quả",
            totalSum: "Tổng điểm",
        },
    },
    payouts: {
        title: "Trả thưởng",
        descriptions: ["Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.", "Tiền thắng đã bao gồm tiền cược."],
        options: "Lựa Chọn",
        odds: "Tỷ Lệ Trả Thưởng",
        betLimit: "Giới Hạn Cược ",
        min: "Min",
        max: "Max",
        big: "Tài",
        small: "Xỉu",
        odd: "Lẻ",
        even: "Chẵn",
        gold: "Kim",
        wood: "Mộc",
        water: "Thủy",
        fire: "Hỏa",
        earth: "Thổ",
    },
    md5: {
        image1: "/static/images/keno-mini/md5_step1_vi.png",
        image2: "/static/images/keno-mini/md5_step2_vi.png",
        note: "Trong đó 363 là tổng điểm của các quả bóng.",
    },
    termsAndConditions: baseTermAndConditionVi,
};
