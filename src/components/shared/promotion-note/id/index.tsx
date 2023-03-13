export const renderPromotionNoteID = (isInPromotionTime = false) => {
    return (
        <>
            {isInPromotionTime && (
                <li>
                    <strong>Harap diperhatikan</strong>: Peluang taruhan dapat diubah dan diperbarui di meja permainan selama periode promosi.
                </li>
            )}
        </>
    );
};
