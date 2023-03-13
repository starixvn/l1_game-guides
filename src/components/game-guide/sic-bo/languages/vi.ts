import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import { ISicBoTranslationResource } from "./types";
export const vi: ISicBoTranslationResource = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Tài Xỉu Sic Bo là trò chơi đổ xúc xắc, rất được yêu thích tại các casino. Trò chơi có luật và cách chơi đơn giản, sử dụng ba viên xúc xắc (xí ngầu) 6 mặt, các mặt lần lượt từ 1 đến 6 chấm, tương ứng từ 1 đến 6 điểm.",
    },
    gameRules: {
        title: "Cách chơi",
        descriptions: [
            "Người chơi chọn mệnh giá và nhấp vào lựa chọn bạn muốn đặt cược trước khi hết thời gian quy định. Nếu kết quả mở ra trùng với lựa chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.",
            "Người chơi có thể đặt cược vào một hoặc nhiều lựa chọn cùng lúc trong cùng một lượt chơi và không bị giới hạn số lần đặt cược. Lưu ý, không thể hủy cược sau khi đặt.",
        ],
        maximum: "Tổng tiền cược tối đa cho một phiên là {0}",
        otherDescriptions: [
            "Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Xúc xắc sẽ được lắc khi bắt đầu phiên, kết quả sẽ được hiển thị khi hết thời gian đặt cược.",
            "Tổng tiền cược của tất cả người chơi trên từng cửa cược là thông tin mang tính tham khảo. Đối với các thị trường và tiền tệ khác nhau, số tổng hiển thị được quy đổi dựa theo tỉ giá nội bộ do công ty quy định.",
        ],
    },
    bettingOptions: {
        title: "Điều kiện thắng",
        description: {
            big: ["Thắng nếu tổng điểm của ba xúc xắc từ 11 đến 17.", "Thua nếu kết quả có bộ ba bất kỳ."],
            small: ["Thắng nếu tổng điểm của ba xúc xắc từ 4 đến 10.", "Thua nếu kết quả có bộ ba bất kỳ."],
            anyTriple: "Thắng nếu kết quả là một bộ ba xúc xắc bất kỳ.",
            specificNumber: "Thắng nếu xúc xắc người chơi chọn xuất hiện trong kết quả.",
            totalPoints: "Thắng nếu lựa chọn của người chơi bằng với tổng điểm của ba xúc xắc.",
        },
    },
    table: {
        options: "Loại cược",
        choices: "Lựa chọn",
        description: "Điều kiện thắng",
        odds: "Tỷ lệ trả thưởng",
        betLimit: "Giới hạn cược <br/> (Min - Max)",
        big: "Tài",
        small: "Xỉu",
        anyTriple: "Bộ Ba Bất Kỳ",
        specificNumber: "Cược số",
        totalPoints: "Tổng điểm",
        betOnAnyNumber: "Xúc xắc 1 đến 6",
        betOnTotalPoints: "Từ 4 đến 17",
        numberAppearsOnce: "Xuất hiện một lần {0}",
        numberAppearsTwice: "Xuất hiện hai lần {0}",
        numberAppearsThreeTimes: "Xuất hiện ba lần {0}",
    },
    payouts: {
        title: "Trả thưởng",
        descriptions: ["Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.", "Tiền thắng đã bao gồm tiền cược."],
    },
    md5: {
        step1ImageUrl: "/static/images/sicbo/md5_step1_vi.png",
        step2ImageUrl: "/static/images/sicbo/md5_step2_vi.png",
        note: "Từ trái sang phải, {3,2,1} sẽ tương ứng với giá trị của ba viên xúc xắc.",
    },
    termsAndConditions: baseTermAndConditionVi,
};
