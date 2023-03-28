import React from "react";

export const renderMD5TH = () => {
    return (
        <>
            <h2> MD5 (อัลกอริทึมการแยกย่อยข้อความ 5) </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">เทคโนโลยี MD5</span>
                    <ul className="desc">
                        <li>MD5 ที่ช่วยให้ผู้เล่นตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์ผ่านบุคคลอื่นๆ</li>
                        <li>ผลลัพธ์ของเกมส์จะถูกสุ่มโดยระบบก่อนที่ผู้เล่นจะวางเดิมพัน</li>
                        <li>
                            ผู้เล่นสามารถตรวจสอบด้วยตนเอง (<strong>คีย์ MD5</strong>) และผลลัพธ์ที่โชว์นั้น (<strong>ผลลัพธ์</strong>)
                            ตรงกันหรือไม่
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">การตรวจสอบ MD5</span>
                    <ul className="desc">
                        <li>
                            <strong>ขั้นตอนที่ 1</strong>: คัดลอกคีย์ <strong>MD5</strong> ก่อนประกาศผล
                        </li>
                        <li>
                            <strong>ขั้นตอนที่ 2</strong>: คัดลอก<strong>ผลลัพธ์</strong>หลังจากเผยแพร่แล้ว
                        </li>
                        <li>
                            <strong>ขั้นตอนที่ 3</strong>: ไปที่{" "}
                            <b>https://md5.services/</b>{" "}
                            และวางผลลัพธ์ลงในกล่อง MD5
                        </li>
                        <li>
                            <strong>ขั้นตอนที่ 4</strong>: กดปุ่ม <strong>“dash darling, hash”</strong> ปุ่มและเปรียบเทียบสตริง{" "}
                            <b>MD5 checksum</b> ที่สร้างขึ้นใหม่กับคีย์ MD5 <strong>ในขั้นตอนที่ 1</strong>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="content">
                หากสตริงสองสายตรงกัน ให้พิสูจน์ว่าผลลัพธ์ของรอบเกมนั้นโปร่งใส
                และผลลัพธ์ของเกมส์จะไม่เปลี่ยนแปลงจากผลลัพธ์แบบสุ่มที่สร้างโดยระบบก่อนการเดิมพัน
            </div>
        </>
    );
};
