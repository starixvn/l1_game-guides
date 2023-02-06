import { IDragonTigerMiniTranslationResource } from "./types";
export const vi: IDragonTigerMiniTranslationResource = {
    introduction:
        "Rồng Hổ sử dụng bộ bài tây 52 lá (không bao gồm lá Joker) và sẽ có 3 lựa chọn Rồng, Hổ và Hòa. Người chơi dự đoán kết quả và đặt cược vào lựa chọn mà bạn mong muốn.",
    winningCondition: {
        title: "Điều kiện thắng",
        description: {
            ruleDrawCards: "Hai cửa Rồng và Hổ, mỗi cửa sẽ được chia 1 lá bài.",
            winOption: ["Rồng, Hổ: bên nào có điểm số cao hơn bên đó thắng.", "Hòa: người chơi thắng nếu điểm số của Rồng bằng Hổ."],
            compareCardValue: "Điểm số các lá bài trong Rồng Hổ (không so chất của lá bài).",
            cardPointValues: "",
            cardValues: [
                "Các lá bài từ 2 đến 10 có giá trị tùy theo số trên mỗi lá bài.",
                "Lá A được tính là 1 điểm; lá J là 11 điểm, lá Q là 12 điểm và K là 13.",
            ],
            shuffleCard: "Bài sẽ được xào lại khi bắt đầu phiên mới.",
        },
    },
    betLimit: {
        title: "Hạn mức cược",
        maxBetRound: "Tổng tiền cược tối đa cho 1 phiên là {0}.",
        tieResult: "Người chơi sẽ mất 50% số tiền cược đặt vào 2 cửa Rồng, Hổ nếu kết quả Hòa.",
        table: {
            headers: ["Lựa Chọn", "Hạn mức cược"],
            dragon: "Rồng",
            tiger: "Hổ",
            tie: "Hòa",
        },
    },
};
