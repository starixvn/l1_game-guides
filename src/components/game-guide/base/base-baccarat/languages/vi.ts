import { baseTermAndConditionVi } from "../../terms-and-conditions/languages/vi";
import { IBaseBaccaratResources } from "./types";

export const baseBaccaratResourcesVi: IBaseBaccaratResources = {
    introduction: {
        header: "",
        content: "",
    },
    gameRules: {
        header: "Cách chơi",
        details: [],
        table: {
            header: {
                options: "Lựa Chọn",
                descriptions: "Thắng",
            },
            contents: [
                {
                    choice: "Nhà Cái",
                    rule: "Nhà Cái có điểm số cao hơn Nhà Con.",
                },
                {
                    choice: "Nhà Con",
                    rule: "Nhà Con có điểm số cao hơn Nhà Cái.",
                },
                {
                    choice: "Hòa",
                    rule: "Nhà Cái và Nhà Con có điểm số bằng nhau.",
                },
                {
                    choice: "Con Đôi",
                    rule: "Nếu 2 lá bài ban đầu của Nhà Con là đôi (không cần đồng màu).",
                },
                {
                    choice: "Cái Đôi",
                    rule: "Nếu 2 lá bài ban đầu của Nhà Cái là đôi (không cần đồng màu).",
                },
                {
                    choice: "Tài",
                    rule: "Phiên kết thúc với tổng số lá bài của Nhà Con và Nhà Cái từ 5 đến 6 lá.",
                },
                {
                    choice: "Xỉu",
                    rule: "Phiên kết thúc với tổng số lá bài của Nhà Con và Nhà Cái là 4 lá.",
                },
            ],
        },
    },
    pointRules: {
        header: "Quy tắc tính điểm",
        descriptions: {
            paragraph1: {
                cardPointValues: "Điểm số các lá bài sẽ được tính như sau:",
                details: [
                    "Các lá bài từ 2 đến 9 có giá trị tùy theo số trên mỗi lá bài; lá A được tính là 1 điểm.",
                    "Các lá 10, J, Q, K được tính là 0 điểm.",
                ],
            },
            paragraph2: "Tổng điểm các lá bài sẽ được tính dựa trên con số ở hàng đơn vị.",
        },
        examples: {
            firstTwoCard: "Hai lá bài đầu",
            thirdCard: "Lá thứ ba",
            totals: "Điểm số",
            basedTotal: "Tổng điểm tính theo Cào Baccarat",
        },
    },
    thirdCardRules: {
        header: "Quy tắc rút bài",
        descriptions: [
            "Dựa trên tổng điểm của 2 lá bài được chia ban đầu, hệ thống sẽ quyết định việc rút lá bài thứ ba cho Nhà Con và Nhà Cái.",
            "Nhà Con sẽ luôn là bên sẽ rút bài đầu tiên. Quy tắc rút bài của Nhà Cái sẽ tùy thuộc vào lá bài thứ ba của nhà Con.",
            "Nếu một trong hai bên được 8 hay 9 điểm với 2 lá ban đầu. Khi đó 2 bên sẽ không rút lá bài thứ ba. Hệ thống sẽ so điểm để phân định thắng thua.",
            "Nếu Nhà Con hoặc Nhà Cái giành chiến thắng với tổng điểm 2 lá bài đầu là 8 hoặc 9 điểm, khi đó sẽ được gọi là “Thắng tự nhiên”.",
        ],
        playerHand: {
            header: "Quy tắc rút bài Nhà Con",
            cardsTotal: "Tổng điểm 2 lá bài đầu tiên",
            action: "Hành động",
            examples: [
                {
                    twoCardsTotal: "Từ 0 đến 5",
                    action: "Nhà Con rút bài.",
                },
                {
                    twoCardsTotal: "6 hoặc 7",
                    action: "Không rút thêm bài.",
                },
                {
                    twoCardsTotal: "8 hoặc 9",
                    action: "Không rút thêm bài (cả 2 bên Nhà Con và Nhà Cái). So điểm, bên nào cao bên đấy thắng.",
                },
            ],
        },
        bankerHand: {
            header: "Quy tắc rút bài Nhà Cái",
            firstDescription: "If the Player hand gets the third card then the Banker draws a third card according to the following rules:",
            cardsTotal: "Tổng điểm 2 lá bài đầu tiên",
            action: "Nhà Cái được rút khi lá thứ ba của Nhà Con là:",
            examples: [
                {
                    twoCardsTotal: "Từ 0 đến 2",
                    action: "Luôn được rút bài bất kể lá thứ ba của Nhà Con là gì.",
                },
                {
                    twoCardsTotal: "3",
                    action: "Không phải lá 8",
                },
                {
                    twoCardsTotal: "4",
                    action: "2, 3, 4, 5, 6 hoặc 7",
                },
                {
                    twoCardsTotal: "5",
                    action: "4, 5, 6 hoặc 7",
                },
                {
                    twoCardsTotal: "6",
                    action: "6 hoặc 7",
                },
                {
                    twoCardsTotal: "7",
                    action: "Không rút thêm bài.",
                },
                {
                    twoCardsTotal: "8 hoặc 9",
                    action: "Không rút thêm bài (cả 2 bên Nhà Con và Nhà Cái). So điểm, bên nào cao bên đấy thắng.",
                },
            ],
            secondDescription: [
                "Nếu tổng điểm 2 lá bài của Nhà Con trong khoảng 6 - 7 điểm thì Nhà Cái sẽ luôn rút thêm bài nếu Nhà Cái có tổng điểm từ 0 đến 5.",
                "Trường hợp Nhà Cái và Nhà Con đều có tổng điểm 2 lá bài trong khoảng 6 - 7 điểm, khi đó 2 bên sẽ không rút lá thứ ba. Hệ thống sẽ so điểm để phân định thắng thua.",
            ],
        },
    },
    payouts: {
        header: "Trả thưởng",
        descriptions: {
            details: ["Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.", "Giới hạn cược và tỷ lệ trả thưởng: "],
            noted: "",
            options: "Lựa Chọn",
            odds: "Tỷ Lệ Trả Thưởng",
            betLimit: "Giới Hạn Cược (Min - Max)",
            player: "Nhà Con",
            banker: "Nhà Cái",
            big: "Tài",
            small: "Xỉu",
            tie: "Hòa",
            playerPair: "Con Đôi",
            bankerPair: "Cái Đôi",
        },
    },
    termsAndConditions: baseTermAndConditionVi,
};
