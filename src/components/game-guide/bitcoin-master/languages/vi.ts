import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import { IBitcoinMasterTranslationResource } from "./types";
export const vi: IBitcoinMasterTranslationResource = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Bitcoin Master là thể loại game cá cược hoàn toàn mới, cho phép người chơi đặt cược dựa trên giá trị Bitcoin trong 60 giây kế tiếp. Có 4 lựa chọn để đặt cược: Tăng, Giảm, Chẵn, Lẻ.",
    },
    gameRules: {
        title: "Cách chơi",
        descriptions: [
            "Người chơi dự đoán mức giá Bitcoin (Kết quả) được ghi nhận cuối cùng sau 60 giây bằng cách đặt cược vào các lựa chọn với mức cược mong muốn.",
            "Có 2 loại cược: Tăng/Giảm, Chẵn/Lẻ. Trong 1 phiên, với mỗi loại cược, bạn chỉ được đặt vào 1 lựa chọn.",
        ],
        winningConditions: {
            up: "Mức giá cuối cùng sau 60 giây cao hơn mức giá khởi điểm (Giá đặt lệnh).",
            down: "Mức giá cuối cùng sau 60 giây thấp hơn mức giá khởi điểm (Giá đặt lệnh).",
            even: "Mức giá cuối cùng sau 60 giây là số Chẵn.<br />+ Lưu ý: Chỉ tính trên chữ số hàng đơn vị, không bao gồm phần thập phân.",
            odd: "Mức giá cuối cùng sau 60 giây là số Lẻ.<br />+ Lưu ý: Chỉ tính trên chữ số hàng đơn vị, không bao gồm phần thập phân.",
        },
        example1: {
            title: "<b>Ví dụ:</b> Với loại cược Tăng/Giảm, người chơi chỉ được chọn 1 cửa duy nhất Tăng hoặc Giảm.",
            increaseStake:
                "Người chơi có thể tăng lượng tiền đặt cược bằng cách đặt thêm vào cùng 1 lựa chọn trước khi thời gian đặt cược kết thúc.",
            maxBet: "Tổng tiền cược tối đa cho 1 phiên là {0}. Lưu ý, không thể hủy cược sau khi đặt.",
            otherDescriptions: [
                "Với loại cược Tăng/Giảm, tiền cược sẽ được hoàn trả trong trường hợp giá trị Bitcoin không thay đổi sau 60 giây, mức giá cuối cùng (Kết quả) bằng giá khởi điểm (Giá đặt lệnh).",
                "Giá trị Bitcoin được sử dụng trong game là giá trị trung bình theo thời gian thực từ 4 sàn giao dịch:",
            ],
        },
        example2: {
            title: "Ví dụ",
            descriptions: [
                "Mức giá Bitcoin ở giây thứ 1 (Giá đặt lệnh) = <b>57,761.13</b>",
                "Mức giá Bitcoin ở giây thứ 60 (Kết quả) = <b>58,011.08</b>",
            ],
            upDown: {
                title: "Tăng/Giảm",
                description:
                    "+ Mức giá ở giây thứ 60 (Kết quả) cao hơn mức giá ở giây thứ 1 (Giá đặt lệnh) => Bitcoin tăng giá, cược vào lựa chọn Tăng sẽ thắng.",
            },
            evenOdd: {
                title: "Chẵn/Lẻ",
                description: "+ Mức giá ở giây thứ 60 là số lẻ (58,011) => Cược vào lựa chọn Lẻ sẽ thắng.",
            },
        },
        balancedBettingPool:
            "<b>Nhà cái cân cửa:</b> với cùng 1 loại cược, trong trường hợp tiền đặt cược giữa 2 cửa chênh lệch nhau, số tiền chênh lệch sẽ được hoàn trả vào tài khoản người chơi đặt cược sau.",
        example3:
            "<b>Ví dụ:</b> Với loại cược Tăng/Giảm, người chơi A đặt 80 vào cửa Tăng, người chơi B đặt 50 vào cửa Giảm, người chơi C đặt 60 vào cửa Giảm. Hệ thống sẽ tính toán cân bằng lượng tiền giữa 2 cửa và sẽ trả lại cho C (người chơi đặt cược sau) 30",
    },
    table: {
        betType: "Loại Cược",
        options: "Lựa Chọn",
        winningConditions: "Điều Kiện Thắng",
        odds: "Tỷ Lệ Trả Thưởng",
        betLimit: "Giới Hạn Cược <br />(Min - Max)",
        upDown: "Tăng/Giảm",
        up: "Tăng",
        down: "Giảm",
        evenOdd: "Chẵn/Lẻ",
        even: "Chẵn",
        odd: "Lẻ",
    },
    payouts: {
        title: "Trả thưởng",
        descriptions: ["Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.", "Tiền thắng đã bao gồm tiền cược."],
    },
    termsAndConditions: {
        ...baseTermAndConditionVi,
        ...{
            details: [
                "Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp giá trị Bitcoin không thể có trong thời gian dài.",
            ].concat(...baseTermAndConditionVi.details),
        },
    },
};
