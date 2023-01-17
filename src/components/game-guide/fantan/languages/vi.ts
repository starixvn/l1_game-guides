import { IFanTanTranslationResource } from "./types";
export const vi: IFanTanTranslationResource = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Fan Tan là trò casino có nguồn gốc từ Châu Á. Trò chơi sử dụng 150 hạt màu trắng, có 14 cửa cược trên bàn game. Người chơi sẽ đặt cược và dự đoán kết quả cửa thắng. ",
    },
    gameRules: {
        title: "Cách chơi",
        description:
            "Khi bắt đầu phiên, nhà cái sẽ dùng một cái bát và lấy ngẫu nhiên số hạt trên bàn. Khi hết thời gian đặt cược, số hạt có trong bát sẽ được chia thành từng nhóm, mỗi nhóm 4 hạt cho đến khi số hạt còn lại nhỏ hơn hoặc bằng 4 và đây sẽ chính là kết quả thắng thua của phiên đó.",
        example: {
            title: "Ví du",
            resultDetails: [
                "Số hạt lấy ngẫu nhiên là 30. Chia các hạt thành từng nhóm, mỗi nhóm 4 hạt:<p>7 x 4 + 2 = 30. Số hạt còn lại là 2 => Kết quả của phiên là 2</p>",
                "Số hạt lấy ngẫu nhiên là 40. Chia các hạt thành từng nhóm, mỗi nhóm 4 hạt:<p>9 x 4 + 4 = 40. Số hạt còn lại là 4 => Kết quả của phiên là 4</p>",
            ],
            haveOptions: "Có tất cả 14 cửa cược để lựa chọn:",
            descriptions: [
                "Người chơi lựa chọn mệnh giá chip phù hợp và nhấp vào cửa cược mong muốn.",
                "<b>Lưu ý:</b>  không thể hủy cược sau khi đặt.",
                "Người chơi có thể đặt cược ở bất kì cửa cược có sẵn trên bàn; ngoại trừ cửa cược Chẵn và Lẻ, chỉ có thể cược vào một trong hai cửa cược này.",
            ],
            maxBet: "Tổng tiền cược tối đa cho một phiên là {0}",
        },
        winningCondition: {
            odd: "Số hạt còn lại là số Lẻ",
            even: "Số hạt còn lại là số Chẵn",
            fan1: "Số hạt còn lại là 1",
            fan2: "Số hạt còn lại là 2",
            fan3: "Số hạt còn lại là 3",
            fan4: "Số hạt còn lại là 4",
            kwok12: "Số hạt còn lại là 1 hoặc 2",
            kwok23: "Số hạt còn lại là 2 hoặc 3",
            kwok34: "Số hạt còn lại là 3 hoặc 4",
            kwok41: "Số hạt còn lại là 1 hoặc 4",
            chun234: "Số hạt còn lại là 2, 3 hoặc 4",
            chun134: "Số hạt còn lại là 1, 3 hoặc 4",
            chun124: "Số hạt còn lại là 1, 2 hoặc 4",
            chun123: "Số hạt còn lại là 1, 2 hoặc 3",
        },
    },
    table: {
        betType: "Loại Cược",
        betOption: "Cửa Cược",
        winningCondition: "Điều Kiện Thắng",
        odds: "Tỷ Lệ Trả Thưởng ",
        betLimit: "Giới Hạn Cược (Min-Max)",
        oddEven: "Chẵn Lẻ",
        odd: "Chẵn",
        even: "Lẻ",
        fan: "Fan",
        fan1: "1 Fan",
        fan2: "2 Fan",
        fan3: "3 Fan",
        fan4: "4 Fan",
        kwok: "Kwok",
        chun: "Chun",
    },
    payouts: {
        title: "Trả thưởng",
        descriptions: ["Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.", "Tiền thắng đã bao gồm tiền cược."],
    },
    md5: {
        example: "<b> Ví dụ:</b> Kiểm tra tính minh bạch của kết quả",
        note: "Trong đó 40 tương ứng với số hạt được lấy ngẫu nhiên khi bắt đầu phiên.",
        step1: "<b>Bước 1:</b> Copy chuỗi MD5 trước khi kết quả  được công bố.",
        step2: "<b>Bước 2:</b> Copy chuỗi dữ liệu trong mục Kết Quả sau khi kết quả được công bố.",
        step3: `<b>Step 3:</b> Truy cập <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> và dán Kết Quả vừa copy vào ô MD5.`,
        step4: "<b>Bước 4:</b> Bấm nút “hash, darling hash!”.  So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước 1.",
    },
};
