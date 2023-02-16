export const renderPromotionNoteTH = (isInPromotionTime = false) => {
    return (
        <>
            {isInPromotionTime && (
                <li>
                    <strong>หมายเหตุ</strong>: อัตราเดิมพันสามารถเปลี่ยนแปลงและอัพเดทได้ในเกมส์ในช่วงระยะเวลาโปรโมชั่น
                </li>
            )}
        </>
    );
};
