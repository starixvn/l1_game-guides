import { IMd5Resources } from "./types";

const steps = {
    one: "<strong>ขั้นตอนที่ 1</strong>: คัดลอกคีย์ <strong>MD5</strong> ก่อนประกาศผล",
    two: "<strong>ขั้นตอนที่ 2</strong>: คัดลอก<strong>ผลลัพธ์</strong>หลังจากเผยแพร่แล้ว",
    three: "<strong>ขั้นตอนที่ 3</strong>: ไปที่ {0} และวางในช่อง MD5",
    four: "<strong>ขั้นตอนที่ 4</strong>:  กดปุ่ม <strong>“hash darling, hash!”</strong> ปุ่มและเปรียบเทียบสตริง MD5 checksum ที่สร้างขึ้นใหม่กับคีย์ MD5 <strong>ในขั้นตอนที่ 1</strong>",
};

export const md5ResourcesTh: IMd5Resources = {
    content: {
        header: "MD5 (อัลกอริทึมการแยกย่อยข้อความ 5) ",
        technology: {
            header: "เทคโนโลยี MD5",
            details: [
                "MD5 ที่ช่วยให้ผู้เล่นตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์ผ่านบุคคลอื่นๆ",
                "ผลลัพธ์ของเกมส์จะถูกสุ่มโดยระบบก่อนที่ผู้เล่นจะวางเดิมพัน",
                "ผู้เล่นสามารถตรวจสอบด้วยตนเอง (<strong>คีย์ MD5</strong>) และผลลัพธ์ที่โชว์นั้น (<strong>ผลลัพธ์</strong>) ตรงกันหรือไม่",
            ],
        },
        validation: {
            header: "การตรวจสอบ MD5",
            details: Object.values(steps),
        },
        noted: "หากสตริงสองสายตรงกัน ให้พิสูจน์ว่าผลลัพธ์ของรอบเกมนั้นโปร่งใส และผลลัพธ์ของเกมส์จะไม่เปลี่ยนแปลงจากผลลัพธ์แบบสุ่มที่สร้างโดยระบบก่อนการเดิมพัน.",
    },
    example: {
        header: "<strong>ตัวอย่าง:</strong> ตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์",
        step1Text: steps.one,
        step2Text: steps.two,
        step3Text: steps.three,
        step4Text: steps.four,
        step1ImageUrl: "",
        step2ImageUrl: "",
        step3ImageUrl: "",
        step4ImageUrl: "",
        step2Noted1Text: "",
        step2Noted2Text: "",
    },
};
