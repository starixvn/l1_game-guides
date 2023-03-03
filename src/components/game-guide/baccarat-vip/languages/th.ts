import { baccaratResourcesTh } from "../../baccarat/languages/th";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const vipBaccaratResourcesTh: IBaseBaccaratResources = {
    ...baccaratResourcesTh,
    ...{
        introduction: {
            header: "บทนำ",
            content:
                "VIP บาคาร่า เป็นรุ่นปรับปรุงของบาคาร่าพร้อมวงเงินเดิมพันที่สูงขึ้น เกมนี้เล่นด้วยสำรับไพ่มาตรฐาน 52 ใบ (ไม่รวม Joker) มีตัวเลือกการเดิมพัน 7 แบบและผู้เดิมพันสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม",
        },
    },
};
