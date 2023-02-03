import { ISlotTranslationResource } from "../types";

export const vi: ISlotTranslationResource = {
    gameRule: {
        title: "Cách chơi",
        description: {
            line1: "Người chơi chọn Mức Cược và thiết lập số Dòng Cược mà bạn muốn đặt trước khi bấm “Quay”.",
            totalBet: "Tổng tiền cược",
            paylinesFormular: "= Mức Cược * Số Dòng Cược",
            subDescriptions: [
                "Có 25 dòng cược được đánh số từ 1 đến 25 và người chơi phải chọn ít nhất một dòng cược để bắt đầu chơi.",
                "Mặc định 25 dòng cược cùng mức cược nhỏ nhất sẽ được chọn khi người chơi mở game.",
                "Thắng thua trên mỗi dòng cược sẽ được tính dựa trên số lượng các biểu tượng giống nhau nằm trên dòng cược đó.",
            ],
        },
    },
    payOut: {
        paytable: "Trả thưởng",
        winningAmount: "Mỗi biểu tượng sẽ có tỷ lệ trả thưởng tương ứng khác nhau.",
        note: "Lưu ý",
        initialStake: "Tỷ lệ trả thưởng đã bao gồm tiền cược.",
        allWinningAmount: "Tiền thắng cược sẽ được cộng vào tài khoản người chơi ngay khi kết quả được công bố.",
    },
    examplePayout: {
        title: "Ví dụ",
        table: {
            symbolHeader: "Biểu Tượng",
            descriptionHeader: "Mô Tả",
            having5Symbols: "Nếu có 5 biểu tượng",
            samePayline: "trên cùng Dòng Cược",
            payoutBetLevel: "Tiền thắng = Mức Cược *",
            having3Symbols: "Nếu có 3 biểu tượng",
            having4Symbols: "Nếu có 4 biểu tượng",
        },
    },
    freeSpin: {
        title: "Free Spin",
        description1:
            "Free Spin hay còn gọi là lượt quay miễn phí, người chơi sẽ nhận được số lượt quay miễn phí tương ứng với số biểu tượng “Free Spin” quay được.",
        description2: "Các biểu tượng “Free Spin” không bắt buộc phải nằm trên cùng một dòng cược.",
        freeSpinBonus: "Free Spins Bonus.",
        note: "Lưu ý",
        freeSpinReel:
            "Các biểu tượng “Free Spin” phải nằm trên các cột khác nhau. Ví dụ, nếu có 3 biểu tượng “Free Spin” nằm trên cùng một cột, hệ thống sẽ tính là 1 biểu tượng.",
        thereAre4:
            "Có 4 biểu tượng “Free Spin” trong kết quả, nhưng do có 3 biểu tượng nằm trên cùng một cột. Người chơi không thỏa điều kiện nhận thưởng “Free Spin”.",
        lastFreespin:
            "Mức Cược, số Dòng Cược của lượt quay miễn phí sẽ bằng với Mức Cược và số Dòng Cược của lượt quay gần nhất (lượt quay mà người chơi trúng Free Spin).",
        freeSpinExpired:
            "Người chơi phải hoàn tất các lượt quay miễn phí trong vòng 24 tiếng tính từ thời điểm trúng Free Spin, sau khoảng thời gian này, các lượt quay chưa sử dụng sẽ bị hủy.",
    },
    bonus: {
        title: "Bonus",
        description1: "Người chơi sẽ nhận được cơ hội tham gia mở thưởng tương ứng với số biểu tượng Bonus",
        description2: "Các biểu tượng Bonus không bắt buộc phải nằm trên cùng một dòng cược.",
        canOpen: "Can open",
        itemInBonusGame: "items in Bonus Game.",
        note: "Lưu ý",
        bonusReel:
            "Các biểu tượng “Bonus” phải nằm trên các cột khác nhau. Ví dụ, nếu có 2 biểu tượng “Bonus” nằm trên cùng một cột, hệ thống sẽ tính là 1 biểu tượng.",
        thereAre4: "Có 4",
        eligible:
            "biểu tượng “Bonus” trong kết quả, nhưng do có 2 biểu tượng nằm trên cùng một cột. Người chơi chỉ nhận được 3 lần mở thưởng.",
        bonusExpired:
            "Người chơi sẽ có 2 phút để hoàn tất việc mở thưởng. Nếu sau 2 phút, người chơi vẫn không thể hoàn tất, hệ thống sẽ mở ngẫu nhiên các phần thưởng cho đến khi hết lượt. Kết quả sẽ được lưu trong mục Lịch sử phiên.",
    },
    wild: {
        title: "Wild",
        substitute: "Biểu tượng Wild có thể thay thế cho tất cả các biểu tượng khác, ngoại trừ",
        and: "và",
        endSubstitute: "",
        onlyHighest:
            "Người chơi sẽ nhận được mức trả thưởng cao nhất trên mỗi dòng cược trong trường hợp có được 2 nhóm biểu tượng cùng thỏa điều kiện thắng.",
        example: "Ví dụ",
        ifwild: "Nếu biểu tượng Wild thay thế",
        payoutBetLevel: "Trả thưởng = Mức Cược *",
        highestWin: "Người chơi sẽ nhận được mức trả thưởng cao nhất",
    },
    main: {
        introduction: "Giới thiệu",
        description:
            "Trò chơi gồm 3 hàng 5 cột, với tất cả 11 biểu tượng khác nhau. Người chơi sẽ thắng nếu có các biểu tượng giống nhau nằm trên cùng một dòng cược mà người chơi đã chọn.",
    },
};
