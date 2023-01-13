import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesTh } from "../../base/base-baccarat/languages/th";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const th: IBaseBaccaratResources = {
    ...baseBaccaratResourcesTh,
    ...{
        introduction: {
            header: "บทนำ",
            content:
                "VIP baccarat - เป็นรุ่นปรับปรุงของบาคาร่าพร้อมวงเงินเดิมพันที่สูงขึ้น เกมนี้เล่นด้วยสำรับไพ่มาตรฐาน 52 ใบ (ไม่รวม Joker) มีตัวเลือกการเดิมพัน 7 แบบ และผู้พนันสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesTh.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["ผู้เล่นและเจ้ามือแต่ละมือจะเริ่มต้นด้วยไพ่ 2 ใบคว่ำหน้"];

                if (environment === ENVIRONMENT.sm) {
                    details = details.concat(["The Punter predicts which one in two hands will win."]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "The third card also will be drawn after finishing dealing 2 initial face-down cards for Player and Dealer’s hands.",
                        "The cards are numbered from one to six that correspond to the sequence of dealt cards at the beginning of the game round.",
                    ]);
                }

                return details.concat([
                    "ตัวเลือกการเดิมพันอื่นคือ “เสมอ” หากนักพนันทายว่าสองมือจะจบลงด้วยผลรวมที่เท่ากันหรือพวกเขาสามารถเดิมพันตัวเลือกคู่ใหญ่ เล็ก คู่ผู้เล่น หรือคู่เจ้ามือได้",
                    "ต้องวางเดิมพันทั้งหมดก่อนเวลาเดิมพันจะสิ้นสุดลง หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้",
                    `ยอดเดิมพันสูงสุดต่อรอบคือ ${maxBetMain}`,
                    "เมื่อหมดเวลาเดิมพัน เจ้ามือหงายไพ่ขึ้น",
                    "จากคะแนนรวมของไพ่สองใบแรก เจ้ามือจะตัดสินว่ามือทั้งสองข้างได้ไพ่ใบที่สามหรือไม่ ",
                    "เกมตัดสินการชนะหรือแพ้โดยการเปรียบเทียบคะแนนรวมของไพ่ทั้งหมดในแต่ละมือและมือที่ชนะจะใกล้เคียงที่สุดกับคะแนนรวม 9 แต้ม",
                    "สำรับมาตรฐานที่มีไพ่ 52 ใบ (ไม่รวม Joker) จะถูกสับเปลี่ยนทุกรอบ",
                ]);
            },
        },
    },
};
