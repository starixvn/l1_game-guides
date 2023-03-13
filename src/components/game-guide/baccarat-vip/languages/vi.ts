import { baccaratResourcesVi } from "../../baccarat/languages/vi";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const vipBaccaratResourcesVi: IBaseBaccaratResources = {
    ...baccaratResourcesVi,
    ...{
        introduction: {
            header: "Giới thiệu",
            content:
                "Cào Baccarat VIP là phiên bản đặc biệt của trò Cào Baccarat, với hạn mức cược được nâng cấp, mở rộng. Trò chơi sử dụng bộ bài tây 52 lá (không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn.",
        },
    },
};
