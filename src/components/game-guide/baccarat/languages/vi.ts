import { ENVIRONMENT } from "../../../../common/constants";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";
import { baseBaccaratResourcesVi } from "../../base/base-baccarat/languages/vi";
import { IMd5Resources } from "../../base/md5/languages/types";
import { md5ResourcesVi } from "../../base/md5/languages/vi";

export const baccaratResourcesVi: IBaseBaccaratResources = {
    ...baseBaccaratResourcesVi,
    ...{
        introduction: {
            header: "Giới thiệu",
            content:
                "Baccarat - là phiên bản đặc biệt của trò Cào Baccarat, với hạn mức cược được nâng cấp, mở rộng. Trò chơi sử dụng bộ bài tây 52 lá (không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược vào lựa chọn mong muốn.",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesVi.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = [
                    "Hai cửa Nhà Con và Nhà Cái, mỗi cửa sẽ được chia trước 2 lá bài. Bài sẽ được chia theo thứ tự Nhà Con trước.",
                ];

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "Hai lá bài thứ ba cũng sẽ được rút sẵn sau khi kết thúc chia hai lá bài cho Nhà Con và Nhà Cái.",
                        "Các lá bài được chia được đánh số từ một đến sáu tương ứng với thứ tự được chia của mỗi lá bài.",
                    ]);
                }

                details = details.concat([
                    "Người chơi đặt cược và dự đoán cửa nào sẽ thắng.",
                    "Người chơi cũng có thể đặt cược vào lựa chọn Hòa nếu dự đoán 2 cửa Nhà Con và Nhà Cái có kết quả bằng nhau hoặc có thể đặt vào các cửa phụ như Tài, Xỉu, Con Đôi, Cái Đôi.",
                    `Tùy thuộc vào tổng điểm của 2 lá bài được chia ban đầu, mỗi bên sẽ giữ nguyên các lá bài hoặc ${
                        environment === ENVIRONMENT.sc ? "mở" : "rút"
                    } thêm lá bài thứ ba`,
                ]);

                if (environment === ENVIRONMENT.sm) {
                    details = details.concat(["Lá bài thứ ba sẽ được rút sau khi hết thời gian đặt cược."]);
                }

                return details.concat([
                    "Trò chơi sẽ phân định thắng thua bằng cách so sánh tổng điểm của các lá bài ở mỗi cửa. Trong đó 9 là số điểm cao nhất và 0 là điểm số thấp nhất.",
                    ` Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1 phiên là ${maxBetMain}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt. `,
                    "Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi.",
                    "Bộ bài 52 lá (không bao gồm lá Joker) sẽ được sử dụng khi bắt đầu phiên mới",
                ]);
            },
        },
    },
};

export const md5BaccaratResourcesVi: IMd5Resources = {
    ...md5ResourcesVi,
    ...{
        example: {
            ...md5ResourcesVi.example,
            ...{
                step1ImageUrl: "/static/images/baccarat/md5_step1_en.png?v=1",
                step2ImageUrl: "/static/images/baccarat/md5_step2_en.png?v=1",
                step3ImageUrl: "/static/images/baccarat/md5_step3_en.png?v=1",
                step4ImageUrl: "/static/images/baccarat/md5_step4_en.png?v=1",
                step2Noted1Text: "Từ trái sang phải,",
                step2Noted2Text: "tương ứng với thứ tự được chia của mỗi lá bài khi bắt đầu phiên.",
            },
        },
    },
};
