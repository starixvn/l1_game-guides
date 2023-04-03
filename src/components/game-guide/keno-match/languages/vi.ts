import { IPowerSoccerTranslationResource } from "./types";

export const vi: IPowerSoccerTranslationResource = {
    common: {
        bettypes: "Loại Cược",
        options: "Lựa Chọn",
        teamBlue: "Đội Xanh",
        teamRed: "Đội Đỏ",
        odd: "Lẻ",
        even: "Chẵn",
        firstHalf: "Hiệp 1",
        fullTime: "Toàn trận",
        fullTimeLive: "Toàn trận (Live)",
        over: "Tài",
        under: "Xỉu",
    },
    main: {
        introduction: "Giới thiệu",
        description:
            "{0} gồm 2 bộ số, một cho Đội Xanh và một cho Đội Đỏ, mỗi bộ gồm 80 số (từ 01 đến 80). Hệ thống sẽ rút ngẫu\
            nhiên 20 số (không trùng lặp) cho mỗi đội, trong đó 10 số được rút cho “Hiệp 1” và 10 số được rút cho “Toàn Trận”.\
            Người chơi đặt cược và dự đoán tổng điểm của các số được rút cho mỗi đội.",
    },
    gameRule: {
        title: "Cách chơi",
        details: [
            "Người chơi nhấp vào lựa chọn mong muốn và hoàn tất việc đặt cược trước khi hết thời gian quy định. ",
            "Bạn có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược.",
            "Tổng tiền cược tối đa cho 1 phiên là {0}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.",
        ],
        bettingOptions: {
            text: "Luật chơi",
            description1: "Mỗi phiên sẽ có 2 đợt mở số, đợt một dành cho kết quả “Hiệp 1”, đợt hai dành cho “Toàn trận”.",
            description2: "Người chơi có 2 khoảng thời gian đặt cược:",
            description3:
                "Đặt cược trước khi công bố kết quả Hiệp 1, bạn có thể đặt cược cho “Hiệp 1” và “Toàn trận”, áp dụng cho tất cả các loại cược. Tỷ lệ cược được cố định và giữ nguyên qua các phiên chơi.",
            description4:
                "<strong>Đặt cược Live</strong>: đặt cược ngay sau khi công bố kết quả 10 số được rút ngẫu nhiên trong “Hiệp 1”\
                cho “Đội Xanh” và “Đội Đỏ”. <strong>Lưu ý</strong>: bạn chỉ có thể đặt vào “Toàn trận”. Tỷ lệ cược sẽ thay đổi\
                dựa trên kết quả của “Hiệp 1”.",
            winningConditions: "Điều Kiện Thắng",

            firstHalfTeamBlueDescription:
                "Thắng nếu tổng điểm 10 số được rút cho Đội Xanh > Đội Đỏ. <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.",
            fullTimeTeamBlueDescription:
                "Thắng nếu tổng điểm (Toàn trận + Hiệp 1) cho Đội Xanh > Đội Đỏ. <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.",

            firstHalfTeamRedDescription:
                "Thắng nếu tổng điểm 10 số được rút cho Đội Đỏ > Đội Xanh. <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.",
            fullTimeTeamRedDescription:
                "Thắng nếu tổng điểm (Toàn trận + Hiệp 1) cho Đội Đỏ > Đội Xanh. <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.",

            firstHalfOverDescription: "Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội >= 811",
            fullTimeOverDescription: "Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội >= 1621",

            firstHalfUnderDescription: "Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội < 811",
            fullTimeUnderDescription: "Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội < 1621",

            firstHalfEvenDescription: "Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội là số chẵn.",
            fullTimeEvenDescription: "Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội là số chẵn.",

            firstHalfOddnDescription: "Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội là số lẻ",
            fullTimeOddDescription: "Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội là số lẻ.",
        },
    },
    payOut: {
        title: "Trả thưởng",
        description1: "",
        description2: "",
        description3: "Tỷ lệ cược đã bao gồm tiền vốn.",
        odds: "Tỷ Lệ Trả Thưởng",
        betLimit: "Hạn Mức Cược<br />(Min - Max)",
        firstHalfPayout: "a) Đặt cược trước khi công bố kết quả Hiệp 1",
        liveBettingPayout: {
            text: "b) Đặt cược Live",
            mainDescription: "Với loại cược <strong>Đội Xanh/Đỏ - Toàn trận (Live)</strong> và <strong>Tài/Xỉu - Toàn trận (Live)</strong>",
            description1: "Tỷ lệ cược sẽ thay đổi tùy vào kết quả “Hiệp 1” của 2 đội.",
            description2: "Hạn mức cược tối đa sẽ thay đổi tùy vào tỷ lệ cược.",
            highLightDescription1:
                "<strong>Đội Xanh/Đội Đỏ - Toàn trận (Live)</strong>: Tỷ lệ cược chỉ khả dụng khi tổng điểm chênh lệch trong “Hiệp 1” giữa Đội Xanh và Đội Đỏ từ -150 đến 150",
            highLightDescription2:
                "<strong>Tài/Xỉu - Toàn trận (Live)</strong>: Tỷ lệ cược chỉ khả dụng khi tổng điểm trong “Hiệp 1” của cả Đội Xanh và Đội Đỏ từ 661 đến 980",
            min: "Min",
            max: "Max",
            betLimit: "Hạn Mức Cược",
            maximumBetLimit: " Mức cược tối đa sẽ thay đổi tùy vào tỷ lệ cược.",
        },
    },
    md5noted: "Trong đó <span class={0}>363</span> là kết quả của Đội Xanh và <span class={1}>467</span> là kết quả Đội Đỏ trong Hiệp 1.",
};
