import { IHiLoMiniTranslationResource } from "./types";
export const vi: IHiLoMiniTranslationResource = {
    introduction:
        "Cao Thấp sử dụng bộ bài tây 52 lá (không bao gồm lá Joker), người chơi sẽ dự đoán lá bài xuất hiện tiếp theo sẽ Cao hơn hay Thấp hơn lá bài hiện tại. ",
    winningCondition: {
        title: "Điều kiện thắng",
        description: {
            thePlayerCan: "Sau mỗi lượt dự đoán, nếu thắng người chơi sẽ có 2 lựa chọn: ",
            collect: "Bấm nút “Ăn Non” để nhận tiền thắng và phiên chơi kết thúc.",
            playContinue:
                "Hoặc tiếp tục dự đoán lá bài kế tiếp sẽ Cao hay Thấp so với lá bài hiện tại (lá kết quả của lượt chơi gần nhất), khi đó số tiền thắng ở lượt dự đoán trước sẽ được tính như là tiền cược cho lượt chơi tiếp theo.",
            unfinishedGame:
                "Mỗi lượt dự đoán sẽ diễn ra trong vòng 2 phút. Hết thời gian mà người chơi không đưa ra dự đoán thì hệ thống sẽ:",
            firstTurn:
                "Với lượt chơi đầu tiên sau khi bấm “Bắt Đầu”, hệ thống sẽ tự động chọn kết quả ngẫu nhiên Cao hoặc Thấp và phiên chơi kết thúc.",
            otherTurns: "Với những lượt chơi khác, hệ thống sẽ tính như người chơi chọn “Ăn Non”.",
            arrangeCards: "Thứ tự các lá bài từ nhỏ đến lớn: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), Ace (A)",
            allTheSuits: "Không so chất (",
            heart: "",
            spade: "",
            diamond: "",
            andClub: "",
            equalValue: ") của lá bài.",
        },
    },
    payout: {
        title: "Trả thưởng",
        description: "Mỗi lượt dự đoán sẽ có mức thưởng khác nhau trên từng lựa chọn Cao/Thấp",
    },
};
