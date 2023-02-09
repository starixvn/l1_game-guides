import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesTh } from "../../base/base-baccarat/languages/th";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const baccaratResourcesTh: IBaseBaccaratResources = {
    ...baseBaccaratResourcesTh,
    ...{
        introduction: {
            header: "บทนำ",
            content:
                "บาคาร่า - เป็นรุ่นปรับปรุงของบาคาร่าพร้อมวงเงินเดิมพันที่สูงขึ้น เกมนี้เล่นด้วยสำรับไพ่มาตรฐาน 52 ใบ (ไม่รวม Joker) มีตัวเลือกการเดิมพัน 7 แบบ และผู้พนันสามารถเดิมพันได้ตั้งแต่หนึ่งตัวเลือกขึ้นไปที่แสดงอยู่บนโต๊ะเกม",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesTh.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["ผู้เล่นและเจ้ามือแต่ละมือจะเริ่มต้นด้วยไพ่ 2 ใบคว่ำหน้"];

                if (environment === ENVIRONMENT.sm) {
                    details = details.concat(["ผู้เล่นทำนายว่ามือใดในสองมือจะชนะ"]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "ไพ่ใบที่สามจะถูกจั่วหลังจากแจกไพ่ใบแรก และมอบ 2 ใบสำหรับมือผู้เล่นและเจ้ามือ",
                        "ไพ่จะมีหมายเลขตั้งแต่ 1 ถึง 6 ซึ่งสอดคล้องกับลำดับของไพ่ที่แจกเมื่อเริ่มรอบเกมส์",
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
    md5: {
        step1ImageUrl: "/static/images/baccarat/md5_step1_th.png?v=1",
        step2ImageUrl: "/static/images/baccarat/md5_step2_th.png?v=1",
        step3ImageUrl: "/static/images/baccarat/md5_step3.png?v=1",
        step4ImageUrl: "/static/images/baccarat/md5_step4.png?v=1",
        step2Noted1Text: "หมายเหตุ: จากซ้ายไปขวา,",
        step2Noted2Text: "สอดคล้องกับลำดับของไพ่ที่แจกเมื่อเริ่มรอบเกมส์",
    },
};
