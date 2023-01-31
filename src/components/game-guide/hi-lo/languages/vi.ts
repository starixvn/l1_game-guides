import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import { IHiLoTranslationResource } from "./types";
export const vi: IHiLoTranslationResource = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Cao Thấp là thể loại game bài - mini rất được yêu thích bởi sự đơn giản trong luật chơi. Trò chơi sử dụng bộ bài tây 52 lá (không bao gồm lá Joker), người chơi sẽ dự đoán lá bài xuất hiện tiếp theo sẽ Cao hơn hay Thấp hơn lá bài hiện tại.",
    },
    gameRules: {
        title: "Cách chơi",
        description: {
            line1: "Người chơi chọn mức tiền cược mong muốn, và bấm “Bắt Đầu” để chơi.",
            line2: "Hệ thống sẽ chọn ngẫu nhiên 1 lá bài và người chơi dự đoán lá bài xuất hiện tiếp theo sẽ Cao hơn hay Thấp hơn lá bài hiện tại.",
            line3: "Sau mỗi lượt dự đoán, nếu thắng người chơi sẽ có 2 lựa chọn:",
            subLines: [
                "Bấm nút “Ăn Non” để nhận tiền thắng và phiên chơi kết thúc.",
                "Hoặc tiếp tục dự đoán lá bài kế tiếp sẽ Cao hay Thấp so với lá bài hiện tại (lá kết quả của lượt chơi gần nhất), khi đó số tiền thắng ở lượt dự đoán trước sẽ được tính như là tiền cược cho lượt chơi tiếp theo.",
            ],
        },
        example: {
            title: "Ví dụ",
            description: {
                introduction: "Hệ thống chọn ngẫu nhiên lá bài đầu tiên {0}. Người chơi cược 100 cho lựa chọn “Thấp”",
                result: {
                    detail: "Kết quả: {0}. Người chơi thắng 163, và sẽ có 2 lựa chọn:",
                    option1: "Bấm “Ăn Non” để nhận 163 tiền thắng vào tài khoản và phiên chơi kết thúc.",
                    option2: "Tiếp tục dự đoán lá bài được rút kế tiếp sẽ Cao hay Thấp hơn lá hiện tại ({0}), với mức tiền cược 163",
                },
                note: {
                    completeTurn: "Phiên chơi chỉ kết thúc khi người chơi bấm nút Ăn Non hoặc Thua.",
                    autoSettle: {
                        detail: "Mỗi lượt dự đoán sẽ diễn ra trong vòng 2 phút. Hết thời gian mà người chơi không đưa ra dự đoán thì hệ thống sẽ:",
                        subLines: [
                            "Với lượt chơi đầu tiên sau khi bấm “Bắt Đầu”, nếu người chơi không đưa ra lựa chọn sau 2 phút, hệ thống sẽ tự động chọn kết quả ngẫu nhiên Cao hoặc Thấp và phiên chơi kết thúc.",
                            "Với những lượt chơi khác, nếu người chơi không đưa ra lựa chọn sau 2 phút, hệ thống sẽ tính như người chơi chọn “Ăn Non”.",
                        ],
                    },
                    shuffleCard: "Bài sẽ được xào lại sau mỗi lượt dự đoán.",
                },
            },
        },
    },
    cardValues: {
        title: "Thang sức mạnh",
        line1: "Thứ tự các lá bài từ nhỏ đến lớn: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), Ace (A)",
        line2: "Không so chất ({0} {1} {2} {3}) của lá bài.",
        note: {
            title: "Lưu ý",
            descriptions: [
                "Trong trường hợp lá bài rút ra có cùng điểm số với lá bài hiện tại => Kết quả “Hòa”, người chơi sẽ tiếp tục lượt chơi tiếp theo.",
                "Với các lá 2 hoặc Ace (A), người chơi chỉ có thể lựa chọn Thấp cho Ace (A), Cao cho lá 2 và kết quả của lượt chơi đó sẽ tính là “Hòa”.",
            ],
        },
    },
    payout: {
        title: "Trả thưởng",
        descriptions: ["Mỗi lượt dự đoán sẽ có mức thưởng khác nhau trên từng lựa chọn Cao/Thấp.", "Tiền thắng đã bao gồm tiền cược."],
    },
    termsAndConditions: baseTermAndConditionVi,
};
