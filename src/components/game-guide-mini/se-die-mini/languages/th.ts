import { ISeDieMiniTranslationResource } from "./types";

export const th: ISeDieMiniTranslationResource = {
    introduction:
        "Mini Se Die เล่นด้วยปุ่มสี 4 ปุ่ม แต่ละปุ่มมีสองด้านเป็นสีแดงและสีขาว วัตถุประสงค์ของเกมส์นี้คือการทายผลลัพธ์ของปุ่ม 4 ปุ่ม",
    winningCondition: {
        title: "เงื่อนไขการชนะ",
        description: {
            odd: "คี่: หากปุ่มสีแดงหรือสีขาวทั้งหมดที่มีในผลลัพธ์เป็นเลขคี่",
            even: "คู่: หากปุ่มสีแดงหรือสีขาวทั้งหมดที่มีในผลลัพธ์เป็นเลขคู่",
            otherBet: "ตัวเลือกการเดิมพันอื่น ๆ เช่น",
            ifThe: "หากผลการแข่งขันตรงกับการเดิมพันของผู้เล่น ผู้เล่นจะชนะ",
        },
    },
    betLimit: {
        title: "วงเงินเดิมพัน",
        description: "เงินเดิมพันทั้งหมดสูงสุดต่อรอบคือ {0}",
        table: {
            header: {
                options: "ตัวเลือก",
                betLimit: "วงเงินเดิมพัน",
            },
            rows: {
                oddEven: "คี่/คู่",
                or: "หรือ",
            },
        },
    },
};
