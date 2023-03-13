import { ILuckyWheelTranslationResource } from "./types";

export const vi: ILuckyWheelTranslationResource = {
    introduction: "Thể lệ chương trình",
    promotionProgram: {
        title: "Thể lệ vòng quay",
        scoin: "Người chơi sử dụng lượt quay để tham gia Vòng Quay May Mắn. Với mỗi lượt quay, người chơi sẽ có cơ hội nhận được các giải thưởng bằng tiền Scoin",
        description: [
            "Kết quả giải thưởng sẽ được công bố ngay khi lượt quay kết thúc.",
            "Các lượt quay may mắn đều có thời hạn hiệu lực, khi hết hạn, toàn bộ lượt quay còn lại sẽ bị mất.",
            "<strong>Lưu ý:</strong> Không giới hạn số lượt quay mỗi ngày.",
        ],
    },
    gameRules: {
        title: "Cách thức nhận thưởng",
        description: [
            "Tiền thưởng Scoin sẽ tự động được cộng vào ví Scoin của bạn.",
            "Người chơi dùng Scoin trúng thưởng để tham gia chơi Xóc Đĩa trong Vgaming. Số tiền thắng có được sau khi chơi sẽ được cộng vào tài khoản chính của người chơi.",
        ],
        note: {
            content: "Lưu ý:",
            description: [
                "Scoin không được quy đổi thành tiền mặt.",
                "Scoin chỉ áp dụng cho Xóc Đĩa, với những game khác, tiền cược sẽ được trừ trực tiếp vào tài khoản chính.",
            ],
        },
    },
    termsAndConditions: {
        title: "Quy định",
        line1: "",
        description: [
            "Công ty có quyền hủy hoặc làm mất hiệu lực các lượt quay may mắn trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.",
            "Công ty có quyền hủy bỏ kết quả Vòng Quay May Mắn hoặc không công nhận các lượt chơi miễn phí nếu phát hiện người chơi có dấu hiệu gian lận.",
            "Công ty có quyền thay đổi nội dung chương trình, cơ cấu giải thưởng tại bất kỳ thời điểm nào mà không cần thông báo trước.",
            "Trong mọi trường hợp xảy ra tranh chấp, quyết định của Công ty sẽ là quyết định cuối cùng.",
        ],
    },
};
