import { IBaccaratMiniTranslationResource } from "./types";

export const vi: IBaccaratMiniTranslationResource = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Cào Baccarat sử dụng bộ bài tây 52 lá (không bao gồm lá Joker) và sẽ có 3 lựa chọn Nhà Con, Nhà Cái, Hòa. Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn. ",
    },
    gameRule: {
        title: "Cách chơi",
        description: {
            byDefault:
                "Khi bắt đầu phiên, mặc định 6 lá bài sẽ được rút, trong đó hai cửa Nhà Con và Nhà Cái, mỗi cửa sẽ được chia 2 lá bài. Bài sẽ được chia theo thứ tự Nhà Con trước.",
            theThirdCard: " Lá thứ ba sẽ được chia tùy thuộc vào tổng điểm của 2 lá bài được chia ban đầu.",
            theGameDetermines:
                "Trò chơi sẽ phân định thắng thua bằng cách so sánh tổng điểm của các lá bài ở mỗi cửa. Trong đó 9 là số điểm cao nhất và 0 là điểm số thấp nhất.",
            theCards: "Tổng tiền cược tối đa cho một phiên là {0} và bài sẽ được xào lại khi bắt đầu phiên mới.",
        },
    },
    payouts: {
        title: "Trả thưởng",
        description: {
            thePayout: "Tiền thắng đã bao gồm tiền cược.",
            note: "Trong trường hợp kết quả Hòa, người chơi sẽ được hoàn lại số tiền cược đặt vào 2 cửa Nhà Con, Nhà Cái.",
        },
        table: {
            header: {
                options: "Lựa Chọn",
                betLimit: "Hạn Mức Cược ",
            },
            rows: {
                player: "Nhà Con",
                banker: "Nhà Cái",
                tie: "Hòa",
            },
        },
    },
};
