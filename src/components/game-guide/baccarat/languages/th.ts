import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesTh } from "../../base/base-baccarat/languages/th";
import { md5ResourcesTh } from "../../base/md5/languages/th";
import { IMd5Resources } from "../../base/md5/languages/types";
import { IMd5BaccaratResources } from "./types";

export const md5BaccaratResourcesTh: IMd5Resources = {
    ...md5ResourcesTh,
    example: {
        header: "<strong>ตัวอย่าง:</strong> ตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์",
        details: {
            step1: {
                text: "<strong>ขั้นตอนที่ 1:</strong> คัดลอกคีย์ MD5 ก่อนประกาศผล",
                imageUrl: "/static/images/baccarat/md5_step1_en.png?v=1",
            },
            step2: {
                text: "<strong>ขั้นตอนที่ 2:</strong> คัดลอก<strong>ผลลัพธ์</strong>หลังจากเผยแพร่แล้ว",
                imageUrl: "/static/images/baccarat/md5_step2_en.png?v=1",
                noted1: "หมายเหตุ: จากซ้ายไปขวา,",
                noted2: "สอดคล้องกับลำดับของไพ่ที่แจกเมื่อเริ่มรอบเกมส์",
            },
            step3: {
                text: "<strong>ขั้นตอนที่ 3:</strong> ไปที่ {0} และวางผลลัพธ์ลงในกล่อง MD5",
                imageUrl: "/static/images/baccarat/md5_step3_en.png?v=1",
            },
            step4: {
                text: "<strong>ขั้นตอนที่ 4:</strong> กดปุ่ม “hash darling, hash!” ปุ่มและเปรียบเทียบสตริง MD5 checksum ที่สร้างขึ้นใหม่กับคีย์ MD5 ในขั้นตอนที่ 1",
                imageUrl: "/static/images/baccarat/md5_step4_en.png?v=1",
            },
        },
    },
};

export const baccaratResourcesTh: IMd5BaccaratResources = {
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
    md5: md5BaccaratResourcesTh,
};
