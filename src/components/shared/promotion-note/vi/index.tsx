export const renderPromotionNoteVN = (isInPromotionTime = false) => {
    return (
        <>
            {isInPromotionTime && (
                <li>
                    <strong>Lưu ý</strong>: Tỷ lệ trả thưởng có thể thay đổi và được cập nhật trên bàn cược trong thời gian diễn ra các
                    chương trình khuyến mãi.
                </li>
            )}
        </>
    );
};
