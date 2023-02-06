import { IPowerKenoTranslationResource } from "./types";

export const vi: IPowerKenoTranslationResource = {
    common: {
        bettypes: "Loại Cược",
        options: "Lựa Chọn",
        teamBlueRed: "Đội Xanh/Đội Đỏ",
        sumBigSmall: "Tổng Tài/Xỉu",
        sumEvenOdd: " Tổng Chẵn/Lẻ",
        teamBlueBigSmall: "Đội Xanh <br /> Tài/Xỉu",
        teamRedBigSmall: " Đội Đỏ <br /> Tài/Xỉu",
        teamBlue: "Đội Xanh",
        teamRed: "Đội Đỏ",
        big: "Tài",
        small: "Xỉu",
        odd: "Lẻ",
        even: "Chẵn",
    },
    main: {
        introduction: "Giới thiệu",
        description:
            "{0} chơi gồm 2 bộ số, một cho Đội Xanh và một cho Đội Đỏ, mỗi bộ gồm 80 số (từ 01 đến 80). Hệ thống sẽ rút\
            ngẫu nhiên 20 số (không trùng lặp) cho mỗi bên. Người chơi đặt cược và dự đoán tổng điểm của các số được rút cho mỗi\
            đội.",
    },
    gameRule: {
        title: "Cách chơi",
        details: [
            "Người chơi nhấp vào lựa chọn mong muốn và hoàn tất việc đặt cược trước khi hết thời gian quy định. ",
            "Bạn có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược.",
            "Tổng tiền cược tối đa cho 1 phiên là {0}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.",
        ],
        bettingOptions: {
            winningConditions: "Điều Kiện Thắng",
            teamBlueDescription: "Thắng nếu tổng điểm Đội Xanh > Đội Đỏ <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 bên bằng nhau.",
            teamRedDescription: "Thắng nếu tổng điểm Đội Xanh > Đội Đỏ<br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 bên bằng nhau.",
            sumBigDescription: "Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ >= 1621",
            sumSmallDescription: "Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ < 1621",
            sumEvenDescription: "Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ là số chẵn.",
            sumOddDescription: "Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ là số lẻ.",
            teamBlueBigDescription: "Thắng nếu tổng điểm của Đội Xanh >= 811",
            teamBlueSmallDescription: "Thắng nếu tổng điểm của Đội Xanh < 811",
            teamRedBigDescription: "Thắng nếu tổng điểm của Đội Đỏ >= 811",
            teamRedSmallDescription: "Thắng nếu tổng điểm của Đội Đỏ < 811",
        },
    },
    payOut: {
        title: "Trả thưởng",
        description1: "Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.",
        description2: "",
        description3: "Tỷ lệ cược đã bao gồm tiền vốn.",
        odds: "Tỷ Lệ Trả Thưởng",
        betLimit: "Hạn Mức Cược <br></br>(Min - Max)",
    },
    md5noted: "Trong đó  <span class={0}>899</span> là kết quả của Đội Xanh và <span class={1}>807</span> là kết quả Đội Đỏ",
};
