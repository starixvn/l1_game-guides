import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import { TreasureIslandLanguage } from "./types";

export const vi: TreasureIslandLanguage = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Treasure Island là một thể loại Slot game xếp tầng (Game xèng xếp tầng) trực tuyến đã trở nên cực kỳ phổ biến với người chơi vì nó mang lại nhiều cơ hội chiến thắng hơn so với các Slot game kiểu cũ. \
            Trò chơi bao gồm sáu cột, năm hàng và mười biểu tượng khác nhau.",
    },

    gameRules: {
        title: "Cách chơi",
        rulePlayerSelect: "Người chơi chọn hoặc điều chỉnh số tiền đặt cược phù hợp với mình trước khi nhấn nút “Quay”.",
        totalBet: "Tổng Cược",
        paylinesFormular: "=  Giá Trị Xu * Mức Cược * Hệ Số Cược",
        subDescriptions: [
            "1. Giá Trị Xu là số tiền cược mà bạn muốn chi trả cho mỗi dòng trong trò chơi.",
            "2. Mức Cược là tổng số đồng xu trên mỗi dòng.",
            "3. Hệ Số Cược là hệ số nhân để tính Tổng Cược bằng cách nhân với Mức Cược và Giá Trị Xu. Hệ Số Cược: 20x.",
        ],
        ruleStartSpin: "Người chơi có thể nhấn nút Quay hoặc sử dụng phím Spacebar/Enter để bắt đầu vòng quay.",
        ruleWin: "Tổng số các biểu tượng giống nhau trên màn hình khi kết thúc một vòng quay sẽ xác định giá trị của tiền thắng.",
        betLimit: "Giới hạn cược:",
    },

    payout: {
        title: "Trả Thưởng",
        description1: [
            "Biểu tượng được thanh toán ở bất kỳ vị trí nào trên màn hình.",
            "Thắng-thua của mỗi tổ hợp sẽ được tính dựa trên mức tiền cược cơ bản.",
        ],
        baseBetValue: "Tiền Cược Cơ Bản = Mức Cược * Giá Trị Xu",
        description2: "Bảng trả thưởng sẽ được cập nhật theo giá trị của mức tiền cược cơ bản mà bạn đã chọn.",
        description3(currMaxBet: number) {
            return [
                "Tổng số tiền thắng cược sẽ được cộng ngay vào tài khoản của người chơi khi phiên kết thúc.",
                `Số tiền thắng tối đa của một phiên là ${currMaxBet}X tiền cược. Nếu tổng số tiền thắng của một phiên đạt mức tối đa thì phiên chơi sẽ ngay lập tức kết thúc. \
                Tổng số tiền thắng sẽ được trả đến mức thắng tối đa, các tính năng còn lại sẽ không được tính vào số tiền thắng cuối cùng.`,
            ];
        },
    },

    examplePayout: {
        content: "<strong> Ví dụ:</strong> Mức tiền cược cơ bản của bạn là",
        table: {
            headers: ["Biểu Tượng", "Mô tả"],
            getHavingSymbol(symbol: string) {
                return `Nếu có ${symbol} biểu tượng `;
            },
            descriptionContent: "xuất hiện trên bảng kết quả.",
            payout: "Tiền thắng =",
        },
    },

    tumbling: {
        title: "Tính năng Nổ Sập",
        descriptions: [
            "Sau mỗi lần quay, các tổ hợp thắng được trả thưởng và tất cả biểu tượng chiến thắng biến mất, các biểu tượng còn lại rơi xuống cuối màn hình và cho phép các biểu tượng mới rơi vào vị trí trống.",
            "Nổ Sập sẽ tiếp tục cho đến khi không còn tổ hợp chiến thắng nào xuất hiện.",
            "Số lần Nổ Sập có thể xảy ra là không giới hạn.",
        ],
    },

    multipliers: {
        title: "Số Nhân",
        descriptions: [
            "Các biểu tượng Số Nhân xuất hiện ở vị trí bất kì trên màn hình và người chơi có thể trúng ngẫu nhiên trong cả vòng quay và lượt Nổ Sập.",
            "Biểu tượng Số Nhân xuất hiện sẽ nhận một giá trị số nhân ngẫu nhiên từ 2x đến 500x.",
            "Kết thúc các lượt Nổ Sập, giá trị của các biểu tượng Số Nhân trên màn hình được cộng lại với nhau và nhân với giá trị Thắng Nổ Sập để tính toán kết quả thắng cuối cùng.",
        ],
    },

    exampleMultipliers: {
        title: "Ví dụ:",
        tableHeader: ["Biểu Tượng Thắng", "Thắng Nổ Sập", "Số Nhân", "Thắng"],
    },

    freeSpin: {
        title: "Free Spin",
        define: "Free Spins hay còn được gọi là lượt quay miễn phí, người chơi sẽ được thưởng Free Spins khi có 4 biểu tượng SCATTER trở lên xuất hiện ở bất kỳ vị trí nào trên màn hình.",
        subDescriptions: {
            tableHeader: ["Biểu Tượng", "Mô Tả"],
            getSymbolOrMore(symbol: string) {
                return `Nếu có <strong>${symbol}</strong> hoặc nhiều hơn <strong>${symbol}</strong> biểu tượng Scatter trong kết quả.`;
            },
            getSymbol(symbol: string) {
                return `Nếu có <strong>${symbol}</strong> biểu tượng Scatter trong kết quả.`;
            },
            getFreeSpin(count: number) {
                return `Bạn nhận ${count} lượt quay miễn phí.`;
            },
        },
        getMoreFreeSpin(value: number) {
            return `Trong lượt Free Spins, nếu có 4 hoặc nhiều hơn 4 biểu tượng SCATTER xuất hiện ở bảng kết quả, người chơi sẽ được thưởng thêm ${value} lượt Free Spins.`;
        },
        totalMultiplier:
            "Trong phiên của Free Spins, khi xuất hiện biểu tượng Số Nhân và kết quả Nổ Sập là thắng, giá trị Số Nhân sẽ được cộng dồn vào Tổng Số Nhân. \
            Giá trị Tổng Số Nhân được sử dụng để tính toán tiền thưởng.",
        freeSpin24h:
            "Người chơi phải hoàn tất các lượt quay miễn phí trong vòng 24 tiếng tính từ thời điểm trúng Free Spin, sau khoảng thời gian này, các lượt quay chưa sử dụng sẽ bị hủy.",
    },

    exampleFreeSpin: {
        title: "Ví dụ: Người chơi thắng 4 lượt <strong>Free Spins</strong>",
        table: {
            headers: ["Phiên", "Thắng Nổ Sập", "Số Nhân", "Tổng Số Nhân", "Thắng"],
            round1Win: "<strong>50</strong><br/><strong>(Thắng Nổ Sập * Tổng Số Nhân)</strong>",
            round2Win: "<strong>5</strong><br/><strong>(Thắng Nổ Sập)</strong>",
            round4Win: "<strong>56</strong><br/><strong>(Thắng Nổ Sập * Tổng Số Nhân)</strong>",
        },
        tumbleDescriptions: ["1. Tiền Thắng Nổ Sập", "2. Tổng Số Nhân: 5+3 = 8"],
    },
    termsAndConditions: baseTermAndConditionVi,
};
