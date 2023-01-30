import { IKenoTranslationResource } from "./types";
export const vi: IKenoTranslationResource = {
    introduction: {
        title: "Giới thiệu",
        description:
            "Mega Keno / Mega Keno 2 / Keno Đông / Keno Tây / Keno Nam / Keno Bắc là phiên bản RNG Keno với 80 bóng. Hệ thống sẽ lấy ngẫu nhiên 20 quả bóng trong số 80 quả bóng được đánh số từ 1 đến 80. Người chơi sẽ đặt cược và dự đoán tổng điểm của 20 quả bóng này.",
    },
    gameRules: {
        title: "Cách chơi",
        description: {
            lines: [
                "Người chơi nhấp vào lựa chọn mong muốn và hoàn tất việc đặt cược trước khi hết thời gian quy định.",
                "Hệ thống sẽ chọn ngẫu nhiên 20 quả bóng. Nếu tổng điểm của 20 quả bóng được chọn có kết quả trùng với lựa chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.",
            ],
            maximum:
                "Người chơi có thể đặt cược vào nhiều lựa chọn và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1 phiên là {0}. <b>Lưu ý</b>, không thể hủy cược sau khi đặt.",
            otherLine:
                "Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, kết quả sẽ được hiển thị.",
        },
    },
    bettingOptions: {
        title: "Luật chơi",
        bigSmall: {
            title: "Cược Tài/Xỉu",
            descriptions: [
                "<b>Tài:</b> tổng điểm của 20 quả bóng được rút >= 811",
                "<b>Xỉu:</b> tổng điểm của 20 quả bóng được rút <= 810",
            ],
            winningText: "Cược vào TÀI thắng.",
        },
        oddEven: {
            title: "Cược Chẵn/Lẻ",
            descriptions: [
                "<b>Lẻ:</b> tổng điểm của 20 trái bóng được rút là một số lẻ.",
                "<b>Chẵn:</b> tổng điểm của 20 trái bóng được rút là một số chẵn.",
            ],
            winningText: "Cược vào CHẴN thắng.",
        },
        fiveElement: {
            title: "Cược Ngũ hành (Kim/Mộc/Thủy/Hỏa/Thổ)",
            descriptions: [
                "<b>Kim:</b> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 210 đến 695",
                "<b>Mộc:</b> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 696 đến 763",
                "<b>Thủy:</b> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 764 đến 855",
                "<b>Hỏa:</b> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 856 đến 923",
                "<b>Thổ:</b> tổng điểm của 20 quả bóng được rút ra nằm trong khoảng 924 đến 1410",
            ],
            winningText: "Cược vào MỘC thắng.",
        },
        example: {
            description: "<b>Ví dụ:</b> 20 quả bóng được lấy ngẫu nhiên gồm các số: ",
            drawResult: "Kết Quả",
            totalSum: "Tổng điểm",
        },
    },
    payouts: {
        title: "Trả thưởng",
        descriptions: ["Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.", "Tiền thắng đã bao gồm tiền cược."],
        options: "Lựa Chọn",
        odds: "Tỷ Lệ Trả Thưởng",
        betLimit: "Giới Hạn Cược ",
        min: "Min",
        max: "Max",
        big: "Tài",
        small: "Xỉu",
        odd: "Lẻ",
        even: "Chẵn",
        gold: "Kim",
        wood: "Mộc",
        water: "Thủy",
        fire: "Hỏa",
        earth: "Thổ",
    },
    md5: {
        example: "<b>Ví dụ:</b> Kiểm tra tính minh bạch trong kết quả",
        step1: "<b>Bước 1:</b> Copy chuỗi MD5 trước khi kết quả  được công bố.",
        image1: "/static/images/mega-keno/md5_step1_vi.png",
        step2: "<b>Bước 2:</b> Copy chuỗi dữ liệu trong mục Kết Quả sau khi kết quả được công bố.",
        image2: "/static/images/mega-keno/md5_step2_vi.png",
        step3: `<b>Step 3:</b> Truy cập <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> và dán Kết Quả vừa copy vào ô MD5.`,
        step4: "<b>Bước 4:</b> Bấm nút “hash, darling hash!”.  So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước 1.",
        note: "Trong đó 363 là tổng điểm của các quả bóng.",
        md5Key: "Chuỗi MD5",
        result: "Kết Quả",
        copy: "Copy",
    },
};
