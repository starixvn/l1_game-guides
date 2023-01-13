import { baseBaccaratResourcesVi } from "../../base/base-baccarat/languages/vi";
import { IBlockchainBaccaratResources } from "./types";

export const vi: IBlockchainBaccaratResources = {
    ...baseBaccaratResourcesVi,
    ...{
        introduction: {
            header: "Giới thiệu",
            content:
                "Blockchain Baccarat -  một sản phẩm game bài mang nhiều đột phá với công nghệ blockchain tiên tiến. Trò chơi sử dụng 8 bộ bài (416 lá không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn.",
        },
        extendGameRules: {
            cutCard: {
                header: "Cut Card",
                description:
                    " Thẻ “Cut Card” sẽ được chèn ngẫu nhiên vào giữa 416 lá bài khi bắt đầu game. Vị trí thẻ “Cut Card” sẽ quyết định khi nào bài sẽ được xào lại.",
            },
            burnCard: {
                header: "Burn Card",
                description:
                    "“Burn Card” là hành động bỏ đi 1 số lá bài trước khi bắt đầu game. Số lá bài bị bỏ tùy thuộc vào giá trị “Burn Card” của lá đầu tiên trong 416 lá.",
                noted: " <strong>Lưu ý</strong>: lá đầu tiên cũng sẽ bị loại bỏ trong quá trình “Burn Card”",
                firstCard: "First Card",
                example: {
                    header: "<strong>Ví dụ</strong>",
                    descriptions: [
                        "Lá đầu tiên 5 => Có 6 lá bài sẽ bị loại bỏ trước khi chơi gồm lá đầu tiên và 5 lá kế tiếp",
                        "Lá đầu tiên K => Có 11 lá bài sẽ bị loại bỏ trước khi chơi gồm lá đầu tiên và 10 lá kế tiếp",
                    ],
                },
            },
        },
    },
};
